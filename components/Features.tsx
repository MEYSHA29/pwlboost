"use client"

import { features } from "@/lib/data"
import { Clock, Shield, Lock, Award, MessageCircle, Tag } from "lucide-react"

const iconMap: Record<string, React.ReactNode> = {
  Clock: <Clock className="h-6 w-6" />,
  Shield: <Shield className="h-6 w-6" />,
  Lock: <Lock className="h-6 w-6" />,
  Award: <Award className="h-6 w-6" />,
  MessageCircle: <MessageCircle className="h-6 w-6" />,
  Tag: <Tag className="h-6 w-6" />,
}

export default function Features() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why Choose <span className="text-gradient">PWLboost</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We speak your language and know that gaming is more than just a hobby — it's a passion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-xl border border-border/50 bg-card p-6 hover:border-primary/50 transition-all duration-300 hover:glow-purple"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                {iconMap[feature.icon]}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
