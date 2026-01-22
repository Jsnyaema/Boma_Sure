import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { AssetForm } from "@/components/assets/AssetForm";

const MapAssets = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-gold shadow-gold mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
              Map Your Assets
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Securely document your assets so your family can access them when
              needed most
            </p>
          </motion.div>

          {/* Asset Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-2xl border border-border p-6 md:p-10 shadow-card"
          >
            <AssetForm />
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default MapAssets;
