import { Metadata } from 'next';

export function generateMetadata(): Metadata {
  return {
    title: 'Harness AI | /resources/[slug]',
    description: 'Harness AI placeholder for /resources/[slug]',
  };
}

export default function Page() {
  return (
    <main>
      <h1>/resources/[slug]</h1>
      <p>This is the /resources/[slug] page for Harness AI.</p>
    </main>
  );
}
