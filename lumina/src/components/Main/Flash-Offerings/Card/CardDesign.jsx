import React, { useState } from 'react';
import { Heart, ShoppingBag, Star } from 'lucide-react';

const ProductCard = (props) => {
  // 1. Favorite state toiri korun (default false)
  const [isFavorite, setIsFavorite] = useState(false);

  // 2. Toggle handler function
  const toggleFavorite = (e) => {
    e.stopPropagation(); // Event bubbling bondho korar jonno
    setIsFavorite((prev) => !prev);
  };

  return (
    <div className="group relative w-80 rounded-2xl bg-white p-3 border border-gray-200/80 shadow-sm transition-all duration-300 hover:border-gray-300 hover:shadow-xl">
      
      {/* Image Container */}
      <div className="relative h-64 w-full overflow-hidden rounded-xl bg-gray-100">
        <img
          src={props.img}
          alt="Titan Minimalist Chronograph"
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />

        {/* 15% OFF Badge */}
        <span className="absolute top-3 left-3 rounded-md bg-red-600 px-2.5 py-1 text-xs font-bold text-white tracking-wider uppercase shadow-sm z-10">
          {props.discount} OFF
        </span>

        {/* --- Favorite / Wishlist Button --- */}
        <button 
          onClick={toggleFavorite}
          aria-label="Add to Wishlist"
          className={` cursor-pointer absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-sm transition-all duration-200 shadow-sm z-10 active:scale-90 ${
            isFavorite 
              ? 'bg-white text-red-500 scale-110' 
              : 'bg-white/80 text-gray-700 hover:bg-white hover:text-red-500'
          }`}
        >
          <Heart 
            className={`h-5 w-5 transition-transform duration-200 ${
              isFavorite ? 'fill-red-500 text-red-500 scale-110' : ''
            }`} 
          />
        </button>
        {/* ---------------------------------- */}

        {/* Hover Slide Animation Section */}
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-linear-to-t from-black/40 via-black/10 to-transparent translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
          <div className="grid grid-cols-[1fr_auto] gap-2">
            <button className=" cursor-pointer w-full rounded-lg bg-white/95 backdrop-blur-md py-2.5 text-sm font-semibold text-gray-900 shadow-lg transition-colors hover:bg-white active:scale-[0.98]">
              Quick View
            </button>
            <button 
              aria-label="Add to Cart"
              className=" cursor-pointer flex h-10 w-12 items-center justify-center rounded-lg bg-gray-900 text-white shadow-lg transition-colors hover:bg-black active:scale-[0.98]"
            >
              <ShoppingBag className="h-5 w-5" />
            </button>
          </div>
        </div>

      </div>

      {/* Product Details */}
      <div className="mt-3 space-y-1.5 px-1">
        <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
          {props.shopName} <span className="mx-1">•</span> {props.itemName}
        </p>

        <h3 className="text-base font-bold text-gray-900 leading-snug cursor-pointer">
          {props.productTitle}
        </h3>

        <div className="flex items-center gap-1">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <span className="text-xs text-gray-500 font-medium">({props.reating})</span>
        </div>

        <div className="pt-2 flex items-baseline gap-2">
          <span className="text-xl font-bold text-gray-900">${props.price}.00</span>
          <span className="text-sm text-gray-400 line-through">${props.discoutnPrice}.00</span>
        </div>
      </div>

    </div>
  );
};

export default ProductCard;