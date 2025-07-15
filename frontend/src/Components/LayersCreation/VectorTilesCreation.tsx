// React
import { useEffect } from "react";

import MVT from "ol/format/MVT";
import VectorTileLayer from "ol/layer/VectorTile";
import VectorTileSource from "ol/source/VectorTile";
import { Feature } from "ol";
import RenderFeature from "ol/render/Feature";
import { Geometry } from "ol/geom";
import { layerStyles, TLayerStyles } from "../Layers/layersStyles";

import useMap from "../MapInitialization/context/useMap";
import { TLayer } from "../Layers/layersDefinitions";
import { StyleLike } from "ol/style/Style";

interface VectorTilesCreationProps {
    layer: TLayer;
}

const getLayerStyle = (layer: TLayer) => {
    if (layer.style) {
        return layer.style;
    }

    for (const key in layerStyles) {
        if (key === layer.id) {
            const typedKey = key as keyof TLayerStyles;
            return layerStyles[typedKey];
        }
    }

    return undefined;
};

const VectorTilesCreation = ({ layer }: VectorTilesCreationProps) => {
    const { map } = useMap();

    useEffect(() => {
        if (!map || !layer) return;

        const vectorTileSource = new VectorTileSource<Feature<Geometry> | RenderFeature>({
            format: new MVT(layer.layerInfo.featureClass === "Feature" ? { featureClass: Feature } : undefined),
            url: `${layer.layerInfo.url}`,
        });

        const layerStyle = getLayerStyle(layer);

        const vectorTileLayer = new VectorTileLayer({
            source: vectorTileSource,
            zIndex: layer.zIndex,
            declutter: layer.layerInfo.declutter,
            opacity: layer.opacity,
            properties: {
                label: layer.label,
                id: layer.id,
                type: layer.type,
            },
            visible: layer.visible,
            style: layerStyle as StyleLike,
        });

        map.addLayer(vectorTileLayer);

        return () => {
            map.removeLayer(vectorTileLayer);
        };
    }, [map, layer]);

    return null;
};

export default VectorTilesCreation;
