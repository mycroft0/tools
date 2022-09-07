import {Route, Routes} from "react-router-dom";
import ParseExcel from "./components/ParseExel/ParseExel";
import React from "react";

function App() {
    return (
        <div >
            <Routes>
                <Route path="/" element={<ParseExcel/>}></Route>
            </Routes>

        </div>
    );
}

export default App;
