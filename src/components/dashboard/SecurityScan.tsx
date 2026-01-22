import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, ShieldCheck, Lock, Unlock, Fingerprint } from "lucide-react";

interface SecurityScanProps {
  onComplete: () => void;
}

export function SecurityScan({ onComplete }: SecurityScanProps) {
  const [stage, setStage] = useState<"scanning" | "unlocking" | "complete">(
    "scanning"
  );

  useEffect(() => {
    const timer1 = setTimeout(() => setStage("unlocking"), 2000);
    const timer2 = setTimeout(() => setStage("complete"), 3500);
    const timer3 = setTimeout(onComplete, 4500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-primary flex items-center justify-center"
    >
      <div className="text-center">
        <AnimatePresence mode="wait">
          {stage === "scanning" && (
            <motion.div
              key="scanning"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex flex-col items-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="relative"
              >
                <div className="w-32 h-32 rounded-full border-4 border-accent/30 flex items-center justify-center">
                  <Fingerprint className="w-16 h-16 text-accent" />
                </div>
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-transparent border-t-accent"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.div>
              <p className="mt-8 text-primary-foreground font-medium text-lg">
                Scanning Biometrics...
              </p>
              <p className="mt-2 text-primary-foreground/60 text-sm">
                Verifying your identity
              </p>
            </motion.div>
          )}

          {stage === "unlocking" && (
            <motion.div
              key="unlocking"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex flex-col items-center"
            >
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.5 }}
                className="w-32 h-32 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold"
              >
                <motion.div
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                >
                  <Lock className="w-16 h-16 text-primary" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.3 }}
                  className="absolute"
                >
                  <Unlock className="w-16 h-16 text-primary" />
                </motion.div>
              </motion.div>
              <p className="mt-8 text-primary-foreground font-medium text-lg">
                Unlocking Vault...
              </p>
            </motion.div>
          )}

          {stage === "complete" && (
            <motion.div
              key="complete"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="w-32 h-32 rounded-full bg-success flex items-center justify-center"
              >
                <ShieldCheck className="w-16 h-16 text-success-foreground" />
              </motion.div>
              <p className="mt-8 text-primary-foreground font-medium text-lg">
                Vault Unlocked
              </p>
              <p className="mt-2 text-primary-foreground/60 text-sm">
                Welcome back, David
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
