import { notFound } from "next/navigation"
import { games } from "@/lib/data"
import { Star, ShoppingCart } from "lucide-react"

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return games.map((g) => ({ slug: g.slug }))
}

export function generateMetadata({ params }: Props) {
  const game = games.find((g) => g.slug === params.slug)
  return {
    title: game ? `${game.name} - PWLboost` : "Game Not Found",
  }
}

export default function GamePage({ params }: Props) {
  const game = games.find((g) => g.slug === params.slug)
  if (!game) return notFound()

  return (
    <div className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative rounded-2xl overflow-hidden mb-8">
              <img
                src={game.image}
                alt={game.name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                  {game.category}
                </span>
                <h1 className="text-3xl font-bold mt-2">{game.name}</h1>
              </div>
            </div>
            <p className="text-muted-foreground mb-8">{game.description}</p>
            <div className="flex items-center gap-2 mb-8">
              <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
              <span className="font-semibold">{game.rating}</span>
              <span className="text-muted-foreground">({game.reviews} reviews)</span>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold mb-4">Services</h2>
            {game.services.map((service) => (
              <div
                key={service.id}
                className="rounded-xl border border-border/50 bg-card p-5 hover:border-primary/50 transition-all"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold">{service.name}</h3>
                  <div className="text-right">
                    <div className="text-lg font-bold text-primary">${service.price}</div>
                    {service.originalPrice && (
                      <div className="text-sm text-muted-foreground line-through">
                        ${service.originalPrice}
                      </div>
                    )}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                <button className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary/90 transition-colors">
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
