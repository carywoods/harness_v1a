export interface SiteSettings {
  id: number;
  siteName: string;
  siteTagline: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  contactEmail: string;
  contactPhone?: string;
  bookingUrl?: string;
  trustBlurb: string;
  footerText: string;
}

export interface Solution {
  id: number;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  audience: string;
  includedFeatures: string[];
  excludedFeatures: string[];
  pricingNote?: string;
  startingPrice: number;
  ctaText: string;
  ctaHref: string;
  featured: boolean;
  bundleEligible: boolean;
}

export interface PricingPlan {
  id: number;
  slug: string;
  name: string;
  category: string;
  startingPrice: number;
  pricePrefix?: string;
  billingNote?: string;
  description: string;
  features: string[];
  finePrint?: string;
  ctaText: string;
  ctaHref: string;
  featured: boolean;
  sortOrder: number;
}

export interface LeadSubmission {
  id: number;
  name: string;
  email: string;
  company?: string;
  role?: string;
  website?: string;
  teamSize?: string;
  needSummary: string;
  offerInterest: string;
  budgetContext?: string;
  timeline?: string;
  sourcePage: string;
  notes?: string;
  createdAt: Date;
}

export interface AiAssistantSettings {
  id: number;
  name: string;
  systemPrompt: string;
  model: string;
  baseUrl: string;
  temperature: number;
  maxTokens: number;
  isEnabled: boolean;
  allowedRoutes: string[];
}
