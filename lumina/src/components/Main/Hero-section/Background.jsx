const Background = () => {
  return (
    <div className="flex justify-center pt-7 px-4">
      {/* Main Container */}
      <div className="relative w-full max-w-7xl h-130 rounded-2xl overflow-hidden">

        {/* Background Image */}
        <img
          src="https://img.magnific.com/free-photo/amazed-young-woman-shopaholic-holding-colorful-shopping-bags-look-amused-shop-buying-thi_1258-119761.jpg?semt=ais_hybrid&w=740&q=80"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Linear Gradient Overlay (Left-e dark black, Right-e subtle dark) */}
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-black/40"></div>

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col justify-center h-full max-w-2xl px-8 md:px-16 text-white">
          {/* Subtitle */}
          <span className="text-amber-600 text-xs md:text-sm font-bold tracking-widest uppercase mb-3">
            AUTUMN COLLECTION 2026
          </span>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-serif leading-tight mb-4 text-gray-100">
            Timeless Objects for the Modern Space
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 max-w-lg font-light">
            Precision chronographs, hand-thrown ceramics, and vegetable-tanned leather carryalls built to outlast trends.
          </p>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            {/* First Button */}
            <button className="bg-neutral-900/80 hover:bg-white hover:text-black text-white border border-neutral-700/50 px-6 py-3 rounded-lg text-sm font-medium transition-colors duration-300 cursor-pointer active:scale-95">
              Explore Collection
            </button>

            {/* Second Button */}
            <button className="bg-neutral-100 hover:bg-white text-neutral-900 px-6 py-3 rounded-lg text-sm font-semibold transition-colors duration-300 shadow-sm cursor-pointer active:scale-95">
              Browse Categories
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Background