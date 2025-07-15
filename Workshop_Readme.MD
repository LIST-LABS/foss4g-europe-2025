# Serving and Displaying Vector Tiles with PostgreSQL, Tegola, and OpenLayers: Hands-on Coding Workshop

This document serves as a comprehensive guide for the "Serving and Displaying Vector Tiles with PostgreSQL, Tegola, and OpenLayers: Hands-on Coding Workshop" at FOSS4G Europe 2025. It provides a detailed overview of the workshop's objectives, the technologies employed, necessary prerequisites, and a step-by-step walkthrough of the hands-on exercises.

## Workshop Title & Overview

The workshop, titled "Serving and Displaying Vector Tiles with PostgreSQL, Tegola, and OpenLayers: Hands-on Coding Workshop," offers a practical, end-to-end guide for constructing a robust web mapping application utilizing a suite of open-source tools. Participants will acquire practical skills in managing spatial data within PostgreSQL/PostGIS, generating vector tiles using Tegola, and visualizing these tiles in a React application powered by OpenLayers. The central aim is to deliver a complete, adaptable solution that attendees can readily apply to their own map-driven projects or organizational requirements.

This session is scheduled for FOSS4G Europe 2025, taking place on July 15, 2025, from 14:00 to 18:00 (Europe/Sarajevo) in room PA11. The workshop will be led by Luka Stemberga, Technical Lead at LIST LABS, and Ivan Razum, a Frontend Developer also from LIST LABS. The combined expertise of a technical lead and a frontend developer is particularly beneficial for a full-stack workshop of this nature. This dual perspective ensures that instructions span the entire data pipeline, from the underlying database to the user's browser, providing a holistic understanding of common integration challenges and best practices from both backend and frontend development viewpoints. This structure mirrors how such projects are often collaboratively developed in professional teams.

The selection of PostgreSQL/PostGIS, Tegola, React, and OpenLayers for this workshop is a deliberate choice, reflecting a commitment to leveraging mature, performant, and widely adopted open-source components for a comprehensive geospatial solution. PostgreSQL/PostGIS stands as a widely recognized standard for spatial databases, offering robust data management capabilities. Tegola, implemented in Go, is chosen for its emphasis on high-performance vector tile generation. React and OpenLayers represent leading choices for developing interactive web user interfaces and sophisticated mapping functionalities, respectively. This combination underscores a focus on building scalable, maintainable, and community-supported mapping applications, positioning the workshop as an educational experience in applying leading open-source practices for web GIS development.

## Workshop Goals & What You'll Learn

This hands-on workshop is designed to equip participants with the essential knowledge and practical skills required to construct a complete vector tile pipeline, spanning from spatial data management to a fully functional web map interface. Upon completion of the session, attendees will have developed a working proof-of-concept application and gained the confidence to integrate these techniques into their future projects.

A primary objective is to achieve **Core Workflow Mastery**, enabling participants to understand and implement the entire process of serving and visualizing vector tiles using the integrated stack of PostgreSQL/PostGIS, Tegola, and OpenLayers. This involves practical application of each component's role in the pipeline.

The workshop will delve into **Spatial Data Management**, covering best practices for structuring, indexing, and optimizing geospatial data within PostgreSQL/PostGIS. This foundational step is critical for ensuring high-performance tile generation, particularly when dealing with large datasets, as efficient database design directly impacts the responsiveness of the mapping application.

Participants will then progress to **Vector Tile Generation**, learning how to configure and deploy Tegola to serve vector tiles dynamically. This includes defining map layers and managing geometry transformations, providing the tools necessary to generate tiles on the fly. The ability to generate tiles dynamically from the database ensures that the map always reflects the most current data without requiring a separate, time-consuming tile generation pipeline. This "on-the-fly" capability is invaluable for applications demanding real-time or near real-time data visualization, or for datasets that undergo frequent updates, simplifying the data update workflow considerably compared to static tile sets.

