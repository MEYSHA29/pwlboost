"use client"

import { useState } from "react"
import { testimonials } from "@/lib/data"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

export default function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 4
  const totalPages = Math.ceil(testimonials.length / itemsPerPage)

  const currentTestimonials = testimonials.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  )

  return (
    <section id="reviews" className="py-20 border-y border-border/50 bg-secondary/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What Our <span className="text-gradient">Customers</span> Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied gamers who trust PWLboost for their gaming needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-xl border border-border/50 bg-card p-6 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm">
                  {testimonial.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                    <span className="text-xs text-muted-foreground">{testimonial.date}</span>
                  </div>
                  <div className="flex items-center gap-0.5 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{testimonial.text}</p>
                  <span className="text-xs text-primary">{testimonial.game}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
            disabled={currentPage === 0}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border disabled:opacity-50 hover:bg-secondary transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="text-sm text-muted-foreground">
            Page {currentPage + 1} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={currentPage === totalPages - 1}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border disabled:opacity-50 hover:bg-secondary transition-colors"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
