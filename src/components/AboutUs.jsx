export default function AboutUs() {
  return (
    <section id="aboutus" className="bg-[#f0f2f5] py-8 px-4 sm:px-6 lg:px-8 scroll-mt-28">
      <div className="max-w-8xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1f2937] mb-4 text-center">About Us</h2>

        {/* About The Founder */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#D84C00] mb-8">About The Founder</h3>

          {/* Intro highlight card */}
          <div className="bg-white border-l-4 border-[#D84C00] rounded-r-2xl shadow-md px-6 py-5 mb-8">
            <p className="text-lg text-[#1f2937] leading-relaxed">
              <span className="text-[#D84C00] font-bold">iksha institute of technologies</span> was born
              from a passion — a Passion for Teaching with Impactful Education, backed by{" "}
              <span className="font-semibold text-[#1f2937]">20+ Years of Experience</span>.
            </p>
            {/* Founder detail */}
            <p className="text-lg text-[#1f2937] leading-relaxed">
              Our founder,{" "}
              <span className="text-[#D84C00] font-bold">Avinash THM</span>, having contibuted 
              in <span className="font-semibold">leading Tech Companies</span>, brings
              unmatched real-world expertise into every aspect of your curriculum.
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
            <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-[#D84C00] flex items-start gap-4 hover:bg-gray-200 transition">
              <div className="text-3xl flex-shrink-0">🏗️</div> <h4 className="text-[#1f2937] font-bold text-lg mb-2">System Design & Architecture : Enterprise systems that handle millions of transactions securely</h4>
            
            </div>
            <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-[#D84C00] flex items-start gap-4 hover:bg-gray-200 transition">
              <div className="text-3xl flex-shrink-0">⚡</div> <h4 className="text-[#1f2937] font-bold text-lg mb-2">High Performance Applications: Optimized systems for speed and efficiency</h4>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-[#D84C00] flex items-start gap-4 hover:bg-gray-200 transition">
              <div className="text-3xl flex-shrink-0">🔒</div> <h4 className="text-[#1f2937] font-bold text-lg mb-2">Security & Compliance: Building secure applications that meet industry standards</h4>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-[#D84C00] flex items-start gap-4 hover:bg-gray-200 transition">
              <div className="text-3xl flex-shrink-0">🛡️</div> <h4 className="text-[#1f2937] font-bold text-lg mb-2">Reliable & Scalable Solutions: Robust systems that grow with your business</h4>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-[#D84C00] flex items-start gap-4 hover:bg-gray-200 transition">
              <div className="text-3xl flex-shrink-0">⏱️</div> <h4 className="text-[#1f2937] font-bold text-lg mb-2">Time Critical Applications: Mission-critical systems with strict deadlines</h4>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-[#D84C00] flex items-start gap-4 hover:bg-gray-200 transition">
              <div className="text-3xl flex-shrink-0">👥</div> <h4 className="text-[#1f2937] font-bold text-lg mb-2">Customer First Environments: Solutions centered on user experience</h4>
            </div>

            
          </div>
          
        </div>
      </div>
    </section>
  );
}
