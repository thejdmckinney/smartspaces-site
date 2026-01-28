'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Home, Lightbulb, Shield, Smartphone, ChevronDown, Menu, X } from 'lucide-react'
import { useState } from 'react'
import Head from 'next/head'

export default function HomePage() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  return (
    <>
      <Head>
        <title>SmartSpaces DFW - Professional Smart Home Installation | Dallas-Fort Worth</title>
        <meta name="description" content="Expert smart home installation in Dallas-Fort Worth. Network health first approach for reliable home automation, security systems, smart lighting & EV charging throughout DFW Metroplex." />
        <link rel="canonical" href="https://smartspacesdfw.com" />
      </Head>
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
                <div className="absolute top-full left-0 pt-2 z-50">
                  <div className="w-64 bg-slate-900/95 backdrop-blur-md border border-blue-500/30 rounded-xl shadow-xl py-2">
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
            className="md:hidden p-2 text-slate-300 hover:text-blue-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-950/98 backdrop-blur-md border-t border-blue-500/20">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              <Link 
                href="/" 
                className="block px-4 py-3 text-blue-400 font-medium bg-slate-800/50 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <div className="space-y-1">
                <div className="px-4 py-2 text-slate-400 text-xs font-semibold uppercase tracking-wider">Services</div>
                <Link 
                  href="/services/home-automation" 
                  className="block px-4 py-3 text-slate-300 hover:text-blue-400 hover:bg-slate-800/30 rounded-lg transition-colors text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home Automation
                </Link>
                <Link 
                  href="/services/smart-lighting" 
                  className="block px-4 py-3 text-slate-300 hover:text-blue-400 hover:bg-slate-800/30 rounded-lg transition-colors text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Smart Lighting
                </Link>
                <Link 
                  href="/services/security-systems" 
                  className="block px-4 py-3 text-slate-300 hover:text-blue-400 hover:bg-slate-800/30 rounded-lg transition-colors text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Security Systems
                </Link>
                <Link 
                  href="/services/integration" 
                  className="block px-4 py-3 text-slate-300 hover:text-blue-400 hover:bg-slate-800/30 rounded-lg transition-colors text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Integration
                </Link>
                <Link 
                  href="/services/ev-installation" 
                  className="block px-4 py-3 text-slate-300 hover:text-blue-400 hover:bg-slate-800/30 rounded-lg transition-colors text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  EV Installation
                </Link>
              </div>
              <Link 
                href="/pricing" 
                className="block px-4 py-3 text-slate-300 hover:text-blue-400 hover:bg-slate-800/30 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                href="/products" 
                className="block px-4 py-3 text-slate-300 hover:text-blue-400 hover:bg-slate-800/30 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                href="/contact" 
                className="block px-4 py-3 text-slate-300 hover:text-blue-400 hover:bg-slate-800/30 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
              <Link 
                href="/contact"
                className="block mx-2 mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-medium text-center hover:shadow-lg hover:shadow-blue-500/50 transition-all"
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Smart Home Systems That{' '}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Actually Work Together
                </span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Tired of devices that won't connect, Wi-Fi dead zones, and DIY setups that break? 
                We design and install reliable smart home systems backed by professional support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="#contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all inline-flex items-center justify-center gap-2"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="#services"
                  className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-blue-500/30 rounded-full text-white font-semibold hover:bg-slate-800 transition-all inline-flex items-center justify-center gap-2"
                >
                  Explore Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-blue-500/30 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-slate-900/50 rounded-2xl p-6 border border-blue-500/20">
                    <Home className="w-12 h-12 text-blue-400 mb-4" />
                    <h3 className="text-white font-semibold mb-2">Reliable Systems</h3>
                    <p className="text-slate-400 text-sm">No more conflicts or crashes</p>
                  </div>
                  <div className="bg-slate-900/50 rounded-2xl p-6 border border-cyan-500/20">
                    <Lightbulb className="w-12 h-12 text-cyan-400 mb-4" />
                    <h3 className="text-white font-semibold mb-2">True Integration</h3>
                    <p className="text-slate-400 text-sm">Everything works together</p>
                  </div>
                  <div className="bg-slate-900/50 rounded-2xl p-6 border border-purple-500/20">
                    <Shield className="w-12 h-12 text-purple-400 mb-4" />
                    <h3 className="text-white font-semibold mb-2">Network Health</h3>
                    <p className="text-slate-400 text-sm">Strong Wi-Fi foundation</p>
                  </div>
                  <div className="bg-slate-900/50 rounded-2xl p-6 border border-emerald-500/20">
                    <Smartphone className="w-12 h-12 text-emerald-400 mb-4" />
                    <h3 className="text-white font-semibold mb-2">Ongoing Support</h3>
                    <p className="text-slate-400 text-sm">We're here when you need us</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose SmartSpaces DFW
            </h2>
            <p className="text-xl text-slate-400">
              We're not selling gadgets—we're delivering systems that actually work
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Network Health First',
                description: 'Most smart homes fail because of poor Wi-Fi. We evaluate, optimize, and install enterprise-grade mesh systems so your devices actually stay connected.',
                icon: Smartphone,
                color: 'blue'
              },
              {
                title: 'True Integration',
                description: 'No more juggling apps or devices that don\'t talk to each other. We design unified systems where everything works together seamlessly.',
                icon: Home,
                color: 'purple'
              },
              {
                title: 'Ongoing Support',
                description: 'Annual system checkups, priority support, and seasonal automation tweaks. We\'re here for the long haul, not just the installation.',
                icon: Shield,
                color: 'cyan'
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-slate-800/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500/40 transition-all hover:transform hover:scale-105"
              >
                <service.icon className={`w-16 h-16 text-${service.color}-400 mb-6`} />
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Tired of Smart Home Frustration?
          </h2>
          <div className="space-y-6">
            {[
              {
                title: 'Devices That Don\'t Talk',
                description: 'You bought the latest gadgets, but they won\'t connect or work together'
              },
              {
                title: 'DIY Setups That Break',
                description: 'Your smart home worked last week, but now half of it is offline'
              },
              {
                title: 'Wi-Fi Dead Zones',
                description: 'Devices drop connection constantly because your network can\'t handle the load'
              },
              {
                title: 'No One to Call',
                description: 'When something breaks, you\'re stuck Googling and troubleshooting alone'
              }
            ].map((problem, index) => (
              <div 
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-red-500/20 rounded-xl p-6"
              >
                <h3 className="text-xl font-bold text-white mb-2">{problem.title}</h3>
                <p className="text-slate-400">{problem.description}</p>
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
              Ready for a Smart Home That Actually Works?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get a free network assessment and discover why reliability starts with proper Wi-Fi.
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
            Reliable smart home systems. Professional integration. Ongoing support.
          </p>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} SmartSpaces DFW. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
    </>
  )
}
