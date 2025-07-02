"use client"

import { useState } from "react"
import { ScrollReveal } from "./scroll-reveal"

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "Do you accept insurance?",
    answer:
      "No, but a superbill is provided for self-submission to your insurance company for potential reimbursement.",
  },
  {
    question: "Are online sessions available?",
    answer:
      "Yes - all virtual sessions are conducted via Zoom during my virtual office hours: Mon, Wed & Fri, 1 PM–5 PM.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "24-hour notice is required for cancellations. Sessions cancelled with less than 24 hours notice will be charged the full session fee.",
  },
]

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-2">
      {faqData.map((item, index) => (
        <ScrollReveal key={index} delay={index * 100}>
          <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full px-6 py-5 text-left hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
              aria-expanded={openIndex === index}
            >
              <span className="font-medium text-gray-800 text-lg pr-4">{item.question}</span>
              <span className="text-gray-500 text-2xl font-light flex-shrink-0">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="px-6 py-5 bg-gray-50 border-t border-gray-200">
                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            )}
          </div>
        </ScrollReveal>
      ))}
    </div>
  )
}
