import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LucideIcon, FileText, CheckCircle, AlertCircle, Clock, Pencil, X, Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

export interface AssetItem {
  name: string;
  reference: string;
  value?: string;
  status: "verified" | "pending" | "action";
  lastUpdated: string;
  documents?: string[];
  instructions?: string;
}

interface AssetDetailDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  icon: LucideIcon;
  title: string;
  status: "verified" | "pending" | "action";
  items: AssetItem[];
  onItemsChange?: (items: AssetItem[]) => void;
}

const statusConfig = {
  verified: {
    text: "Verified",
    icon: CheckCircle,
    className: "bg-success/10 text-success border-success/20",
  },
  pending: {
    text: "Pending",
    icon: Clock,
    className: "bg-accent/10 text-accent border-accent/20",
  },
  action: {
    text: "Action Needed",
    icon: AlertCircle,
    className: "bg-destructive/10 text-destructive border-destructive/20",
  },
};

interface EditFormData {
  name: string;
  reference: string;
  value: string;
  status: "verified" | "pending" | "action";
  instructions: string;
}

function AssetItemCard({ 
  item, 
  index, 
  onSave 
}: { 
  item: AssetItem; 
  index: number; 
  onSave: (updatedItem: AssetItem) => void;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<EditFormData>({
    name: item.name,
    reference: item.reference,
    value: item.value || "",
    status: item.status,
    instructions: item.instructions || "",
  });

  const handleSave = () => {
    if (!formData.name.trim() || !formData.reference.trim()) {
      toast({
        title: "Validation Error",
        description: "Name and reference are required fields.",
        variant: "destructive",
      });
      return;
    }

    const updatedItem: AssetItem = {
      ...item,
      name: formData.name.trim(),
      reference: formData.reference.trim(),
      value: formData.value.trim() || undefined,
      status: formData.status,
      instructions: formData.instructions.trim() || undefined,
      lastUpdated: new Date().toLocaleDateString("en-US", { 
        month: "short", 
        day: "numeric", 
        year: "numeric" 
      }),
    };

    onSave(updatedItem);
    setIsEditing(false);
    toast({
      title: "Asset Updated",
      description: `${updatedItem.name} has been updated successfully.`,
    });
  };

  const handleCancel = () => {
    setFormData({
      name: item.name,
      reference: item.reference,
      value: item.value || "",
      status: item.status,
      instructions: item.instructions || "",
    });
    setIsEditing(false);
  };

  return (
    <motion.div
      key={item.reference}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-muted/30 rounded-lg p-4 border border-border"
    >
      <AnimatePresence mode="wait">
        {isEditing ? (
          <motion.div
            key="edit"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-foreground">Edit Asset</h4>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-muted-foreground hover:text-destructive"
                  onClick={handleCancel}
                >
                  <X className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-muted-foreground hover:text-success"
                  onClick={handleSave}
                >
                  <Check className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="grid gap-3">
              <div className="space-y-1.5">
                <Label htmlFor={`name-${index}`} className="text-xs">Asset Name</Label>
                <Input
                  id={`name-${index}`}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter asset name"
                  className="h-9"
                  maxLength={100}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label htmlFor={`reference-${index}`} className="text-xs">Reference</Label>
                  <Input
                    id={`reference-${index}`}
                    value={formData.reference}
                    onChange={(e) => setFormData({ ...formData, reference: e.target.value })}
                    placeholder="Account/Reference #"
                    className="h-9 font-mono"
                    maxLength={50}
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor={`value-${index}`} className="text-xs">Value (optional)</Label>
                  <Input
                    id={`value-${index}`}
                    value={formData.value}
                    onChange={(e) => setFormData({ ...formData, value: e.target.value })}
                    placeholder="e.g., KES 50,000"
                    className="h-9"
                    maxLength={50}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor={`status-${index}`} className="text-xs">Status</Label>
                <Select
                  value={formData.status}
                  onValueChange={(value: "verified" | "pending" | "action") => 
                    setFormData({ ...formData, status: value })
                  }
                >
                  <SelectTrigger className="h-9">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="verified">Verified</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="action">Action Needed</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor={`instructions-${index}`} className="text-xs">Instructions for Family (optional)</Label>
                <Textarea
                  id={`instructions-${index}`}
                  value={formData.instructions}
                  onChange={(e) => setFormData({ ...formData, instructions: e.target.value })}
                  placeholder="Special instructions for your successors..."
                  className="min-h-[60px] resize-none"
                  maxLength={500}
                />
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex items-start justify-between mb-3">
              <h4 className="font-semibold text-foreground">{item.name}</h4>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className={statusConfig[item.status].className}>
                  {statusConfig[item.status].text}
                </Badge>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 text-muted-foreground hover:text-accent"
                  onClick={() => setIsEditing(true)}
                >
                  <Pencil className="w-3.5 h-3.5" />
                </Button>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Reference:</span>
                <span className="font-mono text-foreground">••••{item.reference.slice(-4)}</span>
              </div>
              {item.value && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Value:</span>
                  <span className="font-semibold text-foreground">{item.value}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-muted-foreground">Last Updated:</span>
                <span className="text-foreground">{item.lastUpdated}</span>
              </div>
            </div>

            {item.documents && item.documents.length > 0 && (
              <div className="mt-3 pt-3 border-t border-border">
                <p className="text-xs text-muted-foreground mb-2">Attached Documents:</p>
                <div className="flex flex-wrap gap-2">
                  {item.documents.map((doc) => (
                    <span
                      key={doc}
                      className="inline-flex items-center gap-1 px-2 py-1 bg-background rounded text-xs text-foreground"
                    >
                      <FileText className="w-3 h-3" />
                      {doc}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {item.instructions && (
              <div className="mt-3 pt-3 border-t border-border">
                <p className="text-xs text-muted-foreground mb-1">Instructions for Family:</p>
                <p className="text-sm text-foreground italic">"{item.instructions}"</p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function AssetDetailDialog({
  open,
  onOpenChange,
  icon: Icon,
  title,
  status,
  items,
  onItemsChange,
}: AssetDetailDialogProps) {
  const [localItems, setLocalItems] = useState<AssetItem[]>(items);
  const statusStyle = statusConfig[status];
  const StatusIcon = statusStyle.icon;

  // Sync local items when props change
  if (items !== localItems && open) {
    setLocalItems(items);
  }

  const handleItemSave = (index: number, updatedItem: AssetItem) => {
    const newItems = [...localItems];
    newItems[index] = updatedItem;
    setLocalItems(newItems);
    onItemsChange?.(newItems);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
              <Icon className="w-6 h-6 text-accent" />
            </div>
            <div>
              <DialogTitle className="font-serif text-xl">{title}</DialogTitle>
              <Badge variant="outline" className={`mt-1 ${statusStyle.className}`}>
                <StatusIcon className="w-3 h-3 mr-1" />
                {statusStyle.text}
              </Badge>
            </div>
          </div>
        </DialogHeader>

        <div className="mt-4 space-y-4">
          {localItems.map((item, index) => (
            <AssetItemCard
              key={`${item.reference}-${index}`}
              item={item}
              index={index}
              onSave={(updatedItem) => handleItemSave(index, updatedItem)}
            />
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          <Button variant="gold" className="flex-1">
            Add New Asset
          </Button>
          <Button variant="outline" className="flex-1" onClick={() => onOpenChange(false)}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
