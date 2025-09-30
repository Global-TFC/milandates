import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppButton({ whatsappNumber }) {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=Hello! I'd like to place an order`,
      '_blank'
    );
  };

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3">
          {/* Tooltip */}
          {showTooltip && (
            <div 
              className="px-6 py-3 rounded-2xl bg-[#e0e0e0] text-[#3a3a3a] font-medium whitespace-nowrap animate-fade-in"
              style={{
                boxShadow: '8px 8px 16px #bebebe, -8px -8px 16px #ffffff'
              }}
            >
              Order via WhatsApp
            </div>
          )}

          {/* Main Button */}
          <button
            onClick={handleClick}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className="w-16 h-16 rounded-full bg-[#e0e0e0] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group"
            style={{
              boxShadow: '10px 10px 20px #bebebe, -10px -10px 20px #ffffff'
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.boxShadow = 'inset 6px 6px 12px #bebebe, inset -6px -6px 12px #ffffff';
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.boxShadow = '10px 10px 20px #bebebe, -10px -10px 20px #ffffff';
            }}
            aria-label="Order via WhatsApp"
          >
            <MessageCircle className="w-8 h-8 text-[#25D366] group-hover:scale-110 transition-transform" />
          </button>
        </div>
      )}
    </>
  );
}