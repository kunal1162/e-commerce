import React from 'react';

export default function ProductCard({ product, onAddToCart }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-64 overflow-hidden bg-slate-50">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 shadow-sm">
          {product.category}
        </span>
      </div>

      <div className="space-y-4 p-5">
        <div>
          <p className="text-lg font-semibold text-slate-900">{product.title}</p>
          <p className="mt-2 text-sm text-slate-500 line-clamp-2">{product.description}</p>
        </div>

        <div className="flex items-center justify-between gap-4 text-slate-700">
          <div>
            <p className="text-2xl font-semibold text-slate-900">${product.price.toFixed(2)}</p>
            <p className="text-sm text-slate-500">⭐ {product.rating?.rate ?? 'N/A'}</p>
          </div>
          <button
            type="button"
            onClick={onAddToCart}
            className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}