The workshop also focuses on **Interactive Web Mapping**, guiding attendees through the process of building a basic React application that consumes Tegola-served vector tiles. This includes setting up OpenLayers to render these tiles and implementing interactive map features such as popup information on feature clicks and user-driven layer toggling. Within this segment, strategies for maintaining efficient loading times and smooth interactions in a production environment will be discussed, addressing fundamental performance considerations for vector tile consumption. While the subsequent step explicitly covers `ol-mapbox-style` for advanced styling, this step lays the groundwork by demonstrating the inherent power of vector tiles for client-side dynamic styling and interaction. The raw vector data's availability in the browser enables rich user experiences like popups and layer control without requiring additional server requests for styling or feature information, a significant advantage over static raster tiles.

A significant portion of the workshop is dedicated to **Backend-Driven Styling**, a crucial aspect for achieving consistency and maintainability, especially when managing numerous layers. Participants will learn to define Mapbox-style JSON documents and automatically apply these styles in OpenLayers using the `ol-mapbox-style` plugin. This approach centralizes style management, which is particularly beneficial when working with a large number of layers. This architectural pattern decouples styling from the frontend application logic, allowing map designers or GIS specialists to define and update styles without requiring direct frontend developer intervention or application redeployment. This significantly enhances collaboration in larger teams, enables rapid style iteration, and ensures visual consistency across multiple applications or map views consuming the same vector tiles. It effectively transforms styling from a code-centric task into a data-driven configuration.

Finally, the workshop will cover **Performance & Troubleshooting**, offering insights into optimizing vector tile pipelines, effectively handling large datasets, addressing common issues such as geometry errors, and debugging tile generation problems. This proactive approach to common challenges is characteristic of experienced practitioners, providing practical techniques to ensure mapping applications remain stable and efficient even under demanding conditions. The discussion of performance considerations across the entire stack—from optimizing data loading and structuring in PostGIS to efficient tile generation in Tegola and smooth interactions in OpenLayers—underscores that performance is a cumulative effect of optimizations at every layer. This fosters a holistic understanding of performance engineering in geospatial applications, where a bottleneck in one component can impact the entire pipeline.

The workshop's emphasis on "high-performance tile generation," "efficient loading times," "smooth interactions in a production setup," and "centralized style management" for numerous layers extends beyond mere functionality. These elements underscore the critical importance of scalability and maintainability in real-world applications. The workshop is designed not just to demonstrate how to make a system function, but how to make it function effectively and sustainably, preparing participants for production environments where performance and consistent styling across complex projects are paramount.

## Key Technologies Used

This workshop leverages a powerful stack of open-source technologies to construct a modern web mapping application. The selection of these specific tools demonstrates a coherent strategy for building a fully open-source geospatial stack, where each component is a leader in its respective domain, ensuring robustness and community support. This stack provides participants with a viable, cost-effective, and powerful alternative to proprietary GIS solutions, empowering them to build complex mapping applications without licensing constraints.

