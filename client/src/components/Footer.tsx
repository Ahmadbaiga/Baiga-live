import { Link } from "wouter";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImg from "/generated_images/WebWrite_company_logo_76cb5f75.png";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/generated_images/baiga-logo.png" alt="WebWrite Logo" className="w-10 h-10" />
              <div className="flex items-center gap-2">
                <div className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  BAIGA
                </div>
                <span className="text-sm text-muted-foreground">Inc.</span>
              </div>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Transforming ideas into digital excellence. We create stunning web experiences that drive results.
            </p>
            <div className="flex gap-3 pt-2">
              <Button variant="ghost" size="icon" className="hover-elevate active-elevate-2" data-testid="button-facebook">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover-elevate active-elevate-2" data-testid="button-twitter">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover-elevate active-elevate-2" data-testid="button-linkedin">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover-elevate active-elevate-2" data-testid="button-instagram">
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <span className="text-sm text-foreground/70 hover:text-foreground transition-colors hover-elevate active-elevate-2 inline-block px-2 py-1 -ml-2 rounded-md">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("what-we-do")}
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors hover-elevate active-elevate-2 px-2 py-1 -ml-2 rounded-md"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("portfolio")}
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors hover-elevate active-elevate-2 px-2 py-1 -ml-2 rounded-md"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <Link href="/gallery">
                  <span className="text-sm text-foreground/70 hover:text-foreground transition-colors hover-elevate active-elevate-2 inline-block px-2 py-1 -ml-2 rounded-md">
                    Gallery
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>UI/UX Design</li>
              <li>Brand Strategy</li>
              <li>SEO & Marketing</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-foreground/70">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@webwrite.co" className="hover:text-foreground transition-colors">
                  info@joinbaiga.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-foreground/70">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="tel:+923002671919" className="hover:text-foreground transition-colors">
                  +92 324 4557376
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Islamabad, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-card-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Baiga. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
