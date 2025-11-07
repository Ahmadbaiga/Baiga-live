import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";
import heroBackground from "@assets/generated_images/Dark_tech_hero_background_04523369.png";
import QuoteFormDialog from "./QuoteFormDialog";

export default function HeroSection() {
  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 animate-slow-zoom"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-32 text-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
              Transforming Ideas Into
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Digital Excellence
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            We craft stunning websites and applications that drive results. 
            From concept to launch, we bring your vision to life with cutting-edge technology.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              variant="default" 
              className="text-lg px-8 py-6 min-h-12"
              onClick={() => setQuoteDialogOpen(true)}
              data-testid="button-hero-quote"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get a Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 min-h-12 bg-background/20 backdrop-blur-sm"
              asChild
              data-testid="button-hero-call"
            >
              <a href="tel:+923002671919">
                <Phone className="w-5 h-5 mr-2" />
                Call Us
              </a>
            </Button>
          </div>

          <div className="pt-8">
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>100+ Projects Delivered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>50+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>5+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-2 bg-foreground/40 rounded-full" />
        </div>
      </div>

      <QuoteFormDialog open={quoteDialogOpen} onOpenChange={setQuoteDialogOpen} />
    </section>
  );
}
