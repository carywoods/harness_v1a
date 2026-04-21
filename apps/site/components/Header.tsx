import { Container } from './ui/Container';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <a href="/" className="text-xl font-bold text-brand-blue tracking-tight">Harness AI</a>
        <nav className="flex items-center gap-4 text-sm font-medium">
          <a href="/solutions" className="hover:text-brand-blue transition-colors">Solutions</a>
          <a href="/pricing" className="hover:text-brand-blue transition-colors">Pricing</a>
          <a href="/about" className="hover:text-brand-blue transition-colors">About</a>
        </nav>
      </Container>
    </header>
  );
}