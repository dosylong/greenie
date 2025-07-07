'use client';
import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/cart', label: 'Cart' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  return (
    <nav className='w-full flex items-center justify-between py-4 px-8 border-b bg-white/80 backdrop-blur'>
      <Link
        href='/'
        className='text-2xl font-bold tracking-tight text-green-700'
      >
        Greenie
      </Link>
      <ul className='flex gap-6'>
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className='hover:text-green-600 transition-colors'
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
