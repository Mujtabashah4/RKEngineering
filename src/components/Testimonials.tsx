import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ahmed Khan",
      role: "Wheat Farmer",
      location: "Punjab, Pakistan",
      content: "The Super Seeder from RK Engineering has transformed my farming operations. Through the government program, I was able to acquire this machinery, and my yield has increased significantly. Excellent quality and reliable performance.",
      rating: 5,
      initials: "AK",
    },
    {
      name: "Fatima Ali",
      role: "Agricultural Cooperative",
      location: "Sindh, Pakistan",
      content: "We've been working with RK Engineering for our cold storage needs. Their 40+ installations speak volumes about their expertise. The equipment is robust, energy-efficient, and their technical support is outstanding.",
      rating: 5,
      initials: "FA",
    },
    {
      name: "Col. Muhammad Hassan",
      role: "Institutional Client",
      location: "Pakistan Army",
      content: "RK Engineering has been a trusted supplier for our agricultural machinery needs. Their commitment to quality, timely delivery, and excellent service makes them our preferred partner. Highly recommended for institutional projects.",
      rating: 5,
      initials: "MH",
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-agri-energy/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Trusted by Farmers &
            <span className="block text-primary">Institutional Partners</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from farmers, cooperatives, and institutional clients 
            across Pakistan who've transformed their agricultural operations with our machinery.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <Card
              key={idx}
              className="relative p-8 bg-card border-border hover:border-primary/50 transition-smooth hover:shadow-elevated animate-scale-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-card-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <Avatar className="w-12 h-12 bg-primary/10">
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="mt-16 bg-gradient-card rounded-2xl p-10">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: "2,200+", label: "Machines Delivered" },
              { value: "800+", label: "Govt Program Units" },
              { value: "40+", label: "Cold Storage Units" },
              { value: "100%", label: "Quality Assured" },
            ].map((stat, idx) => (
              <div key={idx} className="animate-scale-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
