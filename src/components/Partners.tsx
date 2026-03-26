import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Shield, Award, Building2, CheckCircle, Wheat } from "lucide-react";
import { motion } from "framer-motion";

const Partners = () => {
  const certifications = [
    { icon: Shield, label: "PCAP Certified", description: "Punjab Clean Air Program" },
    { icon: Award, label: "AFMP Approved", description: "Agriculture Farm Mechanization Program" },
    { icon: CheckCircle, label: "Govt. Program Supplier", description: "Promotion of Mechanized Agriculture" },
    { icon: Building2, label: "Institutional Partner", description: "Pakistan Army Supplier" },
  ];

  const governmentPartners = [
    "Promotion of Mechanized Agriculture for Increasing Crop Productivity",
    "Punjab Clean Air Program (PCAP)",
    "Agriculture Farm Mechanization Program (AFMP)",
    "Pakistan Army",
    "Government Agriculture Departments",
    "Agricultural Development Institutions",
  ];

  return (
    <section id="partners" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 px-4 py-1.5 text-sm font-semibold">
            Trust & Compliance
          </Badge>
          <h2 className="text-5xl md:text-6xl lg:text-7xl text-foreground mb-4 tracking-wide">
            Government Programs &
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-primary mt-3">
              Institutional Partnerships
            </span>
          </h2>
          <div className="flex items-center justify-center gap-4 my-8">
            <div className="h-px w-16 bg-border" />
            <Wheat className="w-6 h-6 text-secondary" />
            <div className="h-px w-16 bg-border" />
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Executing projects under major government initiatives and serving 
            institutional clients across Pakistan with proven reliability.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, idx) => (
            <Card
              key={idx}
              className="p-6 bg-card border-border hover:border-primary/50 transition-smooth hover:shadow-elevated text-center group animate-scale-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-bounce">
                <cert.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-1">{cert.label}</h3>
              <p className="text-sm text-muted-foreground">{cert.description}</p>
            </Card>
          ))}
        </div>

        {/* Government Partners */}
        <div className="bg-card border border-border rounded-2xl p-10 animate-slide-up">
          <h3 className="text-2xl font-bold text-center text-card-foreground mb-8">
            Government & Institutional Partners
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {governmentPartners.map((partner, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl hover:bg-muted transition-smooth group"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-smooth">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-card-foreground">{partner}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              { value: "800+", label: "Govt Program Units" },
              { value: "2,200+", label: "Total Machines" },
              { value: "40+", label: "Cold Storage Units" },
            ].map((stat, idx) => (
            <div key={idx} className="text-center animate-scale-in" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="stat-counter text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
