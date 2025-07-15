import { StyleLike } from "ol/style/Style";
import { Map } from "ol";
import { Feature } from "ol";
import { Coordinate } from "ol/coordinate";
import { Geometry } from "ol/geom";
import VectorTileLayer from "ol/layer/VectorTile";
import { ReactNode } from "react";

// Map Context Types
export interface MapContextData {
    map: Map | null;
    setMap: React.Dispatch<React.SetStateAction<Map | null>> | null;
}

// Layer Types
export type TMapboxStyleLayer = {
    version: number;
    sources: Record<string, { type: "vector" } & Record<string, string>>;
    layers: {
        id: string;
        layout: Record<string, any>;
        paint: Record<string, any>;
        source: string;
        "source-layer": string;
        type: "fill" | "symbol";
    }[];
};

export type TLayerInfo = {
    url: string;
    format: "MVT";
    featureClass: "Feature" | "RenderedFeature";
    declutter: boolean;
    layer_name: string;
};

export type TLayer = {
    id: string;
    label: string;
    type: string;
    displayed: boolean;
    visible: boolean;
    minZoom?: number;
    maxZoom?: number;
    opacity?: number;
    zIndex?: number;
    layerInfo: TLayerInfo;
    style?: StyleLike | TMapboxStyleLayer;
};

export type TLayerPlaceholder = {
    id: string;
    name: string;
    active: boolean;
    label: string;
    type: string;
    displayed: boolean;
    visible: boolean;
};

// Layer Context Types
export interface LayerContextType {
    layers: Record<string, TLayerPlaceholder>;
    setLayers: (layers: Record<string, TLayerPlaceholder>) => void;
    toggleLayer: (layerId: string) => void;
}

export interface LayerProviderProps {
    children: ReactNode;
}

// Layer Styles Types
export type TLayerKeys = "roads" | "buildings";

export type TLayerStyles = Record<TLayerKeys, StyleLike | undefined>;

// Feature Interaction Types
export interface PopupProps {
    feature: Feature;
    coordinate: Coordinate;
    onClose: () => void;
}

export type PopupDataValueType = string | number | boolean;

// Vector Tiles Creation Types
export interface VectorTilesCreationProps {
    layer: TLayer;
}

// Feature Hover Interaction Types
export interface VectorTileHoverHandlerProps {
    vtFeature: Feature<Geometry> | null;
    vtLayer: VectorTileLayer | null;
}

// Backend Response Types
export interface BackendLayerResponse extends TLayerPlaceholder {
    // Extends TLayerPlaceholder with any additional backend-specific fields
}
