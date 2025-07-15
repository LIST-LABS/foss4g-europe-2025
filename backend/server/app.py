from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all origins


@app.route("/layer/buildings")
def get_layer():
    return jsonify(
        {
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
                "sources": {"composite": {"type": "vector"}},
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
                            "fill-outline-color": "#FF0000",
                        },
                    }
                ],
            },
        }
    )


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
