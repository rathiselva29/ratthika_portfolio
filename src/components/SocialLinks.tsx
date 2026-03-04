import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/ratthika-s29", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/ratthika-dev", label: "GitHub" },
  { icon: Instagram, href: "https://www.instagram.com/ratthika.codes", label: "Instagram" },
];

const SocialLinks = () => (
  <div className="flex gap-3">
    {socials.map((s, i) => (
      <motion.a
        key={s.label}
        href={s.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={s.label}
        className="social-icon"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
        whileHover={{ rotate: 10 }}
      >
        <s.icon size={20} />
      </motion.a>
    ))}
  </div>
);

export default SocialLinks;
