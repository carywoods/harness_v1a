import { Metadata } from 'next';

export function generateMetadata(): Metadata {
  return {
    title: 'Harness AI | /solutions',
    description: 'Harness AI placeholder for /solutions',
  };
}

export default function Page() {
  return (
    <main>
      <h1>/solutions</h1>
      <p>This is the /solutions page for Harness AI.</p>
    </main>
  );
}
