import {CSVLink} from "react-csv";
import '../../index.css'


const ConvertJSONToCSV = ({data}) => {

    console.log(data)

    const headers = [
        {
            label: 'id',
            key: 'Variabilní symbol'
        },
        {
            label: 'Prefix',
            key: 'MRN'
        },
        {
            label: 'Tax Point',
            key: 'Datum propuštění'
        },
        {
            label: 'Date of invoice',
            key: 'Datum propuštění'
        },
        {
            label: 'Currency',
            key: 'Měna'
        },
        {
            label:'Price',
            key:'Poplatky'
        }
    ]

    const csvLink = {
        filename: 'file.csv',
        headers: headers,
        data: data
    }

    return (
        <div className={'downloadCSV'}>
            <CSVLink className={'CSV-Link'} {...csvLink}>Export to
                CSV</CSVLink>
        </div>
    )
}

export default ConvertJSONToCSV

