import React from 'react';

export default function CartModal({ isOpen, onClose, cart, updateQuantity, removeFromCart, clearCart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div
      className={`fixed inset-0 z-40 transition-all duration-300 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      aria-hidden={!isOpen}
    >
      <div
        className={`absolute inset-0 bg-slate-900/50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />

      <aside
        className={`fixed right-0 top-0 h-full w-full max-w-md overflow-y-auto bg-white shadow-2xl transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Your cart</p>
            <h2 className="text-2xl font-semibold text-slate-900">Review order</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-slate-100 p-2 text-slate-600 transition hover:bg-slate-200"
          >
            <span className="sr-only">Close cart</span>
            ×
          </button>
        </div>

        <div className="px-6 py-6">
          {cart.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-slate-600">
              <p className="text-lg font-medium">Your cart is empty</p>
              <p className="mt-2 text-sm">Add products to see them here.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={item.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-start gap-4">
                    <img src={item.image} alt={item.title} className="h-20 w-20 rounded-3xl object-cover" />
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                          <p className="mt-1 text-sm text-slate-500">{item.category}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="text-sm font-semibold text-slate-500 transition hover:text-slate-900"
                        >
                          Remove
                        </button>
                      </div>
                      <div className="mt-4 flex items-center justify-between gap-4 text-slate-700">
                        <div className="rounded-full border border-slate-300 bg-white px-3 py-1 text-sm font-semibold">
                          ${item.price.toFixed(2)}
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, -1)}
                            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 bg-white text-lg font-semibold text-slate-700 transition hover:bg-slate-100"
                          >
                            −
                          </button>
                          <span className="min-w-8 text-center text-sm font-semibold">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, 1)}
                            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 bg-white text-lg font-semibold text-slate-700 transition hover:bg-slate-100"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="rounded-3xl border border-slate-200 bg-white p-5">
                <div className="flex items-center justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span className="text-lg font-semibold text-slate-900">${total.toFixed(2)}</span>
                </div>
                <p className="mt-2 text-sm text-slate-500">Shipping and taxes calculated at checkout.</p>
                <button
                  type="button"
                  onClick={() => {
                    alert('🎉 Order Placed Successfully! Thank you for shopping with us.')
                    clearCart()
                    onClose()
                  }}
                  className="mt-5 w-full rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
                >
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
}
