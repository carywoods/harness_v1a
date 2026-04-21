import { Metadata } from 'next';

export function generateMetadata(): Metadata {
  return {
    title: 'Harness AI | Home',
    description: 'Harness AI placeholder for /',
  };
}

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="flex flex-col items-center justify-center text-center py-24">
        <h1 className="text-6xl font-bold tracking-tighter mb-6">
          Welcome to <span className="text-brand-blue">Harness AI</span>
        </h1>
        <p className="text-xl text-neutral-500 max-w-2xl leading-relaxed mb-8">
          Transforming your workflow entirely. Experience the Apple-clean aesthetic with high-fidelity, high-contrast design.
        </p>
        <div className="flex gap-4">
          <button className="bg-[#121212] text-white px-6 py-3 rounded-md font-medium hover:bg-neutral-800 transition-all">
            Get Started
          </button>
          <button className="px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-all">
            Learn More
          </button>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border-minimal p-6 rounded-lg text-left">
              <h3 className="font-bold text-lg mb-2">Feature {i}</h3>
              <p className="text-sm text-neutral-500">Minimalist 1px border card component without heavy shadows.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}