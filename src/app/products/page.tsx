'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ChevronDown, Home, Wifi, Lightbulb, Shield, Thermometer, Zap, CheckCircle2, Award } from 'lucide-react'

export default function ProductsPage() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const coreProducts = [
    {
      icon: Home,
      name: 'Home Assistant',
      category: 'Automation Platform',
      color: 'blue',
      description: 'Our primary automation platform, chosen for its unmatched flexibility and reliability.',
      features: [
        'Local control - works even without internet',
        'Massive device support across all brands',
        'Zero vendor lock-in or subscriptions',
        'Privacy-first architecture',
        'Unlimited automation possibilities'
      ]
    },
    {
      icon: Wifi,
      name: 'Ubiquiti UniFi',
      category: 'Networking',
      color: 'cyan',
      description: 'Our gold standard for routers, switches, and access points. The foundation of every reliable smart home.',
      features: [
        'Professional-grade reliability',
        'Remote management and monitoring',
        'Scales from small homes to large estates',
        'Advanced security features',
        'Seamless mesh coverage'
      ]
    },
    {
      icon: Lightbulb,
      name: 'Lutron',
      category: 'Smart Lighting',
      color: 'yellow',
      description: 'The industry leader in smart lighting. We install both Caseta and RadioRA systems.',
      features: [
        'Rock-solid reliability (our #1 requirement)',
        'Caseta: Perfect for most homes',
        'RadioRA: Premium option for large estates',
        'Works flawlessly with Home Assistant',
        '10+ year product lifespan'
      ]
    },
    {
      icon: Shield,
      name: 'UniFi Protect',
      category: 'Security & Cameras',
      color: 'purple',
      description: 'Complete security system with doorbells and indoor/outdoor cameras.',
      features: [
        'Local recording - no monthly fees',
        'Seamless integration with UniFi networks',
        'Professional-grade camera quality',
        'AI-powered detection and alerts',
        'Remote viewing from anywhere'
      ]
    },
    {
      icon: Thermometer,
      name: 'Ecobee',
      category: 'Climate Control',
      color: 'emerald',
      description: 'Smart thermostats that balance features, reliability, and ease of use.',
      features: [
        'Excellent Home Assistant integration',
        'User-friendly interface for all ages',
        'Remote sensors for balanced comfort',
        'Energy usage reports and insights',
        'Voice assistant compatible'
      ]
    },
    {
      icon: Zap,
      name: 'Tesla & ChargePoint',
      category: 'EV Charging',
      color: 'green',
      description: 'UL-listed, utility-friendly EV chargers for safe and fast home charging.',
      features: [
        'Tesla Wall Connector: Fastest charging for Tesla owners',
        'ChargePoint Home Flex: Universal compatibility',
        'UL-listed for safety compliance',
        'Utility rebate eligible',
        'Smart scheduling for off-peak rates'
      ]
    }
  ]

  const colorClasses = {
    blue: {
      border: 'border-blue-500/20',
      iconBg: 'bg-blue-500/10',
      iconBorder: 'border-blue-500/30',
      iconColor: 'text-blue-400',
      gradient: 'from-blue-500/10 to-blue-500/5'
    },
    cyan: {
      border: 'border-cyan-500/20',
      iconBg: 'bg-cyan-500/10',
      iconBorder: 'border-cyan-500/30',
      iconColor: 'text-cyan-400',
      gradient: 'from-cyan-500/10 to-cyan-500/5'
    },
    yellow: {
      border: 'border-yellow-500/20',
      iconBg: 'bg-yellow-500/10',
      iconBorder: 'border-yellow-500/30',
      iconColor: 'text-yellow-400',
      gradient: 'from-yellow-500/10 to-yellow-500/5'
    },
    purple: {
      border: 'border-purple-500/20',
      iconBg: 'bg-purple-500/10',
      iconBorder: 'border-purple-500/30',
      iconColor: 'text-purple-400',
      gradient: 'from-purple-500/10 to-purple-500/5'
    },
    emerald: {
      border: 'border-emerald-500/20',
      iconBg: 'bg-emerald-500/10',
      iconBorder: 'border-emerald-500/30',
      iconColor: 'text-emerald-400',
      gradient: 'from-emerald-500/10 to-emerald-500/5'
    },
    green: {
      border: 'border-green-500/20',
      iconBg: 'bg-green-500/10',
      iconBorder: 'border-green-500/30',
      iconColor: 'text-green-400',
      gradient: 'from-green-500/10 to-green-500/5'
    }
  }

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
                    className="block px-6 py-3 text-slate-300 hover:text-blue-400 hover:bg-slate-800/50 transition-colors"
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
            <Link href="/products" className="text-blue-400 font-medium">
              Products
            </Link>
            <Link href="/pricing" className="text-slate-300 hover:text-blue-400 transition-colors">
              Pricing
            </Link>
            <Link href="/contact" className="text-slate-300 hover:text-blue-400 transition-colors">
              Contact Us
            </Link>
          </div>
          <Link 
            href="/contact"
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all"
          >
            Get Started
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Award className="w-12 h-12 text-blue-400" />
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Our Core Brands
            </h1>
          </div>
          <p className="text-xl text-slate-300 leading-relaxed mb-4">
            We work exclusively with proven products that offer the highest reliability 
            and lowest service-call risk.
          </p>
          <p className="text-lg text-slate-400">
            Every brand we install has been rigorously tested and chosen for its exceptional 
            performance, longevity, and seamless integration capabilities.
          </p>
        </div>
      </section>

      {/* Why We're Selective Section */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Why We're Selective About Products
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/10 border border-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Proven Reliability</h3>
                <p className="text-slate-300">
                  We only install products that have proven themselves in real-world installations 
                  with minimal service calls and maximum uptime.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Seamless Integration</h3>
                <p className="text-slate-300">
                  Every product we install works flawlessly with our automation platform and 
                  network infrastructure for a truly integrated experience.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/10 border border-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Long-Term Support</h3>
                <p className="text-slate-300">
                  We choose manufacturers with strong track records of product support, 
                  updates, and longevity - no abandonware.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Products Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">
            Core Brands We Offer & Install
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            These are the products we actively stock, sell, and recommend because they've earned 
            our trust through years of proven performance.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {coreProducts.map((product, index) => {
              const Icon = product.icon
              const colors = colorClasses[product.color as keyof typeof colorClasses]
              
              return (
                <div 
                  key={index}
                  className={`bg-slate-800/30 backdrop-blur-sm border ${colors.border} rounded-2xl p-8 hover:border-opacity-50 transition-all`}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-16 h-16 ${colors.iconBg} border ${colors.iconBorder} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-8 h-8 ${colors.iconColor}`} />
                    </div>
                    <div>
                      <p className={`text-sm ${colors.iconColor} font-semibold mb-1`}>
                        {product.category}
                      </p>
                      <h3 className="text-2xl font-bold text-white">
                        {product.name}
                      </h3>
                    </div>
                  </div>

                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="space-y-3">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle2 className={`w-5 h-5 ${colors.iconColor} flex-shrink-0 mt-0.5`} />
                        <p className="text-slate-300">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Your Smart Home?
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Let's discuss which products are right for your home and create a customized 
              package that meets your needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/pricing"
                className="px-8 py-4 bg-white text-blue-950 rounded-full font-semibold hover:bg-slate-100 transition-all"
              >
                View Packages
              </Link>
              <Link 
                href="https://calendly.com/jeremy-leveragelab/virtual-or-on-site-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-500/20 py-12 px-6 mt-12">
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
            Reliable smart home systems. Professional integration. Ongoing support.
          </p>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} SmartSpaces DFW. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
