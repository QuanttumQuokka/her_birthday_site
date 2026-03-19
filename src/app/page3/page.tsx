"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

const emojis = ["💖","💕","💘","💓","💗","💞"];

export default function Page3() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <div className={styles.container}>

      {/* FALLING HEARTS */}
      <div className={styles.hearts}>
        {Array.from({ length: 30 }).map((_, i) => {
          const left = Math.random() * 100;
          const duration = 5 + Math.random() * 5;
          const size = 16 + Math.random() * 10;
          const emoji = emojis[Math.floor(Math.random() * emojis.length)];

          return (
            <span
              key={i}
              className={styles.heart}
              style={{
                left: `${left}%`,
                animationDuration: `${duration}s`,
                fontSize: `${size}px`,
              }}
            >
              {emoji}
            </span>
          );
        })}
      </div>

      {/* ENVELOPE */}
      {!open && (
        <div className={styles.wrapper} onClick={() => setOpen(true)}>
          <div className={styles.envelope}>
            <div className={styles.flap}></div>
            <div className={styles.circle}>💌</div>
          </div>
          <p className={styles.text}>Tap to read letter</p>
        </div>
      )}

      {/* LETTER */}
      {open && (
        <div className={styles.letter}>
          <h2>For You ❤️</h2>

          <p>
            Happy Birthday my love 💖 <br /><br />
            You are the most beautiful part of my life.  
            Every moment with you feels magical.  
            I made this little surprise just for you 😌  
            <br /><br />
            Stay happy, keep smiling, and always be mine ❤️
          </p>

          <button onClick={() => router.push("/page4")}>
            Continue →
          </button>
        </div>
      )}
    </div>
  );
}
