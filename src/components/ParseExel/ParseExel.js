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
            <h1>ParseExel</h1>
            <input className={'uploadButton'} type='file'  onChange={(e) => handleFile(e)}/>
            <ConvertJSONToCVS/>
        </div>


    )
}

export default ParseExel