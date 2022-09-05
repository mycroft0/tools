import React, { useState } from "react";
import '../../index.css'

export default function ConvertJSONToCVS() {
    const [json, setJson] = useState("");
    const [csv, setCsv] = useState("");
    const convert = async (e) => {
        e.preventDefault();
        const parsedJson = JSON.parse(json);
        if (
            !Array.isArray(parsedJson) ||
            !parsedJson.every((p) => typeof p === "object" && p !== null)
        ) {
            return;
        }
        const heading = Object.keys(parsedJson[0]).join(",");
        const body = parsedJson.map((j) => Object.values(j).join(",")).join("n");
        setCsv(`${heading}${body}`);
    };
    return (
        <div className={'cvs'}>
            <form onSubmit={convert}>
                <div>
                    <label>json</label>
                    <textarea
                        value={json}
                        onChange={(e) => setJson(e.target.value)}
                    ></textarea>
                </div>
                <button type="submit">convert</button>
            </form>
            <div>
                <label>csv</label>
                <textarea value={csv}></textarea>
            </div>
        </div>
    );
}