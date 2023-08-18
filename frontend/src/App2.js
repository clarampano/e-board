import React  from "react";
import { useLocation } from "react-router-dom";
function App2(){
    const location = useLocation();
    console.log(location.pathname);
    return (
        <div>hello test</div>
    )
} export default App2;