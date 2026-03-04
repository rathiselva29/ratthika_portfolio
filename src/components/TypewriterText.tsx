import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const words = ["Frontend Developer", "Creative Designer"];

const TypewriterText = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length) {
            setTimeout(() => setDeleting(true), 1500);
          }
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length === 0) {
            setDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      deleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex]);

  return (
    <motion.span
      className="gradient-text"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      {text}
      <span className="animate-pulse text-primary">|</span>
    </motion.span>
  );
};

export default TypewriterText;
