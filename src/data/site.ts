export const siteConfig = {
  companyName: "Wazely",
  title: "Wazely | AI-Powered Business Software for Growing Teams",
  description:
    "Wazely is a software company building focused, AI-powered business products for growing teams across the GCC, starting with Wazely CRM, Wazely ERP and the free Wazely Color.",
  crmUrl: "https://crm.wazely.io",
  erpUrl: "https://erp.wazely.io",
  colorUrl: "https://color.wazely.io/",
  demoUrl: "https://crm.wazely.io",
  knowledgeBaseUrl: "https://help.wazely.io/enterprise/index.html",
  erpKnowledgeBaseUrl: "https://help.wazely.io/erp/",
  language: "en",
  locale: "en_GB",
  targetMarkets: [
    "Qatar",
    "Saudi Arabia",
    "United Arab Emirates",
    "Kuwait",
    "Bahrain",
    "Oman",
  ],
  socialLinks: {
    facebook: "https://www.facebook.com/wazely.io",
    instagram: "https://www.instagram.com/wazely.io/",
  },
  legalLinks: {},
} as const;

export function getSiteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL;
  try {
    return new URL(configured ?? "https://wazely.io");
  } catch {
    return new URL("https://wazely.io");
  }
}
