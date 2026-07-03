import Link from "next/link"
import { Star, ArrowRight } from "lucide-react"
import { Game } from "@/lib/data"

interface GameCardProps {
  game: Game
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <Link
      href={`/games/${game.slug}`}
      className="group relative rounded-xl border border-border/50 bg-card overflow-hidden hover:border-primary/50 transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={game.image}
          alt={game.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
        <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-background/80 backdrop-blur-sm px-2 py-1 text-xs font-medium">
          <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
          {game.rating}
        </div>
      </div>

      <div className="p-5">
        <div className="text-xs font-medium text-primary mb-1">{game.category}</div>
        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
          {game.name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {game.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">
            {game.services.length} services
          </span>
          <span className="flex items-center gap-1 text-sm font-medium text-primary">
            View <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  )
}
