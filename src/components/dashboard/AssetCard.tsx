import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface AssetCardProps {
  icon: LucideIcon;
  title: string;
  count: number;
  status: "verified" | "pending" | "action";
  delay?: number;
  onClick?: () => void;
}

const statusConfig = {
  verified: {
    text: "Verified",
    className: "bg-success/10 text-success border-success/20",
  },
  pending: {
    text: "Pending",
    className: "bg-accent/10 text-accent border-accent/20",
  },
  action: {
    text: "Action Needed",
    className: "bg-destructive/10 text-destructive border-destructive/20",
  },
};

export function AssetCard({ icon: Icon, title, count, status, delay = 0, onClick }: AssetCardProps) {
  const statusStyle = statusConfig[status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="group bg-card rounded-xl border border-border p-6 shadow-card hover:shadow-card-hover hover:border-accent/30 transition-all duration-300 cursor-pointer"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-gradient-gold group-hover:shadow-gold transition-all duration-300">
          <Icon className="w-6 h-6 text-accent group-hover:text-primary transition-colors duration-300" />
        </div>
        <span
          className={`px-2.5 py-1 rounded-full text-xs font-medium border ${statusStyle.className}`}
        >
          {statusStyle.text}
        </span>
      </div>

      <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
        {title}
      </h3>
      <p className="text-3xl font-bold text-foreground">
        {count}
        <span className="text-sm font-normal text-muted-foreground ml-1">
          assets
        </span>
      </p>
    </motion.div>
  );
}
