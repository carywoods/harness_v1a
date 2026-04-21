import { Metadata } from 'next';

export function generateMetadata(): Metadata {
  return {
    title: 'Harness AI | /trust',
    description: 'Harness AI placeholder for /trust',
  };
}

export default function Page() {
  return (
    <main>
      <h1>/trust</h1>
      <p>This is the /trust page for Harness AI.</p>
    </main>
  );
}
