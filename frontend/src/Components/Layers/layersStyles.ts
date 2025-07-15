import Style, { StyleLike } from "ol/style/Style";
import { Fill, Stroke } from "ol/style";
import { LAYERS_DEFINITIONS } from "./layersDefinitions";

type TLayerKeys = keyof typeof LAYERS_DEFINITIONS;

export type TLayerStyles = Record<TLayerKeys, StyleLike | undefined>;

export const layerStyles: TLayerStyles = {
    roads: new Style({
        stroke: new Stroke({ color: "#FF00FF", width: 2 }),
    }),
    buildings: new Style({
        stroke: new Stroke({ color: "#FFA500", width: 1.5 }),
        fill: new Fill({ color: "rgba(255, 165, 0, 0.2)" }),
    }),
};
