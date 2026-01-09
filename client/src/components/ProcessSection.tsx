import { useEffect, useRef, useState } from "react";
import { Lightbulb, Pencil, Code2, Rocket } from "lucide-react";

const processSteps = [
  {
    icon: Lightbulb,
    step: "01",
    title: "Discovery & Planning",
    description:
      "We dive deep into your business goals, audience, and challenges to create a clear strategic roadmap.",
  },
  {
    icon: Pencil,
    step: "02",
    title: "Design & Prototype",
    description:
      "We design intuitive, beautiful interfaces and interactive prototypes before a single line of code is written.",
  },
  {
    icon: Code2,
    step: "03",
    title: "Development & Testing",
    description:
      "Our engineers build scalable solutions with clean code, followed by thorough testing for performance and quality.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch & Support",
    description:
      "We launch confidently and stay with you post-launch for optimization, scaling, and long-term success.",
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            How We Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A streamlined, transparent process designed for results
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={index}
                  className={`reveal-step text-center ${
                    visible ? "visible" : ""
                  }`}
                  style={{ transitionDelay: `${index * 0.25}s` }}
                >
                  {/* Icon Circle */}
                  <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-lg">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Step Number */}
                  <div className="mb-3 text-primary font-bold tracking-widest">
                    {step.step}
                  </div>

                  {/* Content */}
                  <div className="p-6 rounded-2xl bg-card/60 backdrop-blur border border-border shadow-sm">
                    <h3 className="text-xl font-semibold mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
