import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Wheat, Cog, Award } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { products, Product } from "@/data/products";
import ProductDetailModal from "./ProductDetailModal";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const pathMatch = location.pathname.match(/^\/products\/(.+)$/);
    if (pathMatch) {
      const productId = pathMatch[1];
      const product = products.find(p => p.id === productId);
      if (product) {
        setSelectedProduct(product);
        setIsModalOpen(true);
      }
    } else {
      setIsModalOpen(false);
      setSelectedProduct(null);
    }
  }, [location.pathname]);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    navigate(`/products/${product.id}`, { replace: true });
  };

  const handleModalClose = (open: boolean) => {
    setIsModalOpen(open);
    if (!open) {
      setSelectedProduct(null);
      navigate('/', { replace: true });
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };

  return (
    <>
      <section ref={sectionRef} id="products" className="py-28 bg-background relative overflow-hidden">
        {/* Subtle Background Pattern - Field Lines */}
        <div className="absolute inset-0 texture-field opacity-50" />

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.08 } : {}}
          transition={{ duration: 1 }}
          className="absolute top-20 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-secondary to-transparent rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.05 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-primary to-transparent rounded-full blur-3xl"
        />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-secondary/10 border-2 border-secondary/20 rounded-lg px-5 py-2 mb-6"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Cog className="w-4 h-4 text-secondary" />
              </motion.div>
              <span className="font-body font-semibold text-sm text-secondary">Manufacturing Excellence</span>
            </motion.div>

            {/* Title */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl text-foreground mb-4 tracking-wide">
              Our Product
              <span className="block text-primary mt-1">Portfolio</span>
            </h2>

            {/* Decorative Line */}
            <div className="flex items-center justify-center gap-4 my-8">
              <div className="h-px w-16 bg-border" />
              <Wheat className="w-6 h-6 text-secondary" />
              <div className="h-px w-16 bg-border" />
            </div>

            {/* Subtitle */}
            <p className="font-elegant text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto italic normal-case">
              Farm Mechanization Solutions engineered for Pakistani agriculture
            </p>
          </motion.div>

          {/* Products Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {products.map((product, idx) => (
              <motion.div
                key={product.id}
                variants={item}
                className="h-full"
              >
                <Card
                  onClick={() => handleProductClick(product)}
                  className="group relative overflow-hidden bg-white border-2 border-border border-b-[5px] hover:border-secondary/50 transition-all duration-400 hover:shadow-elevated h-full flex flex-col cursor-pointer rounded-xl"
                >
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.6 }}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent" />

                    {/* Category Badge - Top Left */}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/95 text-foreground font-body font-semibold text-xs px-3 py-1 shadow-soft border-0">
                        {product.category}
                      </Badge>
                    </div>

                    {/* Govt Approved Badge - Top Right */}
                    {product.subsidyEligible && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        className="absolute top-4 right-4"
                      >
                        <Badge className="bg-primary text-white font-display tracking-wider text-xs px-3 py-1.5 shadow-medium flex items-center gap-1.5 border-0">
                          <Award className="w-3 h-3" />
                          Govt. Approved
                        </Badge>
                      </motion.div>
                    )}

                    {/* Units Badge - Bottom */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center justify-between shadow-soft">
                        <span className="font-body text-xs text-muted-foreground">Units Built</span>
                        <span className="font-display text-lg text-primary tracking-wider">{product.unitsManufactured}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Product Name */}
                    <h3 className="font-display text-2xl text-foreground tracking-wider mb-3 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>

                    {/* Description */}
                    <p className="font-body text-sm text-muted-foreground mb-6 leading-relaxed flex-grow line-clamp-3">
                      {product.shortDescription}
                    </p>

                    {/* Features Preview */}
                    <div className="space-y-2 mb-6">
                      {product.features.slice(0, 3).map((feature, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-5 h-5 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-3 h-3 text-primary" />
                          </div>
                          <span className="font-body text-xs text-foreground/80">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Button
                      className="w-full bg-primary hover:bg-primary-light text-white transition-all duration-300 shadow-soft hover:shadow-medium py-5 font-display tracking-wider border-b-4 border-primary-light group-hover:-translate-y-0.5"
                    >
                      View Details
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>

                  {/* Hover Accent */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-secondary"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Divider */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-20"
          >
            <div className="divider-wheat" />
          </motion.div>
        </div>
      </section>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        open={isModalOpen}
        onOpenChange={handleModalClose}
      />
    </>
  );
};

export default Products;
