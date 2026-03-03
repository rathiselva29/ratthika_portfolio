import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { StaggerContainer, FadeUp } from "../components/AnimationWrappers";

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 88 },
  { name: "React", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "UI Design", level: 85 },
  { name: "Canva", level: 90 },
  { name: "Tailwind CSS", level: 92 },
];

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="glass-card p-5">
      <div className="flex justify-between mb-3">
        <span className="font-medium">{name}</span>
        <motion.span
          className="text-primary font-mono text-sm"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          {inView && (
            <Counter target={level} />
          )}
          %
        </motion.span>
      </div>
      <div className="skill-bar-bg">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        />
      </div>
    </div>
  );
};

// Simple counter - just shows the target value
const Counter = ({ target }: { target: number }) => {
  return <span>{target}</span>;
};

const Skills = () => (
  <section className="min-h-screen py-24 px-4">
    <div className="container mx-auto max-w-3xl">
      <StaggerContainer className="flex flex-col items-center mb-16">
        <FadeUp>
          <h1 className="section-title text-center">
            My <span className="gradient-text">Skills</span>
          </h1>
        </FadeUp>
        <FadeUp>
          <p className="section-subtitle text-center">
            Technologies and tools I use to bring ideas to life.
          </p>
        </FadeUp>
      </StaggerContainer>

      <StaggerContainer className="grid gap-4">
        {skills.map((skill) => (
          <FadeUp key={skill.name}>
            <SkillBar name={skill.name} level={skill.level} />
          </FadeUp>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

export default Skills;
