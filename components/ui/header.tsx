import Link from 'next/link';

export default function Header() {
  return (
    <header className="text-gray-100 py-8 shadow-lg" style={{ background: 'linear-gradient(135deg, #1e3a5f 0%, #2c5282 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <h1 className="text-4xl font-bold">Magic Sweet Cakes</h1>
        <nav>
          <ul className="flex gap-6">
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:underline">
                Gallery
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
