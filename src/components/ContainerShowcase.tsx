import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import resortContainers from "@/assets/resort-containers.jpg";
import containerInterior from "@/assets/container-interior.jpg";

const ContainerShowcase = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 slide-up">
            Innovative Container Architecture
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto slide-up">
            Our unique resort features movable containers from China, transformed into 
            luxury dining and accommodation spaces in the heart of Fiji's natural paradise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="slide-up">
            <h3 className="text-3xl font-bold mb-6 text-accent">
              Sustainable Luxury Design
            </h3>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              Each container has been carefully designed and transported from China to create 
              a unique architectural experience. Our movable restaurant containers offer 
              breathtaking views while maintaining the highest standards of luxury and comfort.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                <span>Eco-friendly movable architecture</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                <span>Premium Chinese craftsmanship</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                <span>360° panoramic Fiji views</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                <span>Climate-controlled comfort</span>
              </li>
            </ul>
            <Link to="/containers">
              <button className="btn-hero group">
                Learn More
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>

          <div className="slide-up">
            <div className="container-card">
              <img 
                src={resortContainers} 
                alt="Resort containers in Fiji"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 slide-up">
            <div className="container-card">
              <img 
                src={containerInterior} 
                alt="Container restaurant interior"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 slide-up">
            <h3 className="text-3xl font-bold mb-6 text-accent">
              Exquisite Dining Experience
            </h3>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              Our container restaurant offers a unique dining experience with 
              floor-to-ceiling windows showcasing Fiji's breathtaking landscapes. 
              Experience world-class cuisine in an architectural marvel that 
              seamlessly blends innovation with natural beauty.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">24</div>
                <div className="text-sm text-foreground/60">Container Units</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">100</div>
                <div className="text-sm text-foreground/60">Dining Capacity</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">5★</div>
                <div className="text-sm text-foreground/60">Luxury Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                <div className="text-sm text-foreground/60">Ocean Views</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContainerShowcase;