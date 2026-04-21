export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-minimal bg-white/80 backdrop-blur-md">
      <div className="mx-auto w-full max-w-[1200px] px-6 h-16 flex items-center justify-between">
        <a href="/" className="text-xl font-bold tracking-tight text-brand-charcoal">Harness AI</a>
        <nav className="flex items-center gap-6 text-sm font-medium text-brand-charcoal">
          <a href="/solutions" className="hover:text-neutral-500 transition-colors">Solutions</a>
          <a href="/pricing" className="hover:text-neutral-500 transition-colors">Pricing</a>
          <a href="/about" className="hover:text-neutral-500 transition-colors">About</a>
        </nav>
      </div>
    </header>
  );
}