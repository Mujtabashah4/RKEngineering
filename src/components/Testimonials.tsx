import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Quote, Star, Wheat, Cog } from "lucide-react";
import { motion, useInView } from "framer-motion";

const Testimonials = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Ahmed Khan",
      role: "Wheat Farmer",
      location: "Punjab, Pakistan",
      content:
        "The Super Seeder from RK Engineering has transformed my farming operations. Through the government program, I was able to acquire this machinery, and my yield has increased significantly. Excellent quality and reliable performance.",
      rating: 5,
      initials: "AK",
    },
    {
      name: "Fatima Ali",
      role: "Agricultural Cooperative",
      location: "Sindh, Pakistan",
      content:
        "We've been working with RK Engineering for our cold storage needs. Their 40+ installations speak volumes about their expertise. The equipment is robust, energy-efficient, and their technical support is outstanding.",
      rating: 5,
      initials: "FA",
    },
    {
      name: "Col. Muhammad Hassan",
      role: "Institutional Client",
      location: "Pakistan Army",
      content:
        "RK Engineering has been a trusted supplier for our agricultural machinery needs. Their commitment to quality, timely delivery, and excellent service makes them our preferred partner. Highly recommended for institutional projects.",
      rating: 5,
      initials: "MH",
    },
  ];

  const stats = [
    { value: "2,200+", label: "Machines Delivered" },
    { value: "800+", label: "Govt Program Units" },
    { value: "40+", label: "Cold Storage Units" },
    { value: "100%", label: "Quality Assured" },
  ];

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="py-28 bg-muted/30 relative overflow-hidden"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 texture-machinery opacity-30" />

      {/* Decorative Accents */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.06 } : {}}
        transition={{ duration: 1 }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-secondary to-transparent rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.07 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-primary to-transparent rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-primary/10 border-2 border-primary/20 rounded-lg px-5 py-2 mb-6"
          >
            <Quote className="w-4 h-4 text-primary" />
            <span className="font-body font-semibold text-sm text-primary">
              Customer Stories
            </span>
          </motion.div>

          {/* Title */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl text-foreground mb-4 tracking-wide">
            Trusted by Pakistan's
            <span className="block text-primary mt-1">Farming Community</span>
          </h2>

          {/* Decorative Wheat Line */}
          <div className="flex items-center justify-center gap-4 my-8">
            <div className="h-px w-16 bg-border" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Cog className="w-6 h-6 text-secondary" />
            </motion.div>
            <div className="h-px w-16 bg-border" />
          </div>

          {/* Description */}
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Real experiences from farmers, cooperatives, and institutional
            clients across Pakistan who've transformed their agricultural
            operations with our machinery.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + idx * 0.15 }}
              whileHover={{ y: -6 }}
            >
              <Card className="relative p-8 bg-white border-2 border-border border-b-[5px] hover:border-secondary/50 transition-all duration-300 hover:shadow-elevated h-full overflow-hidden group">
                {/* Left Accent Bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary" />

                {/* Oversized Quote Mark */}
                <span className="font-display text-[8rem] leading-none text-secondary/20 absolute -top-4 left-4 select-none pointer-events-none">
                  "
                </span>

                {/* Stars */}
                <div className="flex gap-1 mb-5 relative z-10">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-secondary text-secondary"
                    />
                  ))}
                </div>

                {/* Quote Content */}
                <p className="font-elegant italic text-lg text-foreground leading-relaxed mb-8 relative z-10">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-border relative z-10">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <span className="font-display text-sm text-primary tracking-wider">
                      {testimonial.initials}
                    </span>
                  </div>

                  <div>
                    <div className="font-display text-lg text-primary tracking-wider leading-tight">
                      {testimonial.name}
                    </div>
                    <div className="font-body text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div className="font-body text-xs text-muted-foreground/70">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Decorative Wheat Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent to-border" />
          <Wheat className="w-5 h-5 text-secondary" />
          <div className="h-px flex-1 max-w-xs bg-gradient-to-l from-transparent to-border" />
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative overflow-hidden rounded-2xl"
        >
          {/* Dark Industrial Background */}
          <div className="absolute inset-0 gradient-machinery" />
          <div className="absolute inset-0 texture-grain" />

          {/* Gold Top Border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-secondary" />

          {/* Decorative Corner Brackets */}
          <div className="absolute top-4 left-4 w-10 h-10 border-t-2 border-l-2 border-secondary/50" />
          <div className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 border-secondary/50" />
          <div className="absolute bottom-4 left-4 w-10 h-10 border-b-2 border-l-2 border-secondary/50" />
          <div className="absolute bottom-4 right-4 w-10 h-10 border-b-2 border-r-2 border-secondary/50" />

          {/* Stats Content */}
          <div className="relative z-10 py-14 px-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + idx * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="stat-counter text-secondary mb-2">
                    {stat.value}
                  </div>
                  <div className="font-body text-sm text-white/70 tracking-wide uppercase">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
