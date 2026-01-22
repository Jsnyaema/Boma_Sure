import { useState } from "react";
import { motion } from "framer-motion";
import {
  Wallet,
  Landmark,
  MapPin,
  Smartphone,
  Settings,
  Bell,
  LucideIcon,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { SecurityScan } from "@/components/dashboard/SecurityScan";
import { LivenessStatus } from "@/components/dashboard/LivenessStatus";
import { AssetCard } from "@/components/dashboard/AssetCard";
import { SuccessorCard } from "@/components/dashboard/SuccessorCard";
import { AssetDetailDialog } from "@/components/dashboard/AssetDetailDialog";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const mockUser = {
  name: "David Omolo",
  status: "Verified",
  vaultHealth: "95%",
  lastCheckIn: "2 hours ago",
};

const mockAssets = [
  { icon: Wallet, title: "M-Pesa / Cash", count: 3, status: "verified" as const },
  { icon: Landmark, title: "Sacco / Bank", count: 2, status: "verified" as const },
  { icon: MapPin, title: "Land / Titles", count: 1, status: "pending" as const },
  { icon: Smartphone, title: "Digital Assets", count: 4, status: "verified" as const },
];

const mockAssetDetails: Record<string, Array<{
  name: string;
  reference: string;
  value?: string;
  status: "verified" | "pending" | "action";
  lastUpdated: string;
  documents?: string[];
  instructions?: string;
}>> = {
  "M-Pesa / Cash": [
    { name: "Main M-Pesa Account", reference: "0712345678", value: "KES 45,000", status: "verified", lastUpdated: "Jan 15, 2026", instructions: "Transfer to Grace immediately for household needs" },
    { name: "Business Till", reference: "174523", value: "KES 120,000", status: "verified", lastUpdated: "Jan 14, 2026" },
    { name: "Emergency Cash", reference: "SAFE-001", value: "KES 50,000", status: "verified", lastUpdated: "Dec 28, 2025", instructions: "Located in bedroom safe, combination with Grace" },
  ],
  "Sacco / Bank": [
    { name: "Stima Sacco", reference: "STM-78234", value: "KES 850,000", status: "verified", lastUpdated: "Jan 10, 2026", documents: ["Membership Certificate", "Statement 2025"], instructions: "Contact branch manager Mr. Ochieng directly" },
    { name: "Equity Bank", reference: "0123456789", value: "KES 320,000", status: "verified", lastUpdated: "Jan 12, 2026", documents: ["Account Statement"] },
  ],
  "Land / Titles": [
    { name: "Kitengela Plot 402", reference: "LR/KIT/402", status: "pending", lastUpdated: "Jan 8, 2026", documents: ["Title Deed Scan", "Survey Map"], instructions: "Already in family trust, see lawyer Kamau for succession" },
  ],
  "Digital Assets": [
    { name: "PayPal Account", reference: "d.omolo@email.com", value: "USD 1,240", status: "verified", lastUpdated: "Jan 16, 2026" },
    { name: "Binance Wallet", reference: "0x8f3...7a2", value: "0.15 BTC", status: "verified", lastUpdated: "Jan 14, 2026", instructions: "Recovery phrase in safety deposit box" },
    { name: "Domain Portfolio", reference: "GoDaddy", value: "12 domains", status: "verified", lastUpdated: "Jan 5, 2026" },
    { name: "YouTube Channel", reference: "@DavidOmolo", status: "verified", lastUpdated: "Jan 1, 2026", instructions: "Transfer monetization to James" },
  ],
};

const mockSuccessors = {
  primary: {
    name: "Grace Omolo",
    relation: "Spouse",
    phone: "+254 712 345 678",
    email: "grace.o@email.com",
    verified: true,
  },
  secondary: {
    name: "James Omolo",
    relation: "Son",
    phone: "+254 723 456 789",
    email: "james.o@email.com",
    verified: false,
  },
};

const Dashboard = () => {
  const [showScan, setShowScan] = useState(true);
  const [selectedAsset, setSelectedAsset] = useState<{
    icon: LucideIcon;
    title: string;
    status: "verified" | "pending" | "action";
  } | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Security Scan Animation */}
      {showScan && <SecurityScan onComplete={() => setShowScan(false)} />}

      {/* Asset Detail Dialog */}
      <AssetDetailDialog
        open={!!selectedAsset}
        onOpenChange={(open) => !open && setSelectedAsset(null)}
        icon={selectedAsset?.icon || Wallet}
        title={selectedAsset?.title || ""}
        status={selectedAsset?.status || "verified"}
        items={selectedAsset ? mockAssetDetails[selectedAsset.title] || [] : []}
      />

      {!showScan && (
        <>
          <Navbar />
          <main className="pt-24 pb-12 px-4">
            <div className="container mx-auto max-w-6xl">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8"
              >
                <div>
                  <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                    Welcome back, {mockUser.name.split(" ")[0]}
                  </h1>
                  <p className="text-muted-foreground mt-1">
                    Your vault is secure and up to date
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="outline" size="icon">
                    <Bell className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Settings className="w-5 h-5" />
                  </Button>
                </div>
              </motion.div>

              {/* Liveness Status */}
              <LivenessStatus
                lastCheckIn={mockUser.lastCheckIn}
                vaultHealth={mockUser.vaultHealth}
              />

              {/* Asset Grid */}
              <div className="mt-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-serif text-2xl font-semibold text-foreground">
                    Asset Overview
                  </h2>
                  <Button variant="gold" asChild>
                    <Link to="/map-assets">Add Asset</Link>
                  </Button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {mockAssets.map((asset, index) => (
                    <AssetCard
                      key={asset.title}
                      icon={asset.icon}
                      title={asset.title}
                      count={asset.count}
                      status={asset.status}
                      delay={0.2 + index * 0.1}
                      onClick={() => setSelectedAsset(asset)}
                    />
                  ))}
                </div>
              </div>

              {/* Successors */}
              <div className="mt-8">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                  Designated Successors
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <SuccessorCard
                    type="primary"
                    successor={mockSuccessors.primary}
                    delay={0.6}
                  />
                  <SuccessorCard
                    type="secondary"
                    successor={mockSuccessors.secondary}
                    delay={0.7}
                  />
                </div>
              </div>
            </div>
          </main>
        </>
      )}
    </div>
  );
};

export default Dashboard;
