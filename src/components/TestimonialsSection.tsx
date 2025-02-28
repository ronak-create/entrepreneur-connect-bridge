
import React, { useState, useEffect } from "react";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "EntrepreneurHub connected me with investors who truly understood my vision. Within three months, we secured funding and valuable mentorship.",
    name: "Sarah Johnson",
    role: "Founder & CEO",
    company: "GreenTech Solutions",
  },
  {
    quote:
      "As an investor, finding quality startups used to be time-consuming. This platform's curation saves me time and has led to three successful investments.",
    name: "Michael Chen",
    role: "Investment Partner",
    company: "Horizon Ventures",
  },
  {
    quote:
      "The structured approach to presenting projects and the secure communication channels made the entire funding process smooth and transparent.",
    name: "Emma Rodriguez",
    role: "Co-founder",
    company: "NutriHealth",
  },
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="chip mb-6">Success Stories</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">
            What our community says
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-primary opacity-10">
            <Quote className="w-24 h-24" />
          </div>

          <div className="relative z-10">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className={`transition-all duration-500 ${
                  idx === activeIndex
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 absolute top-0 -translate-y-8"
                }`}
              >
                <blockquote className="text-xl md:text-2xl text-center font-medium mb-8">
                  "{testimonial.quote}"
                </blockquote>
                <div className="text-center">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === activeIndex
                    ? "bg-primary scale-125"
                    : "bg-primary/30"
                }`}
                aria-label={`View testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
