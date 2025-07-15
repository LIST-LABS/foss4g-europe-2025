import { useEffect, useRef } from "react";
import { Feature } from "ol";
import VectorTileSource from "ol/source/VectorTile";
import VectorTileLayer from "ol/layer/VectorTile";
import { Geometry } from "ol/geom";
import useMap from "../../MapInitialization/context/useMap";
import { Stroke, Style } from "ol/style";
import { VectorTileHoverHandlerProps } from "../../../types";

const hoveredFeatureStyle = (): Style => {
    return new Style({
        stroke: new Stroke({
            color: "rgba(255, 240, 0, 1)",
            width: 2,
        }),
    });
};

const VectorTileHoverHandler = ({ vtFeature, vtLayer }: VectorTileHoverHandlerProps) => {
    const { map } = useMap();
    const hoverLayerRef = useRef<VectorTileLayer | null>(null);
    const hoveredFeatureId = vtFeature?.getId();

    useEffect(() => {
        if (!map || !vtLayer) return;

        // Initialize the hover layer once
        if (!hoverLayerRef.current) {
            const vtSource = vtLayer.getSource() as VectorTileSource;

            const hoverLayer = new VectorTileLayer({
                source: vtSource,
                renderMode: "hybrid",
                zIndex: 9999,
                style: (feature) => {
                    return feature.getId() === hoveredFeatureId ? hoveredFeatureStyle() : undefined;
                },
            });

            map.addLayer(hoverLayer);
            hoverLayerRef.current = hoverLayer;
        }

        // Update style function dynamically
        const hoverLayer = hoverLayerRef.current;
        if (hoverLayer) {
            hoverLayer.setStyle((feature) => {
                return feature.getId() === hoveredFeatureId ? hoveredFeatureStyle() : undefined;
            });
        }

        return () => {
            if (hoverLayerRef.current) {
                map.removeLayer(hoverLayerRef.current);
                hoverLayerRef.current = null;
            }
        };
    }, [map, vtLayer]); // initialize layer once on vtLayer change

    // update style on vtFeature (hovered feature) change
    useEffect(() => {
        const hoverLayer = hoverLayerRef.current;
        if (hoverLayer) {
            hoverLayer.setStyle((feature) => {
                return feature.getId() === hoveredFeatureId ? hoveredFeatureStyle() : undefined;
            });
        }
    }, [hoveredFeatureId]);

    return null;
};

export default VectorTileHoverHandler;
