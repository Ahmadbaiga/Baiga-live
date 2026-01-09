import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    content:
      "WebWrite transformed our outdated website into a modern, high-performing platform. The team's attention to detail and technical expertise exceeded our expectations.",
    rating: 5,
    initials: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Founder, FreshMart",
    content:
      "Our e-commerce sales increased by 200% after WebWrite redesigned our online store. Their UX expertise made shopping seamless for our customers.",
    rating: 5,
    initials: "MC",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, HealthPlus",
    content:
      "Professional, creative, and reliable. WebWrite delivered our healthcare portal on time and within budget. Highly recommend their services!",
    rating: 5,
    initials: "ER",
  },
  {
    name: "David Thompson",
    role: "Owner, Elite Fitness",
    content:
      "The mobile app they developed for our gym has been a game-changer. Member engagement is through the roof, and the admin panel makes management effortless.",
    rating: 5,
    initials: "DT",
  },
  {
    name: "Lisa Anderson",
    role: "Creative Director, Studio49",
    content:
      "WebWrite brought our creative vision to life with pixel-perfect precision. Their design aesthetic perfectly matches our brand identity.",
    rating: 5,
    initials: "LA",
  },
  {
    name: "James Wilson",
    role: "VP Operations, LogiTech",
    content:
      "Exceptional service from start to finish. The team was responsive, innovative, and delivered a solution that streamlined our entire workflow.",
    rating: 5,
    initials: "JW",
  },
];

export default function TestimonialsSection() {
  // Duplicate for seamless loop
  const carouselItems = [...testimonials, ...testimonials];

  return (
    <section className="py-24 md:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real feedback from businesses we've helped grow
          </p>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex gap-8 animate-testimonials">
            {carouselItems.map((testimonial, index) => (
              <div
                key={index}
                className="min-w-[100%] md:min-w-[50%] lg:min-w-[33.3333%]"
              >
                <Card className="h-full hover-elevate transition-all duration-300">
                  <CardContent className="p-8 space-y-4">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-primary text-primary"
                        />
                      ))}
                    </div>

                    <p className="text-foreground/80 leading-relaxed italic">
                      "{testimonial.content}"
                    </p>

                    <div className="flex items-center gap-3 pt-4 border-t border-border">
                      <Avatar>
                        <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
