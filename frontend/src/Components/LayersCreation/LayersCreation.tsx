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
