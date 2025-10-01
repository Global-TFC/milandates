"use client";

import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  MessageCircle,
  Heart,
  Star,
  Award,
  Shield,
  Truck,
  Clock,
} from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-gradient-to-br from-[#f0f0f0] to-[#e8e8e8] overflow-hidden">
      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Top Section - Brand & Features */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-2xl bg-[#e0e0e0] flex items-center justify-center"
                style={{
                  boxShadow: "8px 8px 16px #bebebe, -8px -8px 16px #ffffff",
                }}
              >
                <Heart className="w-6 h-6 text-[#8b7355]" />
              </div>
              <h3 className="text-2xl font-bold text-[#3a3a3a]">Milan Dates</h3>
            </div>
            <p className="text-[#6a6a6a] leading-relaxed">
              Nature's finest sweetness delivered to your doorstep. Premium
              quality dates from the world's most renowned farms.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: "#", color: "#E4405F" },
                { icon: Facebook, href: "#", color: "#1877F2" },
                { icon: MessageCircle, href: "#", color: "#25D366" },
              ].map(({ icon: Icon, href, color }, index) => (
                <Link
                  key={index}
                  href={href}
                  className="w-10 h-10 rounded-xl bg-[#e0e0e0] flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    boxShadow: "4px 4px 8px #bebebe, -4px -4px 8px #ffffff",
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color }} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-[#3a3a3a]">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Best Sellers", href: "#best-sellers" },
                { label: "Our Collection", href: "#products" },
                { label: "Features", href: "#features" },
                { label: "About Us", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map(({ label, href }, index) => (
                <li key={index}>
                  <Link
                    href={href}
                    className="text-[#6a6a6a] hover:text-[#8b7355] transition-colors duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-[#3a3a3a]">
              Customer Service
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Order Tracking", href: "#" },
                { label: "Shipping Info", href: "#" },
                { label: "Returns & Exchanges", href: "#" },
                { label: "FAQ", href: "#" },
                { label: "Size Guide", href: "#" },
              ].map(({ label, href }, index) => (
                <li key={index}>
                  <Link
                    href={href}
                    className="text-[#6a6a6a] hover:text-[#8b7355] transition-colors duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-[#3a3a3a]">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div
                  className="w-8 h-8 rounded-lg bg-[#e0e0e0] flex items-center justify-center shrink-0"
                  style={{
                    boxShadow:
                      "inset 3px 3px 6px #bebebe, inset -3px -3px 6px #ffffff",
                  }}
                >
                  <MapPin className="w-4 h-4 text-[#8b7355]" />
                </div>
                <div>
                  <p className="text-[#6a6a6a] text-sm">
                    123 Premium Street
                    <br />
                    Dubai, UAE 12345
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-lg bg-[#e0e0e0] flex items-center justify-center"
                  style={{
                    boxShadow:
                      "inset 3px 3px 6px #bebebe, inset -3px -3px 6px #ffffff",
                  }}
                >
                  <Phone className="w-4 h-4 text-[#8b7355]" />
                </div>
                <a
                  href="tel:+971501234567"
                  className="text-[#6a6a6a] hover:text-[#8b7355] transition-colors"
                >
                  +971 50 123 4567
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-lg bg-[#e0e0e0] flex items-center justify-center"
                  style={{
                    boxShadow:
                      "inset 3px 3px 6px #bebebe, inset -3px -3px 6px #ffffff",
                  }}
                >
                  <Mail className="w-4 h-4 text-[#8b7355]" />
                </div>
                <a
                  href="mailto:hello@milandates.com"
                  className="text-[#6a6a6a] hover:text-[#8b7355] transition-colors"
                >
                  hello@milandates.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#d0d0d0]/50">
          <div className="flex items-center gap-6 text-sm text-[#6a6a6a]">
            <span>&copy; {year} Milan Dates. All rights reserved.</span>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-[#8b7355] transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-[#8b7355] transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-[#8b7355] transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
