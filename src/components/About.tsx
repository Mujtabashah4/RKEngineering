import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, TrendingUp, Award, Users } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
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
      title: "Manufacturing Excellence",
      description: "State-of-the-art facilities producing high-quality agricultural machinery with precision engineering and rigorous quality control.",
    },
    {
      title: "Government Partnerships",
      description: "Certified supplier under major programs including PCAP, AFMP, and Promotion of Mechanized Agriculture initiatives.",
    },
    {
      title: "Institutional Trust",
      description: "Trusted partner for institutional clients including the Pakistan Army, delivering reliable solutions and exceptional service.",
    },
    {
      title: "Sustainable Farming",
      description: "Supporting modern and efficient farming practices that improve productivity, efficiency, and sustainability across Pakistan.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20, rotateX: -20 },
    show: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: { 
        duration: 0.6,
        type: "spring",
        stiffness: 100
      } 
    }
  };

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 px-4 py-1.5 text-sm">About RK Engineering</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Leading Manufacturer of
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light mt-2">Agricultural Machinery</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            RK Engineering is engaged in the manufacturing of agricultural machinery and farm mechanization equipment, 
            specializing in seeders, tillage implements, crop handling machinery, and post-harvest infrastructure solutions. 
            We support mechanized farming practices aimed at improving productivity, efficiency, and sustainability.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {achievements.map((achievement, idx) => (
            <motion.div 
              key={idx} 
              variants={item}
              style={{ transformStyle: "preserve-3d" }}
              whileHover={{
                rotateY: 10,
                rotateX: 5,
                z: 30,
                scale: 1.05,
              }}
            >
              <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl h-full text-center group relative overflow-hidden">
                {/* 3D Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 rounded-lg"
                  whileHover={{
                    background: "radial-gradient(circle at center, rgba(37, 99, 235, 0.1) 0%, transparent 70%)",
                  }}
                />
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all duration-300">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      <achievement.icon className="w-8 h-8 text-primary" />
                    </motion.div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{achievement.value}</div>
                  <div className="text-sm font-semibold text-card-foreground mb-2">{achievement.label}</div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{achievement.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="p-6 bg-gradient-to-br from-card to-card/50 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg h-full">
                  <h4 className="text-xl font-bold text-card-foreground mb-3">{value.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Project Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-br from-primary/95 via-primary to-primary/95 rounded-3xl p-12 text-white relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff33_1px,transparent_1px),linear-gradient(to_bottom,#ffffff33_1px,transparent_1px)] bg-[size:2rem_2rem]" />
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-center mb-8">Projects Executed</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { product: "Super Seeders", count: "1,600+", note: "800 under govt programs" },
                { product: "Rotavators", count: "300+", note: "Land preparation equipment" },
                { product: "Potato Graders", count: "200+", note: "Post-harvest processing" },
                { product: "Disc Harrows", count: "50+", note: "Soil management" },
                { product: "Chisel Ploughs", count: "50+", note: "Deep tillage solutions" },
                { product: "Cold Storage Units", count: "40+", note: "Complete installations" },
              ].map((project, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl font-bold text-accent mb-2">{project.count}</div>
                  <div className="text-lg font-semibold text-white mb-1">{project.product}</div>
                  <div className="text-sm text-white/70">{project.note}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

