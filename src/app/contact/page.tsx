'use client';

import React, { useState } from 'react';
import AnimatedWrapper from "../components/AnimatedWrapper";
import Link from "next/link";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission (replace with actual API call)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API delay

      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.email && formData.subject && formData.message;

  return (
    <div className='max-w-6xl mx-auto px-4 py-24 lg:py-32 text-white'>
      <AnimatedWrapper delay={200} direction="up" duration={0.8}>
        <div className="mb-8 lg:mb-12">
          <h3 className="flex items-center text-2xl sm:text-3xl lg:text-4xl font-medium after:border-[1px] after:border-green-400 after:w-32 sm:after:w-48 lg:after:w-64 after:ml-3 sm:after:ml-5">
            <span className="text-green-400">#</span>Contact Us
          </h3>
        </div>
      </AnimatedWrapper>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Contact Information */}
        <AnimatedWrapper delay={300} direction="left" duration={0.8}>
          <div className="space-y-8">
            <div>
              <h4 className="text-2xl font-semibold mb-4 text-[#26FF9A]">Get In Touch</h4>
              <p className="text-gray-400 text-lg leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#26FF9A]/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#26FF9A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h5 className="font-medium text-white">Email</h5>
                  <p className="text-gray-400">noahbirhanu23@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#26FF9A]/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#26FF9A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h5 className="font-medium text-white">Location</h5>
                  <p className="text-gray-400">Addis Ababa, Ethiopia</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#26FF9A]/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#26FF9A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h5 className="font-medium text-white">Response Time</h5>
                  <p className="text-gray-400">Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedWrapper>

        {/* Contact Form */}
        <AnimatedWrapper delay={400} direction="right" duration={0.8}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-[#26FF9A] transition-colors text-white placeholder-gray-400"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-[#26FF9A] transition-colors text-white placeholder-gray-400"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-[#26FF9A] transition-colors text-white placeholder-gray-400"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-[#26FF9A] transition-colors text-white placeholder-gray-400 resize-none"
                placeholder="Tell me about your project or inquiry..."
              />
            </div>

            {/* Submit Status Messages */}
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
                <p className="text-green-400">Thank you! Your message has been sent successfully. I'll get back to you soon.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
                <p className="text-red-400">Sorry, there was an error sending your message. Please try again.</p>
              </div>
            )}

            <button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className={`w-full px-8 py-4 rounded-lg font-medium transition-all duration-300 ${isFormValid && !isSubmitting
                ? 'bg-[#26FF9A] text-black hover:bg-[#26FF9A]/80 transform hover:scale-105'
                : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                }`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  <span>Sending...</span>
                </div>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </AnimatedWrapper>
      </div>

      {/* Back to Home */}
      <AnimatedWrapper delay={500} direction="up" duration={0.8}>
        <div className="text-center mt-16">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-[#26FF9A] text-[#26FF9A] hover:bg-[#26FF9A] hover:text-black transition-all duration-300 rounded-lg"
          >
            <span>← Back to Home</span>
          </Link>
        </div>
      </AnimatedWrapper>
    </div>
  );
};

export default ContactUs;