'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ChevronDown, Mail, Phone, MapPin, Clock, Send, Menu, X } from 'lucide-react'

export default function ContactPage() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('submitting')

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      // Using Web3Forms - You'll need to replace YOUR_ACCESS_KEY with your actual key from web3forms.com
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        setFormStatus('success')
        form.reset()
        setTimeout(() => setFormStatus('idle'), 5000)
      } else {
        setFormStatus('error')
      }
    } catch (error) {
      setFormStatus('error')
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
            <Link href="/contact" className="text-blue-400 font-medium">
              Contact
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
              <Link href="/" className="block px-4 py-3 text-slate-300 hover:text-blue-400 hover:bg-slate-800/30 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <div className="space-y-1">
                <div className="px-4 py-2 text-slate-400 text-xs font-semibold uppercase tracking-wider">Services</div>
                <Link href="/services/home-automation" className="block px-4 py-3 text-slate-300 hover:text-blue-400 hover:bg-slate-800/30 rounded-lg transition-colors text-sm" onClick={() => setIsMobileMenuOpen(false)}>Home Automation</Link>
                <Link href="/services/smart-lighting" className="block px-4 py-3 text-slate-300 hover:text-blue-400 hover:bg-slate-800/30 rounded-lg transition-colors text-sm" onClick={() => setIsMobileMenuOpen(false)}>Smart Lighting</Link>
                <Link href="/services/security-systems" className="block px-4 py-3 text-slate-300 hover:text-blue-400 hover:bg-slate-800/30 rounded-lg transition-colors text-sm" onClick={() => setIsMobileMenuOpen(false)}>Security Systems</Link>
                <Link href="/services/integration" className="block px-4 py-3 text-slate-300 hover:text-blue-400 hover:bg-slate-800/30 rounded-lg transition-colors text-sm" onClick={() => setIsMobileMenuOpen(false)}>Integration</Link>
                <Link href="/services/ev-installation" className="block px-4 py-3 text-slate-300 hover:text-blue-400 hover:bg-slate-800/30 rounded-lg transition-colors text-sm" onClick={() => setIsMobileMenuOpen(false)}>EV Installation</Link>
              </div>
              <Link href="/pricing" className="block px-4 py-3 text-slate-300 hover:text-blue-400 hover:bg-slate-800/30 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link>
              <Link href="/products" className="block px-4 py-3 text-slate-300 hover:text-blue-400 hover:bg-slate-800/30 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Products</Link>
              <Link href="/contact" className="block px-4 py-3 text-blue-400 font-medium bg-slate-800/50 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
              <Link href="/contact" className="block mx-2 mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-medium text-center" onClick={() => setIsMobileMenuOpen(false)}>Get Started</Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Let's Build Your{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Smart Home
            </span>
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Ready for a smart home that actually works? Get in touch for a free consultation 
            and network assessment.
          </p>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Info Cards */}
            <div className="bg-slate-800/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-500/10 border border-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <a href="mailto:info@smartspacesdfw.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                info@smartspacesdfw.com
              </a>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <a href="tel:+16824662130" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                (682) 466-2130
              </a>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-purple-500/10 border border-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Service Area</h3>
              <p className="text-slate-300">
                Dallas-Fort Worth<br />Metroplex
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-slate-800/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 md:p-12">
              <div className="flex items-center gap-3 mb-8">
                <Send className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">Send Us a Message</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Hidden field for Web3Forms */}
                <input type="hidden" name="access_key" value="9b1e7663-b9e8-44a8-b59d-5093e34ebcf3" />
                <input type="hidden" name="subject" value="New Contact Form Submission from SmartSpaces DFW" />
                <input type="hidden" name="from_name" value="SmartSpaces DFW Website" />

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-white font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="(682) 466-2130"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-white font-medium mb-2">
                      Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="">Select a service...</option>
                      <option value="consultation">Free Consultation</option>
                      <option value="home-automation">Home Automation</option>
                      <option value="smart-lighting">Smart Lighting</option>
                      <option value="security">Security Systems</option>
                      <option value="integration">Integration & Network</option>
                      <option value="ev-charger">EV Charger Installation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {formStatus === 'success' && (
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                    <p className="text-green-400 text-center font-medium">
                      ✓ Message sent successfully! We'll get back to you soon.
                    </p>
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                    <p className="text-red-400 text-center font-medium">
                      ✗ Something went wrong. Please try again or email us directly.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-8 h-8 text-blue-400" />
              <h2 className="text-2xl font-bold text-white">Business Hours</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-slate-300">
              <div className="flex justify-between">
                <span className="font-medium">Monday - Friday:</span>
                <span>8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Saturday:</span>
                <span>9:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between md:col-span-2">
                <span className="font-medium">Sunday:</span>
                <span>Closed</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm mt-4">
              * After-hours consultations available by appointment
            </p>
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
