'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Home, Lightbulb, Shield, Zap, Car, Network, Phone, ChevronDown, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function ServicesPage() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const services = [
    {
      icon: Home,
      title: "Home Automation",
      description: "Transform your house into a smart home with integrated control of lighting, climate, entertainment, and security—all from one intuitive system.",
      features: [
        "Centralized control via smartphone or tablet",
        "Voice control integration (Alexa, Google, Siri)",
        "Automated scenes and schedules",
        "Energy monitoring and optimization"
      ],
      link: "/services/home-automation"
    },
    {
      icon: Lightbulb,
      title: "Smart Lighting",
      description: "Create the perfect ambiance with intelligent lighting systems that adjust automatically based on time of day, occupancy, and your preferences.",
      features: [
        "Dimming and color temperature control",
        "Motion-activated lighting",
        "Circadian rhythm lighting schedules",
        "Integration with whole-home automation"
      ],
      link: "/services/smart-lighting"
    },
    {
      icon: Shield,
      title: "Security Systems",
      description: "Protect your home and family with professional-grade security solutions including cameras, sensors, and 24/7 monitoring capabilities.",
      features: [
        "HD cameras with night vision",
        "Door/window sensors and motion detectors",
        "Remote monitoring and alerts",
        "Smart locks and access control"
      ],
      link: "/services/security-systems"
    },
    {
      icon: Zap,
      title: "Smart Outlets & Switches",
      description: "Upgrade your existing outlets and switches to smart versions for enhanced control, scheduling, and energy monitoring throughout your home.",
      features: [
        "Remote on/off control",
        "Energy usage monitoring",
        "Scheduling and automation",
        "Voice control compatibility"
      ],
      link: "/services/smart-outlets-switches"
    },
    {
      icon: Car,
      title: "EV Charger Installation",
      description: "Professional installation of Level 2 EV charging stations with smart features for efficient, safe, and convenient home charging.",
      features: [
        "Level 2 fast charging (up to 40 miles/hour)",
        "Smart scheduling for off-peak rates",
        "Mobile app monitoring and control",
        "Hardwired or plug-in options"
      ],
      link: "/services/ev-installation"
    },
    {
      icon: Network,
      title: "System Integration",
      description: "Seamlessly connect all your smart devices and systems into one unified platform for effortless control and automation.",
      features: [
        "Multi-brand device integration",
        "Custom automation workflows",
        "Unified control interface",
        "Professional programming and setup"
      ],
      link: "/services/integration"
    }
  ]

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
            <Link href="/" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              Home
            </Link>
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="text-blue-600 transition-colors flex items-center gap-1 font-medium">
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
                    <Link 
                      href="/services/smart-outlets-switches" 
                      className="block px-6 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors"
                    >
                      Smart Outlets & Switches
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link href="/pricing" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              Pricing
            </Link>
            <Link href="/products" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              Products
            </Link>
            <Link href="/contact" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
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
            href="/start-your-project"
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
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="px-6 py-4 space-y-4">
              <Link href="/" className="block text-slate-700 hover:text-blue-600 transition-colors font-medium">
                Home
              </Link>
              <Link href="/services" className="block text-blue-600 font-medium">
                Services
              </Link>
              <Link href="/pricing" className="block text-slate-700 hover:text-blue-600 transition-colors font-medium">
                Pricing
              </Link>
              <Link href="/products" className="block text-slate-700 hover:text-blue-600 transition-colors font-medium">
                Products
              </Link>
              <Link href="/contact" className="block text-slate-700 hover:text-blue-600 transition-colors font-medium">
                Contact Us
              </Link>
              <a 
                href="tel:+16824662130" 
                className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors font-medium"
              >
                <Phone className="w-4 h-4" />
                (682) 466-2130
              </a>
              <Link 
                href="/start-your-project"
                className="block px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-medium text-center hover:shadow-lg hover:shadow-blue-500/50 transition-all"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            From simple smart lighting to complete home automation, we deliver reliable, 
            professional installations backed by expert support across the Dallas-Fort Worth area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/start-your-project"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all inline-flex items-center justify-center gap-2"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a 
              href="tel:6824662130"
              className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-blue-500/30 rounded-full text-white font-semibold hover:bg-slate-800 transition-all inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call (682) 466-2130
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div 
                  key={index}
                  className="group bg-slate-800/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500/50 hover:bg-slate-800/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-400">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    href={service.link}
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-cyan-400 transition-colors font-semibold group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-blue-500/30 rounded-3xl p-12">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Home?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Get started with a free consultation. We'll assess your needs, discuss your goals, 
            and design a custom smart home solution that fits your lifestyle and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/start-your-project"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all inline-flex items-center justify-center gap-2"
            >
              Get Your Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a 
              href="tel:6824662130"
              className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-slate-100 transition-all inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              (682) 466-2130
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400">
            © 2024 SmartSpaces DFW. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
