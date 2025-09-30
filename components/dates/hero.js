import React, { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";

const slides = ["hero1.png", "hero2.png"];

export default function Hero({ whatsappNumber }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center px-4 overflow-hidden">
      {/* Sliding Banner Background */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: currentSlide === index ? 1 : 0,
            }}
          >
            <img
              src={slide}
              alt={`Premium dates showcase ${index + 1}`}
              className="w-full h-full object-cover"
            />

            {/* Subtle dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/20" />
          </div>
        ))}
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="w-3 h-3 rounded-full bg-[#e0e0e0] transition-all duration-300"
            style={
              currentSlide === index
                ? {
                    boxShadow:
                      "inset 3px 3px 6px #bebebe, inset -3px -3px 6px #ffffff",
                    transform: "scale(1.2)",
                  }
                : { boxShadow: "3px 3px 6px #bebebe, -3px -3px 6px #ffffff" }
            }
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Logo/Brand */}
        <div className="mb-8">
         
            <h1 className="text-5xl md:text-7xl font-bold text-[#fff] tracking-tight">
              Milan Dates
            </h1>
        </div>

        {/* Tagline */}
        <p
          className="text-2xl md:text-3xl text-white mb-6 font-light max-w-3xl mx-auto drop-shadow-lg"
          style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}
        >
          Nature's Finest Sweetness
        </p>
        <p
          className="text-lg md:text-xl text-white mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-lg"
          style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.7)" }}
        >
          Handpicked from the world's most renowned farms, delivered fresh to
          your doorstep
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={() =>
              window.open(
                `https://wa.me/${whatsappNumber}?text=Hello! I'd like to browse your date collection`,
                "_blank"
              )
            }
            className="px-10 py-5 rounded-2xl bg-[#e0e0e0]/95 backdrop-blur-sm text-[#3a3a3a] font-semibold transition-all duration-300 inline-flex items-center gap-3 hover:scale-[1.05] active:scale-95"
            style={{
              boxShadow: "4px 4px 8px #bebebe, -4px -4px 8px #ffffff",
            }}
          >
            Order via WhatsApp <ChevronRight className="w-5 h-5" />
          </button>

          <button
           style={{
            boxShadow:
              "inset 6px 6px 12px #bebebe, inset -6px -6px 12px #ffffff",
          }}
            onClick={() =>
              document
                .getElementById("products")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-10 py-5 rounded-2xl bg-[#e0e0e0]  font-medium transition-all duration-300 hover:scale-[1.05] active:scale-95"
           
          >
            View Collection
          </button>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-white">
          <div className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full bg-[#e0e0e0]"
              style={{
                boxShadow: "2px 2px 4px #bebebe, -2px -2px 4px #ffffff",
              }}
            />

            <span
              className="drop-shadow-lg font-medium"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
            >
              Premium Quality
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full bg-[#e0e0e0]"
              style={{
                boxShadow: "2px 2px 4px #bebebe, -2px -2px 4px #ffffff",
              }}
            />

            <span
              className="drop-shadow-lg font-medium"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
            >
              Fresh Delivery
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full bg-[#e0e0e0]"
              style={{
                boxShadow: "2px 2px 4px #bebebe, -2px -2px 4px #ffffff",
              }}
            />

            <span
              className="drop-shadow-lg font-medium"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
            >
              Satisfaction Guaranteed
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
