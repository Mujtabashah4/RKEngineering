import { MessageCircle, Cog } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
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

  const footerLinks = {
    Products: [
      { name: "Super Seeders", action: () => scrollToSection('products') },
      { name: "Rotavators", action: () => scrollToSection('products') },
      { name: "Potato Graders", action: () => scrollToSection('products') },
      { name: "Cold Storage", action: () => scrollToSection('products') }
    ],
    Company: [
      { name: "About Us", action: () => scrollToSection('about') },
      { name: "Projects", action: () => scrollToSection('engineering') },
      { name: "Government Programs", action: () => scrollToSection('subsidies') },
      { name: "Contact", action: () => scrollToSection('contact') }
    ],
    Support: [
      { name: "Technical Support", action: () => scrollToSection('contact') },
      { name: "Warranty", action: () => scrollToSection('contact') },
      { name: "Service Centers", action: () => scrollToSection('contact') },
      { name: "Documentation", action: () => scrollToSection('contact') }
    ],
    Programs: [
      { name: "PCAP", action: () => scrollToSection('subsidies') },
      { name: "AFMP", action: () => scrollToSection('subsidies') },
      { name: "Mechanized Agriculture", action: () => scrollToSection('subsidies') },
      { name: "Institutional Supply", action: () => scrollToSection('subsidies') }
    ],
  };

  const socialLinks = [
    { 
      icon: () => (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ), 
      href: "https://www.facebook.com/p/RK-Engineering-61555910121858/",
      label: "Facebook"
    },
    { 
      icon: MessageCircle, 
      href: "https://wa.me/923097580000",
      label: "WhatsApp"
    },
  ];

  return (
    <footer className="bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff33_1px,transparent_1px),linear-gradient(to_bottom,#ffffff33_1px,transparent_1px)] bg-[size:2rem_2rem]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-16 relative z-10">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="relative">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border-2 border-secondary/30">
                  <span className="font-display text-lg text-white tracking-wider">RK</span>
                  <div className="absolute bottom-1.5 left-2 right-2 h-0.5 bg-secondary/60 rounded-full" />
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-1 -right-1"
                >
                  <div className="w-4 h-4 bg-secondary rounded-full flex items-center justify-center">
                    <Cog className="w-3 h-3 text-primary" />
                  </div>
                </motion.div>
              </div>
              <div className="flex flex-col gap-0.5">
                <div className="font-display text-lg text-white tracking-wider leading-tight">RK ENGINEERING</div>
                <div className="flex items-center gap-2">
                  <div className="h-0.5 w-4 bg-secondary rounded-full" />
                  <span className="text-xs text-white/70 font-body tracking-wide uppercase">Agricultural Machinery</span>
                </div>
              </div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm text-white/70 mb-6 leading-relaxed"
            >
              Manufacturer of agricultural machinery and farm mechanization equipment 
              for modern and efficient farming. Supporting productivity, efficiency, 
              and sustainability across Pakistan.
            </motion.p>
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => {
                const IconComponent = typeof social.icon === 'function' ? social.icon : social.icon;
                return (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + idx * 0.1 }}
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                    className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center transition-colors"
                  >
                    {typeof IconComponent === 'function' ? <IconComponent /> : <IconComponent className="w-4 h-4 text-white/90" />}
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links], sectionIdx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + sectionIdx * 0.1 }}
            >
              <h3 className="font-bold mb-4 text-white">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={link.action}
                      className="text-sm text-white/60 hover:text-accent transition-colors text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-white/50">
            © 2026 RK Engineering. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
