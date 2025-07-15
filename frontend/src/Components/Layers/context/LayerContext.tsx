import React, { createContext, useContext, useState, ReactNode } from "react";
import { LAYERS_PLACEHOLDERS } from "../layersPlaceholders";
import { TLayerPlaceholder } from "../layersPlaceholders";

interface LayerContextType {
    layers: Record<string, TLayerPlaceholder>;
    setLayers: (layers: Record<string, TLayerPlaceholder>) => void;
    toggleLayer: (layerId: string) => void;
}

const LayerContext = createContext<LayerContextType | undefined>(undefined);

// Custom hook to access the layer context
export const useLayerContext = (): LayerContextType => {
    const context = useContext(LayerContext);
    if (!context) {
        throw new Error("useLayerContext must be used within a LayerProvider");
    }
    return context;
};

interface LayerProviderProps {
    children: ReactNode;
}

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
