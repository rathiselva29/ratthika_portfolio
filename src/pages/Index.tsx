import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import TypewriterText from "../components/TypewriterText";
import SocialLinks from "../components/SocialLinks";
import { StaggerContainer, FadeUp } from "../components/AnimationWrappers";

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <StaggerContainer className="flex flex-col items-center gap-6">
            <FadeUp>
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-muted-foreground mb-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
              >
                <Sparkles size={14} className="text-primary" />
                Available for freelance work
              </motion.div>
            </FadeUp>

            <FadeUp>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="gradient-text">Rathi</span>
              </h1>
            </FadeUp>

            <FadeUp>
              <div className="text-2xl md:text-3xl font-medium h-10">
                <TypewriterText />
              </div>
            </FadeUp>

            <FadeUp>
              <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
                I craft beautiful, performant web experiences with modern technologies.
                Passionate about clean code, stunning UI, and bringing creative visions to life.
              </p>
            </FadeUp>

            <FadeUp>
              <div className="flex flex-wrap gap-4 justify-center mt-4">
                <Link to="/projects" className="glow-btn inline-flex items-center gap-2">
                  View Projects <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="glow-btn-outline inline-flex items-center gap-2">
                  Hire Me
                </Link>
              </div>
            </FadeUp>

            <FadeUp>
              <div className="mt-8">
                <SocialLinks />
              </div>
            </FadeUp>
          </StaggerContainer>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <StaggerContainer className="grid md:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <div>
                <h2 className="section-title">
                  About <span className="gradient-text">Me</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I'm a frontend developer and creative designer who loves turning complex problems
                  into simple, elegant solutions. With a keen eye for design and a passion for
                  performance, I build web experiences that users love.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "50+", label: "Projects" },
                    { value: "3+", label: "Years Exp" },
                    { value: "30+", label: "Happy Clients" },
                    { value: "100%", label: "Dedication" },
                  ].map((stat) => (
                    <div key={stat.label} className="glass-card p-4 text-center">
                      <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            <FadeUp>
              <div className="glass-card-hover p-8 text-center">
                <div className="w-32 h-32 mx-auto rounded-full mb-6 flex items-center justify-center text-5xl"
                  style={{
                    background: "linear-gradient(135deg, hsl(190 90% 50% / 0.2), hsl(270 60% 55% / 0.2))",
                    border: "2px solid hsl(190 90% 50% / 0.3)",
                  }}
                >
                  R
                </div>
                <h3 className="text-xl font-bold mb-1">Rathi</h3>
                <p className="text-primary text-sm font-medium">Frontend Developer & Creative Designer</p>
              </div>
            </FadeUp>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <StaggerContainer className="flex flex-col items-center gap-6">
            <FadeUp>
              <h2 className="text-3xl md:text-5xl font-bold">
                Let's Build Something{" "}
                <span className="gradient-text">Amazing</span> Together
              </h2>
            </FadeUp>
            <FadeUp>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="glow-btn inline-flex items-center gap-2 text-lg px-10 py-4"
                  style={{ animation: "pulse-glow 3s ease-in-out infinite" }}
                >
                  Contact Me <ArrowRight size={20} />
                </Link>
              </motion.div>
            </FadeUp>
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
};

export default Index;
