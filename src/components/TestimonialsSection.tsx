import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

interface TestimonialsSectionProps {
  testimonials: Array<{
    name: string;
    location: string;
    rating: number;
    text: string;
  }>;
}

export const TestimonialsSection = ({ testimonials }: TestimonialsSectionProps) => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                />
              ))}
            </div>
            <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
            <div className="mt-4">
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.location}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
