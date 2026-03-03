import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { StaggerContainer, FadeUp, TiltCard } from "../components/AnimationWrappers";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern shopping experience with cart, payments, and real-time inventory.",
    tech: ["React", "TypeScript", "Tailwind", "Stripe"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    github: "#",
    live: "#",
  },
  {
    title: "Dashboard Analytics",
    description: "Real-time analytics dashboard with interactive charts and data visualization.",
    tech: ["React", "D3.js", "Node.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    github: "#",
    live: "#",
  },
  {
    title: "Social Media App",
    description: "Full-stack social platform with posts, stories, and real-time messaging.",
    tech: ["React", "Firebase", "Tailwind", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    github: "#",
    live: "#",
  },
  {
    title: "Portfolio Generator",
    description: "AI-powered tool that generates stunning developer portfolios in minutes.",
    tech: ["Next.js", "OpenAI", "Prisma", "Vercel"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    github: "#",
    live: "#",
  },
  {
    title: "Weather Application",
    description: "Beautiful weather app with location-based forecasts and animations.",
    tech: ["React", "Weather API", "CSS Animations"],
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
    github: "#",
    live: "#",
  },
  {
    title: "Task Management",
    description: "Kanban-style project management tool with drag-and-drop functionality.",
    tech: ["React", "DnD Kit", "Supabase", "Tailwind"],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
    github: "#",
    live: "#",
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
