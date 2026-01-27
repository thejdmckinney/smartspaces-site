'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Smartphone, Wifi, Zap, Puzzle, Cloud, Cpu, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function IntegrationPage() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  
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
                    className="block px-6 py-3 text-blue-400 bg-slate-800/50 font-medium"
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
          <Link 
            href="/contact"
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all"
          >
            Get Started
          </Link>
        </nav>
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
              <div className="inline-flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-6 py-2 mb-6">
                <Smartphone className="w-5 h-5 text-emerald-400" />
                <span className="text-emerald-400 font-medium">Smart Integration</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Integration & Network Health:{' '}
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  The Foundation of Reliability
                </span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Most smart homes fail because of poor Wi-Fi, not bad devices. We start by evaluating 
                and optimizing your network, then integrate all your devices into one reliable ecosystem.
              </p>
              
              <Link 
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all"
              >
                Get Started
              </Link>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-emerald-500/30 rounded-3xl p-8">
                <Smartphone className="w-24 h-24 text-emerald-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white text-center mb-4">Network-First Approach</h3>
                <p className="text-slate-400 text-center">
                  Strong Wi-Fi is the foundation. We optimize your network before adding any devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Why Network Health Matters
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Wifi,
                title: 'Network Assessment',
                description: 'We evaluate your current Wi-Fi setup, identify dead zones, and measure capacity'
              },
              {
                icon: Cloud,
                title: 'Enterprise Mesh Systems',
                description: 'Professional-grade mesh networks that handle 50+ devices without breaking a sweat'
              },
              {
                icon: Cpu,
                title: 'Optimal Placement',
                description: 'Strategic access point placement ensures strong signal throughout your entire home'
              },
              {
                icon: Puzzle,
                title: 'Device Integration',
                description: 'Once your network is solid, we integrate all devices into one unified system'
              },
              {
                icon: Zap,
                title: 'Load Balancing',
                description: 'Smart network management prevents slowdowns even with dozens of connected devices'
              },
              {
                icon: Smartphone,
                title: 'Ongoing Monitoring',
                description: 'Annual checkups ensure your network continues to perform at its best'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-slate-800/30 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-8 hover:border-emerald-500/40 transition-all"
              >
                <feature.icon className="w-12 h-12 text-emerald-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compatible Platforms */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            The Hidden Bottleneck
          </h2>
          
          <div className="space-y-6">
            {[
              {
                title: 'Your Internet Speed Isn\'t the Problem',
                description: 'Most homes have plenty of bandwidth. The issue is Wi-Fi coverage, device capacity, and network congestion.'
              },
              {
                title: 'Consumer Routers Can\'t Handle It',
                description: 'That router from your ISP was designed for 5-10 devices. Smart homes easily have 30-50+ connected devices.'
              },
              {
                title: 'Dead Zones Kill Smart Homes',
                description: 'If your phone loses Wi-Fi in certain rooms, your smart devices will too—leading to constant disconnections.'
              },
              {
                title: 'We Fix It Before You Add Devices',
                description: 'Our network assessment catches these issues early. We install and optimize before connecting a single smart device.'
              }
            ].map((point, index) => (
              <div 
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-6"
              >
                <h3 className="text-xl font-bold text-white mb-2">{point.title}</h3>
                <p className="text-slate-400">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Ongoing Support & Maintenance
          </h2>
          
          <div className="space-y-6">
            {[
              {
                title: 'Annual System Checkups',
                description: 'We review your network health, update firmware, and ensure everything still works seamlessly'
              },
              {
                title: 'Priority Support',
                description: 'Skip the line when you need help. Get direct access to our team for fast resolution'
              },
              {
                title: 'Seasonal Automation Tweaks',
                description: 'Adjust your smart home for changing seasons—holiday lighting, summer cooling schedules, and more'
              },
              {
                title: 'System Expansion',
                description: 'Want to add new devices? We ensure they integrate properly without breaking existing setups'
              }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-6"
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
          <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-3xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Start With a Network Assessment
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Free network evaluation. Discover why strong Wi-Fi is the foundation of reliable smart homes.
            </p>
            <Link 
              href="https://calendly.com/jeremy-leveragelab/virtual-or-on-site-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-600 rounded-full font-semibold hover:shadow-xl transition-all"
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
