// React
import { useEffect, useState } from "react";

// External libs
import { unByKey } from "ol/Observable";
import { Feature, MapBrowserEvent } from "ol";

// Libs/components from project
import useMap from "../../MapInitialization/context/useMap";
import VectorTileHoverHandler from "./VectorTileHoverHandler";
import VectorTileLayer from "ol/layer/VectorTile";
import VectorLayer from "ol/layer/Vector";

// Redux

// TS

const MapHoverInteraction = () => {
    const { map } = useMap();

    const [hoveredFeature, setHoveredFeature] = useState<Feature | null>(null);

    const [hoveredVtLayer, setHoveredVtLayer] = useState<VectorTileLayer | null>(null);

    useEffect(() => {
        if (!map) return;

        const mapLayerHover = map.on("pointermove", (e) => handleMapLayerHover(e));

        return () => {
            if (mapLayerHover) {
                unByKey(mapLayerHover);
                setHoveredFeature(null);
                setHoveredVtLayer(null);
            }
        };
    }, [map]);

    const handleMapLayerHover = (evt: MapBrowserEvent<KeyboardEvent | WheelEvent | PointerEvent>) => {
        if (!map) return;

        const hoveredFeature = map.forEachFeatureAtPixel(evt.pixel, (feature, layer) => {
            if (layer instanceof VectorTileLayer) {
                setHoveredVtLayer(layer);
            }
            return feature as Feature;
        });

        if (hoveredFeature) {
            setHoveredFeature(hoveredFeature);
            map.getTargetElement().style.cursor = "pointer";
        } else {
            map.getTargetElement().style.cursor = "";
            setHoveredFeature(null);
        }
    };

    return (
        <>
            {hoveredFeature && hoveredVtLayer && (
                <VectorTileHoverHandler
                    vtFeature={hoveredFeature}
                    vtLayer={hoveredVtLayer}
                />
            )}
        </>
    );
};

export default MapHoverInteraction;
