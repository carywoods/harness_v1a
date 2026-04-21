import { db } from './index';
import { users, siteSettings, solutions, pricingPlans, testimonials, faqs, resources } from './schema';
import { randomUUID } from 'crypto';

async function seed() {
  console.log('Seeding database...');

  // Admin user
  db.insert(users).values({
    id: randomUUID(),
    email: 'admin@harnessai.com',
    name: 'Admin',
    role: 'admin',
    createdAt: new Date(),
  }).run();

  // Site settings
  db.insert(siteSettings).values([
    {
      id: randomUUID(),
      key: 'site_name',
      value: 'Harness AI',
    },
    {
      id: randomUUID(),
      key: 'site_description',
      value: 'Empowering your business with AI.',
    }
  ]).run();

  // Solutions
  db.insert(solutions).values([
    {
      id: randomUUID(),
      name: 'CommPilot',
      description: 'AI-driven communication assistant.',
      features: JSON.stringify(['Auto-replies', 'Sentiment Analysis']),
    },
    {
      id: randomUUID(),
      name: 'AnythingLLM',
      description: 'Your enterprise knowledge base, powered by LLMs.',
      features: JSON.stringify(['Document Chat', 'Secure Retrieval']),
    },
    {
      id: randomUUID(),
      name: 'Consulting',
      description: 'Expert guidance on AI strategy and implementation.',
      features: JSON.stringify(['Strategy Sessions', 'Custom Development']),
    }
  ]).run();

  // Pricing plans
  db.insert(pricingPlans).values([
    {
      id: randomUUID(),
      name: 'Starter',
      price: 4999, // stored as cents
      interval: 'month',
      features: JSON.stringify(['Basic features', 'Standard support']),
    },
    {
      id: randomUUID(),
      name: 'Pro',
      price: 9999,
      interval: 'month',
      features: JSON.stringify(['Advanced features', 'Priority support']),
    }
  ]).run();

  // FAQs
  db.insert(faqs).values([
    {
      id: randomUUID(),
      question: 'What is Harness AI?',
      answer: 'Harness AI provides enterprise-grade AI solutions for modern businesses.',
      order: 1,
    },
    {
      id: randomUUID(),
      question: 'How do I get started?',
      answer: 'Contact our sales team or sign up for a Starter plan.',
      order: 2,
    }
  ]).run();

  // Testimonials
  db.insert(testimonials).values([
    {
      id: randomUUID(),
      authorName: 'Jane Doe',
      authorTitle: 'CTO, TechCorp',
      content: 'Harness AI transformed our workflow entirely.',
    }
  ]).run();

  // Resources
  db.insert(resources).values([
    {
      id: randomUUID(),
      title: 'Getting Started Guide',
      type: 'Guide',
      url: '/resources/getting-started',
    }
  ]).run();

  console.log('Seeding complete.');
}

seed().catch((e) => {
  console.error(e);
  process.exit(1);
});
