const testimonials = [
    { name: 'Lan', text: 'Giáo viên siêu tận tâm, mình đã đạt IELTS 6.5 sau 6 tháng!', image: '/images/lan.jpg' },
    { name: 'Minh', text: 'Giờ học linh hoạt phù hợp sinh viên đi làm.', image: '/images/minh.jpg' },
  ];
  
  export default function TestimonialsSection() {
    return (
      <section className="bg-gray-50 px-6 py-16 text-center">
        <h2 className="mb-12 text-3xl font-bold">Học viên nói gì?</h2>
        <div className="mx-auto flex max-w-4xl flex-col justify-center gap-8 md:flex-row">
          {testimonials.map((t, idx) => (
            <div key={idx} className="rounded-lg bg-white p-6 shadow-md">
              <img src={t.image} alt={t.name} className="mx-auto mb-4 size-16 rounded-full object-cover" />
              <p className="mb-2 italic">{t.text}</p>
              <h3 className="font-semibold">{t.name}</h3>
            </div>
          ))}
        </div>
      </section>
    );
  }
  