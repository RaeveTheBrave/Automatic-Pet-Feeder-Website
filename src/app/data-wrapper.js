'use client'
// import Image from "next/image";
import styles from "./page.module.css";

import { useEffect, useState } from "react";
import Data from "./data";
import register from "./update";

export default function DataWrapper() {
    const [listener, setListener] = useState();

    useEffect(() => {
        register(setListener)
    }, [])

    return (
        <Data data={listener}> </Data>
    );
}
