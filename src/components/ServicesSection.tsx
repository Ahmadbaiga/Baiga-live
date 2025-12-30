import { Card, CardContent } from "@/components/ui/card";
import { Code, Smartphone, Palette, Rocket, Database, Search } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites built with modern technologies, optimized for performance and user experience.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications that engage users and drive business growth.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces designed with your users in mind, backed by research and testing.",
  },
  {
    icon: Rocket,
    title: "Brand Strategy",
    description: "Comprehensive branding solutions that establish your unique identity in the digital space.",
  },
  {
    icon: Database,
    title: "Backend Solutions",
    description: "Scalable server architecture, APIs, and database design to power your applications.",
  },
  {
    icon: Search,
    title: "SEO & Marketing",
    description: "Strategic optimization and digital marketing to increase visibility and drive conversions.",
  },
];

export default function ServicesSection() {
  return (
    <section id="what-we-do" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight" data-testid="heading-services">
            What We Do
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="hover-elevate active-elevate-2 transition-all duration-300"
                data-testid={`card-service-${index}`}
              >
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold" data-testid={`text-service-title-${index}`}>
                    {service.title}
                  </h3>
                  <p className="text-base text-foreground/70 leading-relaxed">
                    {service.description}
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
