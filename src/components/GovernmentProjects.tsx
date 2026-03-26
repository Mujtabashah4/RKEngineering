import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Award, CheckCircle2, TrendingUp, Package, Warehouse, Cog } from "lucide-react";
import { motion } from "framer-motion";

const GovernmentProjects = () => {
  const projectCategories = [
    {
      icon: Package,
      title: "Super Seeders",
      total: "1,600+",
      governmentUnits: "800 units",
      description: "Supplied under government initiatives and to individual farmers",
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      icon: TrendingUp,
      title: "Rotavators",
      total: "300+",
      governmentUnits: "Multiple programs",
      description: "Land preparation equipment for mechanized agriculture",
      iconBg: "bg-secondary/10",
      iconColor: "text-secondary",
    },
    {
      icon: Award,
      title: "Potato Graders",
      total: "200+",
      governmentUnits: "Institutional supply",
      description: "Including equipment for Pakistan Army and other institutions",
      iconBg: "bg-earth/20",
      iconColor: "text-earth",
    },
    {
      icon: Building2,
      title: "Cold Storage Units",
      total: "40+",
      governmentUnits: "Complete installations",
      description: "Post-harvest infrastructure supporting agricultural produce storage",
      iconBg: "bg-copper/20",
      iconColor: "text-copper",
    },
  ];

  const otherProducts = [
    { name: "Disc Harrows", count: "50+" },
    { name: "Chisel Ploughs", count: "50+" },
  ];

  const governmentPrograms = [
    {
      name: "Promotion of Mechanized Agriculture",
      description: "For Increasing Crop Productivity",
      icon: CheckCircle2,
    },
    {
      name: "Punjab Clean Air Program (PCAP)",
      description: "Smog control and environmental initiatives",
      icon: CheckCircle2,
    },
    {
      name: "Agriculture Farm Mechanization Program (AFMP)",
      description: "Government-led mechanization initiatives",
      icon: CheckCircle2,
    },
    {
      name: "Institutional Supply",
      description: "Including Pakistan Army and government agencies",
      icon: CheckCircle2,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section
      id="government-projects"
      className="py-24 bg-gradient-to-br from-background via-white to-primary/5 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a7f4f_1px,transparent_1px),linear-gradient(to_bottom,#1a7f4f_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Section Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/10 border-2 border-secondary/20 rounded-lg px-5 py-2 mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Cog className="w-4 h-4 text-secondary" />
            </motion.div>
            <span className="font-body font-semibold text-sm text-secondary">
              Project Portfolio
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl text-foreground tracking-wide mb-4">
            Projects Executed
            <span className="block text-primary mt-2">Large-Scale Manufacturing</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mt-6">
            RK Engineering has successfully executed large-scale manufacturing and supply projects
            in the agricultural mechanization and post-harvest infrastructure sector, supporting
            government programs and institutional clients across Pakistan.
          </p>
        </motion.div>

        {/* Main Project Categories */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          {projectCategories.map((category, idx) => (
            <motion.div key={idx} variants={item}>
              <Card className="group relative overflow-hidden bg-white border-2 border-border border-b-[5px] hover:border-secondary/50 transition-all duration-300 hover:shadow-elevated h-full">
                <div className="relative z-10 p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`w-16 h-16 ${category.iconBg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <category.icon className={`w-8 h-8 ${category.iconColor}`} />
                    </div>
                    <Badge className="bg-primary/10 text-primary border-primary/20 font-semibold">
                      {category.governmentUnits}
                    </Badge>
                  </div>

                  <h3 className="font-display text-2xl text-foreground tracking-wider mb-3 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>

                  <div className="stat-counter text-primary mb-4">{category.total}</div>

                  <p className="text-muted-foreground leading-relaxed">{category.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Products */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl text-center text-foreground mb-8">
            Additional Products Manufactured
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {otherProducts.map((product, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <Card className="px-6 py-4 bg-card border-2 border-border border-b-[5px] hover:border-secondary/50 transition-all duration-300 hover:shadow-elevated">
                  <div className="flex items-center gap-3">
                    <div className="stat-counter text-primary text-3xl">{product.count}</div>
                    <div className="font-body text-lg font-semibold text-foreground">
                      {product.name}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Government Programs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="gradient-machinery rounded-3xl p-10 md:p-12 text-white relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff33_1px,transparent_1px),linear-gradient(to_bottom,#ffffff33_1px,transparent_1px)] bg-[size:2rem_2rem]" />
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8 justify-center">
              <Building2 className="w-8 h-8 text-secondary" />
              <h3 className="text-3xl md:text-4xl text-center">
                Government Programs & Initiatives
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {governmentPrograms.map((program, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <program.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{program.name}</h4>
                      <p className="text-white/80 leading-relaxed">{program.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16"
        >
          <Card className="bg-white border-2 border-border border-b-[5px] p-10 shadow-medium">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { value: "2,200+", label: "Total Machines", icon: Package },
                { value: "800+", label: "Govt Program Units", icon: Award },
                { value: "40+", label: "Cold Storage Units", icon: Warehouse },
                { value: "4", label: "Major Programs", icon: Building2 },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="stat-counter text-primary mb-2">{stat.value}</div>
                  <div className="font-body text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default GovernmentProjects;
