"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Page4() {
  const [level, setLevel] = useState(0);
  const [watering, setWatering] = useState(false);
  const [showRose, setShowRose] = useState(false);
  const router = useRouter();

  const handleWater = () => {
    if (level < 3) {
      setWatering(true);

      setTimeout(() => {
        setLevel((prev) => prev + 1);
        setWatering(false);
      }, 500);
    }
  };

  useEffect(() => {
    if (level === 3) {
      setTimeout(() => setShowRose(true), 800);
      setTimeout(() => router.push("/page5"), 4000);
    }
  }, [level, router]);

  return (
    <div className={styles.container}>

      <h1 className={styles.title}>
        {level === 0 && "Let's plant this seed!"}
        {level === 1 && "It's growing! Keep watering..."}
        {level === 2 && "Almost there..."}
        {level === 3 && "It's ready to bloom!"}
      </h1>

      <p className={styles.subtitle}>
        Tap the button to sprinkle water
      </p>

      {/* 🌱 PLANT */}
      <div className={styles.plantArea}>
        <div className={styles.pot}></div>

        <div
          className={styles.stem}
          style={{ height: `${level * 60}px` }}
        ></div>

        {level >= 2 && <div className={styles.leafLeft}></div>}
        {level >= 2 && <div className={styles.leafRight}></div>}

        {watering && <div className={styles.drops}>💧💧💧</div>}
      </div>

      {/* 💧 BUTTON */}
      {level < 3 && (
        <button className={styles.button} onClick={handleWater}>
          💧
        </button>
      )}

      {/* 📊 PROGRESS */}
      <div className={styles.progress}>
        <div
          className={styles.fill}
          style={{ width: `${(level / 3) * 100}%` }}
        ></div>
      </div>

      {/* 🌸 ROSE POPUP */}
      {showRose && (
        <div className={styles.overlay}>

          <div className={styles.roseWrapper}>
            <svg viewBox="0 0 200 200" className={styles.rose}>

              {/* petals */}
              <ellipse cx="100" cy="70" rx="40" ry="50" fill="#ff4d6d"/>
              <ellipse cx="60" cy="80" rx="35" ry="45" fill="#ff6f91"/>
              <ellipse cx="140" cy="80" rx="35" ry="45" fill="#ff6f91"/>

              {/* inner */}
              <ellipse cx="100" cy="80" rx="20" ry="30" fill="#ff85a2"/>

              {/* stem */}
              <rect x="95" y="110" width="10" height="70" fill="#1db954"/>

              {/* leaves */}
              <ellipse cx="70" cy="130" rx="25" ry="12" fill="#2ecc71"/>
              <ellipse cx="130" cy="140" rx="25" ry="12" fill="#2ecc71"/>

            </svg>
          </div>

          <h2 className={styles.popupText}>
            Ye lijiye sirf aapke liye malkin ji 💖
          </h2>

        </div>
      )}
    </div>
  );
}
