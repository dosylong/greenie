import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center min-h-[70vh] py-16 px-4 text-center'>
      <h1 className='text-5xl font-extrabold text-green-700 mb-4'>
        Welcome to Greenie
      </h1>
      <p className='text-lg text-gray-700 mb-8 max-w-xl'>
        Discover premium matcha products for a modern, healthy lifestyle.
        Sourced from the finest tea farms, Greenie brings you the best of
        ceremonial and everyday matcha.
      </p>
      <Link
        href='/products'
        className='inline-block px-8 py-3 bg-green-600 text-white rounded-lg text-lg font-semibold shadow hover:bg-green-700 transition-colors'
      >
        Shop Matcha
      </Link>
    </main>
  );
}
