import Link from 'next/link';
import Image from 'next/image';
import {
  APPLICATIONS,
  COMPANY_LINKS,
  MORE_LINKS,
  SOCIAL_LINKS,
  COPYRIGHT_TEXT,
  FOOTER_ADDRESS,
} from '@/lib/constants/footerData';

export default function Footer() {
  return (
    <footer className="relative w-full bg-white" aria-label="Footer">
      {/* Footer background PNG */}
      <Image
        src="/assets/images/footer-background.png"
        alt="Footer background"
        width={320}
        height={320}
        loading="lazy"
        className="pointer-events-none select-none z-0 absolute right-0 bottom-0 w-[220px] h-[180px] opacity-40 sm:w-[280px] sm:h-[220px] sm:opacity-60 md:w-[320px] md:h-[320px] md:opacity-100"
        style={{ objectFit: 'contain', aspectRatio: '1 / 1' }}
      />

      <div className="mx-auto px-4 py-16 md:py-20 lg:py-24 relative" style={{ maxWidth: '1920px', zIndex: 10 }}>
        <div style={{ maxWidth: '988px', margin: '0 auto' }}>
          <div className="flex flex-col gap-14">
            {/* Center logo/title on mobile, left aligned on md+ */}
            <FooterLogo />

            {/* Grid columns: 2 cols mobile centered, 4 cols desktop left */}
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-x-7 md:gap-x-36 gap-y-9
              mx-auto w-full max-w-[982px] h-auto text-center md:text-left"
            >
              <FooterColumn title="APPLICATIONS" links={APPLICATIONS} />
              <FooterColumn title="COMPANY" links={COMPANY_LINKS} />
              <FooterColumn title="MORE" links={MORE_LINKS} />
              <FooterColumn title="FOLLOW US" links={SOCIAL_LINKS} isSocial />
            </div>

            {/* Copyright + Address stacked on mobile, horizontal on md+ */}
            <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-[952px] mx-auto mt-8 space-y-4 md:space-y-0 md:space-x-4 px-2 md:ml-[0px]">
              <p className="text-gray-500 text-[13px] font-manrope font-normal leading-[1.4] whitespace-nowrap">
                {COPYRIGHT_TEXT}
              </p>
              <p className="text-gray-500 text-[13px] font-manrope font-normal leading-[1.4] whitespace-nowrap">
                {FOOTER_ADDRESS}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// FooterLogo component centers on mobile with mx-auto and justify-center
function FooterLogo() {
  return (
    <Link
      href="/"
      aria-label="Supreme Group Home"
      className="w-[226px] h-[63px] flex items-center mx-auto md:mx-0 justify-center md:justify-start"
    >
      <div className="w-[64.19px] h-[63px] border-2 border-blue-600 rounded-full flex items-center justify-center bg-white mr-3">
        <Image
          src="/assets/images/Supreme_logo.png"
          alt="S"
          width={33.66}
          height={46.22}
          loading="lazy"
          quality={85}
          style={{ display: 'block', width: '33.66px', height: '46.22px', objectFit: 'contain' }}
        />
      </div>
      <div className="flex flex-col leading-0 -ml-2">
        <span className="text-blue-600 text-[34px] font-bold font-manrope m-0 leading-none">SUPREME</span>
        <span className="text-[#00aeef] text-[30px] font-bold font-manrope m-0 leading-none">GROUP</span>
      </div>
    </Link>
  );
}

function FooterColumn({ title, links, isSocial = false }) {
  const headingId = `${title.toLowerCase().replace(/\s+/g, '-')}-heading`;

  return (
    <div className="flex flex-col items-center md:items-start justify-center">
      <h3 id={headingId} className="text-gray-900 text-[13px] font-bold uppercase tracking-wide mb-5">
        {title}
      </h3>
      <ul aria-labelledby={headingId} className="list-none p-0 m-0 space-y-4">
        {links.map((item, idx) => (
          <li key={item.name} className={idx !== links.length - 1 ? 'mb-4' : ''}>
            {isSocial ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 text-[15px] font-normal no-underline inline-flex items-center gap-2 transition-colors hover:text-blue-600 whitespace-nowrap"
              >
                {item.name}
              </a>
            ) : (
              <Link
                href={item.href}
                className="text-gray-600 text-[15px] font-normal no-underline transition-colors hover:text-blue-600 whitespace-nowrap"
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
