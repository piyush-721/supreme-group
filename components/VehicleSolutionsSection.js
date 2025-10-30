'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { VEHICLE_CATEGORIES, VEHICLE_PARTS } from '@/lib/constants';

export default function VehicleSolutionsSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.5], [100, 0, -50]);

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-black text-white py-20 overflow-hidden">
      {/* Animated Heading */}
      <motion.div
        style={{ opacity, y }}
        className="container mx-auto px-4 mb-16"
      >
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-center leading-tight">
          Evolving the drive with{' '}
          <span className="font-bold">360-degree</span>
          <br />
          comprehensive solutions
        </h2>
      </motion.div>

      {/* Main Content Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Vehicle Categories */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Vertical Line Indicator */}
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/20"></div>
              <div className="absolute left-0 top-0 w-1 h-2/5 bg-supreme-cyan"></div>

              {/* Categories */}
              <div className="pl-8 space-y-12">
                {VEHICLE_CATEGORIES.map((category, index) => (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: index === 0 ? 1 : 0.4, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2">
                      {category.title}
                    </h3>
                    <p className="text-base md:text-lg text-gray-400">
                      {category.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - 3D Model Video */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain"
              >
                <source
                  src="/assets/videos/Passenger-complete.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </motion.div>
        </div>

        {/* Bottom - Vehicle Parts Selector */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 lg:mt-16"
        >
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {VEHICLE_PARTS.map((part, index) => (
              <div
                key={part.id}
                className={`flex flex-col items-center space-y-2 px-4 py-3 rounded-lg transition-all duration-300 ${
                  index === 0 ? 'bg-white/10 scale-110' : 'opacity-60 hover:opacity-100'
                }`}
              >
                <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-white/10 rounded-lg">
                  <span className="text-xs md:text-sm font-medium text-center">
                    {part.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
