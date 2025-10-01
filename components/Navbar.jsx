"use client";
import Link from "next/link";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import { Badge } from "./ui/badge";
import CartSidebar from "./CartSidebar";

export default function Navbar({ whatsappNumber = "1234567890" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getTotalItems } = useCart();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-2">
      <div
        className="max-w-7xl mx-auto rounded-full bg-[#e0e0e0] flex items-center justify-between gap-4 px-4 sm:px-6 py-2"
        style={{
          border: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        {/* Brand */}
        <Link href="#top" className="flex items-center gap-2 shrink-0">
          <span
            className="inline-block w-7 h-7 rounded-full bg-[#e0e0e0]"
            style={{
              boxShadow:
                "inset 3px 3px 6px #bebebe, inset -3px -3px 6px #ffffff",
            }}
            aria-hidden
          />
          <span className="text-[#3a3a3a] font-semibold tracking-tight">
            Milan Dates
          </span>
        </Link>

        {/* Center links */}
        <div className="hidden md:flex items-center gap-8 text-[#6a6a6a] mx-auto">
          <Link
            href="#best-sellers"
            className="hover:text-[#3a3a3a] transition-colors relative"
          >
            Best Sellers
          </Link>
          <Link
            href="#products"
            className="hover:text-[#3a3a3a] transition-colors"
          >
            Collection
          </Link>
          <Link
            href="#features"
            className="hover:text-[#3a3a3a] transition-colors"
          >
            Features
          </Link>
          <Link
            href="#about"
            className="hover:text-[#3a3a3a] transition-colors"
          >
            About
          </Link>
          <Link
            href="#contact"
            className="hover:text-[#3a3a3a] transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Cart Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative px-4 py-2 rounded-full bg-[#e0e0e0] text-[#3a3a3a] font-semibold"
            style={{
              boxShadow:
                "inset 4px 4px 8px #bebebe, inset -4px -4px 8px #ffffff",
            }}
          >
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" />
              <span>Cart</span>
              {getTotalItems() > 0 && (
                <Badge 
                  className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center p-0 text-xs bg-[#8b7355] text-white"
                  style={{
                    boxShadow: "2px 2px 4px #bebebe, -2px -2px 4px #ffffff",
                  }}
                >
                  {getTotalItems()}
                </Badge>
              )}
            </div>
          </button>
          {/* Mobile menu toggle */}
          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#e0e0e0]"
            style={{ boxShadow: "3px 3px 6px #bebebe, -3px -3px 6px #ffffff" }}
            aria-label="Toggle menu"
            onClick={() => setIsOpen((v) => !v)}
          >
            <span className="block w-5 h-[2px] bg-[#3a3a3a] relative">
              <span className="absolute left-0 right-0 -top-2 h-[2px] bg-[#3a3a3a]"></span>
              <span className="absolute left-0 right-0 top-2 h-[2px] bg-[#3a3a3a]"></span>
            </span>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-4 mt-2">
          <div
            className="max-w-7xl mx-auto rounded-3xl bg-[#e0e0e0] p-4 flex flex-col gap-3"
          >
            <Link href="#best-sellers" className="px-4 py-3 rounded-2xl text-[#3a3a3a] bg-[#e0e0e0]" style={{ boxShadow: "inset 3px 3px 6px #bebebe, inset -3px -3px 6px #ffffff" }} onClick={() => setIsOpen(false)}>
              Best Sellers
            </Link>
            <Link href="#products" className="px-4 py-3 rounded-2xl text-[#3a3a3a] bg-[#e0e0e0]" style={{ boxShadow: "inset 3px 3px 6px #bebebe, inset -3px -3px 6px #ffffff" }} onClick={() => setIsOpen(false)}>
              Collection
            </Link>
            <Link href="#features" className="px-4 py-3 rounded-2xl text-[#3a3a3a] bg-[#e0e0e0]" style={{ boxShadow: "inset 3px 3px 6px #bebebe, inset -3px -3px 6px #ffffff" }} onClick={() => setIsOpen(false)}>
              Features
            </Link>
            <Link href="#about" className="px-4 py-3 rounded-2xl text-[#3a3a3a] bg-[#e0e0e0]" style={{ boxShadow: "inset 3px 3px 6px #bebebe, inset -3px -3px 6px #ffffff" }} onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="#contact" className="px-4 py-3 rounded-2xl text-[#3a3a3a] bg-[#e0e0e0]" style={{ boxShadow: "inset 3px 3px 6px #bebebe, inset -3px -3px 6px #ffffff" }} onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}

      {/* Cart Sidebar */}
      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
        whatsappNumber={whatsappNumber}
      />
    </nav>
  );
}