- **PostgreSQL / PostGIS:** An open-source object-relational database system, augmented by the PostGIS extension. This combination provides robust capabilities for storing, querying, and managing spatial data, serving as the foundational data store for the mapping application.
- **Tegola:** A high-performance, open-source vector tile server implemented in Go. Tegola's core function is to efficiently serve vector tiles from diverse geospatial data sources, with strong integration for PostGIS. It acts as the robust engine responsible for transforming raw spatial data from PostgreSQL/PostGIS tables into a streamlined, tiled format consumable by map clients.
- **React:** A widely adopted JavaScript library for building user interfaces. React facilitates a component-based approach to development, enabling the creation of interactive and dynamic web applications.
- **OpenLayers:** A powerful, open-source JavaScript library specifically designed for building interactive web mapping applications directly within the browser. OpenLayers offers a comprehensive API for handling diverse geospatial data, capable of displaying maps and layers from virtually any source, including standard tiles, WMS, GeoJSON, KML, and, critically for this workshop, vector tiles.
- **ol-mapbox-style:** A utility library that bridges the gap between OpenLayers and Mapbox GL Style specifications. Its primary function is to enable OpenLayers to render vector tiles using styles defined in the Mapbox Style Specification (JSON). This capability simplifies styling workflows, allowing for the reuse of complex, dynamic Mapbox GL styles directly within an OpenLayers application and ensuring consistent map aesthetics across various platforms or projects. The emphasis on `ol-mapbox-style` for centralizing style management is a critical architectural decision. Without it, styling vector tiles in OpenLayers would typically involve writing complex JavaScript styling functions, which can become unmanageable with numerous layers or frequent style changes. Mapbox Style JSON provides a declarative, standardized method for defining styles, promoting a clear separation of concerns (data/tiles on the backend, style definition on the backend, rendering on the frontend). This significantly improves collaboration in larger teams, enables rapid style iteration, and ensures visual consistency across multiple applications or map views consuming the same vector tiles. It effectively transforms styling from a code-centric task into a data-driven configuration. Furthermore, by adopting the Mapbox Style Specification (JSON), the workshop leverages a widely accepted industry standard for vector tile styling, fostering interoperability and future-proofing skills that are transferable to other mapping platforms and tools adhering to this specification.

## Prerequisites & Setup

To ensure a seamless and productive workshop experience, participants are required to prepare their development environment by installing the specified software and cloning the workshop repository in advance.

### Suggested Knowledge

The workshop is categorized as intermediate level. While comprehensive guidance will be provided to ensure all participants can keep pace, some prior knowledge is beneficial. Basic familiarity with OpenLayers and JavaScript is preferred. The backend components will be presented using Python, but the workshop's focus is on fundamental principles that are easily transferable to other programming languages. Similarly, the frontend will be demonstrated in React, but the core concepts can be readily applied to other popular JavaScript frameworks.

Specifically, the following knowledge levels are suggested:

- **JavaScript:** Intermediate knowledge.
- **React:** Basic knowledge.
- **Python:** Basic knowledge.

Optional, but highly recommended, knowledge includes Docker, Django, and basic DevOps principles. The workshop's design balances accessibility with depth, aiming to make the content valuable for intermediate developers while providing sufficient contextual guidance for those with less experience. The emphasis on concept transferability highlights the fundamental principles over specific syntax, broadening the applicability of the learned skills.

### Required Software & Tools Installation

Participants should ensure the following software is installed on their machines. The versions listed below are those used by the presenters and are highly recommended to ensure compatibility with the workshop materials. While older versions may function, using the specified versions will minimize potential compatibility issues.

