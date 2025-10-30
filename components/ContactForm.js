'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData);
    setSubmitSuccess(true);
    setIsSubmitting(false);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        message: '',
      });
      setSubmitSuccess(false);
    }, 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-white"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="fullName" className="sr-only">
            Full name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full name"
            required
            className="w-full bg-transparent border-b-2 border-white/50 focus:border-white pb-3 text-base md:text-lg placeholder-white/70 transition-colors duration-300"
          />
        </div>

        <div>
          <label htmlFor="email" className="sr-only">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-mail"
            required
            className="w-full bg-transparent border-b-2 border-white/50 focus:border-white pb-3 text-base md:text-lg placeholder-white/70 transition-colors duration-300"
          />
        </div>

        <div>
          <label htmlFor="subject" className="sr-only">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
            className="w-full bg-transparent border-b-2 border-white/50 focus:border-white pb-3 text-base md:text-lg placeholder-white/70 transition-colors duration-300"
          />
        </div>

        <div>
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            required
            rows="4"
            className="w-full bg-transparent border-b-2 border-white/50 focus:border-white pb-3 text-base md:text-lg placeholder-white/70 transition-colors duration-300 resize-none"
          ></textarea>
        </div>

        <div className="pt-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={isSubmitting}
            className="bg-white text-supreme-blue font-semibold px-10 md:px-12 py-3 rounded-full hover:bg-supreme-cyan hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : submitSuccess ? 'Sent!' : 'Send'}
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
}
