import { useEffect, useState } from "react";
import { unByKey } from "ol/Observable";
import { Feature, MapBrowserEvent } from "ol";
import { Coordinate } from "ol/coordinate";
import useMap from "../../MapInitialization/context/useMap";
import Popup from "../Popup/Popup";
import { PopupDataValueType } from "../../../types";

export type { PopupDataValueType };

const MapClickInteraction = () => {
    const { map } = useMap();

    const [clickLocation, setClickLocation] = useState<Coordinate>([]);
    const [vtFeature, setVtFeature] = useState<Feature | null>(null);

    useEffect(() => {
        if (!map) return;

        const mapLayerClick = map.on("click", (e) => handleMapLayerClick(e));

        return () => {
            unByKey(mapLayerClick);
        };
    }, [map]);

    const handleMapLayerClick = (e: MapBrowserEvent<KeyboardEvent | WheelEvent | PointerEvent>) => {
        if (!map) return;
        e.stopPropagation();
        e.preventDefault();

        const coordinate = e.coordinate;

        const clickedFeature = map.forEachFeatureAtPixel(e.pixel, (feature, layer) => {
            return feature as Feature;
        });
        setVtFeature(clickedFeature || null);
        setClickLocation(coordinate);
    };

    return (
        <>
            {vtFeature && (
                <Popup
                    feature={vtFeature}
                    coordinate={clickLocation}
                    onClose={() => setVtFeature(null)}
                />
            )}
        </>
    );
};

export default MapClickInteraction;
