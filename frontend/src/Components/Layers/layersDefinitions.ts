import { StyleLike } from "ol/style/Style";
import styleExample from "../MapboxStlye/styleExample.json";
import { TMapboxStyleLayer, TLayer, TLayerInfo } from "../../types";

export type { TMapboxStyleLayer, TLayer, TLayerInfo };

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
            url: `https://foss4g-2025.listlabs.net/maps/osm/roads/{z}/{x}/{y}.pbf`,
            declutter: true,
            format: "MVT",
            featureClass: "Feature",
            layer_name: "roads",
        },
    },
    buildings: {
        id: "buildings",
        label: "Buildings",
        type: "VT",
        displayed: true,
        visible: true,
        zIndex: 20,
        opacity: 1,
        layerInfo: {
            url: `https://foss4g-2025.listlabs.net/maps/osm/buildings/{z}/{x}/{y}.pbf`,
            declutter: true,
            format: "MVT",
            featureClass: "Feature",
            layer_name: "buildings",
        },
    },
};
