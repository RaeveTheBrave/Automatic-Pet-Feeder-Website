'use client'
// import Image from "next/image";
import styles from "./page.module.css";

import dynamic from "next/dynamic";

const DataWrapper = dynamic(() => import("./data-wrapper"), {ssr: false})

export default function Home() {

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Automatic Pet Feeder Dashboard</h1>
        <DataWrapper></DataWrapper>
        {/* <Suspense fallback={<Loading />}>
          <Data></Data>
        </Suspense> */}
      </main>
      <footer className={styles.footer}>
        <a
          href=""
        >
          3rd Semester Project by Marcel & Sultan
        </a>
      </footer>
    </div>
  );
}
