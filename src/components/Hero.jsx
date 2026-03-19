export default function Hero() {
  return (
    <section
      id="home"
      className="w-full bg-[#f0f2f5] py-16 md:py-24 scroll-mt-28"
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-[#D84C00] to-[#E67E22] bg-clip-text text-transparent">
            iksha institute
          </span>
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-8xl mx-auto">
          Building talented professionals through industry-focused education and training.
          Transform your skills with our comprehensive programs designed for success.
          Building talented professionals through industry-focused education and training. Transform your skills with our comprehensive programs designed for success.


        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#courses"
            className="inline-block bg-[#D84C00] hover:bg-[#C2420A] text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            Explore Courses
          </a>

          <a
            href="#contact"
            className="inline-block border border-[#D84C00] text-[#D84C00] px-8 py-3 rounded-lg font-semibold hover:bg-[#D84C00] hover:text-white transition"
          >
            Contact Us
          </a>
        </div>

      </div>
    </section>

  );
}
