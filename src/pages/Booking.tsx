import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Users, Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import containerNight from "@/assets/container-restaurant-night.jpg";

const Booking = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    containerType: "",
    specialRequests: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Request Submitted!",
      description: "We'll contact you within 24 hours to confirm your reservation.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
            Book Your <span className="text-accent">Container Experience</span>
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto fade-in">
            Reserve your stay in our unique movable container accommodations 
            and dining experiences in beautiful Fiji.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="container-card p-8 slide-up">
              <h2 className="text-3xl font-bold mb-8 text-accent">Reservation Details</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground mb-2 block">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="bg-muted border-border/50"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-foreground mb-2 block">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="bg-muted border-border/50"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone" className="text-foreground mb-2 block">Phone Number</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="bg-muted border-border/50"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="checkIn" className="text-foreground mb-2 block">Check-in Date</Label>
                    <Input
                      id="checkIn"
                      type="date"
                      value={formData.checkIn}
                      onChange={(e) => handleInputChange("checkIn", e.target.value)}
                      className="bg-muted border-border/50"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="checkOut" className="text-foreground mb-2 block">Check-out Date</Label>
                    <Input
                      id="checkOut"
                      type="date"
                      value={formData.checkOut}
                      onChange={(e) => handleInputChange("checkOut", e.target.value)}
                      className="bg-muted border-border/50"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="guests" className="text-foreground mb-2 block">Number of Guests</Label>
                    <Select onValueChange={(value) => handleInputChange("guests", value)}>
                      <SelectTrigger className="bg-muted border-border/50">
                        <SelectValue placeholder="Select guests" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Guest</SelectItem>
                        <SelectItem value="2">2 Guests</SelectItem>
                        <SelectItem value="3">3 Guests</SelectItem>
                        <SelectItem value="4">4 Guests</SelectItem>
                        <SelectItem value="5+">5+ Guests</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="containerType" className="text-foreground mb-2 block">Container Type</Label>
                    <Select onValueChange={(value) => handleInputChange("containerType", value)}>
                      <SelectTrigger className="bg-muted border-border/50">
                        <SelectValue placeholder="Select container" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="restaurant">Restaurant Experience</SelectItem>
                        <SelectItem value="ocean-view">Ocean View Suite</SelectItem>
                        <SelectItem value="garden-view">Garden View Suite</SelectItem>
                        <SelectItem value="premium">Premium Container Suite</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="specialRequests" className="text-foreground mb-2 block">Special Requests</Label>
                  <Textarea
                    id="specialRequests"
                    value={formData.specialRequests}
                    onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                    className="bg-muted border-border/50 min-h-[100px]"
                    placeholder="Any special requirements or requests..."
                  />
                </div>

                <Button type="submit" className="btn-hero w-full">
                  Submit Booking Request
                </Button>
              </form>
            </div>

            {/* Info */}
            <div className="slide-up">
              <h2 className="text-3xl font-bold mb-8 text-accent">Booking Information</h2>
              
              <div className="space-y-8">
                <div className="container-card p-6">
                  <div className="flex items-center mb-4">
                    <Calendar className="w-6 h-6 text-accent mr-3" />
                    <h3 className="text-xl font-semibold">Check-in & Check-out</h3>
                  </div>
                  <p className="text-foreground/70">
                    Check-in: 3:00 PM<br/>
                    Check-out: 11:00 AM<br/>
                    Early check-in and late check-out available upon request.
                  </p>
                </div>

                <div className="container-card p-6">
                  <div className="flex items-center mb-4">
                    <Users className="w-6 h-6 text-accent mr-3" />
                    <h3 className="text-xl font-semibold">Container Capacity</h3>
                  </div>
                  <p className="text-foreground/70">
                    Each container accommodates up to 4 guests comfortably.
                    Additional containers can be arranged for larger groups.
                  </p>
                </div>

                <div className="container-card p-6">
                  <div className="flex items-center mb-4">
                    <MapPin className="w-6 h-6 text-accent mr-3" />
                    <h3 className="text-xl font-semibold">Location Details</h3>
                  </div>
                  <p className="text-foreground/70">
                    Located on Fiji's pristine coastline with direct beach access.
                    Airport transfers can be arranged upon request.
                  </p>
                </div>

                <div className="container-card p-6 glow-pulse">
                  <div className="flex items-center mb-4">
                    <Phone className="w-6 h-6 text-accent mr-3" />
                    <h3 className="text-xl font-semibold">Contact Us</h3>
                  </div>
                  <div className="space-y-2 text-foreground/70">
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2" />
                      <span>+679 123 4567</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      <span>reservations@fijicontainerresort.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;