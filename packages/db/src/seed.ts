import { db } from "./index";
import * as schema from "./schema";
import bcrypt from "bcryptjs";

async function main() {
  console.log("Seeding database...");

  // 1. Admin User
  const hashedPassword = await bcrypt.hash("admin123", 10);
  await db.insert(schema.users).values({
    email: "admin@harnessai.com",
    passwordHash: hashedPassword,
    role: "admin",
  });

  // 2. Site Settings
  await db.insert(schema.siteSettings).values({
    siteName: "Harness AI",
    siteTagline: "Practical AI systems for organizations that want results, not noise.",
    primaryCtaText: "Book a Strategy Call",
    primaryCtaHref: "/contact",
    contactEmail: "hello@harnessai.com",
    trustBlurb: "Human-led. Privacy-conscious. Outcome-driven.",
    footerText: "© 2024 Harness AI. All rights reserved.",
  });

  // 3. Navigation Items
  await db.insert(schema.navigationItems).values([
    { label: "Solutions", href: "/solutions", sortOrder: 1 },
    { label: "Bundle", href: "/bundle", sortOrder: 2 },
    { label: "Pricing", href: "/pricing", sortOrder: 3 },
    { label: "Results", href: "/results", sortOrder: 4 },
    { label: "Resources", href: "/resources", sortOrder: 5 },
    { label: "About", href: "/about", sortOrder: 6 },
    { label: "Contact", href: "/contact", sortOrder: 7 },
  ]);

  // 4. Pages
  await db.insert(schema.pages).values([
    {
      slug: "home",
      title: "Harness AI | Practical AI Operating Systems",
      status: "published",
      template: "home",
      seoTitle: "Harness AI | Practical AI for Business Results",
      seoDescription: "Deploy AI that works across communication, knowledge, and execution. Practical AI systems for organizations that want results.",
    },
    {
      slug: "bundle",
      title: "The AI Operating System Bundle",
      status: "published",
      template: "bundle",
      seoTitle: "The Harness AI Bundle | Complete AI Operating System",
      seoDescription: "The combined power of CommPilot, AnythingLLM, and Consulting. The strongest business transformation package.",
    },
    {
      slug: "trust",
      title: "Trust & Responsibility",
      status: "published",
      template: "standard",
      seoTitle: "Trust, Privacy & Responsible AI | Harness AI",
      seoDescription: "How we ensure your data remains yours and our AI systems remain transparent and safe.",
    },
  ]);

  // 5. Solutions
  await db.insert(schema.solutions).values([
    {
      slug: "commpilot",
      name: "CommPilot",
      shortDescription: "The digital front desk for your organization.",
      fullDescription: "CommPilot handles initial inquiries, schedules meetings, and routes complex requests to the right humans. It's the intelligent layer between your audience and your team.",
      audience: "Service-based businesses and support teams.",
      includedFeaturesJson: JSON.stringify(["Automated Scheduling", "Inquiry Routing", "24/7 Availability", "CRM Integration"]),
      excludedFeaturesJson: JSON.stringify(["Custom LLM Training", "On-premise Deployment"]),
      startingPrice: 49.99,
      ctaText: "Get Started with CommPilot",
      ctaHref: "/contact?offer=commpilot",
      featured: false,
      bundleEligible: true,
    },
    {
      slug: "whitelabeled-anythingllm",
      name: "AnythingLLM (White-labeled)",
      shortDescription: "Private, secure knowledge for your entire team.",
      fullDescription: "A private instance of AnythingLLM customized for your brand. Chat with your internal documents, wikis, and databases without leaking data to public models.",
      audience: "Knowledge-heavy organizations and research teams.",
      includedFeaturesJson: JSON.stringify(["Private Vector Database", "Multi-user Support", "Custom Branding", "Document Ingestion"]),
      excludedFeaturesJson: JSON.stringify(["External API Access"]),
      startingPrice: 49.99,
      ctaText: "Deploy Your Knowledge Base",
      ctaHref: "/contact?offer=anythingllm",
      featured: false,
      bundleEligible: true,
    },
    {
      slug: "consulting",
      name: "AI Strategy Consulting",
      shortDescription: "Expert guidance on your AI roadmap.",
      fullDescription: "Work directly with our founders to identify high-impact AI opportunities, audit your existing workflows, and build a sustainable AI implementation plan.",
      audience: "Founders and leadership teams.",
      includedFeaturesJson: JSON.stringify(["Workflow Audits", "Custom Tool Development", "Implementation Roadmap", "Staff Training"]),
      excludedFeaturesJson: JSON.stringify(["Infinite Revisions"]),
      startingPrice: 49.99,
      ctaText: "Book a Consultation",
      ctaHref: "/contact?offer=consulting",
      featured: false,
      bundleEligible: true,
    },
  ]);

  // 6. Pricing Plans
  await db.insert(schema.pricingPlans).values([
    {
      slug: "bundle-starter",
      name: "The Full OS Bundle",
      category: "bundle",
      startingPrice: 149.99,
      pricePrefix: "Starting at",
      billingNote: "per month",
      description: "The complete Harness AI operating system. Includes CommPilot, AnythingLLM, and priority consulting.",
      featuresJson: JSON.stringify(["Everything in CommPilot", "Everything in AnythingLLM", "4 hours of monthly consulting", "Priority Support"]),
      ctaText: "Get the Bundle",
      ctaHref: "/contact?offer=bundle",
      featured: true,
      sortOrder: 1,
    },
    {
      slug: "standalone-starter",
      name: "Single Solution",
      category: "standalone",
      startingPrice: 49.99,
      pricePrefix: "Starting at",
      billingNote: "per month",
      description: "Choose any one of our standalone solutions to get started.",
      featuresJson: JSON.stringify(["Core Solution Features", "Standard Support", "Standard Integration"]),
      ctaText: "Choose a Solution",
      ctaHref: "/solutions",
      featured: false,
      sortOrder: 2,
    },
  ]);

  // 7. FAQs
  await db.insert(schema.faqs).values([
    {
      question: "Is my data used to train public AI models?",
      answer: "No. Our systems are designed with privacy first. Your internal data used in AnythingLLM remains private to your instance.",
      category: "privacy",
      sortOrder: 1,
    },
    {
      question: "How does the 'Starting at $49.99' pricing work?",
      answer: "This is our base subscription for standalone tools. For complex integrations or high-volume usage, we provide custom quotes.",
      category: "pricing",
      sortOrder: 2,
    },
    {
      question: "Can I upgrade from a standalone tool to the bundle later?",
      answer: "Absolutely. We encourage starting where you feel the most immediate need and expanding as you see results.",
      category: "general",
      sortOrder: 3,
    },
    {
      question: "Do you offer on-premise deployments?",
      answer: "Yes, for our White-labeled AnythingLLM and custom consulting projects, we can support on-premise or VPC deployments.",
      category: "technical",
      sortOrder: 4,
    },
    {
      question: "What AI models do you use?",
      answer: "We are provider-agnostic. We can connect to OpenAI, Anthropic, or local open-source models depending on your security needs.",
      category: "technical",
      sortOrder: 5,
    },
    {
      question: "Is there a long-term contract?",
      answer: "Our standard plans are month-to-month. Custom consulting projects may have defined project timelines.",
      category: "pricing",
      sortOrder: 6,
    },
  ]);

  // 8. Testimonials
  await db.insert(schema.testimonials).values([
    {
      name: "Sarah Chen",
      title: "COO",
      company: "Nexus Logistics",
      quote: "The Harness AI bundle transformed our customer intake. CommPilot reduced our response time from hours to seconds.",
      sortOrder: 1,
    },
    {
      name: "James Marcus",
      title: "Founder",
      company: "Marcus Law Firm",
      quote: "Having a private AnythingLLM instance means we can search decades of case law without worrying about confidentiality.",
      sortOrder: 2,
    },
    {
      name: "Elena Rodriguez",
      title: "Director of Innovation",
      company: "Global Health Inc",
      quote: "The consulting team didn't just give us a report; they built tools that saved our staff 10 hours a week.",
      sortOrder: 3,
    },
  ]);

  // 9. AI Assistant Settings
  await db.insert(schema.aiAssistantSettings).values({
    name: "Harness Helper",
    systemPrompt: "You are an AI assistant for Harness AI. Your goal is to help visitors understand our three offerings: CommPilot, AnythingLLM, and Consulting. Be professional, concise, and direct. If they ask about pricing, mention it starts at $49.99.",
    model: "gpt-3.5-turbo",
    baseUrl: "https://api.openai.com/v1",
    temperature: 0.7,
    maxTokens: 500,
    isEnabled: true,
    allowedRoutesJson: JSON.stringify(["/", "/solutions", "/bundle", "/pricing"]),
  });

  // 10. Theme Settings
  await db.insert(schema.themeSettings).values({
    accentColor: "#111111",
    surfaceStyle: "clean",
    radiusScale: 0,
    typographyPreset: "premium",
  });

  console.log("Seeding completed successfully.");
}

main().catch((e) => {
  console.error("Seeding failed:");
  console.error(e);
  process.exit(1);
});
