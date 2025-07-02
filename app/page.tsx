import { ScrollReveal } from "@/components/scroll-reveal"
import { FAQAccordion } from "@/components/faq-accordion"
import { ContactForm } from "@/components/contact-form"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f5f3f0]">
      {/* Header - Mobile optimized */}
      <header className="bg-[#f5f3f0] pt-6 pb-4 md:pt-12 md:pb-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center">
            <div className="flex items-center gap-3 md:gap-4">
              {/* Logo Grid - responsive sizing */}
              <div className="flex flex-col gap-1">
                <div className="flex gap-1">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 border border-gray-500"></div>
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 border border-gray-500"></div>
                </div>
                <div className="flex gap-1">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 border border-gray-500"></div>
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 border border-gray-500"></div>
                </div>
              </div>
              {/* Text - responsive sizing */}
              <div className="text-gray-700">
                <div className="text-base md:text-lg font-normal">Serena Blake, Ph.D.</div>
                <div className="text-xs md:text-sm text-gray-600 font-light">Psychological Services</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Mobile optimized video */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.4)" }}
          >
            <source src="/placeholder-video.mp4" type="video/mp4" />
            {/* Fallback for browsers that don't support video */}
            <div className="w-full h-full bg-gray-900"></div>
          </video>
        </div>

        {/* Hero Content - Mobile responsive */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 md:px-8">
          <h1 className="hero-title font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight mb-8 md:mb-12 tracking-tight text-white text-shadow-lg">
            Psychological Care for
            <br />
            Change, Insight, and Well-Being
          </h1>

          <div className="w-16 md:w-24 h-px bg-white/60 mx-auto mb-8 md:mb-12"></div>

          <p className="hero-subtitle text-lg md:text-xl text-white/90 mb-12 md:mb-16 max-w-4xl mx-auto font-light leading-relaxed text-shadow px-4">
            Offering individual psychotherapy for adults via telehealth in Los Angeles and{" "}
            <span className="underline decoration-1 underline-offset-2">most U.S. states</span> through PSYPACT
            participation
          </p>

          <button className="bg-[#9db5a6] hover:bg-[#8ba396] text-white font-medium px-8 md:px-12 py-3 md:py-4 rounded-full text-xs md:text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-lg">
            Schedule a Consultation
          </button>
        </div>
      </section>

      {/* About Section - Mobile responsive */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Photo - Mobile first, responsive */}
            <ScrollReveal className="order-1 lg:order-2">
              <div className="relative">
                <Image
                  src="/dr.jpg"
                  alt="Dr. Serena Blake - Professional headshot"
                  width={600}
                  height={600}
                  className="w-full max-w-sm md:max-w-lg mx-auto shadow-2xl"
                  priority
                />
              </div>
            </ScrollReveal>

            {/* Content - Mobile responsive */}
            <div className="order-2 lg:order-1">
              <ScrollReveal>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-8 md:mb-12 font-normal">
                  About Dr. Serena Blake
                </h2>
              </ScrollReveal>

              <div className="space-y-6 md:space-y-8 text-gray-300 leading-relaxed text-base md:text-lg">
                <ScrollReveal delay={200}>
                  <p>
                    Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight
                    years of experience and over 500 client sessions. She blends evidence-based approaches—like
                    cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you
                    overcome anxiety, strengthen relationships, and heal from trauma.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={400}>
                  <p>
                    Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed
                    to creating a safe, supportive space for you to thrive.
                  </p>
                </ScrollReveal>
              </div>

              <ScrollReveal delay={800}>
                <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-gray-700">
                  <div className="grid sm:grid-cols-2 gap-6 md:gap-8 text-gray-300">
                    <div>
                      <h4 className="font-semibold text-white mb-3">Experience</h4>
                      <p>8 years of practice</p>
                      <p>500+ client sessions</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-3">Credentials</h4>
                      <p>Licensed Clinical Psychologist (PsyD)</p>
                      <p>Los Angeles, California</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Quote Section - Mobile responsive */}
      <section className="py-16 md:py-24 bg-[#f8f6f3]">
        <div className="max-w-5xl mx-auto px-4 md:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-8 md:mb-12 font-normal leading-tight">
              Therapy can be a space where you invest in yourself—one of the highest forms of self-care.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 md:mb-12 max-w-4xl mx-auto">
              You may be led to therapy by anxiety, depression, relationship stress, past or recent trauma, grief and
              loss, self-esteem issues, or challenges with family, parenting, or parental relationships. Whatever the
              source of your stress, you don&apos;t have to face it alone. Therapy offers you the time and space to work
              toward wellness and peace.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <div className="w-16 md:w-24 h-px bg-gray-400 mx-auto"></div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Section - Mobile responsive */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-20">
            <ScrollReveal>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-4 font-normal">
                Services & Specialties
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
            {/* Service 1 - Mobile optimized */}
            <ScrollReveal delay={200}>
              <div className="text-center">
                <div className="w-48 h-48 md:w-64 md:h-64 mx-auto mb-6 md:mb-8 rounded-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                    alt="Anxiety & Stress Management - Peaceful meditation scene"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 md:mb-6">
                  Anxiety & Stress Management
                </h3>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  Comprehensive treatment for anxiety disorders, panic attacks, and chronic stress. Using evidence-based
                  approaches like CBT and mindfulness to help you develop effective coping strategies and regain a sense
                  of calm and control in your daily life.
                </p>
              </div>
            </ScrollReveal>

            {/* Service 2 - Mobile optimized */}
            <ScrollReveal delay={400}>
              <div className="text-center">
                <div className="w-48 h-48 md:w-64 md:h-64 mx-auto mb-6 md:mb-8 rounded-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                    alt="Relationship Counseling - Couple holding hands"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 md:mb-6">
                  Relationship Counseling
                </h3>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  Individual and couples therapy to strengthen relationships, improve communication, and resolve
                  conflicts. Whether you&apos;re working through relationship challenges or seeking to deepen your
                  connection, therapy provides tools for healthier, more fulfilling relationships.
                </p>
              </div>
            </ScrollReveal>

            {/* Service 3 - Mobile optimized */}
            <ScrollReveal delay={600}>
              <div className="text-center md:col-span-2 lg:col-span-1">
                <div className="w-48 h-48 md:w-64 md:h-64 mx-auto mb-6 md:mb-8 rounded-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                    alt="Trauma Recovery - Healing hands reaching toward light"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 md:mb-6">Trauma Recovery</h3>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  Specialized care for individuals who have experienced trauma, including PTSD, complex trauma, and
                  adverse life experiences. Creating a safe space for healing and post-traumatic growth through
                  trauma-informed therapeutic approaches and evidence-based treatments.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Session Fees Section - Mobile responsive */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#f8f6f3] to-[#f0f8f5]">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <ScrollReveal>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-4 md:mb-6 font-normal">
                Investment in Your Well-Being
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Quality mental health care is an investment in your future. I believe in transparent, straightforward
                pricing.
              </p>
            </ScrollReveal>
          </div>

          <div className="max-w-4xl mx-auto">
            <ScrollReveal delay={200}>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-12 shadow-lg border border-white/50">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                  <div className="text-center">
                    <div className="mb-4 md:mb-6">
                      <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">Individual Therapy</h3>
                      <p className="text-gray-600">50-minute session</p>
                    </div>
                    <div className="text-4xl md:text-5xl font-light text-[#8ba396] mb-4">$200</div>
                    <p className="text-gray-600 text-sm md:text-base">
                      Personalized one-on-one sessions focused on your unique needs and goals
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="mb-4 md:mb-6">
                      <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">Couples Therapy</h3>
                      <p className="text-gray-600">50-minute session</p>
                    </div>
                    <div className="text-4xl md:text-5xl font-light text-[#8ba396] mb-4">$240</div>
                    <p className="text-gray-600 text-sm md:text-base">
                      Relationship-focused sessions to strengthen communication and connection
                    </p>
                  </div>
                </div>

                <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-200 text-center">
                  <div className="max-w-3xl mx-auto space-y-3 md:space-y-4 text-gray-600 text-sm md:text-base">
                    <p className="font-medium text-gray-800">Payment & Insurance</p>
                    <p>
                      I do not accept insurance directly, but provide detailed superbills for self-submission to your
                      insurance company for potential reimbursement.
                    </p>
                    <p>
                      Payment is due at the time of service. I accept cash, check, and all major credit cards for your
                      convenience.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Section - Mobile responsive */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <ScrollReveal>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-4 font-normal">
                Frequently Asked Questions
              </h2>
            </ScrollReveal>
          </div>

          <FAQAccordion />
        </div>
      </section>

      {/* Contact Section - Mobile responsive */}
      <section className="py-16 md:py-24 bg-[#f8f6f3]">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
            {/* Contact Info - Mobile optimized */}
            <ScrollReveal delay={300}>
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 md:mb-8">Contact Information</h3>

                <div className="space-y-4 md:space-y-6 text-base md:text-lg">
                  <div>
                    <p className="font-semibold text-gray-800 mb-2">Address</p>
                    <p className="text-gray-600">
                      1287 Maplewood Drive
                      <br />
                      Los Angeles, CA 90026
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-800 mb-2">Email</p>
                    <a href="mailto:serena@blakepsychology.com" className="text-[#8ba396] hover:underline break-all">
                      serena@blakepsychology.com
                    </a>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-800 mb-2">Phone</p>
                    <a href="tel:+13235550192" className="text-[#8ba396] hover:underline">
                      (323) 555-0192
                    </a>
                  </div>
                </div>

                <div className="mt-8 md:mt-10">
                  <h4 className="font-semibold text-gray-800 mb-3 md:mb-4 text-base md:text-lg">Office Hours</h4>
                  <div className="text-gray-600 space-y-1 md:space-y-2 text-sm md:text-base">
                    <p>
                      <strong>In-person:</strong> Tue & Thu, 10 AM–6 PM
                    </p>
                    <p>
                      <strong>Virtual via Zoom:</strong> Mon, Wed & Fri, 1 PM–5 PM
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form - Mobile responsive */}
            <ScrollReveal delay={500}>
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer - Mobile responsive */}
      <footer className="bg-gray-900 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <ScrollReveal>
            <div className="text-center">
              <h3 className="font-display text-xl md:text-2xl mb-4 font-normal">Dr. Serena Blake, PsyD</h3>
              <p className="text-gray-400 mb-4 md:mb-6">Licensed Clinical Psychologist</p>
              <p className="text-gray-400 mb-6 md:mb-8 text-sm md:text-base">
                <a href="mailto:serena@blakepsychology.com" className="hover:text-white transition-colors break-all">
                  serena@blakepsychology.com
                </a>
                <br className="md:hidden" />
                <span className="hidden md:inline"> • </span>
                <a href="tel:+13235550192" className="hover:text-white transition-colors">
                  (323) 555-0192
                </a>
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="border-t border-gray-800 pt-6 md:pt-8 mt-6 md:mt-8 text-center">
              <p className="text-gray-400 text-xs md:text-sm">© 2025 Dr. Serena Blake, PsyD. All rights reserved.</p>
            </div>
          </ScrollReveal>
        </div>
      </footer>
    </div>
  )
}
