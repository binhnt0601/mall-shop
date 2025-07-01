export default function HeroSection() {
    return (
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h1 className="animate-fade-in-up mb-4 text-4xl font-bold md:text-5xl">Chinh phục Tiếng Anh Dễ Dàng</h1>
          <p className="animate-fade-in-up mb-6 text-lg delay-200 md:text-xl">
            Khóa học tiếng Anh toàn diện giúp bạn tự tin giao tiếp và thi chứng chỉ.
          </p>
          <button className="rounded-full bg-white px-8 py-3 font-semibold text-blue-600 shadow-lg transition hover:scale-105">
            Đăng ký ngay
          </button>
        </div>
        <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-white to-transparent"></div>
      </section>
    );
  }
  