import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import ParseExel from "./components/ParseExel/ParseExel";
import React from "react";

function App() {
    return (
        <div >
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path='/parse-exel' element={<ParseExel/>}></Route>
            </Routes>

        </div>
    );
}

export default App;
