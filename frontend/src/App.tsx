import "./App.css";
import { MapProvider } from "./Components/MapInitialization/context/MapProvider";
import { LayerProvider } from "./Components/Layers/context/LayerContext";
import MapComponent from "./Components/MapInitialization/MapComponent";
import LayerToggle from "./Components/Layers/LayerToggle/LayerToggle";

function App() {
    return (
        <MapProvider>
            <LayerProvider>
                <div className="h-screen w-screen">
                    <MapComponent />
                    <LayerToggle />
                </div>
            </LayerProvider>
        </MapProvider>
    );
}

export default App;
