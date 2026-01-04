import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-machinery.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useRef } from "react";

const Hero = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const imageRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.8]);

  const scrollToSection = (sectionId: string) => {
    // Navigate to home first if not already there
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

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-green-50/30 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a7f4f_1px,transparent_1px),linear-gradient(to_bottom,#1a7f4f_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Company Logo Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-full px-5 py-2 mb-6"
            >
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-sm">RK</span>
              </div>
              <div className="text-left">
                <div className="text-primary font-bold text-base leading-tight">RK ENGINEERING</div>
                <div className="text-primary/60 text-xs font-medium">Est. in Agricultural Machinery</div>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
            >
              Manufacturing
              <span className="block text-primary mt-2">Excellence</span>
              <span className="block text-2xl md:text-3xl font-normal text-muted-foreground mt-3">
                in Farm Mechanization
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl"
            >
              Leading manufacturer of agricultural machinery and farm mechanization equipment. 
              Trusted by farmers and government institutions across Pakistan.
            </motion.p>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              {[
                "Government Approved",
                "PCAP/AFMP Certified",
                "2,200+ Machines Delivered"
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white border border-border rounded-full px-4 py-2 shadow-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection('products')}
                className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 text-base font-semibold"
              >
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="border-2 border-primary/20 text-primary hover:bg-primary/5 px-8 py-6 text-base font-semibold"
              >
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Image & Stats */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
            style={{ y, opacity }}
          >
            {/* Hero Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border">
              <motion.div
                className="relative w-full h-[500px] overflow-hidden"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.img
                  src={heroImage}
                  alt="Agricultural machinery"
                  className="w-full h-full object-cover"
                  animate={{
                    x: [0, -15, 0],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                {/* Motion blur effect overlay - simulating speed */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
              
              {/* Animated dust/particles effect - simulating movement */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  height: [60, 80, 60],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Additional movement lines */}
              <motion.div
                className="absolute bottom-10 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent pointer-events-none"
                animate={{
                  x: ["-100%", "100%"],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>

            {/* Stats Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-6 w-full"
            >
              <div className="bg-white rounded-2xl shadow-2xl border border-border p-4 md:p-6">
                <div className="grid grid-cols-3 gap-2 md:gap-4 text-center">
                  {[
                    { value: "1,600+", label: "Super Seeders" },
                    { value: "300+", label: "Rotavators" },
                    { value: "40+", label: "Cold Storage" },
                  ].map((stat, idx) => (
                    <div key={idx} className="border-r last:border-r-0 border-border/50 px-2">
                      <div className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">{stat.value}</div>
                      <div className="text-[10px] md:text-xs text-muted-foreground font-medium mt-1 leading-tight">{stat.label}</div>
                    </div>
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
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground font-medium">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-8 border-2 border-primary/30 rounded-full flex items-start justify-center p-1"
          >
            <div className="w-1 h-2 bg-primary rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
