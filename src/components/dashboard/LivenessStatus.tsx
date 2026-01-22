import { motion } from "framer-motion";
import { Activity, Clock, ShieldCheck } from "lucide-react";

interface LivenessStatusProps {
  lastCheckIn: string;
  vaultHealth: string;
}

export function LivenessStatus({ lastCheckIn, vaultHealth }: LivenessStatusProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="bg-card rounded-xl border border-border p-6 shadow-card"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-serif text-xl font-semibold text-foreground">
          Liveness Status
        </h2>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/10 border border-success/20">
          <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
          <span className="text-sm font-medium text-success">Active</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
            <Clock className="w-5 h-5 text-accent" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Last Check-in</p>
            <p className="text-sm font-medium text-foreground">{lastCheckIn}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
          <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
            <Activity className="w-5 h-5 text-success" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Vault Health</p>
            <p className="text-sm font-medium text-foreground">{vaultHealth}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5 text-accent" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Security</p>
            <p className="text-sm font-medium text-foreground">Verified</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
