# FOSS4G Europe 2025 Workshop Quick Guide

This guide provides a concise, step-by-step reference for running the full geospatial stack using Docker. Each step includes a short explanation, making it ideal for reading aloud or referencing during your workshop.

---

## 1. Create the Shared Docker Network

All services communicate via a shared Docker network called `backend`. Create it once before starting any containers:

```bash
docker network create backend
```

_This command creates a persistent Docker network named 'backend' that all services will use to communicate._

## 2. Clone the Repository

Clone the codebase to your local machine:

```bash
git clone <your-repo-url>
cd foss4g-europe-2025
```

_This command downloads the workshop files from GitHub and moves you into the project directory._

## 3. Prepare OSM Data

Download a small OSM `.pbf` extract (e.g., from [Geofabrik](https://download.geofabrik.de/)) and place it at:
Link [BosniaAndHerzegovina](https://download.geofabrik.de/europe/bosnia-herzegovina-latest.osm.pbf)

```
backend/db/data/sample.pbf
```

_This file contains real-world map data that will be loaded into the database. Choose a small region for faster import._

## 4. Start the Database

Start PostgreSQL/PostGIS in the background:

```bash
cd backend/db
docker compose up -d postgres
```

_This command launches a PostgreSQL database with spatial (PostGIS) support in a Docker container. The `-d` flag runs it in the background. The service is attached to the shared 'backend' network._

Wait a few seconds for the database to initialize.

## 5. Import OSM Data

Load the OSM extract into PostGIS:

```bash
docker compose run --rm osm2pgsql
```

_This command uses the `osm2pgsql` tool (in a temporary container) to import the `.pbf` map data into the running database. The `osm2pgsql` service is attached to the same 'backend' network and connects to the database by container name. The `--rm` flag cleans up the container after import._

## 6. Start Tegola

Start the vector tile server:

```bash
cd ../tegola
docker compose up -d
```

_This command starts the Tegola server, which will read spatial data from the database and serve it as vector tiles for the frontend map. It is attached to the shared 'backend' network._

- **Verify:** Visit [http://localhost:8080/capabilities](http://localhost:8080/capabilities) in your browser.

_This URL should show a JSON listing the available map layers. If you see this, Tegola is running and connected to the database._

## 7. Start the Frontend

Build and run the React + OpenLayers app:

```bash
cd ../../frontend
docker compose up --build
```

_This command builds and starts the frontend web application in a Docker container. The `--build` flag ensures any code changes are included. The service is attached to the shared 'backend' network._

- **Open:** [http://localhost:3000](http://localhost:3000) in your browser.

_This is the main workshop map app. You should see an interactive map with both base and vector tile layers._

---

## Troubleshooting

- **Database not ready?** Wait a few more seconds, then retry the import or Tegola steps.
- **No vector data on map?**
  - Check that the OSM import completed successfully.
  - Verify Tegola's config and capabilities endpoint.
- **Frontend not loading?**
  - Check Docker logs for errors.
  - Ensure all services are running: `docker ps`
- **osm2pgsql image pull denied?**
  - The guide uses the public Docker Hub image `iboates/osm2pgsql:latest`. If you see an error about access denied, double-check your `docker-compose.yml` and ensure it uses this image.
- **Network errors?**
  - Make sure you created the 'backend' network with `docker network create backend` before starting any services.
  - All services must use the same external network.

---

For more details, see the full `readme.md`.

---
