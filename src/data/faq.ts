export type FaqItem = {
  category:
    | "About Wazely"
    | "Getting started"
    | "Wazely CRM"
    | "Wazely ERP"
    | "Wazely Color";
  question: string;
  answer: string;
};

export const faqItems: readonly FaqItem[] = [
  {
    category: "About Wazely",
    question: "What is Wazely?",
    answer:
      "Wazely is a software company that builds focused, AI-powered business products for growing teams across the GCC. Our product family currently includes Wazely CRM, Wazely ERP and the free Wazely Color.",
  },
  {
    category: "About Wazely",
    question: "Will Wazely release more products?",
    answer:
      "Yes. More products are in development. Each new product will focus on one part of everyday business work, and you will be able to use it on its own or alongside the products you already have.",
  },
  {
    category: "Getting started",
    question: "Can I use Wazely CRM and Wazely ERP separately?",
    answer:
      "Yes. CRM and ERP are two independent products. Start with whichever one matches the work in front of you, or run both if you need customer conversations and business operations connected.",
  },
  {
    category: "Wazely CRM",
    question: "Does Wazely CRM replace WhatsApp Business?",
    answer:
      "Wazely connects to your WhatsApp Business or Cloud API account, so your agents work from a shared inbox under one business number instead of a personal phone, with contact history and assignment visible to the whole team.",
  },
  {
    category: "Wazely ERP",
    question: "Can a quotation turn into an invoice without re-entering it?",
    answer:
      "Yes. In Wazely ERP, an accepted quotation converts directly into a sales invoice, keeping customer, item, and pricing details intact instead of retyping them.",
  },
  {
    category: "Wazely ERP",
    question: "Does Wazely ERP handle payments in more than one currency?",
    answer:
      "Customer and vendor payments support recording a transaction currency and exchange rate alongside your company's base currency, so foreign-currency receipts stay accurate in your books.",
  },
  {
    category: "Wazely Color",
    question: "Is Wazely Color actually free?",
    answer:
      "Yes. Wazely Color is a free AI-powered brand color toolkit: generate palettes, build brand boards, check WCAG contrast, and export to CSS, Tailwind, or Figma.",
  },
  {
    category: "Getting started",
    question: "Can I control what each team member can see or do?",
    answer:
      "Yes. Both products support role-based permissions, so you can control access by action (view, create, update, manage) rather than giving every teammate full access.",
  },
] as const;
