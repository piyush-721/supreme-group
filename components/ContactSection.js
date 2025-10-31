import { CONTACT_INFO } from '@/lib/constants';
import ContactForm from './ContactForm';

/**
 * ContactSection Component
 * - Two-column layout (desktop) / stacked (mobile)
 * - Contact information with clickable links
 * - Integrated contact form
 * - Fully styled with Tailwind only
 * - Accessibility: Semantic HTML, proper heading hierarchy
 */
export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-supreme-blue py-16 md:py-20 lg:py-24"
      aria-label="Contact section"
    >
      <div className="container mx-auto px-4">
        {/* Main Container */}
        <div
          className="mx-auto flex flex-col lg:flex-row gap-[150px] items-start justify-between max-w-[1119px] min-h-[433px]"
        >
          {/* Left Side - Contact Info */}
          <div className="text-white flex-1 w-full lg:w-auto mb-8 lg:mb-0">
            {/* Heading */}
            <h2 className="font-manrope font-semibold text-[clamp(32px,6vw,48px)] leading-[1.2]">
              Get in touch
            </h2>

            {/* Decorative Line */}
            <div
              className="w-16 h-1 bg-white mb-8"
              aria-hidden="true"
            ></div>

            {/* Subheading */}
            <p className="font-manrope font-normal text-[clamp(18px,4vw,24px)] leading-[1.3] mb-8">
              For general enquiries
            </p>

            {/* Contact Details */}
            <div className="flex flex-col gap-[clamp(20px,5vw,32px)]">
              {/* Address */}
              <div>
                <h3 className="font-manrope font-semibold text-[clamp(16px,3vw,20px)] mb-2">
                  Address :
                </h3>
                <p className="font-manrope font-normal text-[clamp(16px,3vw,20px)]">
                  {CONTACT_INFO.address}
                </p>
              </div>

              {/* Phone */}
              <div>
                <h3 className="font-manrope font-semibold text-[clamp(16px,3vw,20px)] mb-2">
                  Phone :
                </h3>
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                  className="font-manrope font-normal text-[clamp(16px,3vw,20px)] hover:opacity-80 transition-opacity"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>

              {/* Email */}
              <div>
                <h3 className="font-manrope font-semibold text-[clamp(16px,3vw,20px)] mb-2">
                  Email :
                </h3>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="font-manrope font-normal text-[clamp(16px,3vw,20px)] hover:opacity-80 transition-opacity"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="w-full lg:w-auto lg:flex-1">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
