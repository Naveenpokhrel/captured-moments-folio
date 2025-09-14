import { ArrowDown, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="hero-section">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>
      
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="hero-title mb-6 animate-fade-in">
            Captured Moments
          </h1>
          <p className="hero-subtitle mb-12 max-w-2xl mx-auto animate-fade-in">
            Professional photography that tells your story through stunning visuals. 
            Specializing in portraits, events, and artistic compositions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button className="btn-hero">
              View Portfolio
            </Button>
            <Button variant="outline" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
              <Play className="w-4 h-4 mr-2" />
              Watch Reel
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white/80" />
      </div>
    </section>
  );
};

export default Hero;