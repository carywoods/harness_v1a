import { Metadata } from 'next';

export function generateMetadata(): Metadata {
  return {
    title: 'Harness AI | /faq',
    description: 'Harness AI placeholder for /faq',
  };
}

export default function Page() {
  return (
    <main>
      <h1>/faq</h1>
      <p>This is the /faq page for Harness AI.</p>
    </main>
  );
}
