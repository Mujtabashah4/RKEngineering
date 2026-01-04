import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { products, Product } from "@/data/products";
import ProductDetailModal from "./ProductDetailModal";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Sync modal state with URL
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
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5
      } 
    }
  };

  return (
    <>
      <section id="products" className="py-24 bg-white relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a7f4f05_1px,transparent_1px),linear-gradient(to_bottom,#1a7f4f05_1px,transparent_1px)] bg-[size:80px_80px]" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 px-4 py-1.5 text-sm inline-flex items-center gap-2">
                <Sparkles className="w-3 h-3" />
                Manufacturing Excellence
              </Badge>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight"
            >
              Our Product Portfolio
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-primary mt-2">
                Farm Mechanization Solutions
              </span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Comprehensive range of agricultural machinery including seeders, tillage implements, 
              crop handling equipment, and post-harvest infrastructure solutions.
            </motion.p>
          </motion.div>

          {/* Products Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
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
                  className="group relative overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl h-full flex flex-col cursor-pointer"
                >
                  
                  {/* Image Container */}
                  <div className="relative h-72 overflow-hidden bg-muted">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {product.subsidyEligible && (
                      <Badge className="absolute top-4 right-4 bg-green-600 text-white shadow-md">
                        Govt. Approved
                      </Badge>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                    
                    {/* Category Badge */}
                    <Badge className="absolute top-4 left-4 bg-white/90 text-foreground shadow-sm">
                      {product.category}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-grow relative z-10">
                    <h3 className="text-2xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed flex-grow">
                      {product.shortDescription}
                    </p>

                    {/* Features Preview */}
                    <div className="space-y-2 mb-8">
                      {product.features.slice(0, 3).map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-xs font-medium text-card-foreground/80">{feature}</span>
                        </div>
                      ))}
                    </div>

                  {/* CTA */}
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-white transition-all duration-300 shadow-sm hover:shadow-md py-6"
                  >
                    View Details
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            </motion.div>
            ))}
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
