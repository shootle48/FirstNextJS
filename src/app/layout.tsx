// /app/layout.tsx
import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'My Pokemon App',
  description: 'A simple app using Next.js and PokeAPI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/pokemon">Pokemon</Link>
            </li>
            <li>
              <Link href="/aboutme">AboutMe</Link>
            </li>
          </ul>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
