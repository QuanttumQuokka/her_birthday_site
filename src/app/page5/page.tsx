"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Page5() {
  const [decorated, setDecorated] = useState(false);
  const router = useRouter();

  return (
    <div className={styles.container}>

      {/* 🎂 CAKE */}
      <div className={styles.cakeWrapper}>
        <img src="/cake.png" alt="cake" className={styles.cake} />
      </div>

      {/* BUTTON CHANGE */}
      {!decorated ? (
        <button
          className={styles.button}
          onClick={() => setDecorated(true)}
        >
          ✨ Decorate
        </button>
      ) : (
        <button
          className={styles.button}
          onClick={() => router.push("/page6")}
        >
          🎂 Add Candles →
        </button>
      )}

      {/* 🎉 DECORATION */}
      {decorated && (
        <>
          <div className={styles.flags}></div>

          <div className={styles.balloons}>
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className={styles.balloon}
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDuration: `${5 + Math.random() * 5}s`,
                }}
              >
                <div className={styles.string}></div>
              </div>
            ))}
          </div>

          <div className={styles.hearts}>
            {[...Array(25)].map((_, i) => (
              <span
                key={i}
                className={styles.heart}
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDuration: `${5 + Math.random() * 5}s`,
                }}
              >
                ❤️
              </span>
            ))}
          </div>

          <div className={styles.leftRibbon}></div>
          <div className={styles.rightRibbon}></div>
        </>
      )}

    </div>
  );
}
