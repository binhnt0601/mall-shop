const features = [
    { title: 'Giáo viên bản ngữ', desc: 'Học với giáo viên Anh Mỹ 100%', icon: '🧑‍🏫' },
    { title: 'Cam kết đầu ra', desc: 'Hoàn tiền nếu không đạt', icon: '💯' },
    { title: 'Thời gian linh hoạt', desc: 'Học mọi lúc mọi nơi', icon: '⏰' },
  ];
  
  export default function FeaturesSection() {
    return (
      <section className="bg-gray-50 px-6 py-16 text-center">
        <h2 className="mb-12 text-3xl font-bold">Tại sao chọn chúng tôi?</h2>
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          {features.map((f, idx) => (
            <div key={idx} className="rounded-lg bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-4 text-5xl">{f.icon}</div>
              <h3 className="mb-2 text-xl font-semibold">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  