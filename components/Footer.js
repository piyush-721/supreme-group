import Link from 'next/link';
import {
  APPLICATIONS,
  COMPANY_LINKS,
  MORE_LINKS,
  SOCIAL_LINKS,
  COPYRIGHT_TEXT,
  FOOTER_ADDRESS,
} from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-supreme-light py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 inline-block">
              <div className="w-10 h-10 rounded-full border-2 border-supreme-blue flex items-center justify-center">
                <span className="text-xl font-bold text-supreme-blue">S</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-base text-supreme-blue">
                  SUPREME
                </span>
                <span className="font-bold text-base text-supreme-blue">
                  GROUP
                </span>
              </div>
            </Link>
          </div>

          {/* Applications Column */}
          <FooterColumn title="APPLICATIONS" links={APPLICATIONS} />

          {/* Company Column */}
          <FooterColumn title="COMPANY" links={COMPANY_LINKS} />

          {/* More Column */}
          <FooterColumn title="MORE" links={MORE_LINKS} />

          {/* Follow Us Column */}
          <FooterColumn title="FOLLOW US" links={SOCIAL_LINKS} />
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-supreme-gray/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
            <p className="text-supreme-gray text-sm">{COPYRIGHT_TEXT}</p>
            <p className="text-supreme-gray text-sm">{FOOTER_ADDRESS}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="font-bold text-supreme-dark mb-4 text-sm uppercase tracking-wide">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="text-supreme-gray hover:text-supreme-blue transition-colors duration-300 text-sm"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
