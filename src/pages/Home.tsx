import { Camera, Users, Award, Heart } from "lucide-react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  const services = [
    {
      title: "Portrait Photography",
      description: "Professional headshots and personal portraits that capture your unique essence and personality.",
      Icon: Users,
      features: ["Studio & Outdoor Sessions", "Professional Lighting", "Retouching Included", "Multiple Outfits"]
    },
    {
      title: "Event Photography",
      description: "Comprehensive coverage of your special moments, from weddings to corporate events.",
      Icon: Camera,
      features: ["Full Day Coverage", "Multiple Photographers", "Online Gallery", "Print Options"]
    },
    {
      title: "Artistic Compositions",
      description: "Creative and artistic photography that pushes boundaries and tells compelling stories.",
      Icon: Award,
      features: ["Creative Direction", "Concept Development", "Fine Art Prints", "Exhibition Ready"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Services Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Photography Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional photography services tailored to capture your most important moments 
              with artistic vision and technical excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Creating Timeless Memories
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                With over a decade of experience in professional photography, 
                I specialize in capturing the emotions and stories that make each moment unique. 
                My approach combines technical expertise with artistic vision to create 
                images that stand the test of time.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Button asChild className="btn-hero">
                  <Link to="/experience">Learn More</Link>
                </Button>
                <Button asChild variant="outline" className="btn-outline">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1554048612-b6a482b224b7?auto=format&fit=crop&w=800&h=800"
                  alt="Professional photographer at work"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-elegant">
                <Heart className="w-8 h-8 mb-2" />
                <div className="font-bold text-sm">Passion Driven</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;