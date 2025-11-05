import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import ecommerceImg from "@assets/generated_images/E-commerce_website_project_355a7a09.png";
import restaurantImg from "@assets/generated_images/Restaurant_website_project_87bab071.png";
import corporateImg from "@assets/generated_images/Corporate_website_project_e1263427.png";
import mobileAppImg from "@assets/generated_images/Mobile_app_design_21a0a9a2.png";
import realEstateImg from "@assets/generated_images/Real_estate_website_27696a85.png";
import portfolioImg from "@assets/generated_images/Portfolio_website_design_3f792dad.png";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Modern shopping experience with seamless checkout and inventory management.",
    image: ecommerceImg,
    tags: ["React", "Node.js", "Stripe"],
  },
  {
    title: "Restaurant Reservation",
    category: "Web App",
    description: "Complete dining solution with online booking and menu management system.",
    image: restaurantImg,
    tags: ["UI/UX", "React", "Firebase"],
  },
  {
    title: "Corporate Website",
    category: "Web Development",
    description: "Professional business presence with CMS and analytics integration.",
    image: corporateImg,
    tags: ["WordPress", "SEO", "Analytics"],
  },
  {
    title: "Fitness Mobile App",
    category: "Mobile App",
    description: "Cross-platform fitness tracking with workout plans and progress monitoring.",
    image: mobileAppImg,
    tags: ["React Native", "API", "Design"],
  },
  {
    title: "Real Estate Portal",
    category: "Web Platform",
    description: "Property listing platform with advanced search and virtual tours.",
    image: realEstateImg,
    tags: ["Next.js", "Maps", "Database"],
  },
  {
    title: "Designer Portfolio",
    category: "Portfolio",
    description: "Stunning showcase for creative professionals with interactive galleries.",
    image: portfolioImg,
    tags: ["Design", "Animation", "CMS"],
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight" data-testid="heading-portfolio">
            Our Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our latest projects and see how we've helped businesses succeed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover-elevate active-elevate-2 transition-all duration-300"
              data-testid={`card-project-${index}`}
            >
              <div className="relative aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-primary/90 backdrop-blur-sm p-3 rounded-full">
                    <ExternalLink className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-xl font-semibold" data-testid={`text-project-title-${index}`}>
                    {project.title}
                  </h3>
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                <p className="text-sm text-foreground/70">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
