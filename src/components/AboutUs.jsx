export default function AboutUs() {
  return (
    <section id="aboutus" className="bg-[#f0f2f5] py-8 px-4 sm:px-6 lg:px-8 scroll-mt-28">
      <div className="max-w-8xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1f2937] mb-4 text-center">About Us</h2>

        {/* About The Founder */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#D84C00] mb-8">About The Founder</h3>

          {/* Intro highlight card with profile image */}
          <div className="bg-white border-l-4 border-[#D84C00] rounded-r-2xl shadow-md px-6 py-5 mb-8">
            <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8">
              {/* Text Section */}
              <div className="flex-1 flex flex-col justify-center">
                <p className="text-lg text-[#1f2937] leading-relaxed">
                  <span className="text-[#D84C00] font-bold">iksha institute of technologies</span> was born
                  from a passion — a Passion for Teaching with Impactful Education.
                </p>
                <p className="text-lg text-[#1f2937] leading-relaxed">
                  Backed by{" "}
                  <span className="font-semibold text-[#1f2937]">20+ Years of Experience</span>.
                  </p>
                {/* Founder detail */}
                <p className="text-lg text-[#1f2937] leading-relaxed">
                  Our founder,{" "}
                  <span className="text-[#D84C00] font-bold">Avinash THM</span>, having contibuted 
                  in <span className="font-semibold">leading Tech Companies</span>, brings
                  unmatched real-world expertise.
                </p>
                {/* Mission */}
                <p className="text-lg text-[#1f2937] leading-relaxed">
                  Today, he channels that experience into creating{" "}
                  <span className="font-semibold">Innovative, Industry-aligned Learning Experiences</span>{" "}
                  that prepare students for the real world.
                </p>
                {/* Proverb / M.Tech */}
                <p className="text-lg text-[#1f2937] leading-relaxed">
                  And true to the proverb{" "}
                  <span className="italic text-[#D84C00] font-medium">"Learning Never Ends"</span>, Avinash
                  continues his own journey with {" "}
                  <span className="font-semibold text-[#D84C00]">
                    M.Tech in Data Science and Machine Learning
                  </span>
                </p>
                <p className="text-lg text-[#1f2937] leading-relaxed"> <br/>
                  Connect With Avinash:&nbsp;&nbsp;               
                  <a
                    href="https://www.linkedin.com/in/avinash-thm-3961a44/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg border border-gray-300 hover:border-[#D84C00] hover:text-[#D84C00] transition text-sm font-semibold"
                  >
                    LinkedIn
                  </a>
                
                </p>
              </div>
              {/* Profile Image Section */}
              <div className="flex-shrink-0 flex justify-center items-center md:items-start">
                <img
                  src="/profile-pic.png"
                  alt="Avinash THM profile picture"
                  className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-2xl border-2 border-[black] shadow-xl/90"
                />
              </div>
            </div>
          </div>

          {/* Closing statement */}
          <div className="bg-[#D84C00] rounded-2xl px-6 py-5 text-white text-center shadow-lg">
            <p className="text-lg font-medium leading-relaxed">
              At <span className="font-bold">iksha institute</span>, we don't just teach
              Technology —{" "}
              <span className="font-bold text-xl">
                We inspire the Next Generation to lead it.
              </span>
            </p>
          </div>
        </div>

        {/* About The Team */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-[#D84C00] mb-8">About The Team</h3>
          <div className="space-y-4 text-[#1f2937]">
            <p className="text-lg">
              The team consists of seasoned Software Professionals each of them bringing over <span className="text-[#1f2937] font-semibold">15+ years of expertise</span> to drive innovation in technology education.
            <br/>
              Having collaborated on diverse projects across 
              <span className="text-[#1f2937] font-semibold"> Banking, Telecom, e-commerce, Healthcare and Robotics sectors</span>, they excel in every phase of development from ideation to deployment.
            </p>
          </div>
        </div>

        {/* Proven Industry Experience */}
        <div> 
          {/* <h3 className="text-2xl text-[#D84C00] mb-6">Proven Industry Experience</h3> */}
          <p className="text-lg text-[#1f2937] mb-4">The Team brings in vast experience working in:</p>

          <div className="space-y-4">
            <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-[#D84C00] hover:bg-gray-200 transition">
              <div className="flex items-start gap-4 flex-wrap">
                <div className="flex items-left gap-2 mb-2">
                  <span className="text-3xl">🏗️</span>
                  <span className="text-[#1f2937] font-bold text-lg">System Design & Architecture: Enterprise systems that handle millions of transactions securely</span>
                </div>
                <div className="flex items-left gap-2 mb-2">
                  <span className="text-3xl">⚡</span>
                  <span className="text-[#1f2937] font-bold text-lg">High Performance Applications: Optimized systems for speed and efficiency</span>
                </div>
                <div className="flex items-left gap-2 mb-2">
                  <span className="text-3xl">🔒</span>
                  <span className="text-[#1f2937] font-bold text-lg">Security & Compliance: Building secure applications that meet industry standards</span>
                </div>
                <div className="flex items-left gap-2 mb-2">
                  <span className="text-3xl">🛡️</span>
                  <span className="text-[#1f2937] font-bold text-lg">Reliable & Scalable Solutions: Systems that run round the glow without any perforamce degradation</span>
                </div>
                <div className="flex items-left gap-2 mb-2">
                  <span className="text-3xl">⏱️</span>
                  <span className="text-[#1f2937] font-bold text-lg">Time Critical Applications: Mission-critical systems with strict deadlines with customer base across regions</span>
                </div>
                <div className="flex items-left gap-2 mb-2">
                  <span className="text-3xl">👥</span>
                  <span className="text-[#1f2937] font-bold text-lg">Customer First Environments: Solutions centered on user experience</span>
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
