import HeroSection from '@/components/HeroSection';
import ContactSection from '@/components/ContactSection';
import VehicleSolutionsSection from '@/components/VehicleSolutionsSection';

/**
 * Home Page
 * - Hero section with video background
 * - Contact section with form
 * 
 * Navbar & Footer are from root layout (automatically included)
 */
export default function Home() {
  return (
    <>
      {/* Hero Section - Video background with animated text */}
      <HeroSection />

      <VehicleSolutionsSection />

      {/* Contact Section - Contact info + form */}
      <ContactSection />

    </>
  );
}
