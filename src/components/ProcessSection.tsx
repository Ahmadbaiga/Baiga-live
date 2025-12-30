import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Pencil, Code2, Rocket } from "lucide-react";

const processSteps = [
  {
    icon: Lightbulb,
    step: "01",
    title: "Discovery & Planning",
    description: "We start by understanding your business goals, target audience, and project requirements through detailed consultations.",
  },
  {
    icon: Pencil,
    step: "02",
    title: "Design & Prototype",
    description: "Our designers create stunning mockups and interactive prototypes to visualize your project before development begins.",
  },
  {
    icon: Code2,
    step: "03",
    title: "Development & Testing",
    description: "Expert developers bring designs to life with clean code, followed by rigorous testing to ensure quality and performance.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch & Support",
    description: "We deploy your project and provide ongoing support, maintenance, and optimization to ensure continued success.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight" data-testid="heading-process">
            How We Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our proven process ensures successful project delivery every time
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card 
                key={index} 
                className="relative overflow-visible hover-elevate active-elevate-2 transition-all duration-300"
                data-testid={`card-process-${index}`}
              >
                <div className="absolute -top-4 left-6 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {step.step}
                </div>
                <CardContent className="p-8 pt-12 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold" data-testid={`text-process-title-${index}`}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
