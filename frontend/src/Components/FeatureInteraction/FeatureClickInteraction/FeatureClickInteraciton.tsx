import { useEffect, useState, useCallback, useRef, useMemo } from "react";
import { unByKey } from "ol/Observable";
import { Feature, MapBrowserEvent } from "ol";
import VectorTileLayer from "ol/layer/VectorTile";
import { Coordinate } from "ol/coordinate";

import useMap from "../../MapInitialization/context/useMap";

export type PopupDataValueType = string | number | boolean;

interface PopupState {
    feature: Feature;
    coordinate: Coordinate;
}

const MapClickInteraction = () => {
    const { map } = useMap();
    const [popupState, setPopupState] = useState<PopupState | null>(null);
    const clickHandlerRef = useRef<any>(null);

    const handleMapLayerClick = (e: MapBrowserEvent<KeyboardEvent | WheelEvent | PointerEvent>) => {
        if (!map) return;

        const coordinate = e.coordinate;
        let featureFound = false;

        map.forEachFeatureAtPixel(e.pixel, (feature) => {
            const layer = feature.get("layer");
            if (layer === "roads" || layer === "buildings") {
                setPopupState({
                    feature: feature as Feature,
                    coordinate: coordinate,
                });
                featureFound = true;
            }
        });

        if (!featureFound) {
            setPopupState(null);
        }
    };

    useEffect(() => {
        if (!map) return;

        clickHandlerRef.current = map.on("click", handleMapLayerClick);

        return () => {
            if (clickHandlerRef.current) {
                unByKey(clickHandlerRef.current);
            }
        };
    }, [map, handleMapLayerClick]);

    const handleClosePopup = useCallback(() => {
        setPopupState(null);
    }, []);

    const handleClose = useCallback(
        (event: React.MouseEvent) => {
            event.stopPropagation();
            handleClosePopup();
        },
        [handleClosePopup]
    );

    const handlePopupClick = useCallback((event: React.MouseEvent) => {
        event.stopPropagation();
    }, []);

    const popupContent = useMemo(() => {
        if (!popupState) return null;

        const layer = popupState.feature.get("layer");
        const highway = popupState.feature.get("highway");
        const building = popupState.feature.get("building");

        const renderRoadProperties = () => (
            <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-800">Road Information</h3>
                <div className="space-y-1">
                    <div className="flex justify-between">
                        <span className="text-gray-600">Type:</span>
                        <span className="font-medium">{highway || "Unknown"}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Layer:</span>
                        <span className="font-medium">{layer}</span>
                    </div>
                </div>
            </div>
        );

        const renderBuildingProperties = () => (
            <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-800">Building Information</h3>
                <div className="space-y-1">
                    <div className="flex justify-between">
                        <span className="text-gray-600">Type:</span>
                        <span className="font-medium">{building || "Unknown"}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Layer:</span>
                        <span className="font-medium">{layer}</span>
                    </div>
                </div>
            </div>
        );

        return (
            <div
                className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center"
                onClick={handleClose}
            >
                <div
                    className="mx-4 w-full max-w-md rounded-lg bg-white shadow-xl"
                    onClick={handlePopupClick}
                >
                    {/* Header */}
                    <div className="flex items-center justify-between border-b p-4">
                        <h2 className="text-xl font-bold text-gray-900">
                            {layer === "roads" ? "Road Details" : "Building Details"}
                        </h2>
                        <button
                            onClick={handleClose}
                            className="text-2xl font-bold text-gray-400 hover:text-gray-600"
                        >
                            ×
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-4">{layer === "roads" ? renderRoadProperties() : renderBuildingProperties()}</div>

                    {/* Footer */}
                    <div className="rounded-b-lg border-t bg-gray-50 p-4">
                        <div className="text-xs text-gray-500">
                            Coordinates: {popupState.coordinate[0].toFixed(6)}, {popupState.coordinate[1].toFixed(6)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }, [popupState, handleClose, handlePopupClick]);

    return <>{popupContent}</>;
};

export default MapClickInteraction;
