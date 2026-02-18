'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Check, ArrowRight, Shield, Zap, Home, Star, ChevronDown, Menu, X, Phone, MapPin, Mail, Facebook, Instagram, BadgeCheck } from 'lucide-react'
import { useState } from 'react'

export default function PricingPage() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-slate-100/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image 
              src="/new-smartspaces-logo.png" 
              alt="SmartSpaces DFW Logo" 
              width={150} 
              height={150}
              className="object-contain"
            />
          </Link>
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/" className="text-slate-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="text-slate-700 hover:text-blue-600 transition-colors flex items-center gap-1">
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 pt-2 z-50">
                  <div className="w-64 bg-white border border-slate-200 rounded-xl shadow-xl py-2">
                    <Link 
                      href="/services/home-automation" 
                      className="block px-6 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors"
                    >
                      Home Automation
                    </Link>
                    <Link 
                      href="/services/smart-lighting" 
                      className="block px-6 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors"
                    >
                      Smart Lighting
                    </Link>
                    <Link 
                      href="/services/security-systems" 
                      className="block px-6 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors"
                    >
                      Security Systems
                    </Link>
                    <Link 
                      href="/services/integration" 
                      className="block px-6 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors"
                    >
                      Integration
                    </Link>
                    <Link 
                      href="/services/ev-installation" 
                      className="block px-6 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors"
                    >
                      EV Installation
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link href="/pricing" className="text-blue-400 font-medium">
              Pricing
            </Link>
            <Link href="/products" className="text-slate-700 hover:text-blue-600 transition-colors">
              Products
            </Link>
            <Link href="/contact" className="text-slate-700 hover:text-blue-600 transition-colors">
              Contact Us
            </Link>
            <a 
              href="tel:+16824662130" 
              className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors font-medium"
            >
              <Phone className="w-4 h-4" />
              (682) 466-2130
            </a>
          </div>
          
          {/* Desktop CTA */}
          <Link 
            href="/contact"
            className="hidden md:block px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all"
          >
            Get Started
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-blue-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-950/98 backdrop-blur-md border-t border-blue-500/20">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              <Link href="/" className="block px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-800/30 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <div className="space-y-1">
                <div className="px-4 py-2 text-slate-400 text-xs font-semibold uppercase tracking-wider">Services</div>
                <Link href="/services/home-automation" className="block px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-800/30 rounded-lg transition-colors text-sm" onClick={() => setIsMobileMenuOpen(false)}>Home Automation</Link>
                <Link href="/services/smart-lighting" className="block px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-800/30 rounded-lg transition-colors text-sm" onClick={() => setIsMobileMenuOpen(false)}>Smart Lighting</Link>
                <Link href="/services/security-systems" className="block px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-800/30 rounded-lg transition-colors text-sm" onClick={() => setIsMobileMenuOpen(false)}>Security Systems</Link>
                <Link href="/services/integration" className="block px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-800/30 rounded-lg transition-colors text-sm" onClick={() => setIsMobileMenuOpen(false)}>Integration</Link>
                <Link href="/services/ev-installation" className="block px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-800/30 rounded-lg transition-colors text-sm" onClick={() => setIsMobileMenuOpen(false)}>EV Installation</Link>
              </div>
              <Link href="/pricing" className="block px-4 py-3 text-blue-400 font-medium bg-slate-800/50 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link>
              <Link href="/products" className="block px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-800/30 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Products</Link>
              <Link href="/contact" className="block px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-800/30 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
              <Link href="/contact" className="block mx-2 mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-medium text-center" onClick={() => setIsMobileMenuOpen(false)}>Get Started</Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Smart Home Services{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              & Pricing
            </span>
          </h1>
          <p className="text-2xl text-slate-300 mb-4">
            Simple. Reliable. Professionally Installed.
          </p>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Smart home technology should make your life easier—not more complicated. 
            We design and install reliable smart home systems using proven products that work together seamlessly.
          </p>
        </div>
      </section>

      {/* Transparency Note */}
      <section className="pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
            <p className="text-slate-300 text-center">
              To keep things transparent, we offer clear service bundles with typical installed price ranges. 
              Final pricing is confirmed after a consultation or site visit.
            </p>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Smart Home Packages
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Smart Home Starter */}
            <div className="bg-slate-800/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500/40 transition-all">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Smart Home Starter</h3>
                  <p className="text-slate-400">Best for: First-time smart home users</p>
                </div>
                <Home className="w-12 h-12 text-blue-400" />
              </div>
              <div className="mb-6">
                <p className="text-3xl font-bold text-blue-400 mb-2">$900 – $1,600</p>
                <p className="text-sm text-slate-400">Typical Installed Range</p>
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed">
                A great introduction to smart home technology. Includes smart lighting, climate control, 
                and basic automations—all professionally installed and configured to work together.
              </p>
            </div>

            {/* Smart Lighting Package */}
            <div className="bg-slate-800/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Smart Lighting Package</h3>
                  <p className="text-slate-400">Best for: Convenience and ambiance</p>
                </div>
                <Zap className="w-12 h-12 text-cyan-400" />
              </div>
              <div className="mb-6">
                <p className="text-3xl font-bold text-cyan-400 mb-2">$1,200 – $2,500</p>
                <p className="text-sm text-slate-400">Typical Installed Range</p>
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Take full control of your home's lighting with reliable, wall-switch-based smart lighting. 
                Includes professional installation, scene programming, and app/voice control.
              </p>
            </div>

            {/* Smart Security Essentials */}
            <div className="bg-slate-800/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Smart Security Essentials</h3>
                  <p className="text-slate-400">Best for: Safety and awareness</p>
                </div>
                <Shield className="w-12 h-12 text-purple-400" />
              </div>
              <div className="mb-6">
                <p className="text-3xl font-bold text-purple-400 mb-2">$1,800 – $3,500</p>
                <p className="text-sm text-slate-400">Typical Installed Range</p>
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Subscription-free smart security with local recording and professional setup. 
                Includes doorbell, cameras, alerts, and integration into your smart home system.
              </p>
            </div>

            {/* Connected Home - Most Popular */}
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border-2 border-blue-500/50 rounded-2xl p-8 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  Most Popular
                </div>
              </div>
              <div className="flex items-start justify-between mb-6 mt-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Connected Home</h3>
                  <p className="text-slate-300">Best for: Everything to "just work"</p>
                </div>
                <Check className="w-12 h-12 text-blue-400" />
              </div>
              <div className="mb-6">
                <p className="text-3xl font-bold text-blue-400 mb-2">$2,800 – $5,500</p>
                <p className="text-sm text-slate-300">Typical Installed Range</p>
              </div>
              <p className="text-slate-200 mb-6 leading-relaxed font-medium">
                Lighting, security, and comfort—fully integrated. This package brings your home together 
                with unified control, smart scenes, and professional configuration.
              </p>
            </div>
          </div>

          {/* Premium Package - Full Width */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-10">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <Star className="w-12 h-12 text-emerald-400" />
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-1">Premium Integrated Smart Home</h3>
                    <p className="text-slate-400">🔒 Consultation required</p>
                  </div>
                </div>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Designed, installed, and supported smart home systems built for long-term reliability. 
                  Includes advanced automations, whole-home integration, and network optimization.
                </p>
                <div className="inline-block">
                  <p className="text-3xl font-bold text-emerald-400">$5,500 – $10,000+</p>
                  <p className="text-sm text-slate-400">Typical Installed Range</p>
                </div>
              </div>
              <Link 
                href="https://calendly.com/jeremy-leveragelab/virtual-or-on-site-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all text-center"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>

          {/* EV Charger */}
          <div className="mt-8 bg-slate-800/30 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <Zap className="w-10 h-10 text-green-400" />
                  <h3 className="text-2xl font-bold text-white">EV Charger Installation</h3>
                </div>
                <p className="text-slate-300 mb-4">
                  Professional installation of a Level 2 EV charger, including setup and testing. 
                  Electrical upgrades or panel work may be additional.
                </p>
                <div>
                  <p className="text-3xl font-bold text-green-400 mb-1">$1,200 – $2,500</p>
                  <p className="text-sm text-slate-400">Typical Installed Range</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Pricing Works */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            How Pricing Works
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Prices shown are typical installed ranges',
              'Final pricing depends on home layout, wiring, and existing infrastructure',
              'We supply and support all recommended hardware',
              'Additional devices or advanced automations are priced clearly as add-ons'
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6"
              >
                <Check className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                <p className="text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Curated Products */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-6">
            Why We Use Curated Products
          </h2>
          <p className="text-xl text-slate-400 text-center mb-12">
            We don't install everything on the market.<br />
            <span className="text-white font-semibold">We install what works.</span>
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Fewer service issues',
              'Better performance',
              'Long-term reliability',
              'Systems that grow with your home'
            ].map((benefit, index) => (
              <div 
                key={index}
                className="bg-slate-800/30 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 text-center"
              >
                <Check className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <p className="text-lg text-white font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Not Sure Where to Start?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Book a Smart Home Consultation. We'll help you understand your options and recommend 
              the best next steps—without pressure.
            </p>
            <Link 
              href="https://calendly.com/jeremy-leveragelab/virtual-or-on-site-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:shadow-xl transition-all"
            >
              Schedule Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-500/20 bg-slate-950/50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            {/* NAP Information */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <Image 
                  src="/new-smartspaces-logo.png" 
                  alt="SmartSpaces DFW Logo" 
                  width={50} 
                  height={50}
                  className="object-contain"
                />
              </div>
              <h3 className="text-white font-bold text-lg mb-4">SmartSpaces DFW</h3>
              <div className="space-y-3 text-slate-400 text-sm">
                <a 
                  href="https://maps.google.com/?q=1122+Spanish+Moss+Dr,+Garland,+TX+75040"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 hover:text-blue-400 transition-colors"
                >
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>1122 Spanish Moss Dr<br />Garland, TX 75040</span>
                </a>
                <a 
                  href="tel:+16824662130" 
                  className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  (682) 466-2130
                </a>
                <a 
                  href="mailto:info@smartspacesdfw.com" 
                  className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  info@smartspacesdfw.com
                </a>
                <div className="flex items-center gap-2 mt-4">
                  <BadgeCheck className="w-5 h-5 text-blue-400" />
                  <span className="text-xs">Fully Insured</span>
                </div>
                <p className="text-xs text-slate-500">In business since 2024</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <Link href="/" className="hover:text-blue-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-blue-400 transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-blue-400 transition-colors">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-blue-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <Link href="/services/home-automation" className="hover:text-blue-400 transition-colors">
                    Home Automation
                  </Link>
                </li>
                <li>
                  <Link href="/services/smart-lighting" className="hover:text-blue-400 transition-colors">
                    Smart Lighting
                  </Link>
                </li>
                <li>
                  <Link href="/services/security-systems" className="hover:text-blue-400 transition-colors">
                    Security Systems
                  </Link>
                </li>
                <li>
                  <Link href="/services/integration" className="hover:text-blue-400 transition-colors">
                    Integration & Network
                  </Link>
                </li>
                <li>
                  <Link href="/services/ev-installation" className="hover:text-blue-400 transition-colors">
                    EV Charger Installation
                  </Link>
                </li>
                              <li>
                  <Link href="/services/smart-outlets-switches" className="hover:text-blue-400 transition-colors">
                    Smart Outlets & Switches
                  </Link>
                </li>
</ul>
            </div>

            {/* Service Areas */}
            <div>
              <h3 className="text-white font-bold mb-4">Service Areas</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <Link href="#" className="hover:text-blue-400 transition-colors">
                    Dallas, TX
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400 transition-colors">
                    Fort Worth, TX
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400 transition-colors">
                    Arlington, TX
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400 transition-colors">
                    Plano, TX
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400 transition-colors">
                    Irving, TX
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400 transition-colors">
                    Frisco, TX
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400 transition-colors">
                    McKinney, TX
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social & Newsletter */}
            <div>
              <h3 className="text-white font-bold mb-4">Connect With Us</h3>
              <div className="flex gap-4 mb-6">
                <a 
                  href="#" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="#" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
              </div>
              <p className="text-slate-400 text-sm mb-4">
                Follow us for smart home tips, project showcases, and special offers.
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
              <p>© {new Date().getFullYear()} SmartSpaces DFW. All rights reserved.</p>
              <div className="flex gap-6">
                <Link href="#" className="hover:text-blue-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="hover:text-blue-400 transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
