import { ShoppingCart, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Cart - PWLboost",
  description: "Your shopping cart.",
}

export default function CartPage() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">
          Your <span className="text-gradient">Cart</span>
        </h1>

        <div className="rounded-xl border border-border/50 bg-card p-12 text-center">
          <ShoppingCart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground mb-6">
            Looks like you have not added any services yet.
          </p>
          <Link
            href="/games"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary/90 transition-colors"
          >
            Browse Games <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
