

export default function Card({product}) {
  return (
    <div className="bg-slate-200 dark:bg-slate-800 max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg border border-slate-300 dark:border-slate-600">

      <div className="h-64 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
        {product.image ? (
          <img 
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-9xl md:text-8xl">🏔️</span>
        )}
      </div>

      <div className="p-6">
        <h2 className="font-semibold text-slate-900 dark:text-white">
          {product.name}
        </h2>

        <p className="text-zinc-500 dark:text-gray-400 mb-6">
          {product.description}
        </p>

        <div className="flex justify-between items-center">
          <p className="text-lg font-bold text-green-500">
            ${product.price.toFixed(2)}
          </p>

          <button className="bg-white text-black rounded-full py-3 px-10 hover:bg-green-500 hover:text-white transition-all active:scale-95">
            Buy now
          </button>
        </div>
      </div>

    </div>
  )
}