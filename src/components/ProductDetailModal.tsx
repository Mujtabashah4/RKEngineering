import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, MessageCircle, X } from "lucide-react";

interface ProductDetailModalProps {
  product: {
    id: string;
    name: string;
    image: string;
    description: string;
    features: string[];
    benefits: string[];
    specifications: Record<string, string>;
    subsidyEligible: boolean;
    unitsManufactured?: string;
  } | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProductDetailModal = ({ product, open, onOpenChange }: ProductDetailModalProps) => {
  const handleClose = (openState: boolean) => {
    onOpenChange(openState);
  };

  if (!product) return null;

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hello, I'm interested in ${product.name}. Please provide more information.`);
    window.open(`https://wa.me/923097580000?text=${message}`, '_blank');
  };

  const handleCall = () => {
    window.open('tel:+923097580000', '_self');
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="!max-w-6xl !max-h-[90vh] !p-0 !gap-0 overflow-y-auto" style={{ display: 'flex', flexDirection: 'column' }}>
        {/* Close Button */}
        <button
          onClick={() => handleClose(false)}
          className="absolute right-4 top-4 z-[110] rounded-full bg-background/90 backdrop-blur-sm border-2 border-border hover:border-primary/50 p-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-primary hover:text-white group"
          aria-label="Close dialog"
        >
          <X className="h-5 w-5 text-foreground group-hover:text-white transition-colors" />
        </button>
        
        <div className="flex flex-col lg:flex-row w-full min-h-0 flex-1">
          {/* Image Section */}
          <div className="relative bg-gradient-to-br from-muted/30 to-muted/10 p-8 lg:p-12 lg:w-1/2">
            <div className="lg:sticky lg:top-8">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-background mb-4 shadow-2xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.subsidyEligible && (
                  <Badge className="absolute top-4 right-4 bg-green-500 text-white shadow-lg z-10">
                    Govt. Approved
                  </Badge>
                )}
              </div>
              {product.unitsManufactured && (
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-4 text-center border border-primary/20">
                  <div className="text-2xl font-bold text-primary">{product.unitsManufactured}</div>
                  <div className="text-sm text-muted-foreground">Units Manufactured</div>
                </div>
              )}
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8 lg:p-12 lg:w-1/2 overflow-y-auto">
            <DialogHeader className="mb-6">
              <DialogTitle className="text-3xl font-bold text-foreground mb-2">
                {product.name}
              </DialogTitle>
              <DialogDescription className="text-muted-foreground leading-relaxed">
                {product.description}
              </DialogDescription>
            </DialogHeader>

            {/* Features & Benefits */}
            <div className="space-y-6 mb-8">
              {/* Features */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Features & Benefits
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {product.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg"
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              {product.benefits && product.benefits.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Key Benefits</h3>
                  <ul className="space-y-2">
                    {product.benefits.map((benefit, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <span className="text-primary mt-1">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Specifications */}
            {product.specifications && Object.keys(product.specifications).length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Specifications</h3>
                <div className="border border-border rounded-lg overflow-hidden">
                  <div className="divide-y divide-border">
                    {Object.entries(product.specifications).map(([key, value], idx) => (
                      <div
                        key={idx}
                        className="grid grid-cols-2 gap-4 p-4 hover:bg-muted/30 transition-colors"
                      >
                        <div className="font-semibold text-foreground">{key}</div>
                        <div className="text-muted-foreground">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border">
              <Button
                onClick={handleWhatsApp}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Us
              </Button>
              <Button
                onClick={handleCall}
                variant="outline"
                className="flex-1"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailModal;

