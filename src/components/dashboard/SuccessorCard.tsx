import { motion } from "framer-motion";
import { User, Phone, Mail, CheckCircle, AlertCircle } from "lucide-react";

interface Successor {
  name: string;
  relation: string;
  phone: string;
  email: string;
  verified: boolean;
}

interface SuccessorCardProps {
  type: "primary" | "secondary";
  successor: Successor;
  delay?: number;
}

export function SuccessorCard({ type, successor, delay = 0 }: SuccessorCardProps) {
  const isPrimary = type === "primary";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className={`bg-card rounded-xl border p-6 ${
        isPrimary
          ? "border-accent/30 shadow-gold"
          : "border-border shadow-card"
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <span
            className={`text-xs font-medium uppercase tracking-wide ${
              isPrimary ? "text-accent" : "text-muted-foreground"
            }`}
          >
            {type} Successor
          </span>
          <h3 className="font-serif text-xl font-semibold text-foreground mt-1">
            {successor.name}
          </h3>
          <p className="text-sm text-muted-foreground">{successor.relation}</p>
        </div>
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center ${
            isPrimary ? "bg-gradient-gold shadow-gold" : "bg-muted"
          }`}
        >
          <User
            className={`w-6 h-6 ${isPrimary ? "text-primary" : "text-muted-foreground"}`}
          />
        </div>
      </div>

      <div className="space-y-3 pt-4 border-t border-border">
        <div className="flex items-center gap-3">
          <Phone className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-foreground">{successor.phone}</span>
        </div>
        <div className="flex items-center gap-3">
          <Mail className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-foreground">{successor.email}</span>
        </div>
        <div className="flex items-center gap-3">
          {successor.verified ? (
            <>
              <CheckCircle className="w-4 h-4 text-success" />
              <span className="text-sm text-success font-medium">
                Contact Verified
              </span>
            </>
          ) : (
            <>
              <AlertCircle className="w-4 h-4 text-accent" />
              <span className="text-sm text-accent font-medium">
                Pending Verification
              </span>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}
