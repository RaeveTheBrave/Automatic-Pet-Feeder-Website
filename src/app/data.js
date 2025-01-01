'use client'

import { getDatabase, ref, update } from "firebase/database";
import { app } from "./firebase";
import { useState } from "react";

// import styles from "./page.module.css";

export default function Data({data}) {

    const db = getDatabase(app);
    const reference = ref(db);

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        update(reference, { "Specified Time": `${inputValue}` }).then(() => setInputValue(""))
    };

    return (
        <div>
            <h1>Current Time⏳: {data?.["Current Time"]}</h1>
            <h1>Food Status🍌: {data?.["Food Status"]}</h1>
            <h1>Pet Status😺: {data?.["Pet Status"]}</h1>
            <h1>Water Status💧: {data?.["Water Status"]}</h1>
            <h1>Specified Time: {data?.["Specified Time"]}</h1>
            <br></br>
            <input 
            type="text" 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Input Specified Time"
            >
            </input>
            <button onClick={handleInputChange}>Update</button>
        </div>
    );
}