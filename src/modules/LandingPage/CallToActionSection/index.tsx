import Link from 'next/link';

export default function CallToActionSection() {
  return (
    <section className='bg-indigo-600 px-6 py-16 text-center text-white'>
      <h2 className='mb-4 text-3xl font-bold'>Ready to Get Started?</h2>
      <p className='mb-6'>Register now to receive tuition discounts today</p>
      <Link
        href='/register'
        className='rounded-full bg-white px-8 py-3 font-semibold text-blue-600 shadow-lg transition hover:scale-105 cursor-pointer'
      >
        Register Now
      </Link>
    </section>
  );
}
