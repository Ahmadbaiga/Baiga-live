import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import ecommerceImg from "/generated_images/E-commerce_website_project_355a7a09.png";
import restaurantImg from "/generated_images/Restaurant_website_project_87bab071.png";
import corporateImg from "/generated_images/Corporate_website_project_e1263427.png";
import mobileAppImg from "/generated_images/Mobile_app_design_21a0a9a2.png";
import realEstateImg from "/generated_images/Real_estate_website_27696a85.png";
import portfolioImg from "/generated_images/Portfolio_website_design_3f792dad.png";
import fashionImg from "/generated_images/Fashion_website_design_b0f42f6c.png";
import healthcareImg from "/generated_images/Healthcare_website_project_df2ac2ec.png";
import fitnessImg from "/generated_images/Fitness_website_design_a49165d1.png";
import heroBackground from "/generated_images/Dark_tech_hero_background_04523369.png";

const galleryImages = [
  { id: 1, src: ecommerceImg, category: "Web Design", title: "E-Commerce Platform" },
  { id: 2, src: restaurantImg, category: "Web Design", title: "Restaurant Website" },
  { id: 3, src: corporateImg, category: "Branding", title: "Corporate Identity" },
  { id: 4, src: mobileAppImg, category: "UI/UX", title: "Mobile App Design" },
  { id: 5, src: realEstateImg, category: "Web Design", title: "Real Estate Portal" },
  { id: 6, src: portfolioImg, category: "UI/UX", title: "Designer Portfolio" },
  { id: 7, src: fashionImg, category: "Web Design", title: "Fashion E-Commerce" },
  { id: 8, src: healthcareImg, category: "Web Design", title: "Healthcare Platform" },
  { id: 9, src: fitnessImg, category: "UI/UX", title: "Fitness App" },
  { id: 10, src: heroBackground, category: "Branding", title: "Tech Background" },
];

const categories = ["All", "Web Design", "UI/UX", "Branding"];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = selectedCategory === "All"
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-16">
        <div className="py-16 md:py-24 bg-gradient-to-b from-card/50 to-background">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight" data-testid="heading-gallery">
                Our Gallery
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Browse through our collection of stunning designs and successful projects
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  data-testid={`button-filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {category}
                </Button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image) => (
                <Card
                  key={image.id}
                  className="overflow-hidden group hover-elevate active-elevate-2 transition-all duration-300 cursor-pointer"
                  onClick={() => setLightboxImage(image)}
                  data-testid={`card-gallery-${image.id}`}
                >
                  <div className="relative aspect-video overflow-hidden bg-muted">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div>
                        <p className="text-sm text-primary font-medium">{image.category}</p>
                        <h3 className="text-lg font-semibold">{image.title}</h3>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-10"
            onClick={() => setLightboxImage(null)}
            data-testid="button-close-lightbox"
          >
            <X className="w-6 h-6" />
          </Button>
          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightboxImage.src}
              alt={lightboxImage.title}
              className="w-full h-auto rounded-lg"
            />
            <div className="mt-4 text-center">
              <p className="text-sm text-primary font-medium">{lightboxImage.category}</p>
              <h3 className="text-2xl font-semibold">{lightboxImage.title}</h3>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
