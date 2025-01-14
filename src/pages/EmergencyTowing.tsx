import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { QuickContactBar } from "@/components/QuickContactBar";

const EmergencyTowing = () => {
  const phoneNumber = "555-123-4567";
  const location = "Macon, GA";

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50">
          <img
            src="/lovable-uploads/15b54952-0166-4022-89c1-e2fc80fc15f1.png"
            alt="Emergency Towing Service Macon GA"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="relative container mx-auto px-4 py-24 md:py-32 flex items-center justify-center">
          <div className="max-w-3xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Emergency Towing Services in {location}
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Fast Response When You Need It Most - Available 24/7
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
              Professional Emergency Towing Services in {location}
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                When accidents or breakdowns happen, our emergency towing service in {location} provides immediate assistance. Our team of experienced professionals is ready to respond quickly and efficiently to any emergency towing situation.
              </p>
              
              <h3 className="text-2xl font-semibold mt-8 mb-4">
                Why Choose Our Emergency Towing Service?
              </h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Immediate dispatch within minutes of your call</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Specialized equipment for any emergency situation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Highly trained emergency response team</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Available 24/7 for emergency situations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Competitive rates for emergency services</span>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">
                Our Emergency Towing Services
              </h3>
              <p className="text-gray-700 mb-6">
                We offer comprehensive emergency towing solutions for all situations:
              </p>
              <ul className="grid md:grid-cols-2 gap-4 mb-8">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <h4 className="text-lg font-medium">Accident Recovery</h4>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <h4 className="text-lg font-medium">Breakdown Assistance</h4>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <h4 className="text-lg font-medium">Vehicle Extraction</h4>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <h4 className="text-lg font-medium">Heavy Duty Towing</h4>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">
                Emergency Towing Coverage Area in {location}
              </h3>
              <p className="text-gray-700 mb-6">
                Our emergency towing service covers {location} and all surrounding areas:
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
                  Emergency Response Process
                </h3>
                <h6 className="text-lg font-medium mb-3">Our Emergency Response Protocol:</h6>
                <ol className="list-decimal pl-6 space-y-3">
                  <li>Immediate call response and situation assessment</li>
                  <li>Dispatch of appropriate emergency towing equipment</li>
                  <li>Real-time updates on arrival time</li>
                  <li>Professional handling of your emergency situation</li>
                  <li>Safe transport to your desired location</li>
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
                Call Now For Emergency Assistance
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmergencyTowing;
