import React from 'react'
import ProductCard from './ProductCard'

export default function ProductList({ products, onAddToCart }) {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="space-y-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Featured products</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Shop the latest arrivals</h2>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={() => onAddToCart(product)} />
          ))}
        </div>
      </section>
    </main>
  )
}
