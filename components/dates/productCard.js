import React from "react";
import { ShoppingCart } from "lucide-react";

export default function ProductCard({ product, whatsappNumber }) {
  const handleOrder = () => {
    const message = `Hello! I'd like to order: ${product.name} (${product.price} SAR)`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div 
      className="group rounded-3xl bg-[#e0e0e0] overflow-hidden transition-all duration-500 hover:scale-[1.02]"
      style={{
        boxShadow: '16px 16px 32px #bebebe, -16px -16px 32px #ffffff'
      }}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden h-72">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isNew && (
            <span 
              className="px-4 py-2 rounded-xl bg-[#e0e0e0] text-xs font-semibold text-[#8b7355] backdrop-blur-sm"
              style={{
                boxShadow: '4px 4px 8px #bebebe, -4px -4px 8px #ffffff'
              }}
            >
              NEW
            </span>
          )}
          {product.isBestSeller && (
            <span 
              className="px-4 py-2 rounded-xl bg-[#e0e0e0] text-xs font-semibold text-[#8b7355] backdrop-blur-sm"
              style={{
                boxShadow: '4px 4px 8px #bebebe, -4px -4px 8px #ffffff'
              }}
            >
              BEST SELLER
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#3a3a3a] mb-2">
          {product.name}
        </h3>
        <p className="text-[#6a6a6a] mb-4 leading-relaxed">
          {product.description}
        </p>

        {/* Price and Order Button */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-3xl font-bold text-[#3a3a3a]">
              {product.price}
            </span>
            <span className="text-lg text-[#8a8a8a] ml-2">SAR</span>
          </div>

          <button
            onClick={handleOrder}
            className="p-4 rounded-2xl bg-[#e0e0e0] transition-all duration-300 hover:scale-110 active:scale-95 group"
            style={{
              boxShadow: '6px 6px 12px #bebebe, -6px -6px 12px #ffffff'
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.boxShadow = 'inset 4px 4px 8px #bebebe, inset -4px -4px 8px #ffffff';
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.boxShadow = '6px 6px 12px #bebebe, -6px -6px 12px #ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '6px 6px 12px #bebebe, -6px -6px 12px #ffffff';
            }}
          >
            <ShoppingCart className="w-6 h-6 text-[#8b7355] group-hover:text-[#6a5644]" />
          </button>
        </div>
      </div>
    </div>
  );
}