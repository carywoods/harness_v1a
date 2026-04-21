import { Metadata } from 'next';

export function generateMetadata(): Metadata {
  return {
    title: 'Harness AI | /case-studies',
    description: 'Harness AI placeholder for /case-studies',
  };
}

export default function Page() {
  return (
    <main>
      <h1>/case-studies</h1>
      <p>This is the /case-studies page for Harness AI.</p>
    </main>
  );
}
