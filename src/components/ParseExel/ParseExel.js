import React, {useEffect, useState} from "react";
import XLSX from "xlsx";
import '../../index.css'
import ConvertJSONToCSV from "../ConvertJSONToCSV";

const ParseExcel = () => {

    const [jsonData, setJsonData] = useState([])
    const [isDataFetch, setIsDataFetch] = useState(false)


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
                setJsonData(json)
                setIsDataFetch(true)

            };

            reader.readAsArrayBuffer(e.target.files[0]);
        }
    }
    console.log(isDataFetch)
    useEffect(() => {
        if (jsonData > 1) {
            setIsDataFetch(true)
        } else {
            setIsDataFetch(false)
        }
    }, [])

    return (
        <div className={'container'}>
            <h1 className={'main-text'}>Convert Excel to CVS</h1>
            <div className={'excel-parser'}>
                <label htmlFor={'input'} className={'uploadButton'}>Please choose a file</label>
                <input id='input' style={{display: "none"}} type='file' onChange={(e) => handleFile(e)}/>
            </div>
            {
                isDataFetch && <p>File uploaded</p>}
            <ConvertJSONToCSV data={jsonData}/>
        </div>
    )
}

export default ParseExcel


