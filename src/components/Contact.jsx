export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#f0f2f5] py-4 px-4 sm:px-6 lg:px-8 scroll-mt-28"
    >
      <div className="max-w-8xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-black mb-6">
          Connect With Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 1) Visit Us */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-[#D84C00] transition text-left">
            <div className="text-2xl mb-2 font-semibold text-black mb-2">📍 Visit Us</div>
            <div className="font-semibold text-black mb-2">
              
            </div>
            <div className="text-gray-600 text-sm space-y-1">
              <div>iksha institute of technologies</div>
              <div>Flat G202, Concorde Midway City, Basapura Village Road</div>
              <div>Bengaluru - 560100</div>
            </div>
          </div>

          {/* 2) Phone + WhatsApp */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-[#D84C00] transition text-left">
            <div className="text-2xl mb-2 font-semibold text-black mb-2">📞 Call / 💬 WhatsApp</div>
            <div className="space-y-3">
              <a
                href="tel:+919900928972"
                className="block text-gray-700 hover:text-[#D84C00] transition font-semibold"
              >
                📞 +91-99009-28972
              </a>
            </div>
            <div className="space-y-3">
              <a
                href="https://wa.me/919900928972"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-700 hover:text-[#D84C00] transition font-semibold"
              >
                💬 Message on WhatsApp
              </a>
            </div>
          </div>

          {/* 3) Social Media */}
          <div className="bg-white p-6 rounded-lg border text-black border-gray-200 hover:border-[#D84C00] transition text-left">
            <div className="text-2xl mb-2 font-semibold text-black mb-4">🌐 Follow Us</div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.youtube.com/@iksha-institute"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg border border-gray-300 hover:border-[#D84C00] hover:text-[#D84C00] transition text-sm font-semibold"
              >
                YouTube
              </a>
              <a
                href="https://www.instagram.com/iksha.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg border border-gray-300 hover:border-[#D84C00] hover:text-[#D84C00] transition text-sm font-semibold"
              >
                Instagram
              </a>

              <a
                href="https://www.linkedin.com/company/iksha-institute-of-technologies/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg border border-gray-300 hover:border-[#D84C00] hover:text-[#D84C00] transition text-sm font-semibold"
              >
                LinkedIn
              </a>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg border border-gray-300 hover:border-[#D84C00] hover:text-[#D84C00] transition text-sm font-semibold"
              >
                Facebook
              </a>              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
