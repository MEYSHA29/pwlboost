import Link from "next/link"
import { Zap, Shield, Clock, MessageCircle } from "lucide-react"

const footerLinks = {
  services: [
    { label: "Game Boosting", href: "/games" },
    { label: "Game Currency", href: "/games" },
    { label: "Game Accounts", href: "/games" },
    { label: "Coaching", href: "/games" },
  ],
  games: [
    { label: "World of Warcraft", href: "/games/world-of-warcraft" },
    { label: "Destiny 2", href: "/games/destiny-2" },
    { label: "Final Fantasy XIV", href: "/games/final-fantasy-xiv" },
    { label: "League of Legends", href: "/games/league-of-legends" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Reviews", href: "/#reviews" },
    { label: "FAQ", href: "/about" },
  ],
  legal: [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Refund Policy", href: "#" },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient">PWLboost</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              The ultimate gaming boosting service. Safe, fast, and professional since 2020.
            </p>
            <div className="flex gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary">
                <Shield className="h-4 w-4 text-primary" />
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary">
                <Clock className="h-4 w-4 text-primary" />
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary">
                <MessageCircle className="h-4 w-4 text-primary" />
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Popular Games</h3>
            <ul className="space-y-2">
              {footerLinks.games.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; 2024 PWLboost. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Made with love for gamers worldwide.
          </p>
        </div>
      </div>
    </footer>
  )
}
