"use client"

import Link from "next/link"
import { ArrowRight, Zap, Shield, Clock, Star } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Zap className="h-4 w-4" />
              Trusted by 50,000+ gamers
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              What boosts you,{" "}
              <span className="text-gradient">makes us</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg">
              Since 2020, PWLboost has united seasoned professionals and like-minded gamers to help you enjoy your games. Your success fuels our growth.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/games"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary/90 transition-colors"
              >
                Browse Games
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold hover:bg-secondary transition-colors"
              >
                Learn More
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4 text-primary" />
                100% Safe
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 text-primary" />
                24/7 Support
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Star className="h-4 w-4 text-primary" />
                4.9 Rating
              </div>
            </div>
          </div>

          {/* Right - Hero image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-card">
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop"
                alt="Gaming setup"
                className="w-full h-auto object-cover"
              />

              {/* Floating stats card */}
              <div className="absolute bottom-4 left-4 right-4 z-20 rounded-xl bg-card/90 backdrop-blur-sm border border-border/50 p-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-gradient">148+</div>
                    <div className="text-xs text-muted-foreground">Games</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gradient">50K+</div>
                    <div className="text-xs text-muted-foreground">Customers</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gradient">4.9</div>
                    <div className="text-xs text-muted-foreground">Rating</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
