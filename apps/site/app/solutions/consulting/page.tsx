import { Metadata } from 'next';

export function generateMetadata(): Metadata {
  return {
    title: 'Harness AI | /solutions/consulting',
    description: 'Harness AI placeholder for /solutions/consulting',
  };
}

export default function Page() {
  return (
    <main>
      <h1>/solutions/consulting</h1>
      <p>This is the /solutions/consulting page for Harness AI.</p>
    </main>
  );
}
