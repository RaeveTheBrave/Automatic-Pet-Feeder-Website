import Image from "next/image";
import styles from "./page.module.css";

import { Suspense } from "react";
import Loading from "./loading";
import Data from "./data";

export default function Home() {

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Automatic Pet Feeder Dashboard</h1>
        {/* <Data></Data> */}
        <Suspense fallback={<Loading />}>
          <Data></Data>
        </Suspense>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        >
         3rd Semester Project by Marcel & Sultan
        </a>
      </footer>
    </div>
  );
}
