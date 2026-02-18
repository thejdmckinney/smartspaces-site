'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Home, Lightbulb, Shield, Smartphone, ChevronDown, Menu, X, Phone, MapPin, Mail, Facebook, Instagram, BadgeCheck, Share2, Download, Maximize2 } from 'lucide-react'
import { useState } from 'react'
import Head from 'next/head'

export default function HomePage() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isInfographicOpen, setIsInfographicOpen] = useState(false)

  const handleShare = async () => {
    const shareData = {
      title: 'Smart Home Automation System - SmartSpaces DFW',
      text: 'Check out this comprehensive guide to smart home automation systems!',
      url: window.location.href
    }

    try {
      if (navigator.share) {
        await navigator.share(shareData)
      } else {
        // Fallback: copy link to clipboard
        await navigator.clipboard.writeText(window.location.href)
        alert('Link copied to clipboard!')
      }
    } catch (err) {
      console.log('Error sharing:', err)
    }
  }

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/info-graphic-home-automation.png'
    link.download = 'smart-home-automation-guide.png'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      <Head>
        <title>SmartSpaces DFW - Professional Smart Home Installation | Dallas-Fort Worth</title>
        <meta name="description" content="Expert smart home installation in Dallas-Fort Worth. Network health first approach for reliable home automation, security systems, smart lighting & EV charging throughout DFW Metroplex." />
        <link rel="canonical" href="https://smartspacesdfw.com" />
      </Head>
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
              <button className="text-slate-700 hover:text-blue-600 transition-colors flex items-center gap-1 font-medium">
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
                  className="block px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-800/30 rounded-lg transition-colors text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home Automation
                </Link>
                <Link 
                  href="/services/smart-lighting" 
                  className="block px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-800/30 rounded-lg transition-colors text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Smart Lighting
                </Link>
                <Link 
                  href="/services/security-systems" 
                  className="block px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-800/30 rounded-lg transition-colors text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Security Systems
                </Link>
                <Link 
                  href="/services/integration" 
                  className="block px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-800/30 rounded-lg transition-colors text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Integration
                </Link>
                <Link 
                  href="/services/ev-installation" 
                  className="block px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-800/30 rounded-lg transition-colors text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  EV Installation
                </Link>
                <Link 
                  href="/services/smart-outlets-switches" 
                  className="block px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-800/30 rounded-lg transition-colors text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Smart Outlets & Switches
                </Link>
              </div>
              <Link 
                href="/pricing" 
                className="block px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-800/30 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                href="/products" 
                className="block px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-800/30 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                href="/contact" 
                className="block px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-800/30 rounded-lg transition-colors"
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
                  href="/start-your-project"
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
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative">
                <div 
                  className="cursor-pointer relative overflow-hidden rounded-3xl"
                  onClick={() => setIsInfographicOpen(true)}
                >
                  <Image
                    src="/info-graphic-home-automation.png"
                    alt="Smart Home Automation System Integration"
                    width={600}
                    height={600}
                    className="relative rounded-3xl shadow-2xl transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <Maximize2 className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <button
                    onClick={handleShare}
                    className="p-3 bg-slate-900/80 backdrop-blur-sm border border-blue-500/30 rounded-full text-white hover:bg-slate-800 transition-all shadow-lg"
                    aria-label="Share infographic"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleDownload}
                    className="p-3 bg-slate-900/80 backdrop-blur-sm border border-blue-500/30 rounded-full text-white hover:bg-slate-800 transition-all shadow-lg"
                    aria-label="Download infographic"
                  >
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infographic Modal */}
      {isInfographicOpen && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsInfographicOpen(false)}
        >
          <div className="relative max-w-6xl w-full">
            <button
              onClick={() => setIsInfographicOpen(false)}
              className="absolute -top-12 right-0 p-2 text-white hover:text-blue-400 transition-colors"
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="flex gap-4 absolute -top-12 left-0">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handleShare()
                }}
                className="p-2 bg-slate-900/80 backdrop-blur-sm border border-blue-500/30 rounded-lg text-white hover:bg-slate-800 transition-all flex items-center gap-2"
              >
                <Share2 className="w-5 h-5" />
                <span className="text-sm">Share</span>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handleDownload()
                }}
                className="p-2 bg-slate-900/80 backdrop-blur-sm border border-blue-500/30 rounded-lg text-white hover:bg-slate-800 transition-all flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                <span className="text-sm">Download</span>
              </button>
            </div>
            <Image
              src="/info-graphic-home-automation.png"
              alt="Smart Home Automation System Integration"
              width={1200}
              height={1200}
              className="rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

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
    </>
  )
}
