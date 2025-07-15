import React, { useState } from "react";
import { useLayerContext } from "../context/LayerContext";

const LayerToggle = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const { layers, toggleLayer } = useLayerContext();

    return (
        <div className="fixed top-4 right-4 z-50">
            <div
                className={`rounded-lg border bg-white shadow-lg transition-all duration-300 ${
                    isExpanded ? "w-64" : "w-12"
                }`}
            >
                {/* Header/Toggle Button */}
                <div
                    className="flex cursor-pointer items-center justify-between p-3"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    <span className={`font-semibold ${isExpanded ? "block" : "hidden"}`}>Layers</span>
                    <button className="cursor-pointer text-gray-600 hover:text-gray-800">
                        {isExpanded ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="#000000"
                                viewBox="0 0 256 256"
                            >
                                <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"></path>
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="#000000"
                                viewBox="0 0 256 256"
                            >
                                <path d="M230.91,172A8,8,0,0,1,228,182.91l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,36,169.09l92,53.65,92-53.65A8,8,0,0,1,230.91,172ZM220,121.09l-92,53.65L36,121.09A8,8,0,0,0,28,134.91l96,56a8,8,0,0,0,8.06,0l96-56A8,8,0,1,0,220,121.09ZM24,80a8,8,0,0,1,4-6.91l96-56a8,8,0,0,1,8.06,0l96,56a8,8,0,0,1,0,13.82l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,24,80Zm23.88,0L128,126.74,208.12,80,128,33.26Z"></path>
                            </svg>
                        )}
                    </button>
                </div>

                {/* Layer List */}
                {isExpanded && (
                    <div className="space-y-2 p-3">
                        {Object.entries(layers).map(([key, layer]) => (
                            <label
                                key={key}
                                className="flex cursor-pointer items-center space-x-2"
                            >
                                <input
                                    type="checkbox"
                                    checked={layer.active}
                                    onChange={() => toggleLayer(key)}
                                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                />
                                <span className="text-sm text-gray-700">{layer.name}</span>
                            </label>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default LayerToggle;
