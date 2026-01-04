import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, FileCheck, HandCoins, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

const Subsidies = () => {
  const navigate = useNavigate();
  const location = useLocation();

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

  const steps = [
    {
      icon: FileCheck,
      title: "Application Submission",
      description: "Submit your subsidy application with required documentation through our streamlined online portal.",
      timeline: "Day 1-3",
    },
    {
      icon: CheckCircle2,
      title: "Verification Process",
      description: "Government departments verify eligibility criteria and documentation for approval.",
      timeline: "Day 4-15",
    },
    {
      icon: HandCoins,
      title: "Subsidy Approval",
      description: "Receive approval notification and subsidy amount confirmation from authorities.",
      timeline: "Day 16-20",
    },
    {
      icon: TrendingUp,
      title: "Equipment Delivery",
      description: "Machinery delivered and commissioned with subsidized pricing applied to your purchase.",
      timeline: "Day 21-30",
    },
  ];

  const subsidyPrograms = [
    { name: "PCAP Program", coverage: "800+", maxAmount: "Super Seeders" },
    { name: "AFMP Initiative", coverage: "Multiple", maxAmount: "Equipment Types" },
    { name: "Institutional Supply", coverage: "40+", maxAmount: "Cold Storage Units" },
  ];

  return (
    <section id="subsidies" className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.05)_0%,transparent_100%)]" />

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
            Government Subsidy Programs
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 tracking-tight">
            Government Subsidy Programs
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-primary mt-3">
              Making Farm Mechanization Accessible
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Approved supplier under major government initiatives including PCAP, AFMP, 
            and Promotion of Mechanized Agriculture programs.
          </p>
        </motion.div>

        {/* Subsidy Programs */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {subsidyPrograms.map((program, idx) => (
            <Card
              key={idx}
              className="p-6 bg-gradient-card border-border hover:border-primary/50 transition-smooth hover:shadow-elevated animate-scale-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
                  <HandCoins className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">{program.name}</h3>
                <div className="text-3xl font-bold text-primary mb-2">{program.coverage}</div>
                <p className="text-sm text-muted-foreground mb-4">Subsidy Coverage</p>
                <div className="pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground">Maximum Benefit:</span>
                  <div className="text-lg font-semibold text-card-foreground">{program.maxAmount}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Process Timeline */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Subsidy Application Process
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="relative animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                {/* Connector Line */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-primary to-primary/20" />
                )}

                <Card className="p-6 bg-card border-border hover:border-primary/50 transition-smooth hover:shadow-medium relative z-10">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-medium">
                    <span className="text-sm font-bold text-primary-foreground">{idx + 1}</span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Content */}
                  <Badge className="mb-3 bg-muted text-muted-foreground text-xs">{step.timeline}</Badge>
                  <h4 className="text-lg font-semibold text-card-foreground mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-primary/95 via-primary to-primary/95 rounded-2xl p-10 text-center animate-scale-in relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff33_1px,transparent_1px),linear-gradient(to_bottom,#ffffff33_1px,transparent_1px)] bg-[size:2rem_2rem]" />
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-4">
              Partner with RK Engineering
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              As an approved supplier under major government programs, we provide quality agricultural machinery 
              and support for government initiatives. Contact us to learn more about our products and services.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 rounded-xl px-8"
                onClick={() => scrollToSection('contact')}
              >
                Contact Us
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 rounded-xl px-8"
                onClick={() => scrollToSection('products')}
              >
                View Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subsidies;
