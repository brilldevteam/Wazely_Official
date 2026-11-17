import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { BrandLogo } from "@/components/layout/brand-logo";
import { footerGroups } from "@/data/navigation";
import { siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer border-t border-slate-200 bg-white py-14 sm:py-18">
      <div className="page-shell">
        <div className="wz-footer-cta">
          <div>
            <p className="wz-footer-cta-kicker">Let&rsquo;s build your setup</p>
            <h2>
              Bring customer work and business operations into one place.
            </h2>
          </div>
          <div className="wz-footer-cta-actions">
            <Link href="/#contact" className="hv-pill hv-pill-outline">
              Get in touch
            </Link>
            <Link href={siteConfig.demoUrl} className="hv-pill hv-pill-dark">
              Try the demo <ArrowUpRight aria-hidden="true" size={17} />
            </Link>
          </div>
        </div>
      </div>
      <div className="page-shell grid gap-12 lg:grid-cols-[1fr_2.6fr]">
        <div className="max-w-sm">
          <BrandLogo />
          <p className="mt-5 text-sm leading-6 text-slate-600">
            Wazely is a software company building focused, AI-powered products
            for growing businesses. Our product family starts with Wazely CRM,
            Wazely ERP and Wazely Color, with more on the way.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            {Object.entries(siteConfig.socialLinks).map(([network, href]) => (
              <Link
                key={network}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal rounded-sm text-sm font-semibold text-slate-600 capitalize transition-colors focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:outline-none"
              >
                {network}
              </Link>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 xl:grid-cols-5">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h2 className="text-navy text-sm font-semibold">{group.title}</h2>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => {
                  const external =
                    link.href.startsWith("http") &&
                    link.href !== siteConfig.colorUrl;
                  return (
                    <li key={link.label}>
                      <Link
                        className="hover:text-teal text-sm text-slate-600 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:outline-none"
                        href={link.href}
                        {...(external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="page-shell mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500">
        <span>
          &copy; {new Date().getFullYear()} Wazely. All rights reserved.
        </span>
        <span>Serving businesses in {siteConfig.targetMarkets.join(" · ")}</span>
      </div>
    </footer>
  );
}
