import { useState } from "react";
import { Code, Smartphone, Palette, Rocket, Database, Search } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Code,
    title: "Web Development",
    short: "High-performance, scalable websites.",
    details: [
      "Custom React & Next.js builds",
      "Performance optimization",
      "SEO-friendly architecture",
      "Long-term maintenance",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    short: "Native & cross-platform apps.",
    details: [
      "iOS & Android development",
      "React Native & Flutter",
      "App Store deployment",
      "Ongoing support",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    short: "Designs that convert.",
    details: [
      "User research & testing",
      "Wireframes & prototypes",
      "Design systems",
      "Conversion optimization",
    ],
  },
  {
    icon: Rocket,
    title: "AI Chat Bots",
    short: "Smart automation with AI.",
    details: [
      "OpenAI-powered bots",
      "Custom workflows",
      "CRM integrations",
      "24/7 automation",
    ],
  },
  {
    icon: Database,
    title: "Backend Solutions",
    short: "Secure & scalable backends.",
    details: [
      "API development",
      "Cloud hosting",
      "High availability",
      "Security-first design",
    ],
  },
  {
    icon: Search,
    title: "SEO & Marketing",
    short: "Visibility that converts.",
    details: [
      "On-page SEO",
      "Technical audits",
      "Content strategy",
      "Analytics & tracking",
    ],
  },
];

function ServiceFlipCard({ service }: any) {
  const [flipped, setFlipped] = useState(false);
  const Icon = service.icon;

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => setFlipped(!flipped)}
      onKeyDown={(e) => e.key === "Enter" && setFlipped(!flipped)}
      className="relative h-[260px] cursor-pointer perspective"
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* FRONT */}
        <Card className="absolute inset-0 backface-hidden p-8 flex flex-col gap-4">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold">{service.title}</h3>
          <p className="text-sm text-foreground/70">{service.short}</p>
          <span className="mt-auto text-sm text-primary opacity-70">
            Click to explore →
          </span>
        </Card>

        {/* BACK */}
        <Card className="absolute inset-0 backface-hidden rotate-y-180 p-8 flex flex-col">
          <h3 className="text-lg font-semibold mb-4">{service.title}</h3>
          <ul className="space-y-2 text-sm text-foreground/80">
            {service.details.map((item: string, i: number) => (
              <li key={i} className="flex gap-2">
                <span className="text-primary">•</span>
                {item}
              </li>
            ))}
          </ul>
          <span className="mt-auto pt-4 text-sm text-primary opacity-70">
            Click to go back ↺
          </span>
        </Card>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section id="what-we-do" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">What We Do</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful digital services designed to scale your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceFlipCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
