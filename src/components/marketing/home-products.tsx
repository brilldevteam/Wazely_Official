import {
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Mic,
  Palette,
  Plus,
  MessagesSquare,
  ReceiptText,
  Send,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Truck,
  Wallet,
  Workflow,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ScrollReveal } from "@/components/marketing/scroll-reveal";
import { products as productData } from "@/data/products";
import { siteConfig } from "@/data/site";

// Homepage sections that follow iqonic.tech's order, drawn in the Clario
// visual style. Every product claim comes from data already on the site.

const integrations = [
  { name: "WhatsApp", slug: "whatsapp" },
  { name: "Facebook", slug: "facebook" },
  { name: "Instagram", slug: "instagram" },
  { name: "Telegram", slug: "telegram" },
  { name: "Google Sheets", slug: "googlesheets" },
  { name: "Shopify", slug: "shopify" },
] as const;

/* Trust strip (iqonic: ratings + client logos; Wazely: integrations). */
export function HomeTrustStrip() {
  return (
    <section className="cl-strip" aria-label="Works with the tools your team already uses">
      <div className="page-shell">
        <p>Works with the tools your team already uses</p>
        <ul>
          {integrations.map((item) => (
            <li key={item.slug}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://cdn.simpleicons.org/${item.slug}/8b8899`}
                alt=""
                width={22}
                height={22}
                loading="lazy"
              />
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const summaries: Record<string, string> = {
  crm: "WhatsApp conversations, contacts, campaigns and automation for customer-facing teams.",
  erp: "Quotes, invoices, payments, purchases and accounts for everyday operations.",
  color: "AI brand color palettes with contrast checks and ready-to-use exports.",
};

const products = productData.map((product) => ({
  ...product,
  summary: summaries[product.slug],
}));

/* Intro statement (iqonic: "Your AI-enabled tech partner"). */
export function HomeIntro() {
  return (
    <section id="about" className="cl-intro" aria-labelledby="intro-heading">
      <div className="page-shell">
        <ScrollReveal className="cl-heading cl-intro-inner">
          <p className="cl-eyebrow">About Wazely</p>
          <h2 id="intro-heading">
            We are a software company building focused products for growing
            businesses across the GCC, one everyday problem at a time.
          </h2>
        </ScrollReveal>
        <div id="products" className="cl-family">
          {products.map((product) => (
            <ScrollReveal key={product.slug} className="cl-family-card">
              <Link href={product.href} className="cl-family-link">
                <div className="cl-family-shot">
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    width={product.imageWidth}
                    height={product.imageHeight}
                    sizes="(max-width: 700px) 92vw, (max-width: 1100px) 46vw, 24vw"
                  />
                </div>
                <div className="cl-family-body">
                  <div className="cl-family-title">
                    <h3>{product.name}</h3>
                    <span
                      className={
                        product.tier === "Free" ? "cl-tier cl-tier-free" : "cl-tier"
                      }
                    >
                      {product.tier}
                    </span>
                  </div>
                  <p className="cl-family-category">{product.category}</p>
                  <p>{product.summary}</p>
                  <span className="cl-family-cta">
                    {product.cta} <ArrowUpRight size={15} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
          <ScrollReveal className="cl-family-card cl-family-next">
            <div className="cl-family-body">
              <span className="cl-feature-icon">
                <Plus size={20} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <h3>More products on the way</h3>
              <p>
                We are building the next focused tools in the Wazely family.
                Tell us what your business needs.
              </p>
              <Link href="#contact" className="cl-text-link">
                Share what you need <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}


/* AI approach (iqonic: "Our AI-first delivery model"). Features from the
   site's own pricing and product data; the ERP has no AI claims. */
const aiFeatures = [
  { icon: Bot, product: "Wazely CRM", title: "AI agent", copy: "An AI agent inside Wazely CRM that helps your team handle customer conversations." },
  { icon: BrainCircuit, product: "Wazely CRM", title: "Chat that knows your business", copy: "OpenAI-powered chat that uses your own business data, plus a ChatGPT integration." },
  { icon: Mic, product: "Wazely CRM", title: "Text and voice conversation AI", copy: "Handle customer conversations in both text and voice." },
  { icon: Palette, product: "Wazely Color", title: "AI color palettes", copy: "Describe your brand in a sentence and get a palette that is ready to use." },
] as const;

export function HomeAi() {
  return (
    <section id="ai" className="cl-section cl-ai-section" aria-labelledby="ai-heading">
      <div className="page-shell cl-ai">
        <ScrollReveal className="cl-ai-intro">
          <p className="cl-eyebrow">Our approach to AI</p>
          <h2 id="ai-heading">AI where it saves your team time</h2>
          <p>
            We add AI to Wazely products when it removes real work, like
            helping with customer conversations or turning a short brief into
            a brand palette. Your team stays in charge of the decisions.
          </p>
          <Link href="#contact" className="cl-text-link">
            Ask us about AI for your team{" "}
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </ScrollReveal>
        <div className="cl-ai-grid">
          {aiFeatures.map(({ icon: Icon, product, title, copy }) => (
            <ScrollReveal key={title} className="cl-ai-card">
              <div className="cl-ai-card-top">
                <span className="cl-feature-icon">
                  <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <span className="cl-cap-tag">{product}</span>
              </div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Free tool band (iqonic: free cost calculator). */
export function HomeFreeTool() {
  return (
    <section className="cl-tool-section" aria-labelledby="free-tool-heading">
      <div className="page-shell">
        <ScrollReveal className="cl-tool">
          <div className="cl-tool-copy">
            <p className="cl-chip cl-chip-violet">
              <Sparkles size={13} aria-hidden="true" /> Free tool
            </p>
            <h2 id="free-tool-heading">
              Build your brand color palette with AI, for free
            </h2>
            <p>
              Describe your brand and Wazely Color suggests a palette, checks
              WCAG contrast, and exports it to CSS, Tailwind or Figma.
            </p>
            <Link href={siteConfig.colorUrl} className="cl-btn cl-btn-dark">
              Open Wazely Color <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <div className="cl-tool-visual" aria-hidden="true">
            <Image
              src="/screenshots/color-hero-light.png"
              alt=""
              width={1200}
              height={630}
              sizes="(max-width: 960px) 90vw, 560px"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* Numbered cards + CTA (iqonic: services 01-06 + "Let's build"). */
const capabilities = [
  { icon: MessagesSquare, tag: "CRM", title: "Shared WhatsApp inbox", copy: "Reply from one business number, with full customer history.", href: "/crm" },
  { icon: Send, tag: "CRM", title: "Broadcast campaigns", copy: "Send approved templates and track delivery and reads.", href: "/crm" },
  { icon: Workflow, tag: "CRM", title: "Chatbot automation", copy: "Build flows and auto-replies visually, without code.", href: "/crm" },
  { icon: ReceiptText, tag: "ERP", title: "Quotes and invoices", copy: "Convert an accepted quote into an invoice in one step.", href: "/erp" },
  { icon: Wallet, tag: "ERP", title: "Payments and accounts", copy: "Customer and vendor payments update your books.", href: "/erp" },
  { icon: ShieldCheck, tag: "CRM + ERP", title: "Roles and permissions", copy: "Decide who can view, create, update or manage.", href: "/knowledge-base" },
] as const;

export function HomeCapabilities() {
  return (
    <section id="capabilities" className="cl-section" aria-labelledby="capabilities-heading">
      <div className="page-shell">
        <ScrollReveal className="cl-heading">
          <p className="cl-eyebrow">What you can do today</p>
          <h2 id="capabilities-heading">Capabilities across our products</h2>
          <p>
            A few of the things teams already do with Wazely, with more added
            as our product family grows.
          </p>
        </ScrollReveal>
        <div className="cl-cap-grid">
          {capabilities.map(({ icon: Icon, tag, title, copy, href }, index) => (
            <ScrollReveal key={title} className="cl-cap">
              <div className="cl-cap-top">
                <span className="cl-cap-num">{String(index + 1).padStart(2, "0")}</span>
                <span className="cl-cap-tag">{tag}</span>
              </div>
              <span className="cl-feature-icon">
                <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <Link href={href} className="cl-text-link">
                Learn more <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            </ScrollReveal>
          ))}
        </div>
        <div className="cl-banner cl-tone-color">
          <p>Not sure which Wazely product fits? We&rsquo;ll help you choose.</p>
          <Link href="#contact" className="cl-btn cl-btn-dark">
            Talk to our team <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* Step-by-step model (iqonic: "Our AI-first delivery model"):
   how working with Wazely goes, for any product in the family. */
const process = [
  { title: "Choose a product", copy: "Start with the Wazely product that fits the work in front of you." },
  { title: "Set up your workspace", copy: "Add your business details and the way your team works." },
  { title: "Invite your team", copy: "Bring teammates in and choose what each person can see and do." },
  { title: "Connect your tools", copy: "Link the channels and apps you already use, like WhatsApp." },
  { title: "Learn as you go", copy: "Step-by-step guides in the knowledge base cover setup and daily work." },
  { title: "Grow with Wazely", copy: "Add more Wazely products as your business and our family grow." },
] as const;

export function HomeProcess() {
  return (
    <section id="how-it-works" className="cl-section cl-process-section" aria-labelledby="process-heading">
      <div className="page-shell">
        <ScrollReveal className="cl-heading">
          <p className="cl-eyebrow">How it works</p>
          <h2 id="process-heading">Getting started with Wazely</h2>
          <p>The same simple path for every product in the Wazely family.</p>
        </ScrollReveal>
        <ol className="cl-process">
          {process.map((step, index) => (
            <li key={step.title}>
              <span className="cl-process-step">Step {index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* Story block + CTA (iqonic: "Listen..." founder story). */
const teamQuestions = [
  { initials: "OM", name: "Omar", text: "Who replied to the customer from yesterday?" },
  { initials: "LA", name: "Layla", text: "Which version of the quote is the final one?" },
  { initials: "YK", name: "Yusuf", text: "Has invoice 1042 been paid yet?" },
] as const;

export function HomeStory() {
  return (
    <section className="cl-section cl-story-section" aria-labelledby="story-heading">
      <div className="page-shell cl-story">
        <ScrollReveal className="cl-story-copy">
          <p className="cl-eyebrow">Sound familiar?</p>
          <h2 id="story-heading">
            When work is spread across apps, your team spends the day asking
            where things are
          </h2>
          <p>
            Contacts in one app, invoices in another, customer chats on
            personal phones. Wazely keeps conversations, quotes and payments
            in one place, so the answer is already on screen.
          </p>
          <div className="cl-story-actions">
            <Link href="#contact" className="cl-btn cl-btn-dark">
              Book a free call <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
            <Link href={siteConfig.demoUrl} className="cl-text-link">
              Try the demo <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </ScrollReveal>
        <ScrollReveal className="cl-story-visual">
          <p className="cl-story-label" aria-hidden="true">
            Team chat · today
          </p>
          <ul aria-label="Typical questions from a team using scattered tools">
            {teamQuestions.map((q) => (
              <li key={q.name}>
                <span className="cl-avatar" aria-hidden="true">{q.initials}</span>
                <div>
                  <strong>{q.name}</strong>
                  <p>{q.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="cl-story-answer">
            <span className="cl-story-logo" aria-hidden="true">W</span>
            <p>With Wazely, each answer is one click away.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* Who it's for (iqonic: case studies; Wazely has no clients to show yet). */
const audiences = [
  { icon: ShoppingBag, title: "Retail and e-commerce", copy: "Answer product questions on WhatsApp, send catalog broadcasts and connect your Shopify store.", tags: ["CRM", "Campaigns"] },
  { icon: Wrench, title: "Service businesses", copy: "Take bookings over WhatsApp, follow up automatically and invoice when the job is done.", tags: ["CRM", "ERP"] },
  { icon: Truck, title: "Trading and distribution", copy: "Raise purchase orders, track stock across warehouses and keep vendor payments in order.", tags: ["ERP", "Reports"] },
] as const;

export function HomeAudience() {
  return (
    <section className="cl-section cl-audience-section" aria-labelledby="audience-heading">
      <div className="page-shell">
        <ScrollReveal className="cl-heading">
          <p className="cl-eyebrow">Who it&rsquo;s for</p>
          <h2 id="audience-heading">Built for the way GCC teams work</h2>
        </ScrollReveal>
        <div className="cl-audience">
          {audiences.map(({ icon: Icon, title, copy, tags }) => (
            <ScrollReveal key={title} className="cl-audience-card">
              <span className="cl-feature-icon">
                <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <div className="cl-audience-tags">
                {tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
