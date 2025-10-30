'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: isScrolled ? -80 : 0 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 w-full z-50"
        style={{
          width: '100vw',
          maxWidth: '1920px',
          height: '80px',
          backgroundColor: '#F9FBFF',
          backdropFilter: 'blur(94px)',
          boxShadow: isScrolled ? '0 2px 8px rgba(0,0,0,0.05)' : 'none',
          margin: '0 auto',
        }}
        aria-label="Main navigation"
      >
        {/* Inner container with responsive padding */}
        <div 
          className="h-full px-4 md:px-8 lg:px-14"
          style={{ 
            paddingLeft: typeof window !== 'undefined' && window.innerWidth >= 1024 ? '56px' : undefined,
            paddingRight: typeof window !== 'undefined' && window.innerWidth >= 1024 ? '56px' : undefined,
          }}
        >
          <div className="flex items-center justify-between h-full">
            {/* Logo Section */}
            <Link 
              href="/" 
              className="flex items-center" 
              aria-label="Supreme Group Home"
            >
              <div className="flex items-center gap-2 md:gap-3">
                {/* Circle with S Logo */}
                <div 
                  className="relative flex items-center justify-center rounded-full"
                  style={{
                    width: '36px',
                    height: '36px',
                    border: '2px solid #0077BE',
                    padding: '6px',
                  }}
                >
                  <Image
                    src="/assets/images/Supreme_logo.png"
                    alt="S"
                    width={18}
                    height={25}
                    className="object-contain lg:w-[21.74px] lg:h-[30px]"
                  />
                </div>

                {/* Supreme Group Text */}
                <div className="flex flex-col" style={{ marginLeft: '-4px' }}>
                  <span 
                    className="font-bold leading-none"
                    style={{ 
                      color: '#0067b1',
                      fontSize: '16px',
                    }}
                  >
                    SUPREME
                  </span>
                  <span 
                    className="font-bold leading-none"
                    style={{ 
                      color: '#00aeef',
                      fontSize: '14px',
                    }}
                  >
                    GROUP
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Actions - Hidden on mobile/tablet */}
            <div className="hidden lg:flex items-center" style={{ gap: '24px' }}>
              {/* Contact Us Button */}
              <Link href="#contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center"
                  style={{
                    width: '145px',
                    height: '50px',
                    borderRadius: '100px',
                    backgroundColor: '#5CD6FF',
                    border: '1px solid #00BFFF',
                    padding: '10px 30px',
                  }}
                  aria-label="Contact Us"
                >
                  <span 
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontWeight: 500,
                      fontSize: '15px',
                      lineHeight: '22px',
                      color: '#000000',
                    }}
                  >
                    Contact Us
                  </span>
                </motion.button>
              </Link>

              {/* LinkedIn */}
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/company/supreme-group"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
                style={{ 
                  width: '24px', 
                  height: '24px',
                }}
                aria-label="Visit our LinkedIn page"
              >
                <span 
                  className="font-bold"
                  style={{
                    fontSize: '24px',
                    color: '#000000',
                    lineHeight: '1',
                  }}
                >
                  in
                </span>
              </motion.a>

              {/* Language Selector */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center"
                style={{ gap: '6px' }}
                aria-label="Change language"
              >
                <Image
                  src="/assets/images/translate.png"
                  alt=""
                  width={22}
                  height={22}
                  className="object-contain"
                />
                <span 
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontWeight: 600,
                    fontSize: '12px',
                    lineHeight: '16px',
                    color: '#000000',
                  }}
                >
                  ENG
                </span>
              </motion.button>
            </div>

            {/* Hamburger Menu Button - Tablet & Mobile only */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex flex-col items-center justify-center w-10 h-10 space-y-1.5"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="block w-6 h-0.5 bg-black"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-6 h-0.5 bg-black"
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="block w-6 h-0.5 bg-black"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-20 right-0 w-64 md:w-80 h-[calc(100vh-80px)] bg-white z-50 shadow-2xl lg:hidden"
            style={{ backgroundColor: '#F9FBFF' }}
          >
            <div className="flex flex-col items-center py-8 px-6 space-y-6">
              {/* Contact Us Button Mobile */}
              <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="w-full">
                <button
                  className="flex items-center justify-center w-full"
                  style={{
                    height: '50px',
                    borderRadius: '100px',
                    backgroundColor: '#5CD6FF',
                    border: '1px solid #00BFFF',
                  }}
                >
                  <span 
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontWeight: 500,
                      fontSize: '15px',
                      color: '#000000',
                    }}
                  >
                    Contact Us
                  </span>
                </button>
              </Link>

              {/* Divider */}
              <div className="w-full h-px bg-gray-300"></div>

              {/* LinkedIn Mobile */}
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-full py-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span 
                  className="font-bold"
                  style={{
                    fontSize: '24px',
                    color: '#000000',
                  }}
                >
                  in
                </span>
                <span className="text-base font-medium">LinkedIn</span>
              </a>

              {/* Divider */}
              <div className="w-full h-px bg-gray-300"></div>

              {/* Language Mobile */}
              <button className="flex items-center gap-3 w-full py-3">
                <Image
                  src="/assets/images/translate.png"
                  alt=""
                  width={22}
                  height={22}
                />
                <span 
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontWeight: 600,
                    fontSize: '14px',
                    color: '#000000',
                  }}
                >
                  English (ENG)
                </span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
