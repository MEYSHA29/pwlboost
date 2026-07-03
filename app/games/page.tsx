import { games } from "@/lib/data"
import GameCard from "@/components/GameCard"

export const metadata = {
  title: "All Games - PWLboost",
  description: "Browse 148+ games with professional boosting services.",
}

export default function GamesPage() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            All <span className="text-gradient">Games</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose your game and browse our professional boosting services.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </div>
  )
}
