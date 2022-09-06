import React from "react";
import XLSX from "xlsx";
import '../../index.css'
import ConvertJSONToCVS from "../ConvertJSONToCVS";

const ParseExel = () => {

    const handleFile = async (e) => {
        e.preventDefault();
        if (e.target.files) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = e.target.result;
                const workbook = XLSX.read(data, {type: "array"});
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const json = XLSX.utils.sheet_to_json(worksheet);
                console.log(json);
            };
            reader.readAsArrayBuffer(e.target.files[0]);
        }

    }

    return (
        <div>
            <h1 style={{left: '10px', display: "flex", justifyContent: "center"}}>Convert Excel to CVS</h1>
            <div className={'excel-parser'}>
                <label htmlFor={'input'} className={'uploadButton'}>Please choose a file</label>
                <input id='input' style={{display: "none"}} type='file' onChange={(e) => handleFile(e)}/>
            </div>
            <ConvertJSONToCVS/>

        </div>
    )
}

export default ParseExel