import { ExternalLink } from "lucide-react";
import { StaggerContainer, FadeUp, TiltCard } from "../components/AnimationWrappers";

const articles = [
  {
    title: "Building Performant React Apps",
    excerpt: "Learn how to optimize your React applications for maximum performance with lazy loading, memoization, and code splitting.",
    date: "Mar 2026",
    readTime: "5 min",
  },
  {
    title: "The Art of CSS Animations",
    excerpt: "A deep dive into creating smooth, 60fps CSS animations that delight users without hurting performance.",
    date: "Feb 2026",
    readTime: "7 min",
  },
  {
    title: "Design Systems That Scale",
    excerpt: "How to build a design system with tokens, variants, and components that grows with your product.",
    date: "Jan 2026",
    readTime: "6 min",
  },
  {
    title: "TypeScript Best Practices",
    excerpt: "Patterns and practices that will make your TypeScript code more maintainable and type-safe.",
    date: "Dec 2025",
    readTime: "8 min",
  },
];

const Articles = () => (
  <section className="min-h-screen py-24 px-4">
    <div className="container mx-auto max-w-3xl">
      <StaggerContainer className="flex flex-col items-center mb-16">
        <FadeUp>
          <h1 className="section-title text-center">
            Featured <span className="gradient-text">Articles</span>
          </h1>
        </FadeUp>
        <FadeUp>
          <p className="section-subtitle text-center">
            Thoughts and tutorials on web development and design.
          </p>
        </FadeUp>
      </StaggerContainer>

      <StaggerContainer className="flex flex-col gap-5">
        {articles.map((article) => (
          <FadeUp key={article.title}>
            <TiltCard>
              <div className="glass-card-hover p-6 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.readTime} read</span>
                  </div>
                  <h3 className="text-lg font-bold mb-1">{article.title}</h3>
                  <p className="text-muted-foreground text-sm">{article.excerpt}</p>
                </div>
                <a href="#" className="glow-btn-outline text-sm px-4 py-2 inline-flex items-center gap-1.5 shrink-0">
                  Read More <ExternalLink size={14} />
                </a>
              </div>
            </TiltCard>
          </FadeUp>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

export default Articles;
