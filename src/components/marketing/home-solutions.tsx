"use client";

import { ArrowUpRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

// iqonic.tech's "Specialized solutions" slot (tabs, feature list, CTA banner)
// in the Clario visual style. Feature lists come from the product data.
const solutions = [
  {
    id: "crm",
    tab: "Customer conversations",
    product: "Wazely CRM",
    title: "Every customer conversation in one shared inbox",
    copy: "Your team replies from one business number, with each customer's history, tags and notes in view.",
    features: [
      "Shared WhatsApp inbox",
      "Agent assignment and notes",
      "Contacts, tags and segments",
      "Broadcast campaigns",
      "Chatbot automation",
      "Appointment booking",
    ],
    href: "/crm",
    image: "/screenshots/crm-shared-inbox.png",
    width: 1742,
    height: 903,
    banner: "Start with Wazely CRM and set it up around your team.",
    bannerCta: "Try the demo",
    bannerHref: siteConfig.demoUrl,
  },
  {
    id: "erp",
    tab: "Sales and accounting",
    product: "Wazely ERP",
    title: "From quotation to paid invoice, without retyping",
    copy: "Quotes, invoices, payments and accounts stay on one connected record, with reports ready when you need them.",
    features: [
      "Quotations and invoices",
      "Purchase orders",
      "Customer and vendor payments",
      "Chart of accounts",
      "Multi-currency payments",
      "Business reports",
    ],
    href: "/erp",
    image: "/screenshots/erp/quotations-and-invoices.png",
    width: 1920,
    height: 950,
    banner: "Ready to connect quotes, invoices and accounts?",
    bannerCta: "Talk to our team",
    bannerHref: "#contact",
  },
  {
    id: "color",
    tab: "Brand and design",
    product: "Wazely Color",
    title: "Brand colors in minutes, not days",
    copy: "Describe your brand and get a palette you can use straight away, checked for accessibility.",
    features: [
      "AI color palettes",
      "Brand boards",
      "WCAG contrast checks",
      "Gradient generator",
      "CSS and Tailwind exports",
      "Figma exports",
    ],
    href: siteConfig.colorUrl,
    image: "/screenshots/color-hero-light.png",
    width: 1200,
    height: 630,
    banner: "Build your brand palette for free.",
    bannerCta: "Open Wazely Color",
    bannerHref: siteConfig.colorUrl,
  },
] as const;

export function HomeSolutions() {
  const [active, setActive] = useState(0);
  const tabsRef = useRef<HTMLDivElement>(null);

  // All three solutions are stacked on the page. The tab bar sticks under
  // the header and highlights whichever card is currently in view; clicking
  // a tab scrolls to that card.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const tabs = tabsRef.current?.getBoundingClientRect();
      const line = (tabs?.bottom ?? 0) + window.innerHeight * 0.25;
      let current = 0;
      solutions.forEach((solution, index) => {
        const el = document.getElementById(`solution-${solution.id}`);
        if (el && el.getBoundingClientRect().top <= line) current = index;
      });
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  // On phones the tabs are one swipeable row; keep the active one visible.
  useEffect(() => {
    const bar = tabsRef.current;
    const tab = bar?.children[active] as HTMLElement | undefined;
    if (!bar || !tab || bar.scrollWidth <= bar.clientWidth) return;
    bar.scrollTo({
      left: tab.offsetLeft - (bar.clientWidth - tab.offsetWidth) / 2,
      behavior: "smooth",
    });
  }, [active]);

  const goTo = (index: number) => {
    const el = document.getElementById(`solution-${solutions[index].id}`);
    if (!el) return;
    const tabsBottom = tabsRef.current?.getBoundingClientRect().bottom ?? 0;
    const top = el.getBoundingClientRect().top + window.scrollY - tabsBottom - 16;
    window.scrollTo({ top, behavior: "smooth" });
    setActive(index);
  };

  return (
    <section
      id="solutions"
      className="cl-section cl-solutions-section"
      aria-labelledby="solutions-heading"
    >
      <div className="page-shell">
        <div className="cl-heading">
          <p className="cl-eyebrow">Solutions</p>
          <h2 id="solutions-heading">
            Solutions for the work that keeps your business moving
          </h2>
          <p>
            Pick the area you want to improve first. Each one runs on its own
            Wazely product.
          </p>
        </div>

        <div
          ref={tabsRef}
          className="cl-tabs cl-tabs-sticky"
          aria-label="Wazely solutions"
        >
          {solutions.map((solution, index) => (
            <button
              key={solution.id}
              type="button"
              aria-current={index === active ? "true" : undefined}
              aria-controls={`solution-${solution.id}`}
              className={cn("cl-tab", index === active && "is-active")}
              onClick={() => goTo(index)}
            >
              {solution.tab}
            </button>
          ))}
        </div>

        {solutions.map((item) => (
          <div
            key={item.id}
            id={`solution-${item.id}`}
            className="cl-solution-group"
          >
            <article className={`cl-solution cl-tone-${item.id}`}>
              <div className="cl-solution-copy">
                <p className="cl-product-eyebrow">{item.product}</p>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <ul>
                  {item.features.map((feature) => (
                    <li key={feature}>
                      <Check size={15} strokeWidth={2.4} aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href={item.href} className="cl-text-link">
                  Know more about {item.product}{" "}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              </div>
              <div className="cl-solution-visual">
                <Image
                  src={item.image}
                  alt={`${item.product} screen`}
                  width={item.width}
                  height={item.height}
                  sizes="(max-width: 960px) 90vw, 640px"
                />
              </div>
            </article>

            <div className={`cl-banner cl-tone-${item.id}`}>
              <p>{item.banner}</p>
              <Link href={item.bannerHref} className="cl-btn cl-btn-dark">
                {item.bannerCta} <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
