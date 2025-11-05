import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    if (location !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "What we do", id: "what-we-do" },
    { label: "Portfolio", id: "portfolio" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center gap-2 hover-elevate active-elevate-2 rounded-md px-3 py-2 -ml-3">
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                WebWrite
              </div>
              <span className="text-sm text-muted-foreground">Inc.</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground/80 hover:text-foreground transition-colors text-sm font-medium hover-elevate active-elevate-2 px-3 py-2 rounded-md"
                data-testid={`button-nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
            <Link href="/gallery" data-testid="link-gallery">
              <span className="text-foreground/80 hover:text-foreground transition-colors text-sm font-medium hover-elevate active-elevate-2 px-3 py-2 rounded-md inline-block">
                Gallery
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild data-testid="button-call">
              <a href="tel:+923002671919">
                <Phone className="w-4 h-4 mr-2" />
                Call Us
              </a>
            </Button>
            <Button variant="default" size="sm" asChild data-testid="button-quote">
              <a href="mailto:info@webwrite.co">
                <Mail className="w-4 h-4 mr-2" />
                Get a Quote
              </a>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border/50 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-3 py-2 text-foreground/80 hover:text-foreground hover-elevate active-elevate-2 rounded-md"
                data-testid={`button-mobile-nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
            <Link href="/gallery" onClick={() => setMobileMenuOpen(false)}>
              <span className="block w-full text-left px-3 py-2 text-foreground/80 hover:text-foreground hover-elevate active-elevate-2 rounded-md">
                Gallery
              </span>
            </Link>
            <div className="pt-3 space-y-2 flex flex-col gap-2">
              <Button variant="ghost" className="w-full justify-start" asChild>
                <a href="tel:+923002671919">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Us
                </a>
              </Button>
              <Button variant="default" className="w-full justify-start" asChild>
                <a href="mailto:info@webwrite.co">
                  <Mail className="w-4 h-4 mr-2" />
                  Get a Quote
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
