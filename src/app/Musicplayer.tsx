"use client";

import { useEffect, useRef } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const playMusic = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.3;
        audioRef.current.play().catch(() => {});
      }
    };

    document.addEventListener("click", playMusic, { once: true });

    return () => {
      document.removeEventListener("click", playMusic);
    };
  }, []);

  return (
    <audio ref={audioRef} loop>
      <source src="/song.mp3" type="audio/mpeg" />
    </audio>
  );
}
