import { Github, ExternalLink } from "lucide-react";
import { StaggerContainer, FadeUp, TiltCard } from "../components/AnimationWrappers";

const profiles = [
  {
    name: "GitHub",
    icon: Github,
    description: "Open source contributions and personal projects.",
    url: "#",
    username: "@rathi",
  },
  {
    name: "LeetCode",
    icon: ExternalLink,
    description: "Problem solving and competitive programming.",
    url: "#",
    username: "rathi",
  },
  {
    name: "SkillRack",
    icon: ExternalLink,
    description: "Coding challenges and certifications.",
    url: "#",
    username: "rathi",
  },
  {
    name: "LinkedIn",
    icon: ExternalLink,
    description: "Professional network and career updates.",
    url: "#",
    username: "Rathi",
  },
];

const CodingProfiles = () => (
  <section className="min-h-screen py-24 px-4">
    <div className="container mx-auto max-w-3xl">
      <StaggerContainer className="flex flex-col items-center mb-16">
        <FadeUp>
          <h1 className="section-title text-center">
            Coding <span className="gradient-text">Profiles</span>
          </h1>
        </FadeUp>
        <FadeUp>
          <p className="section-subtitle text-center">
            Find me on these platforms where I code, learn, and share.
          </p>
        </FadeUp>
      </StaggerContainer>

      <StaggerContainer className="grid sm:grid-cols-2 gap-5">
        {profiles.map((profile) => (
          <FadeUp key={profile.name}>
            <TiltCard>
              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card-hover p-6 flex flex-col gap-3 h-full block"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, hsl(190 90% 50% / 0.15), hsl(270 60% 55% / 0.15))",
                    }}
                  >
                    <profile.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">{profile.name}</h3>
                    <span className="text-xs text-muted-foreground font-mono">{profile.username}</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">{profile.description}</p>
              </a>
            </TiltCard>
          </FadeUp>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

export default CodingProfiles;
