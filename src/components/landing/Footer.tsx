import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center shadow-gold">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <span className="font-serif text-xl font-semibold text-foreground">
              Boma-Sure
            </span>
          </Link>

          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <Link to="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
            <Link to="#" className="hover:text-accent transition-colors">
              Contact Us
            </Link>
          </div>

          <p className="text-sm text-muted-foreground">
            © 2024 Boma-Sure. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
