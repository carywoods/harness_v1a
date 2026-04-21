import { Metadata } from 'next';

export function generateMetadata(): Metadata {
  return {
    title: 'Harness AI | /about',
    description: 'Harness AI placeholder for /about',
  };
}

export default function Page() {
  return (
    <main>
      <h1>/about</h1>
      <p>This is the /about page for Harness AI.</p>
    </main>
  );
}
