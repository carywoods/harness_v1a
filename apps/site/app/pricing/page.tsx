import { Metadata } from 'next';

export function generateMetadata(): Metadata {
  return {
    title: 'Harness AI | /pricing',
    description: 'Harness AI placeholder for /pricing',
  };
}

export default function Page() {
  return (
    <main>
      <h1>/pricing</h1>
      <p>This is the /pricing page for Harness AI.</p>
    </main>
  );
}
