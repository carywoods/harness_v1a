import { Container } from './ui/Container';

export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 py-8 text-sm text-gray-500 dark:text-gray-400">
      <Container className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
        <p>&copy; {new Date().getFullYear()} Harness AI. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="/trust" className="hover:text-black dark:hover:text-white transition-colors">Trust Center</a>
          <a href="/contact" className="hover:text-black dark:hover:text-white transition-colors">Contact</a>
        </div>
      </Container>
    </footer>
  );
}