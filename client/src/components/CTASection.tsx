import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, ArrowRight } from "lucide-react";
import QuoteFormDialog from "./QuoteFormDialog";

export default function CTASection() {
  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false);

  return (
    <>
    <section className="py-24 md:py-32 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
      <div className="max-w-5xl mx-auto px-4 md:px-6 text-center">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight" data-testid="heading-cta">
            Ready to Transform Your
            <br />
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Digital Presence?
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Let's collaborate to create something extraordinary. Get in touch today and let's discuss how we can help your business grow.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              variant="default" 
              className="text-lg px-8 py-6 min-h-12"
              onClick={() => setQuoteDialogOpen(true)}
              data-testid="button-cta-quote"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get a Free Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 min-h-12"
              asChild
              data-testid="button-cta-call"
            >
              <a href="tel:+923002671919">
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now
              </a>
            </Button>
          </div>

          <div className="pt-8">
            <p className="text-sm text-muted-foreground">
              Average response time: Less than 24 hours
            </p>
          </div>
        </div>
      </div>

      <QuoteFormDialog open={quoteDialogOpen} onOpenChange={setQuoteDialogOpen} />
    </section>
    </>
  );
}
