"use client";

import { ArrowUpRight, BookOpen, Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { faqItems, type FaqItem } from "@/data/faq";
import { cn } from "@/lib/utils";

type Filter = "All" | FaqItem["category"];

const filters: Filter[] = [
  "All",
  ...Array.from(new Set(faqItems.map((item) => item.category))),
];

export function HomeFaq() {
  const [filter, setFilter] = useState<Filter>("All");
  const [open, setOpen] = useState<string | null>(faqItems[0]?.question ?? null);
  const items =
    filter === "All"
      ? faqItems
      : faqItems.filter((item) => item.category === filter);

  return (
    <section id="resources" className="cl-section cl-faq-section" aria-labelledby="faq-heading">
      <div className="page-shell">
        <div className="cl-heading">
          <p className="cl-eyebrow">FAQ</p>
          <h2 id="faq-heading">Questions, answered</h2>
          <p>The things teams usually ask before they start with Wazely.</p>
        </div>

        <div className="cl-faq-filters" role="group" aria-label="Filter questions">
          {filters.map((name) => (
            <button
              key={name}
              type="button"
              aria-pressed={filter === name}
              className={cn("cl-faq-filter", filter === name && "is-active")}
              onClick={() => setFilter(name)}
            >
              {name}
            </button>
          ))}
        </div>

        <div className="cl-faq-list">
          {items.map((item) => {
            const isOpen = open === item.question;
            const id = `faq-${item.question.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`;
            return (
              <div key={item.question} className={cn("cl-faq-item", isOpen && "is-open")}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={id}
                  onClick={() => setOpen(isOpen ? null : item.question)}
                >
                  <span>{item.question}</span>
                  <span className="cl-faq-icon" aria-hidden="true">
                    <Plus size={16} strokeWidth={2.2} />
                  </span>
                </button>
                <div id={id} className="cl-faq-answer" hidden={!isOpen}>
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="cl-faq-help">
          <div>
            <h3>Still have a question?</h3>
            <p>Our team can help you pick the right product and get set up.</p>
          </div>
          <div className="cl-faq-help-actions">
            <Link href="/knowledge-base" className="cl-btn cl-btn-light">
              <BookOpen size={16} aria-hidden="true" /> Knowledge base
            </Link>
            <Link href="#contact" className="cl-btn cl-btn-dark">
              Talk to our team <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
