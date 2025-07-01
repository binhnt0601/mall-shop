const features = [
  {
    title: 'Native Teachers',
    desc: 'Learn with 100% American and British instructors',
    icon: '🧑‍🏫',
  },
  {
    title: 'Guaranteed Results',
    desc: "Money-back if you don't achieve your goals",
    icon: '💯',
  },
  {
    title: 'Flexible Schedule',
    desc: 'Learn anytime, anywhere',
    icon: '⏰',
  },
];

export default function FeaturesSection() {
  return (
    <section className='bg-gray-50 px-6 py-16 text-center'>
      <h2 className='mb-12 text-3xl font-bold'>Why Choose Us?</h2>
      <div className='mx-auto grid max-w-5xl gap-8 md:grid-cols-3'>
        {features.map((f, idx) => (
          <div
            key={idx}
            className='rounded-lg bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl'
          >
            <div className='mb-4 text-5xl'>{f.icon}</div>
            <h3 className='mb-2 text-xl font-semibold'>{f.title}</h3>
            <p className='text-gray-600'>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
