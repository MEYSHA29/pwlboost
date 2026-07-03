"use client"

import Link from "next/link"
import { games } from "@/lib/data"
import GameCard from "./GameCard"
import { ArrowRight } from "lucide-react"

export default function GamesGrid() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Popular <span className="text-gradient">Games</span>
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Choose from 148+ supported games. We cover all major titles with professional boosting services.
            </p>
          </div>
          <Link
            href="/games"
            className="hidden sm:flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            View All Games <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.slice(0, 8).map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/games"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            View All Games <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
