import { Metadata } from 'next';

export function generateMetadata(): Metadata {
  return {
    title: 'Harness AI | /resources',
    description: 'Harness AI placeholder for /resources',
  };
}

export default function Page() {
  return (
    <main>
      <h1>/resources</h1>
      <p>This is the /resources page for Harness AI.</p>
    </main>
  );
}
