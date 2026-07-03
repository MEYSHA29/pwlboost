import { Shield, Clock, Award, Users } from "lucide-react"

export const metadata = {
  title: "About Us - PWLboost",
  description: "Learn more about PWLboost and our mission.",
}

export default function AboutPage() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          About <span className="text-gradient">PWLboost</span>
        </h1>
        <div className="prose prose-invert mx-auto">
          <p className="text-lg text-muted-foreground text-center mb-12">
            Since 2020, PWLboost has been the trusted partner for gamers who want to achieve more without the grind.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="rounded-xl border border-border/50 bg-card p-6">
              <Shield className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Safe & Secure</h3>
              <p className="text-sm text-muted-foreground">
                We use VPN protection and manual services only. Your account safety is our top priority.
              </p>
            </div>
            <div className="rounded-xl border border-border/50 bg-card p-6">
              <Clock className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">24/7 Available</h3>
              <p className="text-sm text-muted-foreground">
                Our team works around the clock to ensure fast delivery and support.
              </p>
            </div>
            <div className="rounded-xl border border-border/50 bg-card p-6">
              <Award className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Pro Players</h3>
              <p className="text-sm text-muted-foreground">
                Every booster is verified and ranked among the top players in their game.
              </p>
            </div>
            <div className="rounded-xl border border-border/50 bg-card p-6">
              <Users className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">50K+ Customers</h3>
              <p className="text-sm text-muted-foreground">
                Join our growing community of satisfied gamers worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
