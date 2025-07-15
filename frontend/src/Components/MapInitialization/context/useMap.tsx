// React
import { useContext } from "react";

// External libraries

// Libraries/components from project
import MapContext from "./MapProvider";

// Redux

// Custom hook to access the map context
const useMap = () => {
    return useContext(MapContext);
};

export default useMap;
