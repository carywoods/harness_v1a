import { Metadata } from 'next';

export function generateMetadata(): Metadata {
  return {
    title: 'Harness AI | /results',
    description: 'Harness AI placeholder for /results',
  };
}

export default function Page() {
  return (
    <main>
      <h1>/results</h1>
      <p>This is the /results page for Harness AI.</p>
    </main>
  );
}
