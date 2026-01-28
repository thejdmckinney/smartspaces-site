'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Lightbulb, Sun, Moon, Palette, Clock, Smartphone, ChevronDown, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function SmartLightingPage() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-blue-500/20">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image 
              src="/smart-spaces-logox2.png" 
              alt="SmartSpaces DFW Logo" 
              width={150} 
              height={150}
              className="object-contain"
            />
          </Link>
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/" className="text-slate-300 hover:text-blue-400 transition-colors">
              Home
            </Link>
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-1">
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-900/95 backdrop-blur-md border border-blue-500/30 rounded-xl shadow-xl py-2 z-50">
                  <Link 
                    href="/services/home-automation" 
                    className="block px-6 py-3 text-slate-300 hover:text-blue-400 hover:bg-slate-800/50 transition-colors"
                  >
                    Home Automation
                  </Link>
                  <Link 
                    href="/services/smart-lighting" 
                    className="block px-6 py-3 text-blue-400 bg-slate-800/50 font-medium"
                  >
                    Smart Lighting
                  </Link>
                  <Link 
                    href="/services/security-systems" 
                    className="block px-6 py-3 text-slate-300 hover:text-blue-400 hover:bg-slate-800/50 transition-colors"
                  >
                    Security Systems
                  </Link>
                  <Link 
                    href="/services/integration" 
                    className="block px-6 py-3 text-slate-300 hover:text-blue-400 hover:bg-slate-800/50 transition-colors"
                  >
                    Integration
                  </Link>
                  <Link 
                    href="/services/ev-installation" 
                    className="block px-6 py-3 text-slate-300 hover:text-blue-400 hover:bg-slate-800/50 transition-colors"
                  >
                    EV Installation
                  </Link>
                </div>
              )}
            </div>
            <Link href="/pricing" className="text-slate-300 hover:text-blue-400 transition-colors">
              Pricing
            </Link>
            <Link href="/products" className="text-slate-300 hover:text-blue-400 transition-colors">
              Products
            </Link>
            <Link href="/contact" className="text-slate-300 hover:text-blue-400 transition-colors">
              Contact Us
            </Link>
          </div>
          
          {/* Desktop Get Started Button */}
          <Link 
            href="/contact"
            className="hidden md:block px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all"
          >
            Get Started
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-slate-300 hover:text-blue-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 shadow-xl">
            <div className="flex flex-col p-4 space-y-4">
              <Link 
                href="/" 
                className="text-slate-300 hover:text-blue-400 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <div className="border-t border-slate-800 pt-2">
                <div className="text-slate-400 text-sm font-medium mb-2">Services</div>
                <Link 
                  href="/services/home-automation" 
                  className="text-slate-300 hover:text-blue-400 transition-colors py-2 px-3 block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home Automation
                </Link>
                <Link 
                  href="/services/smart-lighting" 
                  className="text-blue-400 font-medium bg-slate-800/50 py-2 px-3 rounded block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Smart Lighting
                </Link>
                <Link 
                  href="/services/security-systems" 
                  className="text-slate-300 hover:text-blue-400 transition-colors py-2 px-3 block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Security Systems
                </Link>
                <Link 
                  href="/services/integration" 
                  className="text-slate-300 hover:text-blue-400 transition-colors py-2 px-3 block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Integration & Network Health
                </Link>
                <Link 
                  href="/services/ev-installation" 
                  className="text-slate-300 hover:text-blue-400 transition-colors py-2 px-3 block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  EV Charger Installation
                </Link>
              </div>
              <Link 
                href="/pricing" 
                className="text-slate-300 hover:text-blue-400 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                href="/products" 
                className="text-slate-300 hover:text-blue-400 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                href="/contact" 
                className="text-slate-300 hover:text-blue-400 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
              <Link 
                href="/contact"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-medium text-center mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-3 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-6 py-2 mb-6">
                <Lightbulb className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-medium">Smart Lighting</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Perfect Ambiance,{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Every Time
                </span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Create the perfect atmosphere for any moment with intelligent lighting that adapts to your lifestyle. 
                Control brightness, color, and mood with a simple tap or voice command.
              </p>
              
              <Link 
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
              >
                Get Started
              </Link>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative rounded-3xl overflow-hidden">
                <Image 
                  src="/smart-spaces-lighting.png" 
                  alt="Smart Lighting Systems" 
                  width={600} 
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Smart Lighting Features
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Palette,
                title: 'Color Control',
                description: 'Choose from millions of colors to match any mood or occasion'
              },
              {
                icon: Clock,
                title: 'Automated Scheduling',
                description: 'Set schedules that align with your daily routines and circadian rhythm'
              },
              {
                icon: Sun,
                title: 'Daylight Adaptation',
                description: 'Lights adjust automatically based on natural daylight levels'
              },
              {
                icon: Moon,
                title: 'Scene Creation',
                description: 'Create custom lighting scenes for movie nights, dinner parties, and more'
              },
              {
                icon: Smartphone,
                title: 'Remote Control',
                description: 'Control your lights from anywhere using your smartphone'
              },
              {
                icon: Lightbulb,
                title: 'Voice Integration',
                description: 'Compatible with Alexa, Google Home, and Apple HomeKit'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-slate-800/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all"
              >
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Benefits of Smart Lighting
          </h2>
          
          <div className="space-y-6">
            {[
              {
                title: 'Energy Savings',
                description: 'LED smart bulbs use up to 75% less energy than traditional bulbs'
              },
              {
                title: 'Extended Lifespan',
                description: 'Smart LED bulbs last up to 25,000 hours or more'
              },
              {
                title: 'Enhanced Security',
                description: 'Program lights to turn on/off when away to simulate occupancy'
              },
              {
                title: 'Wellness Benefits',
                description: 'Tunable white light supports your natural sleep-wake cycle'
              }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6"
              >
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-slate-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Illuminate Your Home Intelligently
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Discover how smart lighting can transform your living spaces.
            </p>
            <Link 
              href="https://calendly.com/jeremy-leveragelab/virtual-or-on-site-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-cyan-600 rounded-full font-semibold hover:shadow-xl transition-all"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-500/20 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Image 
              src="/smart-spaces-logox2.png" 
              alt="SmartSpaces DFW Logo" 
              width={60} 
              height={60}
              className="object-contain"
            />
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              SmartSpaces DFW
            </div>
          </div>
          <p className="text-slate-400 mb-6">
            Making homes smarter, one installation at a time.
          </p>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} SmartSpaces DFW. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
