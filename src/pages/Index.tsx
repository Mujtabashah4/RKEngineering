import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import About from "@/components/About";
import Engineering from "@/components/Engineering";
import Subsidies from "@/components/Subsidies";
import Partners from "@/components/Partners";
import GovernmentProjects from "@/components/GovernmentProjects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { productId } = useParams();
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  // Wait for page to fully load
  useEffect(() => {
    setIsPageLoaded(true);
  }, []);

  // Handle product modal route - scroll to products section when modal opens
  useEffect(() => {
    if (!isPageLoaded || !productId) return;

    setTimeout(() => {
      const productsElement = document.getElementById('products');
      if (productsElement) {
        const offset = 100;
        const elementPosition = productsElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 300);
  }, [productId, isPageLoaded]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Products />
      <About />
      <Engineering />
      <Subsidies />
      <Partners />
      <GovernmentProjects />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
