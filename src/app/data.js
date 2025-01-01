import styles from "./page.module.css";

import { app } from "./firebase";
import { ref, getDatabase, get, } from "firebase/database";

export default async function Data() {

    const db = getDatabase(app);
    const reference = ref(db);

    const data = (await get(reference)).val();

    console.log(data);  
    
    return (
        <div>
            <h1>Current Time⏳: {data["Current Time"]}</h1>
            <h1>Food Status🍌: {data["Food Status"]}</h1>
            <h1>Pet Status😺: {data["Pet Status"]}</h1>
            <h1>Water Status💧: {data["Water Status"]}</h1>
            <h1>Specified Time: {data["Specified Time"]}</h1>
        </div>
    );
}