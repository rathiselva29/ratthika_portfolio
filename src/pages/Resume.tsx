import { Download, FileText } from "lucide-react";
import { StaggerContainer, FadeUp, TiltCard } from "../components/AnimationWrappers";

const Resume = () => (
  <section className="min-h-screen py-24 px-4">
    <div className="container mx-auto max-w-2xl">
      <StaggerContainer className="flex flex-col items-center mb-12">
        <FadeUp>
          <h1 className="section-title text-center">
            My <span className="gradient-text">Resume</span>
          </h1>
        </FadeUp>
        <FadeUp>
          <p className="section-subtitle text-center">
            Download my resume to learn more about my experience.
          </p>
        </FadeUp>
      </StaggerContainer>

      <FadeUp>
        <TiltCard>
          <div className="glass-card-hover p-10 text-center flex flex-col items-center gap-6">
            <div
              className="w-24 h-24 rounded-2xl flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, hsl(190 90% 50% / 0.15), hsl(270 60% 55% / 0.15))",
                border: "1px solid hsl(190 90% 50% / 0.3)",
              }}
            >
              <FileText size={40} className="text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Rathi's Resume</h3>
              <p className="text-muted-foreground">
                Frontend Developer & Creative Designer — 3+ years of experience building
                beautiful web applications.
              </p>
            </div>
            <div className="glass-card p-6 w-full text-left space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Experience</span>
                <span>3+ Years</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Specialization</span>
                <span>Frontend & UI</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Education</span>
                <span>Computer Science</span>
              </div>
            </div>
            <a
              href="/resume.pdf"
              download="Rathi_Resume.pdf"
              className="glow-btn inline-flex items-center gap-2 text-lg"
            >
              <Download size={20} /> Download Resume (PDF)
            </a>
          </div>
        </TiltCard>
      </FadeUp>
    </div>
  </section>
);

export default Resume;
