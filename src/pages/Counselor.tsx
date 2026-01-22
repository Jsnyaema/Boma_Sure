import { motion } from "framer-motion";
import { Scale, Shield, BookOpen } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { ChatInterface } from "@/components/counselor/ChatInterface";

const Counselor = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-6 pt-4"
          >
            <div className="inline-flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Scale className="w-6 h-6 text-accent" />
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-gold shadow-gold flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-accent" />
              </div>
            </div>
            <h1 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
              Succession Counselor
            </h1>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              Your AI guide to Kenyan inheritance law. Ask questions about succession,
              probate, and asset claims.
            </p>
          </motion.div>

          {/* Chat Interface */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-2xl border border-border shadow-card overflow-hidden"
          >
            <ChatInterface />
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Counselor;
