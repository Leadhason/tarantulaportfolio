import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const FONT_WEIGHTS = {
  title: { min: 400, max: 900, default: 400 },
  subtitle: { min: 100, max: 400, default: 100 },
};

const setuptextHover = (container, type) => {
  if (!container) return () => {};

  const letters = container.querySelectorAll("span");
  const { min, max, default: base } = FONT_WEIGHTS[type];

  let containerLeft = 0;
  let letterMetrics = [];

  const updateMetrics = () => {
    const rect = container.getBoundingClientRect();
    containerLeft = rect.left;

    letterMetrics = Array.from(letters).map((letter) => {
      const { left, width } = letter.getBoundingClientRect();
      return {
        element: letter,
        centerX: left - containerLeft + width / 2,
      };
    });
  };

  // Initial calculation
  updateMetrics();

  const animateLetter = (letter, weight, duration = 0.5) => {
    return gsap.to(letter, {
      duration,
      ease: "power2.out",
      fontVariationSettings: `'wght' ${weight}`,
    });
  };

  const handleMouseMove = (e) => {
    const MouseX = e.clientX - containerLeft;

    letterMetrics.forEach(({ element, centerX }) => {
      const distance = Math.abs(MouseX - centerX);
      const intensity = Math.exp(-(distance ** 2) / 2000);

      animateLetter(element, min + (max - min) * intensity);
    });
  };

  const handleMouseLeave = () => {
    letters.forEach((letter) => animateLetter(letter, base));
  };

  const handleResize = () => {
    updateMetrics();
  };

  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseleave", handleMouseLeave);
  window.addEventListener("resize", handleResize);

  return () => {
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseleave", handleMouseLeave);
    window.removeEventListener("resize", handleResize);
  };
};

const renderText = (text, className, baseWeight = 400) => {
  return [...text].map((char, i) => (
    <span
      key={i}
      className={className}
      style={{ fontVariationSettings: `'wght' ${baseWeight}` }}
      aria-hidden="true"
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));
};

const Welcome = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  useGSAP(() => {
    const cleanTitle = setuptextHover(titleRef.current, "title");
    const cleanSubtitle = setuptextHover(subtitleRef.current, "subtitle");

    return () => {
      if (cleanTitle) cleanTitle();
      if (cleanSubtitle) cleanSubtitle();
    };
  });

  return (
    <section id="welcome">
      <p ref={subtitleRef} aria-label="Hey I'm Leadhason. Welcome to my">
        {renderText(
          "Hey I'm Leadhason. Welcome to my",
          "text-3xl font-georama",
          100
        )}
      </p>
      <h1 ref={titleRef} className="mt-7" aria-label="Portfolio">
        {renderText("Portfolio", "text-9xl italic font-georama")}
      </h1>

      <div className="small-screen">
        <p>This portfolio is designed for desktop/tablet screens only.</p>
      </div>
    </section>
  );
};

export default Welcome;
