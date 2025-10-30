'use client';
import { motion } from 'framer-motion';
import { CONTACT_INFO } from '@/lib/constants';
import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-supreme-blue py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Get in touch
            </h2>
            <div className="w-16 h-1 bg-white mb-8"></div>

            <p className="text-lg md:text-xl mb-12 opacity-90">
              For general enquiries
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-lg mb-2">Address :</h3>
                <p className="text-base md:text-lg opacity-90">
                  {CONTACT_INFO.address}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Phone :</h3>
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                  className="text-base md:text-lg opacity-90 hover:opacity-100 transition-opacity"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Email :</h3>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-base md:text-lg opacity-90 hover:opacity-100 transition-opacity"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
