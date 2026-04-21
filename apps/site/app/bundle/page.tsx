import { Metadata } from 'next';

export function generateMetadata(): Metadata {
  return {
    title: 'Harness AI | /bundle',
    description: 'Harness AI placeholder for /bundle',
  };
}

export default function Page() {
  return (
    <main>
      <h1>/bundle</h1>
      <p>This is the /bundle page for Harness AI.</p>
    </main>
  );
}
