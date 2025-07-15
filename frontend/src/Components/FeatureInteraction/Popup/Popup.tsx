import React, { useCallback, useMemo, useEffect } from "react";
import { PopupProps } from "../../../types";

const Popup = ({ feature, coordinate, onClose }: PopupProps) => {
    const layer = useMemo(() => feature.get("layer"), [feature]);
    const highway = useMemo(() => feature.get("highway"), [feature]);
    const building = useMemo(() => feature.get("building"), [feature]);

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
            onClick={onClose}
        >
            <div
                className="mx-4 w-full max-w-md cursor-default rounded-lg bg-white shadow-xl"
                onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                }}
            >
                <div className="flex items-center justify-between border-b p-4">
                    <h2 className="text-xl font-bold text-gray-900">
                        {layer === "roads" ? "Road Details" : "Building Details"}
                    </h2>
                    <button
                        onClick={onClose}
                        className="cursor-pointer text-2xl font-bold text-gray-400 hover:text-gray-600"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="#000000"
                            viewBox="0 0 256 256"
                        >
                            <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
                        </svg>
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
};

export default Popup;
