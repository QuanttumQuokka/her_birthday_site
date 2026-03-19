"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Page2() {
  const [text, setText] = useState("Checking smile...");
  const [showReceipt, setShowReceipt] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // text changing sequence
    setTimeout(() => setText("Scanning for cuteness..."), 1200);
    setTimeout(() => setText("Analyzing you 😏"), 2400);
    setTimeout(() => setText("Almost done..."), 3500);

    // show receipt after scan
    setTimeout(() => setShowReceipt(true), 4200);
  }, []);

  return (
    <div className={styles.container}>
      
      {/* SCANNER */}
      <div className={styles.scanner}>
        <div className={styles.ring}></div>
        <div className={styles.ring2}></div>
        <div className={styles.scan}></div>

        <div className={styles.center}>❤️</div>
      </div>

      {/* TEXT */}
      {!showReceipt && <p className={styles.text}>{text}</p>}

      {/* RECEIPT */}
      {showReceipt && (
        <div className={styles.receipt}>
          <h3>OFFICIAL REPORT</h3>
          <p>ITEM: YOU</p>
          <p>CUTENESS: UNLIMITED</p>
          <p>SWEETNESS: OVERLOAD</p>
          <p>VIBE: PERFECT</p>

          <h2>TOTAL: 100% LOVELY ❤️</h2>

          <button onClick={() => router.push("/page3")}>
            Continue →
          </button>
        </div>
      )}
    </div>
  );
}
