export type TLayerPlaceholder = {
    id: string;
    name: string;
    active: boolean;
};

export const LAYERS_PLACEHOLDERS: Record<string, TLayerPlaceholder> = {
    roads: {
        id: "roads",
        name: "Roads",
        active: false,
    },
    buildings: {
        id: "buildings",
        name: "Buildings",
        active: false,
    },
};