| Software               | Recommended Version | Download Link                                                                                      | Check Command      |
| :--------------------- | :------------------ | :------------------------------------------------------------------------------------------------- | :----------------- |
| **Node.js**            | `>=v20.18.0`        | [https://nodejs.org/en/](https://nodejs.org/en/)                                                   | `node --version`   |
| **npm**                | `>=v11.3.0`         | (Comes with Node.js)                                                                               | `npm --version`    |
| **Git**                | Latest stable       | [https://git-scm.com/downloads](https://git-scm.com/downloads)                                     | `git --version`    |
| **Visual Studio Code** | Latest stable       | [https://code.visualstudio.com/](https://code.visualstudio.com/)                                   | (N/A - IDE)        |
| **Docker**             | `>=v.28.x`          | [https://www.docker.com/products/docker-desktop/](https://www.docker.com/products/docker-desktop/) | `docker --version` |
| **Python**             | `>=3.12.x`          | [https://www.python.org/downloads/](https://www.python.org/downloads/)                             | `python --version` |

This consolidated table, including recommended versions and verification commands, significantly streamlines the setup process for participants. It serves as a critical pre-workshop checklist, minimizing technical friction and allowing attendees to focus on the core coding content rather than environment configuration issues. This foresight demonstrates a commitment to a smooth learning experience.

### Repository Cloning & Data Download

To begin the workshop, participants must clone the workshop repository and download the necessary dataset.

1.  **Clone the Workshop Repository:**
    Open your terminal, navigate to your preferred directory, and execute the following command to clone the workshop repository:bash
    git clone [https://github.com/LIST-LABS/foss4g-europe-2025](https://github.com/LIST-LABS/foss4g-europe-2025)

    ```
    cd foss4g-europe-2025

    ```

    This repository will contain all sample code snippets and project structure needed for the hands-on exercises.

2.  **Download the Required Dataset:**
    The workshop utilizes OpenStreetMap data for Bosnia and Herzegovina. This data is provided in a `.osm.pbf` format. Download the file from Geofabrik:
    - **Full Link:** `https://download.geofabrik.de/europe/bosnia-and-herzegovina-latest.osm.pbf`
    - **Source:** The dataset can be found by navigating to [https://download.geofabrik.de/](https://download.geofabrik.de/) and selecting "Europe" then "Bosnia And Herzegovina" to find the `.osm.pbf` file.
    - **Action:** Once downloaded, place this `.osm.pbf` file into the `data/` directory located within your newly cloned `foss4g-europe-2025` repository.

## Hands-on Workshop Guide

This section provides a detailed outline of the step-by-step coding exercises that will be performed during the workshop. Participants will find sample datasets and code snippets within the cloned repository, typically organized in `data/`, `backend/`, and `frontend/` directories, to facilitate the learning process. Each step is separately saved in branches named `step-1` to `step-4`. If you get stuck on some part of this workshop - feel free to checkout any branch to help you along!

### Step 1: Data Preparation & PostgreSQL/PostGIS Setup

This foundational step initiates the workshop by focusing on best practices for storing and indexing geospatial data within PostgreSQL, enhanced by the PostGIS extension.

The concepts covered include data modeling for spatial data, which involves designing database schemas that efficiently store geographic features. Strategies for creating efficient spatial indexes, such as GiST indexes, will be explored, as these are crucial for accelerating spatial queries. Furthermore, query optimizations for high-performance tile generation will be discussed, emphasizing how well-crafted SQL queries are essential for Tegola's ability to dynamically create vector tiles. Participants will also gain an understanding of how various PostGIS functionalities contribute to preparing data for optimal vector tiling. The emphasis on "high-performance tile generation" and "maintaining performance when dynamically creating vector tiles, even for large datasets" underscores a critical aspect of geospatial development: data design directly influences application performance. Poorly indexed or structured data will inevitably lead to slow tile generation and a sluggish map experience. This step teaches participants that the foundation of a high-performing web map lies not just in frontend rendering, but in how the data is managed at its source, instilling a "performance-first" mindset from the database layer upwards.

For the sake of simplicity and to ensure a consistent environment across all participants' machines, the database will be deployed using Docker. This approach effectively bypasses the common complexities and dependencies associated with local software installations, such as operating system specific configurations or dependency conflicts, which often consume valuable workshop time. Docker ensures a standardized and reproducible environment, allowing participants to immediately engage with the core content of the workshop without spending hours debugging local setups. This directly contributes to a more productive and less frustrating learning experience. Participants will be guided through using Docker images specifically designed for PostGIS, with options including `https://github.com/postgis/docker-postgis` and `https://hub.docker.com/r/kartoza/postgis/`. Detailed Docker commands for pulling, running, and initializing the PostGIS container will be provided within the workshop materials, likely in a dedicated `backend/` or `docker/` folder within the repository. Instructions will also cover how to load the previously downloaded `.osm.pbf` data into the PostGIS database, which will involve setting up appropriate tables and spatial indexes using tools like `osm2pgsql`.

## Database Setup: Step-by-Step Instructions

This section explains in detail how to set up the PostgreSQL/PostGIS database for the workshop using Docker. Each step includes a command and a clear explanation of what it does and why it is necessary.

### 1. Create the Shared Docker Network

All services (database, Tegola, frontend, etc.) communicate via a shared Docker network called `backend`. You only need to create this network once:

```bash
docker network create backend
```

_This command creates a persistent Docker network named 'backend' that all your containers will use to communicate. You only need to do this once on your machine._

### 2. Prepare the OSM Data

Download a small OSM `.pbf` extract (for example, from [Geofabrik](https://download.geofabrik.de/) as stated before!) and place it in the following location:

```
backend/db/data/sample.pbf
```

_This file contains real-world map data that will be loaded into the database. Choose a small region for faster import. Example: [BosniaAndHerzegovina](https://download.geofabrik.de/europe/bosnia-herzegovina-latest.osm.pbf)_

### 3. Start the PostgreSQL/PostGIS Database

Database container definition:

```
version: "3.8"
services:
  postgres:
    image: postgis/postgis:15-3.3
    container_name: workshop_postgres
    environment:
      POSTGRES_DB: workshop_db
      POSTGRES_USER: workshop_user
      POSTGRES_PASSWORD: workshop_pass
    ports:
      - "5433:5432" # Host:Container
    volumes:
      - pgdata:/var/lib/postgresql/data
      - ./init.sql:/docker-entrypoint-initdb.d/init.sql
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U workshop_user -d workshop_db"]
      interval: 10s
      timeout: 5s
      retries: 5
    networks:
      - backend

volumes:
  pgdata:

networks:
  backend:
    external: true

```

Navigate to the database directory and start the database container:

```bash
cd backend/db
docker compose up -d postgres
```

_This command launches a PostgreSQL database with PostGIS (spatial extension) support in a Docker container. The `-d` flag runs it in the background. The service is attached to the shared 'backend' network._

**Wait a few seconds for the database to initialize before proceeding.**

### 4. Import OSM Data into the Database

Now, let's add definition for our `osm2pgsql` tool into our docker-compose definition file:

```
  osm2pgsql:
    image: iboates/osm2pgsql:latest
    depends_on:
      - postgres
    environment:
      - OSM2PGSQL_DATABASE=postgresql://workshop_user:workshop_pass@workshop_postgres:5432/workshop_db
      - PGPASSWORD=workshop_pass
    volumes:
      - ./data:/data
    entrypoint:
      [
        "osm2pgsql",
        "-d",
        "workshop_db",
        "-U",
        "workshop_user",
        "-H",
        "workshop_postgres",
        "-P",
        "5432",
        "/data/sample.pbf",
      ]
    networks:
      - backend
```

Load the OSM extract into the running PostGIS database using the `osm2pgsql` tool:

```bash
docker compose run --rm osm2pgsql
```

_This command uses the `osm2pgsql` tool (in a temporary container) to import the `.pbf` map data into the running database. The `osm2pgsql` service is attached to the same 'backend' network and connects to the database by container name. The `--rm` flag cleans up the container after import._

**Verification:**

- You can connect to the database using a tool like DBeaver, pgAdmin, or the `psql` command-line tool to check that tables like `planet_osm_point`, `planet_osm_line`, and `planet_osm_polygon` exist and contain data.
- Example SQL to check data:
  ```sql
  SELECT count(*) FROM planet_osm_point;
  SELECT count(*) FROM planet_osm_line;
  SELECT count(*) FROM planet_osm_polygon;
  ```

### 5. Troubleshooting Database Setup

- **Database not ready?** Wait a few more seconds, then retry the import or Tegola steps.
- **Port already in use?** If you get an error about port 5432 or 5433 being in use, stop any other Postgres containers or change the port mapping in `docker-compose.yml`.
- **No data after import?** Double-check the path and filename of your `.pbf` file, and ensure the import command completed successfully.
- **Connection refused?** Make sure the database container is running (`docker ps`) and healthy.

---

Continue with the rest of the setup (Tegola, frontend, etc.) as described in the guide.

### Step 2b: Tegola Vector Tile Server Setup (Step-by-Step)

This section explains in detail how to set up the Tegola vector tile server for the workshop using Docker. Each step includes a command and a clear explanation of what it does and why it is necessary.

#### 1. Tegola Docker Compose Service Definition

Add the following service to your `backend/tegola/docker-compose.yml`:

```yaml
services:
  tegola:
    image: gospatial/tegola:latest
    container_name: workshop_tegola
    ports:
      - "8080:8080"
    volumes:
      - ./config.toml:/config.toml
    environment:
      - TEGOLA_CONFIG=/config.toml
    networks:
      - backend
    command: serve --config /config.toml

networks:
  backend:
    external: true
```

_This configuration runs Tegola in a Docker container, exposes port 8080, and mounts your `config.toml` file for configuration. It attaches Tegola to the same 'backend' Docker network as your database._

#### 2. Create and Configure `config.toml`

Create a `config.toml` file in the `backend/tegola/` directory. Example:

```toml
[webserver]
port = ":8080"

[webserver.headers]
Access-Control-Allow-Origin = "*"
Cache-Control = "s-maxage=3600"

[[providers]]
name = "osm"
type = "mvt_postgis"
uri = "postgres://workshop_user:workshop_pass@workshop_postgres:5432/workshop_db?sslmode=disable"
srid = 3857

  [[providers.layers]]
  name = "roads"
  geometry_fieldname = "way"
  geometry_type = "linestring"
  id_fieldname = "osm_id"
  sql = "SELECT osm_id, highway, name, ST_AsMVTGeom(way, !BBOX!) AS way FROM planet_osm_line WHERE highway IS NOT NULL AND ST_IsValid(way) AND way && !BBOX!"

  [[providers.layers]]
  name = "buildings"
  geometry_fieldname = "way"
  geometry_type = "polygon"
  id_fieldname = "osm_id"
  sql = "SELECT osm_id, building, name, ST_AsMVTGeom(way, !BBOX!) AS way FROM planet_osm_polygon WHERE building IS NOT NULL AND ST_IsValid(way) AND way && !BBOX!"

[[maps]]
name = "osm"
center = [13.404954, 52.520008, 12.0] # Berlin, adjust as needed

  [[maps.layers]]
  provider_layer = "osm.roads"
  min_zoom = 9
  max_zoom = 16

  [[maps.layers]]
  provider_layer = "osm.buildings"
  min_zoom = 12
  max_zoom = 18
```

_This file tells Tegola how to connect to your PostGIS database, which layers to expose, and how to generate vector tiles for each layer._

#### 3. Start the Tegola Server

Navigate to the Tegola directory and start the server:

```bash
cd backend/tegola
docker compose up -d
```

_This command starts the Tegola server in the background. It will read the configuration from `config.toml` and connect to the database._

#### 4. Verify Tegola is Running

Open your browser and visit:

```
http://localhost:8080/capabilities
```

_You should see a JSON response listing the available map layers (e.g., 'roads', 'buildings')._

#### 5. Troubleshooting Tegola Setup

- **Tegola not starting?** Check the container logs with `docker logs workshop_tegola` for errors (e.g., database connection issues, config errors).
- **No layers listed?** Double-check your `config.toml` for typos and ensure your database has the expected tables and data.
- **CORS issues?** The example config enables CORS for all origins.
- **Port 8080 in use?** Change the port mapping in the compose file if needed.

---

### Step 3: Frontend Application Integration (Step-by-Step)

This section will guide you through setting up and running the frontend React application that will display your vector tiles using OpenLayers. Each step includes the exact commands to run and a clear explanation of what you’re doing and why.

#### 1. Navigate to the Frontend Directory

Open a terminal and move into the frontend project directory:

```bash
cd frontend
```

_This puts you in the directory where the React application code is located._

#### 2. Install Dependencies

Install the required Node.js packages:

```bash
npm install
```

_This command downloads and installs all the JavaScript libraries your React app needs, as specified in `package.json`._

#### 3. Start the Frontend Development Server

Start the React development server:

```bash
npm start
```

_This command starts the development server and automatically opens the application in your default web browser._

#### 4. Open the Application in Your Browser

If your browser does not open automatically, go to:

```
http://localhost:3000
```

_You should see the React application with an interactive OpenLayers map. If everything is set up correctly, you’ll see your vector tiles rendered on the map._

#### 5. How the Frontend Works

- The React app uses OpenLayers to display a map.
- It fetches vector tiles from your running Tegola server (or the public fallback).

#### 6. Troubleshooting Frontend Issues

- **Blank map or errors in the browser?**
  - Check the browser console for JavaScript errors.
  - Make sure the frontend server is running (the terminal should show 'Compiled successfully!').
  - Ensure the backend (Tegola and Flask) are running and accessible.
- **Tiles not loading?**
  - Check the network tab in your browser’s developer tools to see if tile requests are returning 200 OK.
  - Make sure the tile URLs in your frontend config match the running Tegola server.
- **CORS errors?**
  - Ensure CORS is enabled in your Tegola and Flask configs.

#### 7. Next Steps

Once your frontend is running and displaying tiles, you can:

- Experiment with toggling layers on and off.
- Click on features to see popups (if implemented).
- Try changing the Mapbox GL style in the backend and see the changes reflected live in the frontend.

**If you get stuck, ask a workshop leader for help or check the troubleshooting section at the end of this document!**

---

### Step 4: Backend-Driven Styling with `ol-mapbox-style` (Step-by-Step)

This section will guide you through setting up a backend API to serve Mapbox GL style JSON for your vector tile layers, and show you how to use `ol-mapbox-style` in your frontend to apply these styles dynamically. Each step includes clear instructions and explanations, and you’ll find a complete, ready-to-copy backend example at the end.

#### 1. Create a Sample Flask Backend to Serve Styles

We’ll use Python and Flask to create a simple API that returns a Mapbox GL style JSON for your vector tile layers.

**a. Create the backend directory and app file:**

```bash
mkdir -p backend/server
cd backend/server
```

Create a file named `app.py` with the following content:

```python
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all origins

@app.route('/layer/buildings')
def get_layer():
    return jsonify({
        "id": "buildings",
        "name": "Buildings",
        "active": False,
        "label": "Buildings",
        "type": "vector",
        "displayed": True,
        "visible": True,
        "layerInfo": {
            "source_type": "VT",
            "url": "https://foss4g-2025.listlabs.net/maps/osm/buildings/{z}/{x}/{y}.pbf",
            "format": "MVT",
            "featureClass": "Feature",
            "declutter": True,
        },
        "style": {
            "version": 8,
            "sources": {
                "composite": {
                    "type": "vector",
                    "tiles": ["https://foss4g-2025.listlabs.net/maps/osm/{z}/{x}/{y}.pbf"]
                }
            },
            "sprite": "https://demotiles.maplibre.org/styles/osm-bright-gl-style/sprite",
            "layers": [
                {
                    "id": "test",
                    "type": "fill",
                    "source": "composite",
                    "source-layer": "buildings",
                    "layout": {},
                    "paint": {
                        "fill-color": "#FF0000",
                        "fill-outline-color": "#FF0000"
                    }
                }
            ]
        }
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
```

#### 2. Add a `requirements.txt` for Python Dependencies

Create a file named `requirements.txt` in the same directory with:

```
flask
flask-cors
```

#### 3. Dockerize the Flask Backend

Create a `Dockerfile` in `backend/server/`:

```dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY app.py ./
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
EXPOSE 5000
CMD ["python", "app.py"]
```

#### 4. Build and Run the Flask Backend in Docker

```bash
cd backend/server
docker build -t flask-server .
docker run -p 5000:5000 flask-server
```

_This will start the Flask API on port 5000. The endpoint for the buildings layer will be available at `http://localhost:5000/layer/buildings`._

#### 5. Use the Backend API in Your Frontend

- Fetch the style and layer definition from the Flask API in your React app.
- Use the `ol-mapbox-style` library to apply the style to your OpenLayers vector tile layer:

```js
import { applyStyle } from "ol-mapbox-style";
// ...
fetch("http://localhost:5000/layer/buildings")
  .then((res) => res.json())
  .then((layer) => {
    // create your VectorTileLayer as usual
    // then apply the style:
    applyStyle(vectorTileLayer, layer.style, "composite");
  });
```

#### 6. Troubleshooting Backend-Driven Styling

- **CORS errors?** Make sure you have `flask-cors` installed and `CORS(app)` enabled in your Flask app.
- **Style not applied?** Check that the style JSON includes a `tiles` property in the `sources` block, and that the source-layer name matches the vector tile data.
- **API not reachable?** Make sure the Flask server is running and accessible from your frontend.

---

## Step 5: Performance Considerations & Troubleshooting

This concluding hands-on step addresses real-world challenges, common pitfalls, and practical strategies for ensuring the stability and efficiency of mapping applications built with vector tiles. The inclusion of a dedicated "Performance and Troubleshooting" section demonstrates a mature approach to software development, acknowledging that real-world applications inevitably encounter issues and that you will require practical strategies to diagnose and resolve them. This step moves beyond theoretical implementation to practical application, preparing you for the realities of deploying and maintaining mapping solutions and fostering a mindset of building resilient systems.

The concepts covered encompass comprehensive Performance Tuning across the entire vector tile pipeline. This includes optimizing tile generation at both the Tegola and PostgreSQL/PostGIS levels, focusing on techniques such as crafting efficient SQL queries and implementing appropriate indexing strategies. Client-side rendering performance will also be addressed, with discussions on simplifying geometries for lower zoom levels and effectively managing feature density to ensure smooth map interactions. While not deeply covered, the importance of caching strategies for optimizing data loading will be highlighted to provide a smoother user experience. The discussion of performance considerations across the entire stack—from "optimizing data loading and proper data structuring" in PostGIS to "optimizing tile generation" in Tegola and ensuring "efficient loading times and smooth interactions" in OpenLayers—underscores that performance is not isolated to a single component but is a cumulative effect of optimizations at every layer. This fosters a holistic view of performance engineering in geospatial applications, where a bottleneck in the database can impact the frontend, and vice-versa, encouraging you to consider the entire pipeline when designing and optimizing your solutions.

Furthermore, the workshop will delve into Troubleshooting Common Issues that frequently arise in vector tile pipelines. This includes strategies for effectively handling large datasets, which often pose significant performance challenges. You will learn how to address geometry errors, such as invalid geometries in PostGIS, which can lead to failures in tile generation. Practical techniques for debugging tile generation issues will be explored, utilizing tools like Tegola logs, network requests analysis, and direct inspection of vector tile content. The session will also cover general debugging techniques applicable across the full vector tile pipeline, equipping you with practical skills to self-diagnose and fix problems, thereby reducing reliance on external support.

## Important Notes & Disclaimers

It is important to note that this workshop does not utilize the absolute newest package versions for OpenLayers and ol-mapbox-style. This is a deliberate choice made to ensure stability and compatibility across the workshop environment, maximizing your learning experience. While newer versions of these libraries are available, the specific versions listed below have been thoroughly tested and validated for the workshop's content. This transparency about specific versions manages your expectations and proactively addresses potential "version hell" issues where code might break due to API changes in more recent library releases. It reinforces the practical, tested nature of the workshop content and prioritizes a smooth learning experience over showcasing the absolute bleeding edge.

```
OpenLayers: =v.9.1.x   

ol-mapbox-style: =v.12.2.x
```

### Support & Feedback

You are encouraged to ask any questions you may have throughout the workshop and during the broader FOSS4G Europe 2025 conference. Your feedback is highly valued and plays a crucial role in the continuous improvement of these workshop materials. Please provide your reviews and suggestions by submitting issues in the issues section of this GitHub repository. This explicit invitation for questions and feedback via GitHub issues goes beyond a simple acknowledgment; it actively encourages engagement and leverages the open-source nature of GitHub for ongoing improvement of the workshop materials. This demonstrates a commitment to the FOSS4G community and continuous improvement, allowing the workshop organizers to gather valuable insights for future iterations, address common pain points, and maintain the relevance and quality of the educational content.
