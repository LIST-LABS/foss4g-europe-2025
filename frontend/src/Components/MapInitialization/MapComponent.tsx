import { useEffect, useRef } from "react";
import { Map, View } from "ol";
import { fromLonLat, transformExtent } from "ol/proj";
import useMap from "./context/useMap";
import TileLayer from "ol/layer/Tile";
import "ol/ol.css";
import OSM from "ol/source/OSM";
import { defaults as defaultControls } from "ol/control/defaults.js";
import VectorTilesCreation from "../LayersCreation/VectorTilesCreation";
import MapHoverInteraction from "../FeatureInteraction/FeatureHoverInteraction/FeatureHoverInteraction";
import FeatureClickInteraction from "../FeatureInteraction/FeatureClickInteraction/FeatureClickInteraciton";
import MapClickInteraction from "../FeatureInteraction/FeatureClickInteraction/FeatureClickInteraciton";
import LayersCreation from "../LayersCreation/LayersCreation";

const MapComponent = () => {
    const mapDivRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<Map | null>(null);

    const { setMap } = useMap();

    const mapViewParams = new View({
        projection: "EPSG:3857",
        center: fromLonLat([17.8081, 43.3438]), // Mostar, Bosnia and Herzegovina
        zoom: 12,
        maxZoom: 19,
        minZoom: 3,
    });

    useEffect(() => {
        if (!mapRef.current && mapDivRef.current) {
            const map = new Map({
                target: mapDivRef.current as HTMLDivElement | undefined,
                view: mapViewParams,
                layers: [
                    new TileLayer({
                        source: new OSM(),
                    }),
                ],
                controls: defaultControls(),
            });

            mapRef.current = map;

            if (map && setMap) {
                setMap(map);
            }
        }
    }, []);

    return (
        <div
            ref={mapDivRef}
            className="relative h-full w-full"
        >
            <MapHoverInteraction />
            <FeatureClickInteraction />
            <LayersCreation />
                    <MapClickInteraction />
        </div>
    );
};

export default MapComponent;
