import { Card } from "@/components/ui/card";
import { Target, TrendingUp, Award, Users, Wheat, Factory, Cog, Shield } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const achievements = [
    {
      icon: Target,
      value: "2,200+",
      label: "Machines Manufactured",
      description: "Total agricultural machinery units produced and deployed",
    },
    {
      icon: Award,
      value: "800+",
      label: "Government Program Units",
      description: "Super Seeders supplied under government initiatives",
    },
    {
      icon: TrendingUp,
      value: "40+",
      label: "Cold Storage Units",
      description: "Complete post-harvest infrastructure solutions installed",
    },
    {
      icon: Users,
      value: "100%",
      label: "Quality Assured",
      description: "Rigorous quality control and testing protocols",
    },
  ];

  const values = [
    {
      icon: Factory,
      title: "Manufacturing Excellence",
      description: "State-of-the-art facilities producing high-quality agricultural machinery with precision engineering and rigorous quality control.",
    },
    {
      icon: Shield,
      title: "Government Partnerships",
      description: "Certified supplier under major programs including PCAP, AFMP, and Promotion of Mechanized Agriculture initiatives.",
    },
    {
      icon: Award,
      title: "Institutional Trust",
      description: "Trusted partner for institutional clients including the Pakistan Army, delivering reliable solutions and exceptional service.",
    },
    {
      icon: Wheat,
      title: "Sustainable Farming",
      description: "Supporting modern and efficient farming practices that improve productivity, efficiency, and sustainability across Pakistan.",
    },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-28 bg-muted/30 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 texture-machinery opacity-30" />

      {/* Decorative Accents */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.06 } : {}}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-primary to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.08 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-secondary to-transparent rounded-full blur-3xl translate-x-1/3 translate-y-1/3"
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
            <Factory className="w-4 h-4 text-primary" />
            <span className="font-body font-semibold text-sm text-primary">About RK Engineering</span>
          </motion.div>

          {/* Title */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl text-foreground mb-4 tracking-wide">
            Leading Manufacturer of
            <span className="block text-primary mt-1">Agricultural Machinery</span>
          </h2>

          {/* Decorative Line */}
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
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            RK Engineering is engaged in the manufacturing of agricultural machinery and farm mechanization equipment,
            specializing in seeders, tillage implements, crop handling machinery, and post-harvest infrastructure solutions.
            We support mechanized farming practices aimed at improving productivity, efficiency, and sustainability.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {achievements.map((achievement, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + idx * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <Card className="p-6 bg-white border-2 border-border border-b-[5px] hover:border-secondary/50 transition-all duration-300 hover:shadow-elevated h-full text-center group">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors"
                >
                  <achievement.icon className="w-8 h-8 text-secondary" />
                </motion.div>

                {/* Value */}
                <div className="stat-counter text-primary mb-2">{achievement.value}</div>

                {/* Label */}
                <div className="font-body font-semibold text-foreground mb-2">{achievement.label}</div>

                {/* Description */}
                <p className="font-body text-xs text-muted-foreground leading-relaxed">{achievement.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="font-display text-4xl text-center text-foreground mb-12 tracking-wider">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + idx * 0.1 }}
                whileHover={{ x: idx % 2 === 0 ? 4 : -4 }}
              >
                <Card className="p-6 bg-white border-2 border-border border-b-[5px] hover:border-primary/50 transition-all duration-300 hover:shadow-medium h-full group">
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ rotate: 10 }}
                      className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors"
                    >
                      <value.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <div>
                      <h4 className="font-elegant text-xl text-foreground mb-2 normal-case">{value.title}</h4>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Project Highlights - Industrial Style */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative overflow-hidden rounded-2xl"
        >
          {/* Background */}
          <div className="absolute inset-0 gradient-machinery" />
          <div className="absolute inset-0 texture-grain" />

          {/* Industrial Border */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-secondary" />

          {/* Content */}
          <div className="relative z-10 p-12">
            {/* Decorative Corners */}
            <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-secondary/50" />
            <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-secondary/50" />
            <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-secondary/50" />
            <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-secondary/50" />

            <h3 className="font-display text-4xl md:text-5xl text-center text-white mb-4 tracking-wider">
              Projects Executed
            </h3>
            <p className="font-body text-white/70 text-center mb-12 max-w-2xl mx-auto">
              Our track record of manufacturing excellence across Pakistan
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { product: "Super Seeders", count: "1,600+", note: "800 under govt programs" },
                { product: "Rotavators", count: "300+", note: "Land preparation equipment" },
                { product: "Potato Graders", count: "200+", note: "Post-harvest processing" },
                { product: "Disc Harrows", count: "50+", note: "Soil management" },
                { product: "Chisel Ploughs", count: "50+", note: "Deep tillage solutions" },
                { product: "Cold Storage Units", count: "40+", note: "Complete installations" },
              ].map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 + idx * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-secondary/30 transition-all duration-300"
                >
                  <div className="stat-counter text-secondary mb-2">{project.count}</div>
                  <div className="font-display text-lg text-white tracking-wider mb-1">{project.product}</div>
                  <div className="font-body text-sm text-white/60">{project.note}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Divider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="mt-20"
        >
          <div className="divider-industrial" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
