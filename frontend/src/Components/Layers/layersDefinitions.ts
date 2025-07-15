import { StyleLike } from "ol/style/Style";
import styleExample from "../MapboxStlye/styleExample.json";

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

export type TLayerInfo = {
    url: string;
    format: "MVT";
    featureClass: "Feature" | "RenderedFeature";
    declutter: boolean;
    layer_name: string;
};

export const LAYERS_DEFINITIONS: Record<string, TLayer> = {
    roads: {
        id: "roads",
        label: "Roads",
        type: "VT",
        displayed: true,
        visible: true,
        zIndex: 10,
        opacity: 1,
        layerInfo: {
            url: `http://localhost:8080/maps/osm/roads/{z}/{x}/{y}.pbf`,
            declutter: true,
            format: "MVT",
            featureClass: "Feature",
            layer_name: "roads",
        },
    },
    /* buildings: {
        id: "buildings",
        label: "Buildings",
        type: "VT",
        displayed: true,
        visible: true,
        zIndex: 20,
        opacity: 1,
        layerInfo: {
            url: `http://localhost:8080/maps/osm/{z}/{x}/{y}.pbf`,
            declutter: true,
            format: "MVT",
            featureClass: "Feature",
            layer_name: "buildings",
        },
    }, */
};
