import Navigation from "@/components/Navigation";
import { ArrowRight, Move, Utensils, Bed, Eye, Thermometer, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import resortContainers from "@/assets/resort-containers.jpg";
import containerInterior from "@/assets/container-interior.jpg";
import containerNight from "@/assets/container-restaurant-night.jpg";

const Containers = () => {
  const containerTypes = [
    {
      title: "Restaurant Container",
      description: "Our signature dining experience featuring floor-to-ceiling windows and movable positioning for optimal views.",
      features: ["360° Rotating Base", "Climate Control", "Panoramic Windows", "Professional Kitchen"],
      capacity: "50 Diners",
      image: containerNight
    },
    {
      title: "Ocean View Suites", 
      description: "Luxury accommodation containers with direct ocean views and premium amenities.",
      features: ["Private Balcony", "King Size Bed", "Ocean Views", "Mini Bar"],
      capacity: "2-4 Guests",
      image: containerInterior
    },
    {
      title: "Garden View Suites",
      description: "Peaceful accommodation nestled in tropical gardens with nature immersion.",
      features: ["Garden Access", "Queen Bed", "Nature Views", "Reading Nook"],
      capacity: "2-3 Guests", 
      image: resortContainers
    }
  ];

  const features = [
    {
      icon: Move,
      title: "Movable Architecture",
      description: "Containers can be repositioned to optimize views and experiences based on weather and guest preferences."
    },
    {
      icon: Thermometer,
      title: "Climate Control",
      description: "Advanced HVAC systems ensure perfect comfort in Fiji's tropical climate year-round."
    },
    {
      icon: Shield,
      title: "Storm-Resistant",
      description: "Engineered to withstand tropical weather conditions while maintaining luxury standards."
    },
    {
      icon: Eye,
      title: "Panoramic Views",
      description: "Strategic placement and large windows provide unobstructed views of Fiji's natural beauty."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${resortContainers})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background"></div>
        </div>
        
        <div className="container mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 fade-in">
            <span className="text-accent">Innovative</span> Container Living
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto fade-in">
            Discover our revolutionary approach to luxury hospitality with movable container 
            architecture that brings together Chinese craftsmanship and Fiji's natural beauty.
          </p>
        </div>
      </section>

      {/* Container Types */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 slide-up">
              Container Experiences
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto slide-up">
              Each container is uniquely designed and can be moved to provide 
              the perfect experience for every moment of your stay.
            </p>
          </div>

          <div className="space-y-16">
            {containerTypes.map((container, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`slide-up ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <h3 className="text-3xl font-bold mb-6 text-accent">{container.title}</h3>
                  <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                    {container.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {container.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mb-8">
                    <div className="flex items-center">
                      <Utensils className="w-5 h-5 text-accent mr-2" />
                      <span className="font-semibold">Capacity: {container.capacity}</span>
                    </div>
                  </div>
                  
                  <Link to="/booking">
                    <button className="btn-hero group">
                      Book This Experience
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>

                <div className={`slide-up ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="container-card">
                    <img 
                      src={container.image} 
                      alt={container.title}
                      className="w-full h-[500px] object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 slide-up">
              Advanced Container Features
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto slide-up">
              Every container is equipped with cutting-edge technology and luxury amenities 
              to ensure the ultimate comfort and flexibility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="container-card p-8 text-center slide-up">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 glow-pulse">
                  <feature.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto container-card p-12">
            <h2 className="text-4xl font-bold mb-6 text-accent slide-up">
              Ready to Experience Container Innovation?
            </h2>
            <p className="text-xl text-foreground/80 mb-8 slide-up">
              Book your stay and discover how movable architecture creates 
              unique experiences in paradise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center slide-up">
              <Link to="/booking">
                <button className="btn-hero group">
                  Reserve Your Container
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link to="/gallery">
                <button className="px-8 py-4 bg-transparent border-2 border-accent text-accent rounded-xl font-semibold text-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300">
                  View Gallery
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Containers;