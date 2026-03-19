"use client";

import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Page1() {
  const router = useRouter();

  const handleClick = () => {
    setTimeout(() => {
      router.push("/page2");
    }, 500);
  };

  return (
    <div className={styles.container}>
      
      {/* Floating Hearts */}
      <div className={styles.heart1}>❤️</div>
      <div className={styles.heart2}>❤️</div>

      {/* Card */}
      <div className={styles.card}>
        <div className={styles.tape}></div>

        <img src="/gift.png" alt="gift" className={styles.gift} />
        
        <h1 className={styles.title}>Hey Cutiepie</h1>

        <p className={styles.text}>
          This birthday, I made a little something special for you.
        </p>

        <button onClick={handleClick} className={styles.button}>
          Open it
        </button>
      </div>
    </div>
  );
}
