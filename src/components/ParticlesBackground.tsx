import { useCallback, useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";
import { initParticlesEngine } from "@tsparticles/react";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: { enable: false },
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            resize: { enable: true },
          },
          modes: {
            grab: { distance: 150, links: { opacity: 0.4 } },
          },
        },
        particles: {
          color: { value: ["#00d4ff", "#8b5cf6"] },
          links: {
            color: "#00d4ff",
            distance: 130,
            enable: true,
            opacity: 0.12,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.8,
            direction: "none",
            outModes: { default: "out" },
          },
          number: {
            density: { enable: true },
            value: 60,
          },
          opacity: { value: { min: 0.1, max: 0.4 } },
          size: { value: { min: 1, max: 2.5 } },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 z-0"
    />
  );
};

export default ParticlesBackground;
