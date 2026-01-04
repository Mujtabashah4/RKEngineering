import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useHashNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Handle initial hash on page load
    if (location.hash) {
      const hash = location.hash.substring(1);
      scrollToSection(hash);
    }

    // Handle hash changes
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        scrollToSection(hash);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [location.hash]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const navigateToSection = (sectionId: string) => {
    navigate(`/#${sectionId}`, { replace: true });
    setTimeout(() => scrollToSection(sectionId), 100);
  };

  return { navigateToSection, scrollToSection };
};

