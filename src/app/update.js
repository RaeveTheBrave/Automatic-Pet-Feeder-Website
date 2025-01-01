import { app } from "./firebase";
import { ref, getDatabase, onValue, } from "firebase/database";

const db = getDatabase(app);
const reference = ref(db);

const callbacks = [];

onValue(reference, snapshot => callbacks.forEach(callback => {
    console.log(callback);
    
    callback(snapshot.val())
}) );

export default function register (callback) {
    callbacks.push(callback);
}

