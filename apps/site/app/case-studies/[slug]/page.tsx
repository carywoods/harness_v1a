import { Metadata } from 'next';

export function generateMetadata(): Metadata {
  return {
    title: 'Harness AI | /case-studies/[slug]',
    description: 'Harness AI placeholder for /case-studies/[slug]',
  };
}

export default function Page() {
  return (
    <main>
      <h1>/case-studies/[slug]</h1>
      <p>This is the /case-studies/[slug] page for Harness AI.</p>
    </main>
  );
}
