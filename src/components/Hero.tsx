import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, CheckCircle, Wheat, Cog, Factory } from "lucide-react";
import heroImage from "@/assets/hero-machinery.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useRef } from "react";

const Hero = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
    }
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  const stats = [
    { value: "2,200+", label: "Machines Built", icon: Cog },
    { value: "1,600+", label: "Super Seeders", icon: Wheat },
    { value: "40+", label: "Cold Storage", icon: Factory },
  ];

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Warm Parchment Background with Mesh Gradient */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 gradient-mesh" />

      {/* Industrial Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2d5a3d_1px,transparent_1px),linear-gradient(to_bottom,#2d5a3d_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Decorative Wheat Accent - Top Right */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.15, x: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="absolute top-20 right-0 w-96 h-96"
      >
        <div className="w-full h-full bg-gradient-to-bl from-[hsl(38,85%,52%)] to-transparent rounded-full blur-3xl" />
      </motion.div>

      {/* Decorative Green Accent - Bottom Left */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 0.1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.7 }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px]"
      >
        <div className="w-full h-full bg-gradient-to-tr from-primary to-transparent rounded-full blur-3xl" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ opacity }}
          >
            {/* Company Badge - Industrial Style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-4 mb-8"
            >
              <div className="relative">
                <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center shadow-industrial rotate-3">
                  <span className="text-white font-display text-xl tracking-wider">RK</span>
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-1 -right-1 w-4 h-4"
                >
                  <Cog className="w-4 h-4 text-secondary" />
                </motion.div>
              </div>
              <div className="text-left border-l-4 border-secondary pl-4">
                <div className="font-display text-xl text-primary tracking-wider">RK Engineering</div>
                <div className="text-sm text-muted-foreground font-body">Agricultural Machinery</div>
              </div>
            </motion.div>

            {/* Main Heading - Bold Industrial Typography */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mb-8"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground leading-[0.9] tracking-wide">
                Manufacturing
                <span className="block text-primary mt-2">Excellence</span>
              </h1>
              <div className="mt-6 flex items-center gap-4">
                <div className="h-1 w-20 bg-secondary rounded-full" />
                <span className="font-elegant text-2xl md:text-3xl text-muted-foreground italic normal-case">
                  in Farm Mechanization
                </span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-xl font-body"
            >
              Pakistan's trusted manufacturer of agricultural machinery and farm mechanization equipment.
              Government-approved supplier empowering farmers across the nation with precision-engineered solutions.
            </motion.p>

            {/* Key Features - Industrial Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              {[
                "Government Approved",
                "PCAP/AFMP Certified",
                "2,200+ Machines Delivered"
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                  className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border-2 border-border border-b-4 rounded-lg px-4 py-2.5 shadow-soft hover:border-secondary transition-colors"
                >
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm font-body font-semibold text-foreground">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons - Industrial Style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection('products')}
                className="bg-primary hover:bg-primary-light text-white shadow-industrial hover:shadow-elevated transition-all duration-300 px-8 py-7 text-lg font-display tracking-wider border-b-4 border-primary-light hover:-translate-y-1"
              >
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="border-2 border-foreground/20 text-foreground hover:bg-foreground hover:text-background px-8 py-7 text-lg font-display tracking-wider transition-all duration-300 hover:-translate-y-1"
              >
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Hero Image with Industrial Frame */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
            style={{ y }}
          >
            {/* Industrial Frame */}
            <div className="relative">
              {/* Decorative Corner Brackets */}
              <div className="absolute -top-4 -left-4 w-16 h-16 border-t-4 border-l-4 border-secondary" />
              <div className="absolute -top-4 -right-4 w-16 h-16 border-t-4 border-r-4 border-secondary" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b-4 border-l-4 border-secondary" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-4 border-r-4 border-secondary" />

              {/* Main Image Container */}
              <motion.div
                className="relative overflow-hidden rounded-lg shadow-elevated"
                style={{ scale }}
              >
                <motion.img
                  src={heroImage}
                  alt="Agricultural machinery in action"
                  className="w-full h-[300px] sm:h-[400px] md:h-[480px] lg:h-[550px] object-cover"
                  animate={{
                    scale: [1, 1.03, 1],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />

                {/* Animated Machinery Effect */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/20 to-transparent"
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Label Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-medium"
                >
                  <div className="font-display text-sm text-primary tracking-wider">Super Seeder</div>
                  <div className="text-xs text-muted-foreground font-body">Precision Agriculture</div>
                </motion.div>
              </motion.div>
            </div>

            {/* Stats Cards - Floating Below Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="mt-8"
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-elevated border-2 border-border border-b-4 p-6">
                <div className="grid grid-cols-3 gap-4">
                  {stats.map((stat, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 + idx * 0.15 }}
                      className="text-center relative"
                    >
                      {idx > 0 && (
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-border" />
                      )}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-2"
                      >
                        <stat.icon className="w-5 h-5 text-secondary" />
                      </motion.div>
                      <div className="stat-counter text-primary">{stat.value}</div>
                      <div className="text-xs text-muted-foreground font-body mt-1">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs text-muted-foreground font-body font-medium tracking-wider uppercase">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-1.5"
          >
            <motion.div
              animate={{ height: [8, 16, 8] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 bg-secondary rounded-full"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Industrial Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />
    </section>
  );
};

export default Hero;
