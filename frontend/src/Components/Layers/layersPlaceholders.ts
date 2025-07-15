import { TLayerPlaceholder } from "../../types";

export type { TLayerPlaceholder };

export const LAYERS_PLACEHOLDERS: Record<string, TLayerPlaceholder> = {
    roads: {
        id: "roads",
        name: "Roads",
        active: false,
        label: "Roads",
        type: "vector",
        displayed: true,
        visible: true,
    },
};
