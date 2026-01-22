import { motion } from "framer-motion";
import { Shield, Brain, Fingerprint, FileCheck } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "AES-256 Encryption",
    description:
      "Your data is protected with the same encryption used by global banks and governments.",
  },
  {
    icon: Brain,
    title: "AI-Legal Guidance",
    description:
      "Get instant answers about Kenyan inheritance law, succession, and asset claims.",
  },
  {
    icon: Fingerprint,
    title: "Biometric Security",
    description:
      "Access your vault with fingerprint or face recognition for maximum protection.",
  },
  {
    icon: FileCheck,
    title: "Document Scanning",
    description:
      "Upload and securely store land titles, wills, and important documents.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function TrustPillars() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built on Trust & Security
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every feature designed to protect what matters most to your family
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={itemVariants}
              className="group relative bg-card rounded-xl p-6 border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-card-hover"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-gradient-gold group-hover:shadow-gold transition-all duration-300">
                <pillar.icon className="w-7 h-7 text-accent group-hover:text-primary transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
