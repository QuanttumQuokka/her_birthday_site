"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Page6() {
  const [lit, setLit] = useState(false);
  const [blown, setBlown] = useState(false);
  const router = useRouter();

  const handleBlow = () => {
    setBlown(true);

    // auto go to final page
    setTimeout(() => {
      router.push("/page7");
    }, 1500);
  };

  return (
    <div className={styles.container}>
      
      <h1 className={styles.title}>
        {!lit ? "Light the candle 🎂" : !blown ? "Blow the candle 💨" : "💖"}
      </h1>

      {/* 🎂 CAKE */}
      <div className={styles.cakeWrapper}>
        <img src="/cake.png" alt="cake" className={styles.cake} />

        {/* 🕯 SINGLE CENTER CANDLE */}
        <div className={styles.candle}>
          {lit && !blown && <div className={styles.flame}></div>}
          {blown && <div className={styles.smoke}></div>}
        </div>
      </div>

      {/* BUTTON FLOW */}
      {!lit ? (
        <button className={styles.button} onClick={() => setLit(true)}>
          🔥 Light
        </button>
      ) : !blown ? (
        <button className={styles.button} onClick={handleBlow}>
          💨 Blow
        </button>
      ) : (
        <p className={styles.done}>For you ❤️</p>
      )}

    </div>
  );
}
