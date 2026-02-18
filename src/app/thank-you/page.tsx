'use client'

import Link from 'next/link'
import { Check, Home } from 'lucide-react'

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A1F44] via-[#0066FF]/20 to-[#0A1F44] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Success Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-[#0066FF] rounded-full flex items-center justify-center">
            <Check className="w-12 h-12 text-white" />
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 md:p-12 shadow-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Thank You!
          </h1>
          
          <p className="text-xl text-slate-300 mb-4">
            We've received your project details and will be in touch within 24 hours.
          </p>
          
          <p className="text-lg text-slate-400 mb-8">
            Our team is reviewing your information and will reach out to discuss your smart home project.
          </p>

          {/* Contact Info */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
            <p className="text-slate-300 mb-2">
              Need to speak with us right away?
            </p>
            <a 
              href="tel:+16824662130"
              className="text-2xl font-semibold text-[#0066FF] hover:text-[#0066FF]/80 transition-colors"
            >
              (682) 466-2130
            </a>
          </div>

          {/* Home Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0066FF] text-white rounded-xl font-semibold hover:bg-[#0066FF]/90 transition-all"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
