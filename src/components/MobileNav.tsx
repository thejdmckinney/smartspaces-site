'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'

interface MobileNavProps {
  currentPage?: string
}

export default function MobileNav({ currentPage = '' }: MobileNavProps) {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isActive = (page: string) => currentPage === page

  return (
    <header className="fixed top-0 w-full z-50 bg-slate-950/95 backdrop-blur-md border-b border-blue-500/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image 
            src="/smart-spaces-logox2.png" 
            alt="SmartSpaces DFW Logo" 
            width={100} 
            height={100}
            className="object-contain w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px]"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-6 xl:gap-8 items-center">
          <Link href="/" className={`transition-colors ${isActive('home') ? 'text-blue-400 font-medium' : 'text-slate-300 hover:text-blue-400'}`}>
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
              <div className="absolute top-full left-0 mt-2 w-64 bg-slate-900/95 backdrop-blur-md border border-blue-500/30 rounded-xl shadow-xl py-2">
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
          <Link href="/pricing" className={`transition-colors ${isActive('pricing') ? 'text-blue-400 font-medium' : 'text-slate-300 hover:text-blue-400'}`}>
            Pricing
          </Link>
          <Link href="/products" className={`transition-colors ${isActive('products') ? 'text-blue-400 font-medium' : 'text-slate-300 hover:text-blue-400'}`}>
            Products
          </Link>
          <Link href="/contact" className={`transition-colors ${isActive('contact') ? 'text-blue-400 font-medium' : 'text-slate-300 hover:text-blue-400'}`}>
            Contact Us
          </Link>
        </div>
        
        {/* Desktop CTA Button */}
        <Link 
          href="/contact"
          className="hidden lg:block px-4 xl:px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white text-sm xl:text-base font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all whitespace-nowrap"
        >
          Get Started
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-slate-300 hover:text-blue-400 transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/98 backdrop-blur-md border-t border-blue-500/20">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            <Link 
              href="/" 
              className={`block px-4 py-3 rounded-lg transition-colors ${isActive('home') ? 'text-blue-400 font-medium bg-slate-800/50' : 'text-slate-300 hover:text-blue-400 hover:bg-slate-800/30'}`}
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
              className={`block px-4 py-3 rounded-lg transition-colors ${isActive('pricing') ? 'text-blue-400 font-medium bg-slate-800/50' : 'text-slate-300 hover:text-blue-400 hover:bg-slate-800/30'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              href="/products" 
              className={`block px-4 py-3 rounded-lg transition-colors ${isActive('products') ? 'text-blue-400 font-medium bg-slate-800/50' : 'text-slate-300 hover:text-blue-400 hover:bg-slate-800/30'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              href="/contact" 
              className={`block px-4 py-3 rounded-lg transition-colors ${isActive('contact') ? 'text-blue-400 font-medium bg-slate-800/50' : 'text-slate-300 hover:text-blue-400 hover:bg-slate-800/30'}`}
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
  )
}
