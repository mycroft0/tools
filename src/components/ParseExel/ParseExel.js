import React, {useEffect, useState} from "react";
import XLSX from "xlsx";
import '../../index.css'
import ConvertJSONToCSV from "../ConvertJSONToCSV";

const ParseExcel = () => {

    const [jsonData, setJsonData] = useState([])

    /*
    * const exportData = async (e) =>{
        const jsonExcel = await handleFile(e)
        console.log('done')
        const CSVl = await ConvertJSONToCSV(jsonExcel)
        return CSVl
    }*/


    const buffer = []

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
                buffer.push(json)
            };
            reader.readAsArrayBuffer(e.target.files[0]);

        }
        setJsonData(buffer)
    }

    return (
        <div>
            <h1 style={{left: '10px', display: "flex", justifyContent: "center"}}>Convert Excel to CVS</h1>
            <div className={'excel-parser'}>
                <label htmlFor={'input'} className={'uploadButton'}>Please choose a file</label>
                <input id='input' style={{display: "none"}} type='file' onChange={(e) => handleFile(e)}/>

            </div>
            <ConvertJSONToCSV data={jsonData}/>
        </div>
    )
}

export default ParseExcel


