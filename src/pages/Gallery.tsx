import { useState } from "react";
import Navigation from "@/components/Navigation";
import { X, ArrowLeft, ArrowRight } from "lucide-react";
import resortContainers from "@/assets/resort-containers.jpg";
import containerInterior from "@/assets/container-interior.jpg";
import containerNight from "@/assets/container-restaurant-night.jpg";
import fijiLandscape from "@/assets/fiji-landscape.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: containerNight,
      title: "Container Restaurant at Night",
      description: "Experience magical dining under the stars with warm ambient lighting"
    },
    {
      src: resortContainers,
      title: "Resort Container Layout",
      description: "Multiple container units arranged in tropical paradise setting"
    },
    {
      src: containerInterior,
      title: "Luxury Interior Design",
      description: "Sophisticated furnishings and panoramic windows"
    },
    {
      src: fijiLandscape,
      title: "Fiji Natural Beauty",
      description: "Pristine beaches and crystal-clear waters surrounding the resort"
    },
    {
      src: containerNight,
      title: "Evening Atmosphere",
      description: "Containers illuminated against Fiji's stunning sunset"
    },
    {
      src: resortContainers,
      title: "Architectural Innovation",
      description: "Modern container design integrated with natural landscape"
    }
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${containerNight})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background"></div>
        </div>
        
        <div className="container mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 fade-in">
            Visual <span className="text-accent">Journey</span>
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto fade-in">
            Explore our stunning container resort through beautiful imagery showcasing 
            the perfect blend of innovation and natural beauty in Fiji.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="container-card cursor-pointer group slide-up"
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold mb-2 text-accent">{image.title}</h3>
                      <p className="text-sm text-foreground/80">{image.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl w-full">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <ArrowRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="container-card overflow-hidden">
              <img 
                src={galleryImages[selectedImage].src} 
                alt={galleryImages[selectedImage].title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </div>

            {/* Image Info */}
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold mb-2 text-accent">
                {galleryImages[selectedImage].title}
              </h3>
              <p className="text-foreground/80">
                {galleryImages[selectedImage].description}
              </p>
              <div className="mt-4 text-sm text-foreground/60">
                {selectedImage + 1} of {galleryImages.length}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-20 px-6 bg-card/30">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-accent slide-up">
              Experience It In Person
            </h2>
            <p className="text-xl text-foreground/80 mb-8 slide-up">
              These images only capture a glimpse of the magic. Book your stay 
              to experience the full beauty of our container resort in Fiji.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center slide-up">
              <button className="btn-hero">
                Book Your Stay
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-accent text-accent rounded-xl font-semibold text-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;