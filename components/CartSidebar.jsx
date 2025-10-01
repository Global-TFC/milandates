"use client";

import { useCart } from "../contexts/CartContext";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { ShoppingCart, Plus, Minus, Trash2, X } from "lucide-react";

export default function CartSidebar({ isOpen, onClose, whatsappNumber }) {
  const { items, removeFromCart, updateQuantity, clearCart, getTotalPrice, getTotalItems } = useCart();

  const handleWhatsAppOrder = () => {
    const orderItems = items.map(item => 
      `${item.name} x${item.quantity} - ₹${(parseFloat(item.price) * item.quantity).toFixed(2)}`
    ).join('\n');
    
    const message = `Hi I'd Like Order :\n\n${orderItems}\n\nTotal: ₹${getTotalPrice().toFixed(2)}`;
    
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-[400px] sm:w-[540px] bg-[#e0e0e0] border-0 p-0 overflow-hidden">
        <div className="flex flex-col h-full">
          {/* Header */}
          <SheetHeader className="p-6 border-b border-[#d0d0d0]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full bg-[#e0e0e0] flex items-center justify-center"
                  style={{
                    boxShadow: "inset 4px 4px 8px #bebebe, inset -4px -4px 8px #ffffff",
                  }}
                >
                  <ShoppingCart className="w-5 h-5 text-[#8b7355]" />
                </div>
                <div>
                  <SheetTitle className="text-[#3a3a3a] text-xl font-semibold">
                    Shopping Cart
                  </SheetTitle>
                  <SheetDescription className="text-[#6a6a6a]">
                    {getTotalItems()} item{getTotalItems() !== 1 ? 's' : ''} in your cart
                  </SheetDescription>
                </div>
              </div>
              <Badge 
                variant="secondary" 
                className="bg-[#e0e0e0] text-[#8b7355] border-[#d0d0d0]"
                style={{
                  boxShadow: "2px 2px 4px #bebebe, -2px -2px 4px #ffffff",
                }}
              >
                {getTotalItems()}
              </Badge>
            </div>
          </SheetHeader>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div
                  className="w-20 h-20 rounded-full bg-[#e0e0e0] flex items-center justify-center mb-4"
                  style={{
                    boxShadow: "inset 6px 6px 12px #bebebe, inset -6px -6px 12px #ffffff",
                  }}
                >
                  <ShoppingCart className="w-8 h-8 text-[#8b7355]" />
                </div>
                <h3 className="text-lg font-semibold text-[#3a3a3a] mb-2">
                  Your cart is empty
                </h3>
                <p className="text-[#6a6a6a] max-w-xs">
                  Add some delicious dates to get started!
                </p>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 rounded-2xl bg-[#e0e0e0]"
                  style={{
                    boxShadow: "8px 8px 16px #bebebe, -8px -8px 16px #ffffff",
                  }}
                >
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-[#e0e0e0] shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-[#3a3a3a] truncate">
                      {item.name}
                    </h4>
                    <p className="text-sm text-[#6a6a6a] line-clamp-2">
                      {item.description}
                    </p>
                    <p className="text-[#8b7355] font-semibold mt-1">
                      ₹{item.price}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-1 rounded-full bg-[#e0e0e0] hover:bg-[#f0f0f0] transition-colors"
                      style={{
                        boxShadow: "2px 2px 4px #bebebe, -2px -2px 4px #ffffff",
                      }}
                    >
                      <Trash2 className="w-4 h-4 text-[#dc2626]" />
                    </button>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-full bg-[#e0e0e0] flex items-center justify-center"
                        style={{
                          boxShadow: "inset 2px 2px 4px #bebebe, inset -2px -2px 4px #ffffff",
                        }}
                      >
                        <Minus className="w-3 h-3 text-[#6a6a6a]" />
                      </button>
                      
                      <span className="w-8 text-center font-semibold text-[#3a3a3a]">
                        {item.quantity}
                      </span>
                      
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-full bg-[#e0e0e0] flex items-center justify-center"
                        style={{
                          boxShadow: "inset 2px 2px 4px #bebebe, inset -2px -2px 4px #ffffff",
                        }}
                      >
                        <Plus className="w-3 h-3 text-[#6a6a6a]" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-[#d0d0d0] p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-[#3a3a3a]">
                  Total:
                </span>
                <span className="text-xl font-bold text-[#8b7355]">
                  ₹{getTotalPrice().toFixed(2)}
                </span>
              </div>

              <Separator className="bg-[#d0d0d0]" />

              <div className="space-y-3">
                <Button
                  onClick={handleWhatsAppOrder}
                  className="w-full py-3 rounded-2xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold"
                  style={{
                    boxShadow: "4px 4px 8px #bebebe, -4px -4px 8px #ffffff",
                  }}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Order via WhatsApp
                </Button>

                <Button
                  onClick={clearCart}
                  variant="outline"
                  className="w-full py-2 rounded-2xl bg-[#e0e0e0] border-[#d0d0d0] text-[#6a6a6a] hover:bg-[#f0f0f0]"
                  style={{
                    boxShadow: "2px 2px 4px #bebebe, -2px -2px 4px #ffffff",
                  }}
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Clear Cart
                </Button>
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
