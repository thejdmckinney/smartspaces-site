'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Smartphone, Wifi, Zap, Puzzle, Cloud, Cpu, ChevronDown, Menu, X, Phone , MapPin, Mail, Facebook, Instagram, BadgeCheck} from 'lucide-react'
import { useState } from 'react'

export default function IntegrationPage() {
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
                      className="block px-6 py-3 text-blue-600 bg-slate-100 font-medium"
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
            <Link href="/pricing" className="text-slate-700 hover:text-blue-600 transition-colors">
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
            className="md:hidden text-slate-700 hover:text-blue-600 transition-colors"
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
                className="text-slate-700 hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <div className="border-t border-slate-800 pt-2">
                <div className="text-slate-400 text-sm font-medium mb-2">Services</div>
                <Link 
                  href="/services/home-automation" 
                  className="text-slate-700 hover:text-blue-600 transition-colors py-2 px-3 block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home Automation
                </Link>
                <Link 
                  href="/services/smart-lighting" 
                  className="text-slate-700 hover:text-blue-600 transition-colors py-2 px-3 block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Smart Lighting
                </Link>
                <Link 
                  href="/services/security-systems" 
                  className="text-slate-700 hover:text-blue-600 transition-colors py-2 px-3 block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Security Systems
                </Link>
                <Link 
                  href="/services/integration" 
                  className="text-blue-400 font-medium bg-slate-800/50 py-2 px-3 rounded block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Integration & Network Health
                </Link>
                <Link 
                  href="/services/ev-installation" 
                  className="text-slate-700 hover:text-blue-600 transition-colors py-2 px-3 block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  EV Charger Installation
                </Link>
              </div>
              <Link 
                href="/pricing" 
                className="text-slate-700 hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                href="/products" 
                className="text-slate-700 hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                href="/contact" 
                className="text-slate-700 hover:text-blue-600 transition-colors py-2"
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
              <div className="relative rounded-3xl overflow-hidden">
                <Image 
                  src="/smart-outlets-ss.png" 
                  alt="Smart Home Integration & Network Health" 
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
