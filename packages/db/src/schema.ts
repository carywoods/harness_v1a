import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

export const users = sqliteTable("users", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  email: text("email").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  role: text("role").notNull().default("editor"),
  createdAt: integer("created_at", { mode: "timestamp" }).default(sql`CURRENT_TIMESTAMP`),
  updatedAt: integer("updated_at", { mode: "timestamp" }).default(sql`CURRENT_TIMESTAMP`),
});

export const siteSettings = sqliteTable("site_settings", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  siteName: text("site_name").notNull(),
  siteTagline: text("site_tagline").notNull(),
  primaryCtaText: text("primary_cta_text").notNull(),
  primaryCtaHref: text("primary_cta_href").notNull(),
  contactEmail: text("contact_email").notNull(),
  contactPhone: text("contact_phone"),
  bookingUrl: text("booking_url"),
  trustBlurb: text("trust_blurb").notNull(),
  footerText: text("footer_text").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).default(sql`CURRENT_TIMESTAMP`),
  updatedAt: integer("updated_at", { mode: "timestamp" }).default(sql`CURRENT_TIMESTAMP`),
});

export const navigationItems = sqliteTable("navigation_items", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  label: text("label").notNull(),
  href: text("href").notNull(),
  location: text("location").notNull().default("header"), // header, footer
  parentId: integer("parent_id"),
  sortOrder: integer("sort_order").notNull().default(0),
  isVisible: integer("is_visible", { mode: "boolean" }).notNull().default(true),
  createdAt: integer("created_at", { mode: "timestamp" }).default(sql`CURRENT_TIMESTAMP`),
  updatedAt: integer("updated_at", { mode: "timestamp" }).default(sql`CURRENT_TIMESTAMP`),
});

export const pages = sqliteTable("pages", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  status: text("status").notNull().default("draft"), // draft, published
  template: text("template").notNull().default("default"),
  excerpt: text("excerpt"),
  seoTitle: text("seo_title"),
  seoDescription: text("seo_description"),
  ogTitle: text("og_title"),
  ogDescription: text("og_description"),
  ogImage: text("og_image"),
  canonicalUrl: text("canonical_url"),
  noindex: integer("noindex", { mode: "boolean" }).notNull().default(false),
  publishedAt: integer("published_at", { mode: "timestamp" }),
  createdAt: integer("created_at", { mode: "timestamp" }).default(sql`CURRENT_TIMESTAMP`),
  updatedAt: integer("updated_at", { mode: "timestamp" }).default(sql`CURRENT_TIMESTAMP`),
});

export const solutions = sqliteTable("solutions", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
  shortDescription: text("short_description").notNull(),
  fullDescription: text("full_description").notNull(),
  audience: text("audience").notNull(),
  includedFeaturesJson: text("included_features_json").notNull(), // JSON array
  excludedFeaturesJson: text("excluded_features_json").notNull(), // JSON array
  pricingNote: text("pricing_note"),
  startingPrice: real("starting_price").notNull(),
  ctaText: text("cta_text").notNull(),
  ctaHref: text("cta_href").notNull(),
  featured: integer("featured", { mode: "boolean" }).notNull().default(false),
  bundleEligible: integer("bundle_eligible", { mode: "boolean" }).notNull().default(true),
  createdAt: integer("created_at", { mode: "timestamp" }).default(sql`CURRENT_TIMESTAMP`),
  updatedAt: integer("updated_at", { mode: "timestamp" }).default(sql`CURRENT_TIMESTAMP`),
});

export const pricingPlans = sqliteTable("pricing_plans", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
  category: text("category").notNull(),
  startingPrice: real("starting_price").notNull(),
  pricePrefix: text("price_prefix"),
  billingNote: text("billing_note"),
  description: text("description").notNull(),
  featuresJson: text("features_json").notNull(), // JSON array
  finePrint: text("fine_print"),
  ctaText: text("cta_text").notNull(),
  ctaHref: text("cta_href").notNull(),
  featured: integer("featured", { mode: "boolean" }).notNull().default(false),
  sortOrder: integer("sort_order").notNull().default(0),
  createdAt: integer("created_at", { mode: "timestamp" }).default(sql`CURRENT_TIMESTAMP`),
  updatedAt: integer("updated_at", { mode: "timestamp" }).default(sql`CURRENT_TIMESTAMP`),
});

export const testimonials = sqliteTable("testimonials", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  title: text("title").notNull(),
  company: text("company").notNull(),
  quote: text("quote").notNull(),
  avatarUrl: text("avatar_url"),
  sortOrder: integer("sort_order").notNull().default(0),
  isVisible: integer("is_visible", { mode: "boolean" }).notNull().default(true),
  createdAt: integer("created_at", { mode: "timestamp" }).default(sql`CURRENT_TIMESTAMP`),
  updatedAt: integer("updated_at", { mode: "timestamp" }).default(sql`CURRENT_TIMESTAMP`),
});

export const leadSubmissions = sqliteTable("lead_submissions", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company"),
  role: text("role"),
  website: text("website"),
  teamSize: text("team_size"),
  needSummary: text("need_summary").notNull(),
  offerInterest: text("offer_interest").notNull(),
  budgetContext: text("budget_context"),
  timeline: text("timeline"),
  sourcePage: text("source_page").notNull(),
  notes: text("notes"),
  createdAt: integer("created_at", { mode: "timestamp" }).default(sql`CURRENT_TIMESTAMP`),
});

export const aiAssistantSettings = sqliteTable("ai_assistant_settings", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  systemPrompt: text("system_prompt").notNull(),
  model: text("model").notNull(),
  baseUrl: text("base_url").notNull(),
  temperature: real("temperature").notNull().default(0.7),
  maxTokens: integer("max_tokens").notNull().default(1000),
  isEnabled: integer("is_enabled", { mode: "boolean" }).notNull().default(true),
  allowedRoutesJson: text("allowed_routes_json").notNull(), // JSON array
  createdAt: integer("created_at", { mode: "timestamp" }).default(sql`CURRENT_TIMESTAMP`),
  updatedAt: integer("updated_at", { mode: "timestamp" }).default(sql`CURRENT_TIMESTAMP`),
});

export const themeSettings = sqliteTable("theme_settings", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  accentColor: text("accent_color").notNull().default("#000000"),
  surfaceStyle: text("surface_style").notNull().default("clean"),
  radiusScale: real("radius_scale").notNull().default(0.5),
  typographyPreset: text("typography_preset").notNull().default("modern"),
  logoUrl: text("logo_url"),
  faviconUrl: text("favicon_url"),
  createdAt: integer("created_at", { mode: "timestamp" }).default(sql`CURRENT_TIMESTAMP`),
  updatedAt: integer("updated_at", { mode: "timestamp" }).default(sql`CURRENT_TIMESTAMP`),
});

export const faqs = sqliteTable("faqs", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  question: text("question").notNull(),
  answer: text("answer").notNull(),
  category: text("category").notNull(),
  sortOrder: integer("sort_order").notNull().default(0),
  isVisible: integer("is_visible", { mode: "boolean" }).notNull().default(true),
  createdAt: integer("created_at", { mode: "timestamp" }).default(sql`CURRENT_TIMESTAMP`),
  updatedAt: integer("updated_at", { mode: "timestamp" }).default(sql`CURRENT_TIMESTAMP`),
});
