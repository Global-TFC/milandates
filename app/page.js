"use client";
import { useState } from "react";
import {
  Phone,
  MessageCircle,
  Package,
  Award,
  Heart,
  ChevronRight,
} from "lucide-react";
import ProductCard from "../components/dates/productCard";
import Hero from "../components/dates/hero";
import WhatsAppButton from "../components/dates/whatsapp";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const products = [
    {
      id: 1,
      name: "Medjool Premium Dates",
      description: "Large, soft, and naturally sweet premium dates",
      price: "75.00",
      image: "dates1.png",
      category: "premium",
      isNew: true,
    },
    {
      id: 2,
      name: "Ajwa Sacred Dates",
      description: "Authentic dates from Medina, rich and nutritious",
      price: "95.00",
      image: "dates2.png",
      category: "premium",
      isBestSeller: true,
    },
    {
      id: 3,
      name: "Chocolate Covered Dates",
      description: "Premium dates dipped in Belgian chocolate",
      price: "85.00",
      image: "dates3.png",
      category: "chocolate",
      isNew: true,
    },
    {
      id: 4,
      name: "Stuffed Dates Gift Box",
      description: "Dates filled with almonds, walnuts & pistachios",
      price: "120.00",
      image: "dates3.png",
      category: "gift",
      isBestSeller: true,
    },
    {
      id: 5,
      name: "Organic Sukkari Dates",
      description: "Golden, caramel-like texture, naturally soft",
      price: "65.00",
      image: "dates2.png",
      category: "organic",
      isNew: true,
    },
    {
      id: 6,
      name: "Luxury Date Collection",
      description: "Curated selection of our finest varieties",
      price: "155.00",
      image: "dates1.png",
      category: "gift",
      isBestSeller: true,
    },
  ];

  const categories = [
    { id: "all", label: "All Products" },
    { id: "premium", label: "Premium" },
    { id: "chocolate", label: "Chocolate" },
    { id: "gift", label: "Gift Sets" },
    { id: "organic", label: "Organic" },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const bestSellers = products.filter((p) => p.isBestSeller);

  const whatsappNumber = "1234567890"; // Replace with actual WhatsApp number

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Store",
    "name": "Milan Dates",
    "description": "Premium quality dates from the world's finest farms, delivered fresh to your doorstep",
    "url": "https://milandates.com",
    "telephone": whatsappNumber,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Premium Dates Collection",
      "itemListElement": products.map((product, index) => ({
        "@type": "Product",
        "position": index + 1,
        "name": product.name,
        "description": product.description,
        "image": `https://milandates.com/${product.image}`,
        "offers": {
          "@type": "Offer",
          "price": product.price,
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        "brand": {
          "@type": "Brand",
          "name": "Milan Dates"
        },
        "category": product.category
      }))
    },
    "sameAs": [
      `https://wa.me/${whatsappNumber}`
    ]
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <main className="min-h-screen bg-[#e0e0e0] scroll-smooth">
        {/* Top anchor for navbar */}
        <div id="top" />
        {/* Hero Section */}
        <Hero whatsappNumber={whatsappNumber} />

      {/* Best Sellers */}
      <section id="best-sellers" className="py-24 px-4 bg-[#e8e8e8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3a3a3a] mb-4">
              Best Sellers
            </h2>
            <p className="text-lg text-[#6a6a6a] max-w-2xl mx-auto">
              Our customers' favorite selections
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bestSellers.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                whatsappNumber={whatsappNumber}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3a3a3a] mb-4">
              Our Collection
            </h2>
            <p className="text-lg text-[#6a6a6a] mb-8">
              Discover premium dates for every occasion
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-8 py-4 rounded-2xl bg-[#e0e0e0] transition-all duration-300 font-medium ${
                    selectedCategory === category.id
                      ? "text-[#8b7355]"
                      : "text-[#6a6a6a]"
                  }`}
                  style={
                    selectedCategory === category.id
                      ? {
                          boxShadow:
                            "inset 6px 6px 12px #bebebe, inset -6px -6px 12px #ffffff",
                        }
                      : {
                          boxShadow:
                            "6px 6px 12px #bebebe, -6px -6px 12px #ffffff",
                        }
                  }
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                whatsappNumber={whatsappNumber}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section id="features" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div
              className="p-8 rounded-3xl bg-[#e0e0e0] transition-all duration-300 hover:scale-[1.02]"
              style={{
                boxShadow: "12px 12px 24px #bebebe, -12px -12px 24px #ffffff",
              }}
            >
              <div
                className="w-16 h-16 rounded-2xl bg-[#e0e0e0] flex items-center justify-center mb-6"
                style={{
                  boxShadow:
                    "inset 6px 6px 12px #bebebe, inset -6px -6px 12px #ffffff",
                }}
              >
                <Package className="w-8 h-8 text-[#8b7355]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#4a4a4a]">
                Premium Quality
              </h3>
              <p className="text-[#6a6a6a] leading-relaxed">
                Carefully selected dates from the finest farms, ensuring
                exceptional taste and texture
              </p>
            </div>

            <div
              className="p-8 rounded-3xl bg-[#e0e0e0] transition-all duration-300 hover:scale-[1.02]"
              style={{
                boxShadow: "12px 12px 24px #bebebe, -12px -12px 24px #ffffff",
              }}
            >
              <div
                className="w-16 h-16 rounded-2xl bg-[#e0e0e0] flex items-center justify-center mb-6"
                style={{
                  boxShadow:
                    "inset 6px 6px 12px #bebebe, inset -6px -6px 12px #ffffff",
                }}
              >
                <Award className="w-8 h-8 text-[#8b7355]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#4a4a4a]">
                Award Winning
              </h3>
              <p className="text-[#6a6a6a] leading-relaxed">
                Recognized internationally for excellence in quality and
                presentation
              </p>
            </div>

            <div
              className="p-8 rounded-3xl bg-[#e0e0e0] transition-all duration-300 hover:scale-[1.02]"
              style={{
                boxShadow: "12px 12px 24px #bebebe, -12px -12px 24px #ffffff",
              }}
            >
              <div
                className="w-16 h-16 rounded-2xl bg-[#e0e0e0] flex items-center justify-center mb-6"
                style={{
                  boxShadow:
                    "inset 6px 6px 12px #bebebe, inset -6px -6px 12px #ffffff",
                }}
              >
                <Heart className="w-8 h-8 text-[#8b7355]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#4a4a4a]">
                Naturally Healthy
              </h3>
              <p className="text-[#6a6a6a] leading-relaxed">
                Rich in nutrients, fiber, and natural energy - perfect for a
                healthy lifestyle
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-[#e8e8e8]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3a3a3a] mb-6">
            The Art of Premium Dates
          </h2>
          <p className="text-lg text-[#6a6a6a] leading-relaxed mb-8">
            We source the world's finest dates from carefully selected farms,
            where traditional cultivation methods meet modern quality standards.
            Each date is handpicked and inspected to ensure it meets our
            exacting standards for taste, texture, and nutritional value.
          </p>
          <p className="text-lg text-[#6a6a6a] leading-relaxed mb-12">
            From the sacred Ajwa dates of Medina to the luxurious Medjool
            varieties, our collection represents the pinnacle of date
            craftsmanship.
          </p>

          <button
            onClick={() =>
              window.open(
                `https://wa.me/${whatsappNumber}?text=Hello! I'd like to know more about your products`,
                "_blank"
              )
            }
            className="px-10 py-5 rounded-2xl bg-[#e0e0e0] text-[#3a3a3a] font-semibold transition-all duration-300 inline-flex items-center gap-3 hover:scale-[1.02]"
            style={{
              boxShadow: "8px 8px 16px #bebebe, -8px -8px 16px #ffffff",
            }}
          >
            Learn More <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3a3a3a] mb-6">
            Order Today
          </h2>
          <p className="text-lg text-[#6a6a6a] leading-relaxed mb-12">
            Experience the finest dates delivered to your door. Contact us via
            WhatsApp for instant ordering and personalized service.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <button
              onClick={() =>
                window.open(
                  `https://wa.me/${whatsappNumber}?text=Hello! I'd like to place an order`,
                  "_blank"
                )
              }
              className="p-8 rounded-3xl bg-[#e0e0e0] transition-all duration-300 hover:scale-[1.02]"
              style={{
                boxShadow: "12px 12px 24px #bebebe, -12px -12px 24px #ffffff",
              }}
            >
              <MessageCircle className="w-12 h-12 text-[#25D366] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#3a3a3a] mb-2">
                WhatsApp Order
              </h3>
              <p className="text-[#6a6a6a]">Chat with us directly</p>
            </button>

            <button
              onClick={() => window.open(`tel:${whatsappNumber}`, "_blank")}
              className="p-8 rounded-3xl bg-[#e0e0e0] transition-all duration-300 hover:scale-[1.02]"
              style={{
                boxShadow: "12px 12px 24px #bebebe, -12px -12px 24px #ffffff",
              }}
            >
              <Phone className="w-12 h-12 text-[#8b7355] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#3a3a3a] mb-2">
                Call Us
              </h3>
              <p className="text-[#6a6a6a]">Speak to our team</p>
            </button>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton whatsappNumber={whatsappNumber} />
      </main>
    </>
  );
}
