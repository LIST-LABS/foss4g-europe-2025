import React, { createContext, useContext, useState, ReactNode } from "react";
import { LAYERS_PLACEHOLDERS } from "../layersPlaceholders";
import { LayerContextType, LayerProviderProps } from "../../../types";

const LayerContext = createContext<LayerContextType | undefined>(undefined);

// Custom hook to access the layer context
export const useLayerContext = (): LayerContextType => {
    const context = useContext(LayerContext);
    if (!context) {
        throw new Error("useLayerContext must be used within a LayerProvider");
    }
    return context;
};

// LayerProvider is a context provider that provides the layer context to the children components (App.tsx)
export const LayerProvider = ({ children }: LayerProviderProps) => {
    const [layers, setLayers] = useState(LAYERS_PLACEHOLDERS);

    const toggleLayer = (layerId: string) => {
        setLayers((prev) => ({
            ...prev,
            [layerId]: {
                ...prev[layerId],
                active: !prev[layerId].active,
            },
        }));
    };

    return <LayerContext.Provider value={{ layers, setLayers, toggleLayer }}>{children}</LayerContext.Provider>;
};
