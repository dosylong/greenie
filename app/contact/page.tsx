export default function ContactPage() {
  return (
    <main className='max-w-3xl mx-auto py-8 px-4'>
      <h1 className='text-3xl font-bold mb-6'>Contact Us</h1>
      <p>
        For inquiries, email us at{' '}
        <a href='mailto:hello@greenie.com' className='text-green-700 underline'>
          hello@greenie.com
        </a>
      </p>
    </main>
  );
}
