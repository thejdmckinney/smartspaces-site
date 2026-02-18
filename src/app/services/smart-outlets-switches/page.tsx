'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Zap, Smartphone, Clock, Shield, Wifi, ChevronDown, Menu, X, Phone, MapPin, Mail, Facebook, Instagram, BadgeCheck } from 'lucide-react'
import { useState } from 'react'

export default function SmartOutletsSwitchesPage() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-100/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image 
                src="/new-smartspaces-logo.png" 
                alt="SmartSpaces DFW Logo" 
                width={50} 
                height={50}
                className="object-contain"
              />
              <div className="text-2xl font-bold text-slate-800">
                SmartSpaces DFW
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-slate-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              
              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className="flex items-center gap-1 text-slate-700 hover:text-blue-600 transition-colors">
                  Services
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {isServicesOpen && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="bg-white border border-slate-200 rounded-lg shadow-lg py-2 min-w-[220px]">
                      <Link 
                        href="/services/home-automation" 
                        className="block px-4 py-2 text-slate-700 hover:bg-slate-100 transition-colors"
                      >
                        Home Automation
                      </Link>
                      <Link 
                        href="/services/smart-lighting" 
                        className="block px-4 py-2 text-slate-700 hover:bg-slate-100 transition-colors"
                      >
                        Smart Lighting
                      </Link>
                      <Link 
                        href="/services/security-systems" 
                        className="block px-4 py-2 text-slate-700 hover:bg-slate-100 transition-colors"
                      >
                        Security Systems
                      </Link>
                      <Link 
                        href="/services/integration" 
                        className="block px-4 py-2 text-slate-700 hover:bg-slate-100 transition-colors"
                      >
                        Integration & Network
                      </Link>
                      <Link 
                        href="/services/ev-installation" 
                        className="block px-4 py-2 text-slate-700 hover:bg-slate-100 transition-colors"
                      >
                        EV Charger Installation
                      </Link>
                      <Link 
                        href="/services/smart-outlets-switches" 
                        className="block px-4 py-2 text-slate-700 hover:bg-slate-100 transition-colors"
                      >
                        Smart Outlets & Switches
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
                className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors"
              >
                <Phone className="w-4 h-4" />
                (682) 466-2130
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-slate-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <nav className="md:hidden pt-4 pb-2 space-y-2">
              <Link 
                href="/" 
                className="block py-2 text-slate-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              {/* Mobile Services Dropdown */}
              <div>
                <button 
                  className="flex items-center justify-between w-full py-2 text-slate-700 hover:text-blue-600 transition-colors"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isServicesOpen && (
                  <div className="pl-4 space-y-2 mt-2">
                    <Link 
                      href="/services/home-automation" 
                      className="block py-1 text-slate-600 hover:text-blue-600 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Home Automation
                    </Link>
                    <Link 
                      href="/services/smart-lighting" 
                      className="block py-1 text-slate-600 hover:text-blue-600 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Smart Lighting
                    </Link>
                    <Link 
                      href="/services/security-systems" 
                      className="block py-1 text-slate-600 hover:text-blue-600 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Security Systems
                    </Link>
                    <Link 
                      href="/services/integration" 
                      className="block py-1 text-slate-600 hover:text-blue-600 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Integration & Network
                    </Link>
                    <Link 
                      href="/services/ev-installation" 
                      className="block py-1 text-slate-600 hover:text-blue-600 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      EV Charger Installation
                    </Link>
                    <Link 
                      href="/services/smart-outlets-switches" 
                      className="block py-1 text-slate-600 hover:text-blue-600 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Smart Outlets & Switches
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                href="/pricing" 
                className="block py-2 text-slate-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                href="/products" 
                className="block py-2 text-slate-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                href="/contact" 
                className="block py-2 text-slate-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
              <a 
                href="tel:+16824662130" 
                className="flex items-center gap-2 py-2 text-slate-700 hover:text-blue-600 transition-colors"
              >
                <Phone className="w-4 h-4" />
                (682) 466-2130
              </a>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                  Smart Outlets & Switches
                </span>
              </h1>
              <p className="text-xl text-slate-300 mb-8">
                Upgrade your Dallas-Fort Worth home with intelligent power control. Our smart outlets and switches give you complete control over your home's electrical devices, whether you're in Plano, Frisco, or anywhere in the DFW Metroplex.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://calendly.com/jeremy-leveragelab/virtual-or-on-site-consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-amber-600 transition-all"
                >
                  Schedule Installation
                </a>
                <Link
                  href="/contact"
                  className="px-8 py-4 border border-orange-500/50 text-orange-400 rounded-lg font-semibold hover:bg-orange-500/10 transition-all"
                >
                  Get Quote
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl blur-3xl opacity-20"></div>
              <Image
                src="/smart-outlets-ss.png"
                alt="Smart Outlets and Switches Installation DFW"
                width={600}
                height={400}
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Smart Outlets & Switches */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Transform Every Power Point
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Smart outlets and switches are the foundation of home automation in Arlington, Irving, and throughout the Dallas area. Control your home's power with your voice, smartphone, or automated schedules.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-orange-500/20 rounded-xl p-8">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Remote Control</h3>
              <p className="text-slate-400">
                Control any device from anywhere using your smartphone. Whether you're at work in downtown Dallas or on vacation, manage your home's power with a tap.
              </p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-orange-500/20 rounded-xl p-8">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Automated Schedules</h3>
              <p className="text-slate-400">
                Set schedules for lights, fans, and appliances. Perfect for Fort Worth homeowners who want their home to appear occupied while traveling.
              </p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-orange-500/20 rounded-xl p-8">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Energy Monitoring</h3>
              <p className="text-slate-400">
                Track energy usage in real-time and identify power-hungry devices. Reduce your electricity bills across the Dallas-Fort Worth area.
              </p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-orange-500/20 rounded-xl p-8">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Safety Features</h3>
              <p className="text-slate-400">
                Smart outlets with surge protection and automatic shutoff prevent electrical hazards. Essential for McKinney and Plano smart homes.
              </p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-orange-500/20 rounded-xl p-8">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg flex items-center justify-center mb-6">
                <Wifi className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Voice Control</h3>
              <p className="text-slate-400">
                Integrate with Alexa, Google Assistant, or Siri for hands-free control. "Alexa, turn off the coffee maker" works seamlessly in your Frisco smart home.
              </p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-orange-500/20 rounded-xl p-8">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Scene Creation</h3>
              <p className="text-slate-400">
                Create custom scenes like "Movie Night" or "Good Morning" that control multiple outlets and switches with one command throughout your DFW home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Outlet Types */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Smart Outlet & Switch Solutions
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              We install a variety of smart outlet and switch options for homes in Dallas, Fort Worth, Arlington, and throughout the Metroplex.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-orange-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">In-Wall Smart Outlets</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                  <span>WiFi-enabled smart outlets with app control and voice integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                  <span>USB charging ports built-in for modern DFW smart homes</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                  <span>Energy monitoring to track power consumption room by room</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                  <span>Scheduled power control for lamps, fans, and appliances</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-orange-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Smart Switches</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                  <span>Dimmer switches for smart lighting control in Plano and Frisco homes</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                  <span>Multi-way switch configurations for hallways and staircases</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                  <span>Fan control switches with speed adjustment via smartphone</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                  <span>Works with existing wiring—no neutral wire required options available</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-orange-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Plug-In Smart Outlets</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                  <span>No installation required—perfect for renters in Irving and Arlington</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                  <span>Outdoor-rated smart outlets for patio and landscape lighting</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                  <span>Compact designs that don't block adjacent outlets</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                  <span>Individual outlet control for multiple devices per socket</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-orange-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Specialty Smart Controls</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                  <span>Smart garage door openers for Dallas-Fort Worth homes</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                  <span>Water heater controllers with scheduling and energy savings</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                  <span>Heavy-duty smart switches for pools and hot tubs</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                  <span>Smart circuit breakers for whole-home energy management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Professional Installation Process
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Our expert team serves Dallas, Fort Worth, Plano, Frisco, McKinney, Arlington, and Irving with professional smart outlet and switch installations.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                1
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Consultation</h3>
              <p className="text-slate-400">
                We assess your home's electrical system and discuss your smart home automation goals for your DFW property.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                2
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Design</h3>
              <p className="text-slate-400">
                We create a customized plan for smart outlet and switch placement throughout your Dallas-area home.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                3
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Installation</h3>
              <p className="text-slate-400">
                Our licensed electricians install your smart outlets and switches safely, following all Texas electrical codes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                4
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Setup & Training</h3>
              <p className="text-slate-400">
                We configure your smart home system, integrate with voice assistants, and train you on using your new controls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-orange-500/10 to-amber-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              Ready to Upgrade Your DFW Home?
            </span>
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Schedule a consultation with SmartSpaces DFW and discover how smart outlets and switches can transform your Dallas-Fort Worth home into an intelligent, energy-efficient living space.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://calendly.com/jeremy-leveragelab/virtual-or-on-site-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-amber-600 transition-all"
            >
              Schedule Consultation
            </a>
            <Link
              href="/contact"
              className="px-8 py-4 border border-orange-500/50 text-orange-400 rounded-lg font-semibold hover:bg-orange-500/10 transition-all"
            >
              Contact Us
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
