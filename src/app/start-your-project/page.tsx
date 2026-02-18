'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ChevronLeft, ChevronRight, Check } from 'lucide-react'

// Type definition for form data
type FormData = {
  projectType: string
  services: string[]
  budget: string
  city: string
  name: string
  phone: string
  email: string
  preferredContact: string
  message: string
}

export default function StartYourProjectPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  
  // Form data state
  const [formData, setFormData] = useState<FormData>({
    projectType: '',
    services: [],
    budget: '',
    city: '',
    name: '',
    phone: '',
    email: '',
    preferredContact: '',
    message: ''
  })

  const totalSteps = 5

  // Project type options for Step 1
  const projectTypes = [
    { value: 'new-installation', label: 'New Smart Home Installation', description: 'Starting from scratch' },
    { value: 'upgrade', label: 'Upgrade Existing System', description: 'Enhance what you have' },
    { value: 'single-device', label: 'Single Device Setup', description: 'One specific device' },
    { value: 'not-sure', label: 'Not Sure Yet', description: 'Need consultation' }
  ]

  // Service options for Step 2
  const serviceOptions = [
    { value: 'smart-lighting', label: 'Smart Lighting' },
    { value: 'smart-security', label: 'Smart Security' },
    { value: 'smart-thermostats', label: 'Smart Thermostats' },
    { value: 'home-automation', label: 'Home Automation' },
    { value: 'smart-home-packages', label: 'Smart Home Packages' },
    { value: 'not-sure', label: 'Not Sure Yet' }
  ]

  // Budget options for Step 3
  const budgetOptions = [
    { value: 'under-1000', label: 'Under $1,000', description: 'Single devices' },
    { value: '1000-3000', label: '$1,000 - $3,000', description: 'Multiple devices' },
    { value: '3000-7500', label: '$3,000 - $7,500', description: 'Whole room setup' },
    { value: '7500-plus', label: '$7,500+', description: 'Whole home automation' }
  ]

  // DFW Cities for Step 4
  const cities = [
    'Dallas', 'Plano', 'Frisco', 'McKinney', 'Allen', 'Richardson', 
    'Highland Park', 'University Park', 'Southlake', 'Keller', 
    'Prosper', 'Celina', 'Rockwall', 'Garland', 'Irving', 
    'Arlington', 'Flower Mound', 'Other DFW Area'
  ]

  // Handle service checkbox toggle
  const toggleService = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }))
    // Clear error when user makes a selection
    if (errors.services) {
      setErrors(prev => ({ ...prev, services: '' }))
    }
  }

  // Validate current step
  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {}

    switch (step) {
      case 1:
        if (!formData.projectType) {
          newErrors.projectType = 'Please select a project type'
        }
        break
      case 2:
        if (formData.services.length === 0) {
          newErrors.services = 'Please select at least one service'
        }
        break
      case 3:
        if (!formData.budget) {
          newErrors.budget = 'Please select a budget range'
        }
        break
      case 4:
        if (!formData.city) {
          newErrors.city = 'Please select your city'
        }
        break
      case 5:
        if (!formData.name.trim()) {
          newErrors.name = 'Name is required'
        }
        if (!formData.phone.trim()) {
          newErrors.phone = 'Phone number is required'
        } else if (!/^[\d\s\-\(\)]+$/.test(formData.phone)) {
          newErrors.phone = 'Please enter a valid phone number'
        }
        if (!formData.email.trim()) {
          newErrors.email = 'Email is required'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = 'Please enter a valid email address'
        }
        if (!formData.preferredContact) {
          newErrors.preferredContact = 'Please select a preferred contact method'
        }
        break
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle next step
  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps))
    }
  }

  // Handle previous step
  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  // Handle form submission
  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return

    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form')
      }

      // Redirect to thank you page
      router.push('/thank-you')
    } catch (error) {
      console.error('Submission error:', error)
      setErrors({ 
        submit: error instanceof Error ? error.message : 'Failed to submit. Please try again or call us at (682) 466-2130.' 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A1F44] via-[#0066FF]/20 to-[#0A1F44] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Start Your Project
          </h1>
          <p className="text-lg text-slate-300">
            Tell us about your smart home needs
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            {[1, 2, 3, 4, 5].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                    step < currentStep
                      ? 'bg-[#0066FF] text-white'
                      : step === currentStep
                      ? 'bg-[#0066FF] text-white ring-4 ring-[#0066FF]/30'
                      : 'bg-slate-700 text-slate-400'
                  }`}
                >
                  {step < currentStep ? <Check className="w-5 h-5" /> : step}
                </div>
                {step < 5 && (
                  <div
                    className={`h-1 w-12 md:w-24 mx-2 transition-all ${
                      step < currentStep ? 'bg-[#0066FF]' : 'bg-slate-700'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="text-center text-slate-300 text-sm">
            Step {currentStep} of {totalSteps}
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl">
          {/* Step 1: Project Type */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-fadeIn">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                What best describes your project?
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {projectTypes.map((type) => (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() => {
                      setFormData(prev => ({ ...prev, projectType: type.value }))
                      setErrors(prev => ({ ...prev, projectType: '' }))
                    }}
                    className={`p-6 rounded-xl border-2 transition-all text-left ${
                      formData.projectType === type.value
                        ? 'border-[#0066FF] bg-[#0066FF]/20'
                        : 'border-white/20 bg-white/5 hover:border-[#0066FF]/50'
                    }`}
                  >
                    <div className="font-semibold text-white text-lg mb-2">
                      {type.label}
                    </div>
                    <div className="text-slate-300 text-sm">
                      {type.description}
                    </div>
                  </button>
                ))}
              </div>
              {errors.projectType && (
                <p className="text-red-400 text-sm">{errors.projectType}</p>
              )}
            </div>
          )}

          {/* Step 2: Services */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-fadeIn">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Which services are you interested in?
              </h2>
              <p className="text-slate-300 mb-4">Select all that apply</p>
              <div className="grid md:grid-cols-2 gap-4">
                {serviceOptions.map((service) => (
                  <button
                    key={service.value}
                    type="button"
                    onClick={() => toggleService(service.value)}
                    className={`p-6 rounded-xl border-2 transition-all text-left ${
                      formData.services.includes(service.value)
                        ? 'border-[#0066FF] bg-[#0066FF]/20'
                        : 'border-white/20 bg-white/5 hover:border-[#0066FF]/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-white">
                        {service.label}
                      </span>
                      {formData.services.includes(service.value) && (
                        <Check className="w-5 h-5 text-[#0066FF]" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
              {errors.services && (
                <p className="text-red-400 text-sm">{errors.services}</p>
              )}
            </div>
          )}

          {/* Step 3: Budget */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-fadeIn">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                What is your approximate budget?
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {budgetOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => {
                      setFormData(prev => ({ ...prev, budget: option.value }))
                      setErrors(prev => ({ ...prev, budget: '' }))
                    }}
                    className={`p-6 rounded-xl border-2 transition-all text-left ${
                      formData.budget === option.value
                        ? 'border-[#0066FF] bg-[#0066FF]/20'
                        : 'border-white/20 bg-white/5 hover:border-[#0066FF]/50'
                    }`}
                  >
                    <div className="font-semibold text-white text-lg mb-2">
                      {option.label}
                    </div>
                    <div className="text-slate-300 text-sm">
                      {option.description}
                    </div>
                  </button>
                ))}
              </div>
              {errors.budget && (
                <p className="text-red-400 text-sm">{errors.budget}</p>
              )}
            </div>
          )}

          {/* Step 4: Location */}
          {currentStep === 4 && (
            <div className="space-y-6 animate-fadeIn">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Where is your home located?
              </h2>
              <div>
                <select
                  value={formData.city}
                  onChange={(e) => {
                    setFormData(prev => ({ ...prev, city: e.target.value }))
                    setErrors(prev => ({ ...prev, city: '' }))
                  }}
                  className="w-full p-4 rounded-xl bg-white/10 border-2 border-white/20 text-white focus:border-[#0066FF] focus:outline-none transition-all"
                >
                  <option value="" className="bg-[#0A1F44] text-white">
                    Select your city...
                  </option>
                  {cities.map((city) => (
                    <option key={city} value={city} className="bg-[#0A1F44] text-white">
                      {city}
                    </option>
                  ))}
                </select>
                {errors.city && (
                  <p className="text-red-400 text-sm mt-2">{errors.city}</p>
                )}
              </div>
            </div>
          )}

          {/* Step 5: Contact Information */}
          {currentStep === 5 && (
            <div className="space-y-6 animate-fadeIn">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                How should we reach you?
              </h2>
              
              {/* Name */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData(prev => ({ ...prev, name: e.target.value }))
                    setErrors(prev => ({ ...prev, name: '' }))
                  }}
                  className="w-full p-4 rounded-xl bg-white/10 border-2 border-white/20 text-white placeholder-slate-400 focus:border-[#0066FF] focus:outline-none transition-all"
                  placeholder="John Smith"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-2">{errors.name}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData(prev => ({ ...prev, phone: e.target.value }))
                    setErrors(prev => ({ ...prev, phone: '' }))
                  }}
                  className="w-full p-4 rounded-xl bg-white/10 border-2 border-white/20 text-white placeholder-slate-400 focus:border-[#0066FF] focus:outline-none transition-all"
                  placeholder="(682) 466-2130"
                />
                {errors.phone && (
                  <p className="text-red-400 text-sm mt-2">{errors.phone}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData(prev => ({ ...prev, email: e.target.value }))
                    setErrors(prev => ({ ...prev, email: '' }))
                  }}
                  className="w-full p-4 rounded-xl bg-white/10 border-2 border-white/20 text-white placeholder-slate-400 focus:border-[#0066FF] focus:outline-none transition-all"
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-2">{errors.email}</p>
                )}
              </div>

              {/* Preferred Contact Method */}
              <div>
                <label className="block text-white font-medium mb-3">
                  Preferred Contact Method *
                </label>
                <div className="flex flex-wrap gap-4">
                  {['Call', 'Text', 'Email'].map((method) => (
                    <button
                      key={method}
                      type="button"
                      onClick={() => {
                        setFormData(prev => ({ ...prev, preferredContact: method }))
                        setErrors(prev => ({ ...prev, preferredContact: '' }))
                      }}
                      className={`px-6 py-3 rounded-xl border-2 transition-all font-medium ${
                        formData.preferredContact === method
                          ? 'border-[#0066FF] bg-[#0066FF]/20 text-white'
                          : 'border-white/20 bg-white/5 text-slate-300 hover:border-[#0066FF]/50'
                      }`}
                    >
                      {method}
                    </button>
                  ))}
                </div>
                {errors.preferredContact && (
                  <p className="text-red-400 text-sm mt-2">{errors.preferredContact}</p>
                )}
              </div>

              {/* Optional Message */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Anything else we should know?
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  rows={4}
                  className="w-full p-4 rounded-xl bg-white/10 border-2 border-white/20 text-white placeholder-slate-400 focus:border-[#0066FF] focus:outline-none transition-all resize-none"
                  placeholder="Any specific details about your project..."
                />
              </div>

              {/* Submit Error */}
              {errors.submit && (
                <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-xl">
                  <p className="text-red-400">{errors.submit}</p>
                </div>
              )}
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-white/10">
            <button
              type="button"
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                currentStep === 1
                  ? 'opacity-0 cursor-not-allowed'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              Previous
            </button>

            {currentStep < totalSteps ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-3 bg-[#0066FF] text-white rounded-xl font-semibold hover:bg-[#0066FF]/90 transition-all flex items-center gap-2"
              >
                Next
                <ChevronRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="px-8 py-3 bg-[#0066FF] text-white rounded-xl font-semibold hover:bg-[#0066FF]/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit
                    <Check className="w-5 h-5" />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
