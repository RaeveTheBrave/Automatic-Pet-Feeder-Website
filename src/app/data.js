import styles from "./page.module.css";

import { app } from "./firebase";
import { ref, getDatabase, get } from "firebase/database";

export default async function Data() {

    const db = getDatabase(app);
    const reference = ref(db);

    const data = (await get(reference)).val();


    return (
        <div>
            <h1>Current Time⏳: {data.CurrentTime}</h1>
            <h1>Food Status🍌: {data.FoodStatus}</h1>
            <h1>Pet Status😺: {data.PetStatus}</h1>
            <h1>Water Status💧: {data.WaterStatus}</h1>
        </div>
    );
}
