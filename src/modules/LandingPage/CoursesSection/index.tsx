const courses = [
    { name: 'Beginner English', desc: 'Nền tảng giao tiếp', image: '/images/beginner.jpg' },
    { name: 'Intermediate English', desc: 'Tự tin thuyết trình', image: '/images/intermediate.jpg' },
    { name: 'Advanced English', desc: 'Chinh phục IELTS 7.0+', image: '/images/advanced.jpg' },
  ];
  
  export default function CoursesSection() {
    return (
      <section className="bg-white px-6 py-16">
        <h2 className="mb-12 text-center text-3xl font-bold">Khóa học của chúng tôi</h2>
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          {courses.map((c, idx) => (
            <div key={idx} className="overflow-hidden rounded-lg shadow-lg transition hover:scale-105">
              <img src={c.image} alt={c.name} className="h-48 w-full object-cover" />
              <div className="p-4">
                <h3 className="mb-2 text-xl font-semibold">{c.name}</h3>
                <p className="text-gray-600">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  