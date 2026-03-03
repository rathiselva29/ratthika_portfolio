import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { StaggerContainer, FadeUp, TiltCard } from "../components/AnimationWrappers";

const projects = [
  {
    title: "DevFlow — Project Manager",
    description: "A Kanban-style project management app with real-time collaboration, drag-and-drop boards, and team chat.",
    tech: ["React", "TypeScript", "Supabase", "DnD Kit"],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
    github: "https://github.com/rathi-dev/devflow",
    live: "https://devflow-app.vercel.app",
  },
  {
    title: "ShopSphere — E-Commerce",
    description: "Modern storefront with product search, cart, Stripe checkout, and order tracking dashboard.",
    tech: ["Next.js", "Stripe", "Tailwind", "Prisma"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    github: "https://github.com/rathi-dev/shopsphere",
    live: "https://shopsphere-demo.vercel.app",
  },
  {
    title: "Pulse — Analytics Dashboard",
    description: "Real-time metrics dashboard with interactive charts, CSV export, and dark/light themes.",
    tech: ["React", "Recharts", "Node.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    github: "https://github.com/rathi-dev/pulse-analytics",
    live: "https://pulse-analytics.vercel.app",
  },
  {
    title: "Clima — Weather App",
    description: "Location-based weather forecasts with animated weather icons, hourly/weekly views, and city search.",
    tech: ["React", "OpenWeather API", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
    github: "https://github.com/rathi-dev/clima",
    live: "https://clima-weather.vercel.app",
  },
  {
    title: "SnapGram — Social Platform",
    description: "Photo-sharing social app with stories, infinite scroll feed, likes, comments, and real-time notifications.",
    tech: ["React", "Firebase", "Tailwind", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    github: "https://github.com/rathi-dev/snapgram",
    live: "https://snapgram-social.vercel.app",
  },
  {
    title: "FolioGen — Portfolio Builder",
    description: "AI-powered tool that generates beautiful developer portfolios from a GitHub profile in minutes.",
    tech: ["Next.js", "OpenAI", "Prisma", "Vercel"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    github: "https://github.com/rathi-dev/foliogen",
    live: "https://foliogen.vercel.app",
  },
];

const Projects = () => (
  <section className="min-h-screen py-24 px-4">
    <div className="container mx-auto max-w-6xl">
      <StaggerContainer className="flex flex-col items-center mb-16">
        <FadeUp>
          <h1 className="section-title text-center">
            My <span className="gradient-text">Projects</span>
          </h1>
        </FadeUp>
        <FadeUp>
          <p className="section-subtitle text-center">
            A collection of projects that showcase my skills and passion for development.
          </p>
        </FadeUp>
      </StaggerContainer>

      <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <FadeUp key={project.title}>
            <TiltCard className="glass-card-hover overflow-hidden h-full flex flex-col">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full border border-primary/30 text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={project.github} className="glow-btn-outline text-sm px-4 py-2 inline-flex items-center gap-1.5">
                    <Github size={14} /> Code
                  </a>
                  <a href={project.live} className="glow-btn text-sm px-4 py-2 inline-flex items-center gap-1.5">
                    <ExternalLink size={14} /> Demo
                  </a>
                </div>
              </div>
            </TiltCard>
          </FadeUp>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

export default Projects;
