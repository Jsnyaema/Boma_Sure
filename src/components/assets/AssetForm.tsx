import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Landmark,
  MapPin,
  Smartphone,
  Upload,
  ChevronRight,
  Lock,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const categories = [
  {
    id: "bank",
    icon: Building2,
    title: "Bank Account",
    description: "KCB, Equity, Co-op, etc.",
  },
  {
    id: "sacco",
    icon: Landmark,
    title: "Sacco/Chama",
    description: "Stima, Mwalimu, Kenya Police, etc.",
  },
  {
    id: "land",
    icon: MapPin,
    title: "Land/Property",
    description: "Titles, plots, buildings",
  },
  {
    id: "digital",
    icon: Smartphone,
    title: "Digital Assets",
    description: "M-Pesa, Crypto, Investments",
  },
];

export function AssetForm() {
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    reference: "",
    instructions: "",
    document: null as File | null,
  });

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setStep(2);
  };

  const handleSubmit = () => {
    setStep(3);
    // Simulate submission
    setTimeout(() => {
      setStep(1);
      setSelectedCategory(null);
      setFormData({ name: "", reference: "", instructions: "", document: null });
    }, 3000);
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Steps */}
      <div className="flex items-center justify-center gap-4 mb-10">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-2">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-all ${
                step >= s
                  ? "bg-gradient-gold text-primary shadow-gold"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {step > s ? <CheckCircle className="w-5 h-5" /> : s}
            </div>
            {s < 3 && (
              <div
                className={`w-12 h-0.5 ${
                  step > s ? "bg-accent" : "bg-muted"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {/* Step 1: Category Selection */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h2 className="font-serif text-2xl font-bold text-foreground text-center mb-2">
              Select Asset Category
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              Choose the type of asset you want to add to your vault
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => handleCategorySelect(category.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:border-accent/30 hover:shadow-card-hover text-left transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-gradient-gold group-hover:shadow-gold transition-all">
                    <category.icon className="w-6 h-6 text-accent group-hover:text-primary transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Step 2: Asset Details */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
                Asset Details
              </h2>
              <p className="text-muted-foreground">
                All information is encrypted with AES-256
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Asset Name / Institution</Label>
                <Input
                  id="name"
                  placeholder="e.g., Stima Sacco, KCB Main Branch"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label htmlFor="reference" className="flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5 text-accent" />
                  Account Number / Reference
                </Label>
                <Input
                  id="reference"
                  type="password"
                  placeholder="Encrypted field"
                  value={formData.reference}
                  onChange={(e) =>
                    setFormData({ ...formData, reference: e.target.value })
                  }
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label htmlFor="instructions">
                  Special Instructions for Family
                </Label>
                <Textarea
                  id="instructions"
                  placeholder="Any specific instructions or notes for your successors..."
                  value={formData.instructions}
                  onChange={(e) =>
                    setFormData({ ...formData, instructions: e.target.value })
                  }
                  className="mt-1.5 min-h-[100px]"
                />
              </div>

              <div>
                <Label>Supporting Document (Optional)</Label>
                <label className="mt-1.5 flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-xl bg-muted/50 hover:bg-muted cursor-pointer transition-colors">
                  <Upload className="w-8 h-8 text-muted-foreground mb-2" />
                  <span className="text-sm text-muted-foreground">
                    Upload Land Title, Statement, or Will
                  </span>
                  <input type="file" className="hidden" />
                </label>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                variant="outline"
                onClick={() => setStep(1)}
                className="flex-1"
              >
                Back
              </Button>
              <Button variant="gold" onClick={handleSubmit} className="flex-1">
                Add to Vault
              </Button>
            </div>
          </motion.div>
        )}

        {/* Step 3: Success */}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="w-20 h-20 rounded-full bg-success flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-10 h-10 text-success-foreground" />
            </motion.div>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
              Asset Secured!
            </h2>
            <p className="text-muted-foreground">
              Your asset has been encrypted and added to your vault.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
