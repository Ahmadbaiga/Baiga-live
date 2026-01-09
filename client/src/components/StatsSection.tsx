import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Award, Briefcase } from "lucide-react";
import Counter from "@/components/Counter";

const stats = [
  {
    icon: Briefcase,
    value: 150,
    suffix: "+",
    label: "Projects Completed",
    description: "Successfully delivered projects across industries",
  },
  {
    icon: Users,
    value: 80,
    suffix: "+",
    label: "Happy Clients",
    description: "Businesses trusting us with their digital presence",
  },
  {
    icon: Award,
    value: 25,
    suffix: "+",
    label: "Awards Won",
    description: "Recognition for design and development excellence",
  },
  {
    icon: TrendingUp,
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Positive feedback from our valued clients",
  },
];

export default function StatsSection() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold tracking-tight"
            data-testid="heading-stats"
          >
            Our Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Numbers that speak for our commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="text-center hover-elevate active-elevate-2 transition-all duration-300"
                data-testid={`card-stat-${index}`}
              >
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>

                  <div className="space-y-2">
                    <div
                      className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
                      data-testid={`text-stat-value-${index}`}
                    >
                      <Counter end={stat.value} suffix={stat.suffix} />
                    </div>

                    <h3 className="text-lg font-semibold">
                      {stat.label}
                    </h3>

                    <p className="text-sm text-foreground/70">
                      {stat.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
