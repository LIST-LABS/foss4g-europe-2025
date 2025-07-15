export type TLayerPlaceholder = {
    id: string;
    name: string;
    active: boolean;
    label: string;
    type: string;
    displayed: boolean;
    visible: boolean;
};

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
