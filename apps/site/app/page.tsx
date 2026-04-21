import { Metadata } from 'next';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';

export function generateMetadata(): Metadata {
  return {
    title: 'Harness AI | Home',
    description: 'Harness AI placeholder for /',
  };
}

export default function Page() {
  return (
    <Container className="py-24 text-center flex flex-col items-center justify-center">
      <h1 className="text-5xl font-extrabold tracking-tight mb-6">
        Welcome to <span className="text-brand-blue">Harness AI</span>
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
        Transforming your workflow entirely. Experience the Apple-clean aesthetic with high-fidelity, high-contrast design.
      </p>
      <div className="flex gap-4">
        <Button variant="primary">Get Started</Button>
        <Button variant="ghost">Learn More</Button>
      </div>
      
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {[1, 2, 3].map((i) => (
          <div key={i} className="card p-6 text-left">
            <h3 className="font-bold text-lg mb-2">Feature {i}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Minimalist 1px border card component without heavy shadows.</p>
          </div>
        ))}
      </div>
    </Container>
  );
}