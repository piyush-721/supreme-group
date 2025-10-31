'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollVisibility } from '@/lib/hooks/useScrollVisibility';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const isVisible = useScrollVisibility();

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -80 }}
        transition={{ ease: 'easeInOut', duration: 0.3 }}
        className={`fixed top-0 left-0 z-50 w-full bg-[#F9FBFF] backdrop-blur-[94px] transition-shadow duration-300 ${
          hasScrolled ? 'shadow-[0_2px_8px_rgba(0,0,0,0.05)]' : ''
        }`}
        style={{ height: '80px', maxWidth: '1920px', margin: '0 auto' }}
        aria-label="Main navigation"
      >
        <div className="h-full px-4 md:px-8 lg:px-14">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link href="/" className="flex items-center" aria-label="Supreme Group Home">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="relative flex items-center justify-center w-[41.4px] h-[41px] border-2 border-[#0077BE] rounded-full p-2">
                  <Image
                    src="/assets/images/Supreme_logo.png"
                    alt="Supreme Logo"
                    width={22}
                    height={30}
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col -ml-2">
                  <span className="font-bold text-[20px] leading-none text-[#0067b1]">
                    SUPREME
                  </span>
                  <span className="font-bold text-[18px] leading-none text-[#00aeef]">
                    GROUP
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6">
              <Link href="#contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-[145px] h-[50px] rounded-full bg-[#5CD6FF] border border-[#00BFFF] px-[30px] py-[10px] flex items-center justify-center"
                >
                  <span className="font-manrope font-medium text-[15px] text-black leading-[22px]">
                    Contact Us
                  </span>
                </motion.button>
              </Link>

              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/company/supreme-group"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-6 h-6"
                aria-label="Visit our LinkedIn page"
              >
                <span className="text-[24px] font-bold text-black leading-none">in</span>
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-1.5"
                aria-label="Change language"
              >
                <Image
                  src="/assets/images/translate.png"
                  alt="Translate"
                  width={22}
                  height={22}
                  className="object-contain"
                />
                <span className="font-manrope font-semibold text-[12px] text-black leading-[16px]">
                  ENG
                </span>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-20 right-0 w-64 md:w-80 h-[calc(100vh-80px)] bg-[#F9FBFF] z-50 shadow-2xl lg:hidden"
            >
              <div className="flex flex-col items-center py-8 px-6 space-y-6">
                <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="w-full">
                  <button className="flex items-center justify-center w-full h-[50px] rounded-full bg-[#5CD6FF] border border-[#00BFFF]">
                    <span className="font-manrope font-medium text-[15px] text-black">
                      Contact Us
                    </span>
                  </button>
                </Link>

                <div className="w-full h-px bg-gray-300" />

                <a
                  href="https://www.linkedin.com/company/supreme-group"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full py-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-[24px] font-bold text-black">in</span>
                  <span className="text-base font-medium">LinkedIn</span>
                </a>

                <div className="w-full h-px bg-gray-300" />

                <button className="flex items-center gap-3 w-full py-3">
                  <Image src="/assets/images/translate.png" alt="" width={22} height={22} />
                  <span className="font-manrope font-semibold text-[14px] text-black">
                    English (ENG)
                  </span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
