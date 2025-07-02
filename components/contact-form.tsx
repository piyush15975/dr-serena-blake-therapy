"use client"

import type React from "react"
import { useState } from "react"

interface FormData {
  name: string
  phone: string
  email: string
  message: string
  preferredTime: string
  agreeToContact: boolean
}

interface FormErrors {
  name?: string
  phone?: string
  email?: string
  message?: string
  preferredTime?: string
  agreeToContact?: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
    preferredTime: "",
    agreeToContact: false,
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please tell us what brings you here"
    }

    if (!formData.preferredTime.trim()) {
      newErrors.preferredTime = "Preferred contact time is required"
    }

    if (!formData.agreeToContact) {
      newErrors.agreeToContact = "You must agree to be contacted"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 md:p-8 text-center">
        <div className="text-green-600 text-4xl md:text-5xl mb-4">✓</div>
        <h3 className="text-xl md:text-2xl font-semibold text-green-800 mb-2 md:mb-3">Thank You!</h3>
        <p className="text-green-700 text-base md:text-lg">
          Your message has been sent successfully. Dr. Blake will get back to you within one business day.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
      <div className="text-center mb-6 md:mb-8">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2 md:mb-3">Get In Touch</h3>
        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
          Simply fill out the brief fields below and Dr. Blake will be in touch with you soon, usually within one
          business day. This form is safe, private, and completely free.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            className={`w-full px-3 md:px-4 py-2 md:py-3 border rounded-lg focus:ring-2 focus:ring-[#8ba396] focus:border-transparent transition-colors text-sm md:text-base ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Name"
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className={`w-full px-3 md:px-4 py-2 md:py-3 border rounded-lg focus:ring-2 focus:ring-[#8ba396] focus:border-transparent transition-colors text-sm md:text-base ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="you@example.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            className={`w-full px-3 md:px-4 py-2 md:py-3 border rounded-lg focus:ring-2 focus:ring-[#8ba396] focus:border-transparent transition-colors text-sm md:text-base ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="(555) 234-5678"
          />
          {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            What brings you here? *
          </label>
          <textarea
            id="message"
            rows={4}
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            className={`w-full px-3 md:px-4 py-2 md:py-3 border rounded-lg focus:ring-2 focus:ring-[#8ba396] focus:border-transparent transition-colors resize-vertical text-sm md:text-base ${
              errors.message ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="How can I help you?"
          />
          {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
        </div>

        <div>
          <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
            Preferred time to reach you *
          </label>
          <input
            type="text"
            id="preferredTime"
            value={formData.preferredTime}
            onChange={(e) => handleInputChange("preferredTime", e.target.value)}
            className={`w-full px-3 md:px-4 py-2 md:py-3 border rounded-lg focus:ring-2 focus:ring-[#8ba396] focus:border-transparent transition-colors text-sm md:text-base ${
              errors.preferredTime ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="e.g., Mornings, Afternoons, Evenings, Weekends"
          />
          <p className="mt-1 text-xs md:text-sm text-gray-500">
            Let us know when you are typically available for a call or consultation
          </p>
          {errors.preferredTime && <p className="mt-1 text-sm text-red-600">{errors.preferredTime}</p>}
        </div>

        <div>
          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              checked={formData.agreeToContact}
              onChange={(e) => handleInputChange("agreeToContact", e.target.checked)}
              className="mt-1 w-4 h-4 text-[#8ba396] border-gray-300 rounded focus:ring-[#8ba396] flex-shrink-0"
            />
            <span className="text-xs md:text-sm text-gray-700">
              I agree to be contacted via phone, email, or text message to discuss my inquiry. *
            </span>
          </label>
          {errors.agreeToContact && <p className="mt-1 text-sm text-red-600">{errors.agreeToContact}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#8ba396] hover:bg-[#7a9287] disabled:bg-gray-400 text-white font-medium py-3 md:py-4 px-6 rounded-lg transition-colors duration-200 text-base md:text-lg"
        >
          {isSubmitting ? "Sending..." : "Submit"}
        </button>

        <p className="text-xs text-gray-500 text-center leading-relaxed">
          By clicking submit you consent to receive texts and emails from Dr. Serena Blake
        </p>
      </form>
    </div>
  )
}
