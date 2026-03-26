import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, MessageCircle, ExternalLink } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent('Contact Form Inquiry - RK Engineering');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:rkengineering053@gmail.com?subject=${subject}&body=${body}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening Email Client",
      description: "Your message is ready to send via email.",
    });
    
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "03097580000",
      subdetails: "Mon-Sat, 9AM-6PM",
      link: "tel:03097580000",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "rkengineering053@gmail.com",
      subdetails: "We reply within 24hrs",
      link: "mailto:rkengineering053@gmail.com",
    },
  ];

  const mapUrl = "https://www.google.com/maps/place/Rk+engineering/@31.0984981,74.4555152,17z/data=!3m1!4b1!4m6!3m5!1s0x3919b9e38fc89dbd:0x2a55d80bbf7f0b6b!8m2!3d31.0984935!4d74.4580901!16s%2Fg%2F11p03j0ddh?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D";

  return (
    <section id="contact" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Get in Touch with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light mt-2">Our Expert Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Have questions about our machinery, subsidy programs, or need technical support?
            Our team is here to help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {contactInfo.map((info, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card
                  className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group cursor-pointer"
                  onClick={() => info.link && window.open(info.link, info.link.startsWith('tel:') || info.link.startsWith('mailto:') ? '_self' : '_blank', 'noopener,noreferrer')}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-1 group-hover:text-primary transition-colors">{info.title}</h3>
                      {info.link ? (
                        <a href={info.link} className="text-sm text-card-foreground font-medium hover:text-primary transition-colors">
                          {info.details}
                        </a>
                      ) : (
                        <p className="text-sm text-card-foreground font-medium">{info.details}</p>
                      )}
                      <p className="text-xs text-muted-foreground mt-1">{info.subdetails}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
            
            {/* WhatsApp Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group cursor-pointer"
                onClick={() => window.open('https://wa.me/923097580000?text=Hello%2C%20I%27m%20interested%20in%20RK%20Engineering%20products.%20Please%20provide%20more%20information.', '_blank', 'noopener,noreferrer')}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1 group-hover:text-primary transition-colors">WhatsApp Us</h3>
                    <a href="https://wa.me/923097580000" rel="noopener noreferrer" className="text-sm text-card-foreground font-medium hover:text-primary transition-colors">
                      03097580000
                    </a>
                    <p className="text-xs text-muted-foreground mt-1">Quick Response</p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Location Map Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group cursor-pointer"
                onClick={() => window.open(mapUrl, '_blank', 'noopener,noreferrer')}
              >
                {/* Map Preview */}
                <div className="relative h-48 bg-gradient-to-br from-primary/5 to-primary/10 overflow-hidden">
                  {/* Simplified Map Visual */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      {/* Animated Pin */}
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="relative z-10"
                      >
                        <MapPin className="w-16 h-16 text-primary drop-shadow-lg" fill="currentColor" />
                      </motion.div>
                      {/* Ripple Effect */}
                      <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border-4 border-primary"
                      />
                    </div>
                  </div>
                  {/* Grid Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a7f4f_1px,transparent_1px),linear-gradient(to_bottom,#1a7f4f_1px,transparent_1px)] bg-[size:40px_40px]" />
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
                  {/* View on Map Badge */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2 shadow-md group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <ExternalLink className="w-3 h-3" />
                    <span className="text-xs font-semibold">View on Map</span>
                  </div>
                </div>
                {/* Location Details */}
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-card-foreground mb-1 group-hover:text-primary transition-colors">Visit Us</h3>
                      <p className="text-sm text-card-foreground font-medium mb-1">
                        2-KM Dipal Pur Road Pull Dolawala
                      </p>
                      <p className="text-sm text-card-foreground font-medium">
                        Kasur, Pakistan
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">Manufacturing Facility</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="p-8 bg-card border-border shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-card-foreground font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-background border-border focus:border-primary transition-all duration-300 h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-card-foreground font-medium">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="03XXXXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="bg-background border-border focus:border-primary transition-all duration-300 h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-card-foreground font-medium">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background border-border focus:border-primary transition-all duration-300 h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-card-foreground font-medium">
                    Your Message *
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your requirements, subsidy inquiries, or any questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="bg-background border-border focus:border-primary transition-all duration-300 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary-light text-white shadow-md hover:shadow-lg transition-all duration-300 group h-12 text-lg"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
