import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { QuickContactBar } from "@/components/QuickContactBar";

const TwentyFourSevenTowing = () => {
  const phoneNumber = "555-123-4567";
  const location = "Macon, GA";

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50">
          <img
            src="/lovable-uploads/15b54952-0166-4022-89c1-e2fc80fc15f1.png"
            alt="24/7 Towing Service Macon GA"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="relative container mx-auto px-4 py-24 md:py-32 flex items-center justify-center">
          <div className="max-w-3xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              24/7 Emergency Towing Services in {location}
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Your Reliable Partner for Round-the-Clock Towing Assistance
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                size="lg" 
                variant="destructive"
                className="text-xl font-semibold px-8 py-6 h-auto"
                onClick={() => window.location.href = `tel:${phoneNumber}`}
              >
                <Phone className="mr-2 h-6 w-6" />
                Call Now For Immediate Help
              </Button>
            </div>
          </div>
        </div>
      </section>

      <QuickContactBar phoneNumber={phoneNumber} />

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              Professional 24/7 Towing Services in {location}
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                When emergencies strike, day or night, our 24/7 towing service in {location} is ready to respond. With years of experience and a commitment to rapid response times, we're the trusted choice for emergency towing services throughout the region.
              </p>
              
              <h3 className="text-2xl font-semibold mt-8 mb-4">
                Why Choose Our 24/7 Emergency Towing Service?
              </h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Lightning-fast response times (typically under 30 minutes)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Available 24 hours a day, 7 days a week, 365 days a year</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Experienced and certified towing professionals</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Modern, well-maintained towing equipment</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Competitive and transparent pricing</span>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">
                Our Comprehensive Towing Services
              </h3>
              <p className="text-gray-700 mb-6">
                We offer a complete range of professional towing solutions to meet any situation:
              </p>
              <ul className="grid md:grid-cols-2 gap-4 mb-8">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <h4 className="text-lg font-medium">Emergency Roadside Towing</h4>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <h4 className="text-lg font-medium">Long-Distance Towing</h4>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <h4 className="text-lg font-medium">Accident Recovery</h4>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <h4 className="text-lg font-medium">Flatbed Towing</h4>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">
                24/7 Towing Coverage Area in {location}
              </h3>
              <p className="text-gray-700 mb-6">
                We provide comprehensive towing services throughout {location} and surrounding areas, including:
              </p>
              <ul className="grid md:grid-cols-2 gap-4 mb-8">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <h5 className="text-lg">Downtown Macon</h5>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <h5 className="text-lg">Warner Robins</h5>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <h5 className="text-lg">Perry</h5>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <h5 className="text-lg">Byron</h5>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <h5 className="text-lg">Gray</h5>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <h5 className="text-lg">Forsyth</h5>
                </li>
              </ul>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-semibold mb-4">
                  Our Service Process
                </h3>
                <h6 className="text-lg font-medium mb-3">What to Expect When You Call:</h6>
                <ol className="list-decimal pl-6 space-y-3">
                  <li>Quick response from our dispatch team</li>
                  <li>Estimated arrival time provided</li>
                  <li>Professional and courteous service</li>
                  <li>Safe and efficient vehicle transport</li>
                  <li>Transparent pricing with no hidden fees</li>
                </ol>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button 
                size="lg" 
                variant="destructive"
                className="text-xl font-semibold px-8 py-6 h-auto"
                onClick={() => window.location.href = `tel:${phoneNumber}`}
              >
                <Phone className="mr-2 h-6 w-6" />
                Call Now For 24/7 Assistance
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TwentyFourSevenTowing;
