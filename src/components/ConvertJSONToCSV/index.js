import {CSVLink} from "react-csv";
import '../../index.css'


const ConvertJSONToCSV = ({data}) => {

    const headers = [
        {
            label: 'id',
            key: 'id'
        },
        {
            label:'Invoice No',
            key:'Variabilní symbol'
        },
        {
            label: 'Prefix',
            key: 'Prefix'
        },
        {
            label: 'Project',
            key: 'MRN'
        },

        {
            label: 'Tax Point',
            key: 'Datum propuštění'
        },
        {
            label: 'Invoice Date',
            key: 'Datum propuštění'
        },
        {
            label: 'Currency',
            key: 'Currency'
        },
        {
            label: 'Description',
            key: 'Název'
        },
        {
            label: 'Vat Code',
            key: 'Vat Code'
        },
        {
            label: 'Cost Center',
            key: 'Cost Center'
        },
        {
            label: 'Qty',
            key: 'Qty'
        },
        {
            label: 'Unit',
            key: 'Unit'
        },
        {
            label:'Price',
            key:'Poplatky'
        },
        {
            label:'Tax Total',
            key:'Tax Total'
        },
        {
            label:'Number',
            key:'Number'
        },
        {
            label:'Line item',
            key:'Line item'
        },
        {
            label:'Due Date',
            key:'Due Date'
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

