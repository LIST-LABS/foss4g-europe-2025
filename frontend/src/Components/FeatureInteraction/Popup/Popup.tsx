import React, { useCallback, useMemo } from "react";
import { Feature } from "ol";
import { Coordinate } from "ol/coordinate";

interface PopupProps {
    feature: Feature;
    coordinate: Coordinate;
    onClose: () => void;
}

const Popup: React.FC<PopupProps> = React.memo(({ feature, coordinate, onClose }) => {
    const layer = useMemo(() => feature.get("layer"), [feature]);
    const highway = useMemo(() => feature.get("highway"), [feature]);
    const building = useMemo(() => feature.get("building"), [feature]);

    const handleClose = useCallback((event: React.MouseEvent) => {
        // Stop the event from bubbling up to the map
        event.stopPropagation();
        onClose();
    }, [onClose]);

    // Optional: Also stop propagation for the entire popup content
    const handlePopupClick = useCallback((event: React.MouseEvent) => {
        event.stopPropagation();
    }, []);

    const renderRoadProperties = () => {
        return (
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
    };

    const renderBuildingProperties = () => {
        return (
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
    };

    return (
        <div 
            className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center"
            onClick={handleClose} // This handles clicks outside the inner popup content to close it
        >
            <div 
                className="mx-4 w-full max-w-md rounded-lg bg-white shadow-xl"
                onClick={handlePopupClick} // Prevent clicks *inside* the popup from bubbling to the outer overlay and closing it
            >
                {/* Header */}
                <div className="flex items-center justify-between border-b p-4">
                    <h2 className="text-xl font-bold text-gray-900">
                        {layer === "roads" ? "Road Details" : "Building Details"}
                    </h2>
                    <button
                        onClick={handleClose} // This will now stop propagation
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
                        Coordinates: {coordinate[0].toFixed(6)}, {coordinate[1].toFixed(6)}
                    </div>
                </div>
            </div>
        </div>
    );
});

Popup.displayName = "Popup";

export default Popup;