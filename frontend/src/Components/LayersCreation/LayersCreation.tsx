import React, { useEffect, useState } from "react";
import { LAYERS_DEFINITIONS } from "../Layers/layersDefinitions";
import VectorTilesCreation from "./VectorTilesCreation";
import { useLayerContext } from "../Layers/context/LayerContext";
import useMap from "../MapInitialization/context/useMap";
import { TLayerPlaceholder } from "../Layers/layersPlaceholders";

// Define the type for the backend response
interface BackendLayerResponse extends TLayerPlaceholder {
    label: string;
    type: string;
    displayed: boolean;
    visible: boolean;
    layerInfo: any;
    style: any;
}

const LayersCreation = () => {
    const { layers, setLayers } = useLayerContext();
    const [fetchedLayer, setFetchedLayer] = useState<BackendLayerResponse | null>(null);

    useEffect(() => {
        fetch("http://localhost:5000/layer/buildings")
            .then((res) => res.json())
            .then((data: BackendLayerResponse) => {
                // Add to LAYERS_DEFINITIONS (if mutable) and to context
                LAYERS_DEFINITIONS[data.id] = data;
                setFetchedLayer(data);
                if (setLayers) {
                    setLayers({
                        ...layers,
                        [data.id]: {
                            id: data.id,
                            name: data.name,
                            active: data.active,
                            label: data.label,
                            type: data.type,
                            displayed: data.displayed,
                            visible: data.visible,
                        },
                    });
                }
            })
            .catch((err) => console.error("Failed to fetch layer:", err));
        // Only run on mount
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setLayers]);

    return (
        <>
            {Object.entries(layers).map(([key, placeholder]) => {
                if (placeholder.active && LAYERS_DEFINITIONS[key]) {
                    const layer = LAYERS_DEFINITIONS[key];
                    return (
                        <VectorTilesCreation
                            key={key}
                            layer={layer}
                        />
                    );
                }
                return null;
            })}
        </>
    );
};

export default LayersCreation;
