import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Leo. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <Link href="https://github.com/" className="hover:text-foreground" target="_blank" rel="noopener noreferrer">GitHub</Link>
          <Link href="https://www.linkedin.com/" className="hover:text-foreground" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
          <Link href="mailto:leo@example.com" className="hover:text-foreground">Email</Link>
        </div>
      </div>
    </footer>
  );
}


