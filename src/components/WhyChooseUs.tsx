import { Clock, Shield, Zap } from "lucide-react";

interface WhyChooseUsProps {
  reasons: Array<{
    title: string;
    description: string;
    icon: JSX.Element;
  }>;
}

export const WhyChooseUs = ({ reasons }: WhyChooseUsProps) => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Why Choose Us</h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Trust Macon's premier towing service for reliable 24/7 emergency assistance. Our certified professionals deliver fast response times, competitive rates, and expert roadside solutions for all vehicle types. From accident recovery to lockout services, we're your trusted partner on the road.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {reasons.map((reason, index) => (
          <div key={index} className="text-center">
            <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              {reason.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
            <p className="text-gray-600">{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
