import { useEffect, useRef } from "react";
import showcase1 from "@/assets/showcase-1.jpg";
import showcase2 from "@/assets/showcase-2.jpg";
import showcase3 from "@/assets/showcase-3.jpg";
import showcase4 from "@/assets/showcase-4.jpg";

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".fade-element");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      elements.forEach((el) => observerRef.current?.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="container mx-auto px-6 py-16 md:py-24 text-center fade-element">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
          Creative Showcase
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          A curated collection of modern design and innovative ideas
        </p>
      </header>

      {/* Main Content Sections */}
      <main className="container mx-auto px-6 pb-16">
        {/* Section 1 - Image Left */}
        <section className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-20 md:mb-32 fade-element">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={showcase1}
              alt="Modern design showcase"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-accent">
              Modern Design
            </h2>
            <p className="text-foreground/80 text-lg leading-relaxed">
              Clean aesthetics meet functional beauty. Every element is crafted with attention to detail and purpose.
            </p>
          </div>
        </section>

        {/* Section 2 - Image Right */}
        <section className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-20 md:mb-32 fade-element">
          <div className="space-y-4 md:order-1">
            <h2 className="text-3xl md:text-4xl font-semibold text-accent">
              Innovative Ideas
            </h2>
            <p className="text-foreground/80 text-lg leading-relaxed">
              Pushing boundaries with creative solutions. Innovation meets simplicity in every project we showcase.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg md:order-2">
            <img
              src={showcase2}
              alt="Innovative design concepts"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Section 3 - Image Left */}
        <section className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-20 md:mb-32 fade-element">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={showcase3}
              alt="Creative solutions"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-accent">
              Creative Solutions
            </h2>
            <p className="text-foreground/80 text-lg leading-relaxed">
              Thoughtful approaches to complex challenges. Creativity and strategy working in perfect harmony.
            </p>
          </div>
        </section>

        {/* Section 4 - Image Right */}
        <section className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-20 fade-element">
          <div className="space-y-4 md:order-1">
            <h2 className="text-3xl md:text-4xl font-semibold text-accent">
              Elegant Execution
            </h2>
            <p className="text-foreground/80 text-lg leading-relaxed">
              Every detail matters. From concept to completion, excellence is our standard.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg md:order-2">
            <img
              src={showcase4}
              alt="Excellence in execution"
              className="w-full h-full object-cover"
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center fade-element">
        <p className="text-muted-foreground">
          © Showcase 2025
        </p>
      </footer>
    </div>
  );
};

export default Index;
