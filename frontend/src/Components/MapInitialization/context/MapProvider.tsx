import { createContext, ReactNode, useState } from "react";
import { Map } from "ol";
import { MapContextData } from "../../../types";

export type { MapContextData };

export const MapContextDefaultValue: MapContextData = {
    map: null,
    setMap: null,
};

const MapContext = createContext<MapContextData>(MapContextDefaultValue);

// MapProvider is a context provider that provides the map context to the children components (App.tsx)
export const MapProvider = ({ children }: { children: ReactNode }) => {
    const [map, setMap] = useState<Map | null>(null);

    const MapContextData = {
        map,
        setMap,
    };

    return <MapContext.Provider value={MapContextData}>{children}</MapContext.Provider>;
};

export default MapContext;
