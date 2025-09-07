import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import containerNight from "@/assets/container-restaurant-night.jpg";
import Island3D from "./Island3D";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Island Background */}
      <div className="absolute inset-0 opacity-80 z-0">
        <Island3D />
      </div>
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${containerNight})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center md:text-left">
        <div className="max-w-3xl fade-in">
          <div className="flex items-center justify-center md:justify-start mb-6">
            <MapPin className="w-5 h-5 text-accent mr-2" />
            <span className="text-accent font-medium">Fiji Islands</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Experience Luxury in
            <span className="block text-accent glow-pulse">Container Living</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed">
            Discover our unique resort featuring movable container restaurants
            and accommodation, set in the pristine beauty of Fiji's tropical paradise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="/booking">
              <button className="btn-hero group">
                Book Your Stay
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            
            <Link to="/containers">
              <button className="px-8 py-4 bg-transparent border-2 border-accent text-accent rounded-xl font-semibold text-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300">
                Explore Containers
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;