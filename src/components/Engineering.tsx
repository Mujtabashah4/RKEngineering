import { Card } from "@/components/ui/card";
import { Factory, Users, TrendingUp, Award } from "lucide-react";
import { motion } from "framer-motion";

const Engineering = () => {
  const features = [
    {
      icon: Factory,
      title: "Advanced Manufacturing Facility",
      description: "Modern production line equipped with precision machinery for agricultural equipment manufacturing, ensuring high quality and consistency.",
      stats: "State-of-the-Art",
    },
    {
      icon: Users,
      title: "Skilled Workforce",
      description: "Experienced team of engineers and technicians dedicated to producing reliable agricultural machinery for Pakistani farmers.",
      stats: "Expert Team",
    },
    {
      icon: TrendingUp,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control processes to ensure every machine meets government standards and farmer expectations.",
      stats: "100% Tested",
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Approved supplier for PCAP, AFMP, and government mechanization programs with proven track record of excellence.",
      stats: "Certified",
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="engineering" className="py-24 bg-gradient-to-br from-primary via-primary/95 to-primary-light relative overflow-hidden text-white">
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2">
              <Factory className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-white">Manufacturing Excellence</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Our Manufacturing Process
            <span className="block text-accent mt-2">Quality & Innovation</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            From design to delivery, we maintain the highest standards in manufacturing 
            agricultural machinery that transforms farming in Pakistan.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {features.map((feature, idx) => (
            <motion.div 
              key={idx} 
              variants={item}
            >
              <Card className="group relative bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 p-6 h-full hover:shadow-xl">
                {/* Icon */}
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-md">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-white/80 mb-4 leading-relaxed">
                  {feature.description}
                </p>

                {/* Stats Badge */}
                <div className="inline-block bg-white/20 px-3 py-1 rounded-full">
                  <span className="text-xs font-semibold text-white">{feature.stats}</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Production Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-10"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">Production Capabilities</h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: "2,200+", label: "Total Production" },
              { value: "6", label: "Product Lines" },
              { value: "24/7", label: "Operations" },
              { value: "100%", label: "Quality Control" },
            ].map((stat, idx) => (
              <div key={idx} className="py-4">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/80 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Engineering;
