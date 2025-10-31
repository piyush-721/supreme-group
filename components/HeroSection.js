'use client';

import { motion } from 'framer-motion';

/**
 * HeroSection Component (Tailwind-only)
 */
export default function HeroSection() {
  const animationVariants = {
    line1: {
      initial: { opacity: 0, y: -20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, delay: 0.2 },
    },
    line2: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 1, delay: 0.4 },
    },
    line3: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 1, delay: 0.6 },
    },
  };

  return (
    <section
      className="relative w-full overflow-hidden -mt-[60px] h-[925px]"
      aria-label="Hero section with video background"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/assets/images/fallback.jpg"
          className="w-full h-full object-cover"
          aria-label="Automotive background video"
        >
          <source src="/assets/videos/automotive.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" aria-hidden="true"></div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-4 md:px-8 lg:px-14">
          {/* Line 1 */}
          <motion.p
            {...animationVariants.line1}
            className="text-white font-manrope font-normal leading-none tracking-[0%]"
          >
            <span className="block text-base md:text-lg lg:text-[22px] mb-4 md:mb-5 lg:mb-6">
              Performance in motion
            </span>
          </motion.p>

          {/* Line 2 */}
          <motion.h1
            {...animationVariants.line2}
            className="text-white font-manrope font-semibold leading-[100%] tracking-[-0.5%] mb-0"
          >
            <span className="block text-2xl md:text-4xl lg:text-[48px] leading-tight md:leading-tight lg:leading-[58px]">
              Soft Trims and{' '}
              <span className="text-[#00BFFF]">NVH Solutions</span>
            </span>
          </motion.h1>

          {/* Line 3 */}
          <motion.p
            {...animationVariants.line3}
            className="text-white font-manrope font-light"
          >
            <span className="block text-xl md:text-3xl lg:text-[48px] leading-tight md:leading-tight lg:leading-[58px] mt-0 md:-mt-2 lg:-mt-[5px]">
              for seamless rides
            </span>
          </motion.p>
        </div>
      </div>
    </section>
  );
}
