import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, sectionId: string) => {
    e.preventDefault();
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
      setIsOpen(false);
    }, 100);
  };

  const navItems = [
    { label: "Products", sectionId: "products" },
    { label: "About", sectionId: "about" },
    { label: "Engineering", sectionId: "engineering" },
    { label: "Subsidies", sectionId: "subsidies" },
    { label: "Partners", sectionId: "partners" },
    { label: "Contact", sectionId: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white/95 backdrop-blur-lg border-b border-border shadow-sm py-3"
        : "bg-white/90 backdrop-blur-md border-b border-border/50 py-4"
        }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="/" 
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center shadow-sm">
              <span className="text-white font-black text-base">RK</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <div className="text-lg font-bold text-primary tracking-tight leading-tight">
                RK Engineering
              </div>
              <div className="text-xs text-muted-foreground font-medium tracking-wide leading-tight">
                Agricultural Machinery
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={(e) => handleNavClick(e as any, item.sectionId)}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors relative group py-2 cursor-pointer bg-transparent border-none"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <Button 
              onClick={(e) => {
                  e.preventDefault();
                  if (location.pathname !== '/') {
                    navigate('/');
                  }
                  setTimeout(() => {
                    const element = document.getElementById('contact');
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
                }}
                className="bg-primary hover:bg-primary/90 text-white shadow-sm hover:shadow-md transition-all duration-300 px-6"
              >
                Get Started
              </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground/70 hover:text-primary transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-t border-border mt-4 rounded-2xl shadow-xl"
            >
              <div className="flex flex-col p-6 gap-4">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={(e) => handleNavClick(e as any, item.sectionId)}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors cursor-pointer bg-transparent border-none text-left w-full"
                  >
                    {item.label}
                  </button>
                ))}
                <Button 
                  onClick={(e) => {
                    e.preventDefault();
                    if (location.pathname !== '/') {
                      navigate('/');
                    }
                    setTimeout(() => {
                      const element = document.getElementById('contact');
                      if (element) {
                        const offset = 100;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - offset;
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: "smooth",
                        });
                      }
                      setIsOpen(false);
                    }, 100);
                  }}
                  className="w-full mt-2 bg-primary hover:bg-primary-light text-white rounded-xl py-6 text-lg"
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
