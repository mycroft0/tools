import React, {useEffect, useState} from "react";
import XLSX from "xlsx";
import '../../index.css'
import ConvertJSONToCSV from "../ConvertJSONToCSV";

const ParseExcel = () => {

    const [jsonData, setJsonData] = useState([])
    const [isDataFetch, setIsDataFetch] = useState(false)
    const [apiData,setAPIData] = useState([])

    const getAPIData = () =>{
        fetch('http://localhost:5001/newDataBase/customs/cz')
            .then(res=>res.json())
            .then((data) => setAPIData(data))
    }

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

    function mrnParser(mrn){
        return mrn.substr(2, 4);
    }

    function mrnYearParser(mrn){
        return mrn.substr(0, 2);
    }

    jsonData.forEach(item=>{
        apiData.map(elem =>{
            if(elem['ico'] === mrnParser(item['MRN'])){
                item['id'] = elem['id']
                item['Cost Center'] = elem['costcenter']
                item['Vat Code'] = 'R00'
                item['Qty'] = 1
                item['Number'] = '379-1'
                item['Currency'] = 'CZK'
                item['Prefix'] = 'JSD20' + mrnYearParser(item['MRN'])

            }
        })
    })

    useEffect(() => {
        getAPIData()

        if (jsonData > 1) {
            setIsDataFetch(true)
        } else {
            setIsDataFetch(false)
        }
    }, [])

    return (
        <div className={'container'}>
            <p className={'main-text'}>Convert Excel to CVS</p>
            <div className={'excel-parser'}>
                <label htmlFor={'input'} className={'uploadButton'}>Please choose a file</label>
                <input id='input' style={{display: "none"}} type='file' onChange={(e) => handleFile(e)}/>
            </div>
            {
                isDataFetch && <p> File uploaded</p>}{
            isDataFetch && <ConvertJSONToCSV data={jsonData}/>}

        </div>
    )
}

export default ParseExcel


