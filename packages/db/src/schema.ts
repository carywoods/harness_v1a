import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  id: text('id').primaryKey(),
  email: text('email').notNull().unique(),
  name: text('name'),
  role: text('role').default('user'),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
});

export const sessions = sqliteTable('sessions', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull().references(() => users.id),
  expiresAt: integer('expires_at', { mode: 'timestamp' }).notNull(),
});

export const siteSettings = sqliteTable('site_settings', {
  id: text('id').primaryKey(),
  key: text('key').notNull().unique(),
  value: text('value').notNull(),
});

export const navigationItems = sqliteTable('navigation_items', {
  id: text('id').primaryKey(),
  label: text('label').notNull(),
  href: text('href').notNull(),
  order: integer('order').notNull(),
});

export const pages = sqliteTable('pages', {
  id: text('id').primaryKey(),
  slug: text('slug').notNull().unique(),
  title: text('title').notNull(),
  description: text('description'),
});

export const pageSections = sqliteTable('page_sections', {
  id: text('id').primaryKey(),
  pageId: text('page_id').notNull().references(() => pages.id),
  type: text('type').notNull(),
  content: text('content', { mode: 'json' }).notNull(),
  order: integer('order').notNull(),
});

export const solutions = sqliteTable('solutions', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description').notNull(),
  features: text('features', { mode: 'json' }),
});

export const pricingPlans = sqliteTable('pricing_plans', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  price: integer('price').notNull(),
  interval: text('interval').notNull(),
  features: text('features', { mode: 'json' }),
});

export const testimonials = sqliteTable('testimonials', {
  id: text('id').primaryKey(),
  authorName: text('author_name').notNull(),
  authorTitle: text('author_title'),
  content: text('content').notNull(),
});

export const caseStudies = sqliteTable('case_studies', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  summary: text('summary').notNull(),
  content: text('content').notNull(),
});

export const resources = sqliteTable('resources', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  type: text('type').notNull(),
  url: text('url').notNull(),
});

export const faqs = sqliteTable('faqs', {
  id: text('id').primaryKey(),
  question: text('question').notNull(),
  answer: text('answer').notNull(),
  order: integer('order').notNull(),
});

export const leadSubmissions = sqliteTable('lead_submissions', {
  id: text('id').primaryKey(),
  email: text('email').notNull(),
  name: text('name'),
  message: text('message'),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
});

export const aiAssistantSettings = sqliteTable('ai_assistant_settings', {
  id: text('id').primaryKey(),
  prompt: text('prompt').notNull(),
  model: text('model').notNull(),
});

export const themeSettings = sqliteTable('theme_settings', {
  id: text('id').primaryKey(),
  primaryColor: text('primary_color').notNull(),
  fontFamily: text('font_family').notNull(),
});

export const seoRedirects = sqliteTable('seo_redirects', {
  id: text('id').primaryKey(),
  source: text('source').notNull(),
  destination: text('destination').notNull(),
  statusCode: integer('status_code').notNull().default(301),
});

export const mediaAssets = sqliteTable('media_assets', {
  id: text('id').primaryKey(),
  fileName: text('file_name').notNull(),
  url: text('url').notNull(),
  mimeType: text('mime_type').notNull(),
});
