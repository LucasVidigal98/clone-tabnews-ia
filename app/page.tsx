"use client";

import { useEffect, useState } from "react";
import Confetti from "react-confetti";

type WindowSize = {
  width: number;
  height: number;
};

export default function Home() {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateWindowSize();
    window.addEventListener("resize", updateWindowSize);

    return () => window.removeEventListener("resize", updateWindowSize);
  }, []);

  return (
    <main className="construction-page">
      <Confetti
        aria-hidden="true"
        colors={["#ffcf56", "#ff6b8a", "#5eead4", "#a78bfa", "#f8fafc"]}
        gravity={0.16}
        height={windowSize.height}
        numberOfPieces={220}
        recycle
        style={{ pointerEvents: "none" }}
        width={windowSize.width}
      />

      <div className="construction-glow" aria-hidden="true" />

      <section className="construction-card" aria-labelledby="construction-title">
        <div className="construction-badge">
          <span className="construction-badge-dot" aria-hidden="true" />
          Em construção
        </div>

        <p className="construction-kicker">Uma nova experiência está chegando</p>
        <h1 id="construction-title">Construindo o Tabnews-ia.</h1>
        <p className="construction-description">
          Estamos preparando tudo com cuidado. Em breve, o Tabnews-ia estará
          pronto para você.
        </p>
      </section>
    </main>
  );
}
