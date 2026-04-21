import { Metadata } from 'next';

export function generateMetadata(): Metadata {
  return {
    title: 'Harness AI | /contact',
    description: 'Harness AI placeholder for /contact',
  };
}

export default function Page() {
  return (
    <main>
      <h1>/contact</h1>
      <p>This is the /contact page for Harness AI.</p>
    </main>
  );
}
