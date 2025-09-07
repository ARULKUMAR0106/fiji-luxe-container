import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ContainerShowcase from "@/components/ContainerShowcase";
import fijiLandscape from "@/assets/fiji-landscape.jpg";
import { Star, Wifi, Car, Coffee, MapPin, Phone } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ContainerShowcase />
      
      {/* Fiji Experience Section */}
      <section className="py-20 px-6 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${fijiLandscape})` }}
        ></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 slide-up">
              Immerse in Fiji's Natural Paradise
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto slide-up">
              Wake up to pristine beaches, crystal-clear waters, and tropical landscapes 
              that make Fiji one of the world's most sought-after destinations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: MapPin, title: "Prime Location", desc: "Beachfront setting with direct ocean access" },
              { icon: Wifi, title: "Modern Amenities", desc: "High-speed internet and luxury facilities" },
              { icon: Coffee, title: "World-Class Dining", desc: "Container restaurant with international cuisine" },
              { icon: Car, title: "Island Tours", desc: "Guided excursions to Fiji's hidden gems" }
            ].map((item, index) => (
              <div key={index} className="container-card p-8 text-center slide-up">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 glow-pulse">
                  <item.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 slide-up">
              Guest Experiences
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                location: "Australia",
                rating: 5,
                text: "The container restaurant is absolutely stunning! The night lighting creates such a magical atmosphere."
              },
              {
                name: "David Chen",
                location: "Singapore", 
                rating: 5,
                text: "Unique architectural experience combined with Fiji's natural beauty. Unforgettable stay!"
              },
              {
                name: "Emma Wilson",
                location: "New Zealand",
                rating: 5,
                text: "The movable containers offer different views each day. Innovation meets luxury perfectly."
              }
            ].map((review, index) => (
              <div key={index} className="container-card p-8 slide-up">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-6 italic">"{review.text}"</p>
                <div>
                  <div className="font-semibold">{review.name}</div>
                  <div className="text-sm text-foreground/60">{review.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/30">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-accent mb-4">Fiji Container Resort</h3>
            <div className="flex items-center justify-center space-x-6 text-foreground/70">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+679 123 4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Fiji Islands</span>
              </div>
            </div>
          </div>
          <div className="text-foreground/60">
            © 2024 Fiji Container Resort. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;