import React, { useEffect, useState } from 'react';

export default function Navbar({ cartCount = 0, onCartClick, searchQuery, setSearchQuery }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let previousScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > previousScrollY) {
        setVisible(false);
      } else if (currentScrollY < previousScrollY) {
        setVisible(true);
      }

      previousScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed left-0 top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur shadow-sm transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="mx-auto flex flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-sm">
              <span className="text-lg font-semibold">K</span>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">BUCKY'S STORE</p>
              <h1 className="text-xl font-semibold text-slate-900">Product Catalog</h1>
            </div>
          </div>

          <div className="w-full max-w-md">
            <label htmlFor="search" className="sr-only">Search products</label>
            <input
              id="search"
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search products..."
              className="w-full rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
            />
          </div>
        </div>

        <button
          type="button"
          onClick={onCartClick}
          className="group relative inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition group-hover:bg-slate-200">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M6 6h15l-1.5 9h-13z" />
              <circle cx="9" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M6 6l1.5-3h3l1 3" />
            </svg>
          </span>
          <span>Cart</span>

          {cartCount > 0 && (
            <span className="absolute -right-2 -top-2 inline-flex min-w-[1.5rem] items-center justify-center rounded-full bg-sky-600 px-2 py-1 text-xs font-semibold text-white shadow-sm">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
