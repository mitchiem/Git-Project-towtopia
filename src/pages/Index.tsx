import { Clock, Zap, Shield } from "lucide-react";
import { EmergencyBanner } from "@/components/EmergencyBanner";
import { HeroSection } from "@/components/HeroSection";
import { QuickContactBar } from "@/components/QuickContactBar";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const phoneNumber = "555-123-4567";
  const location = "Macon, GA";

  return (
    <div className="min-h-screen">
      <EmergencyBanner phoneNumber={phoneNumber} />
      <HeroSection phoneNumber={phoneNumber} />
      <QuickContactBar phoneNumber={phoneNumber} />
      <ServicesSection 
        services={services} 
        location={location} 
        phoneNumber={phoneNumber} 
      />
      <WhyChooseUs reasons={reasons} />
      <TestimonialsSection testimonials={testimonials} />
      <FAQSection />
      <Footer 
        phoneNumber={phoneNumber} 
        currentYear={new Date().getFullYear()} 
      />
    </div>
  );
};

const services = [
  {
    title: "24/7 Towing",
    description: "Day or night, we're always available to assist you with our professional towing service.",
    features: [
      "Available 24/7",
      "Quick response time",
      "Professional equipment",
      "Experienced operators"
    ]
  },
  {
    title: "Emergency Towing",
    description: "Fast response for unexpected breakdowns or accidents with our emergency towing service.",
    features: [
      "Immediate dispatch",
      "Accident recovery",
      "Breakdown assistance",
      "Safe vehicle transport"
    ]
  },
  {
    title: "Roadside Assistance",
    description: "From jump start service to tire change service, we've got you covered with our comprehensive roadside assistance.",
    features: [
      "Battery jump start",
      "Tire changes",
      "Fuel delivery",
      "Lock-out service"
    ]
  },
  {
    title: "Long Distance Towing",
    description: "We can transport your vehicle wherever it needs to go with our reliable long distance towing service.",
    features: [
      "Interstate transport",
      "Nationwide coverage",
      "Secure transport",
      "Regular updates"
    ]
  },
  {
    title: "Motorcycle Towing",
    description: "Specialized care for your bike with our professional motorcycle towing service.",
    features: [
      "Specialized equipment",
      "Experienced handlers",
      "Secure transport",
      "All motorcycle types"
    ]
  },
  {
    title: "Car Lockout Service",
    description: "Get back into your vehicle quickly and safely with our professional car lockout service.",
    features: [
      "Fast response",
      "Non-damaging methods",
      "All vehicle types",
      "Professional tools"
    ]
  }
];

const reasons = [
  {
    title: "24/7 Availability",
    description: "Always ready to help, any time of day or night.",
    icon: <Clock className="w-8 h-8 text-white" />,
  },
  {
    title: "Fast Response",
    description: "Quick response times to get you back on the road.",
    icon: <Zap className="w-8 h-8 text-white" />,
  },
  {
    title: "Professional Team",
    description: "Experienced and certified towing professionals.",
    icon: <Shield className="w-8 h-8 text-white" />,
  },
];

const testimonials = [
  {
    name: "John Smith",
    location: "Downtown Area",
    rating: 5,
    text: "Fast response time and professional service. They arrived within 15 minutes when my car broke down on the highway. Highly recommended!"
  },
  {
    name: "Sarah Johnson",
    location: "West Side",
    rating: 5,
    text: "Excellent service at a fair price. The driver was friendly and took great care with my vehicle. Will definitely use their service again if needed."
  },
  {
    name: "Mike Davis",
    location: "East District",
    rating: 5,
    text: "24/7 availability really saved me when I got stranded late at night. Professional team and great communication throughout the process."
  }
];

export default Index;
