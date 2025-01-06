'use client'

import { getDatabase, ref, update } from "firebase/database";
import { app } from "./firebase";
import { useState } from "react";
import { css } from '@emotion/css'
// import styles from "./page.module.css";

export default function Data({ data }) {

    const db = getDatabase(app);
    const reference = ref(db);

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        update(reference, { "Specified Time": `${inputValue}` }).then(() => setInputValue(""))
    };

    return (
        <>
            <div className={css`
                    padding: 12px;
                `}>
                <h1>Current Time⏳: {data?.["Current Time"]}</h1>
                <h1>Food Status🍌: {data?.["Food Status"]}</h1>
                <h1>Pet Status😺: {data?.["Pet Status"]}</h1>
                <h1>Water Status💧: {data?.["Water Status"]}</h1>
                <h1>Specified Time🕛: {data?.["Specified Time"]}</h1>
            </div>
            <div className={css`
                    display: flex;
                    flex-flow: column; 
                    `}>
                <h2>Update Feeding Schedule</h2>
                <br></br>
                <input
                    className={css`
                        border-radius: 8px;
                        border-color: white;
                        font-size: 1rem;
                        padding: 12px;
                        `}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Input Specified Time"
                >
                </input>
                <br></br>
                <button
                    className={css`
                    border-radius: 8px;
                    border-color: white;
                    font-size: 1rem;
                    padding: 12px;
                    background-color:#121212;
                    `}
                    onClick={handleInputChange}
                >
                    Update
                </button>
            </div>
        </>
    );
}