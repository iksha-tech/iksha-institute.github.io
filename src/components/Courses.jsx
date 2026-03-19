import { useState, useEffect } from 'react';

export default function Programs() {

  
  const courseCategories = {
    "Courses for Computer Science Students": [
      {
        title: "SDLC Course",
        description: "Master Software Development Lifecycle",
        details: "A comprehensive course for Graduates to match their skills with Industry Needs",
        icon: "💻",
        hasModal: true
      },
      {
        title: "Internship",
        description: "Complete Guidance and Support",
        details: "B.E / M.C.A Students looking for projects in last Semester",
        icon: "🎓",
        hasModal: true
      },
      {
        title: "Project on AI / ML",
        description: "Machine Learning along with a Project",
        details: "Foundational Machine Learning Course",
        icon: "🎓",
        hasModal: true
      }
    ],
    "Financial Courses": [
      {
        title: "Capital Markets Mastery",
        description: "Trading, Investing & Wealth Creation",
        details: "For people having Curiosity and Eagerness to Explore the World of Investment",
        icon: "📈",
        hasModal: true
      },
      {
        title: "Financial Literacy",
        description: "A Crash Course on Finances",
        details: "For people who are yet to Start Saving and Learn Money Matters",
        icon: "💰",
        hasModal: true
      }
    ],
    "Wellness Courses for Corporates": [
      {
        title: "Yoga for Beginners",
        description: "Start your yoga journey",
        details: "Learn basic poses and breathing techniques",
        icon: "🧘",
        hasModal: true
      },
      {
        title: "Advanced Yoga",
        description: "Deepen your practice",
        details: "Advanced poses and meditation",
        icon: "🧘‍♀️",
        hasModal: true
      }
    ]
  };

  const [selectedCourse, setSelectedCourse] = useState(null);
  const [openCategories, setOpenCategories] = useState(() =>
    Object.fromEntries(
      Object.keys(courseCategories).map((cat, index) => [cat, index === 0]) // ✅ first = true, rest = false
    )
  );

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setSelectedCourse(null);
      }
    };

    if (selectedCourse) {
      window.addEventListener('keydown', handleEscape);
      return () => window.removeEventListener('keydown', handleEscape);
    }
  }, [selectedCourse]);

  const toggleCategory = (category) => {
    setOpenCategories(prev => {
      const isCurrentlyOpen = prev[category];
      // Close all, then open the clicked one (unless it was already open)
      const allClosed = Object.keys(prev).reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {});
      return { ...allClosed, [category]: !isCurrentlyOpen };
    });
  };

  return (
    <section id="courses" className="bg-[#f0f2f5] py-6 px-4 sm:px- lg:px-30 scroll-mt-28 w-full">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-black mb-6 text-center">Our Courses</h2>
        <div className="space-y-4">
          {Object.entries(courseCategories).map(([category, courses]) => (
            <div key={category} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleCategory(category)}
                className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 transition flex justify-between items-center"
              >
                {/* This is where each section header is displayed */}
                <h3 className="text-xl font-bold text-black">{category}</h3>
                <span className={`text-lg text-black transition-transform ${openCategories[category] ? '' : 'rotate-180'}`}>
                  ▼
                </span>
              </button>
              {openCategories[category] && (
                <div className="p-4">
                  <div className="grid md:grid-cols-3 gap-8">
                    {courses.map((course) => (
                      <div
                        key={course.title}
                        onClick={() => course.hasModal && setSelectedCourse(course)}
                        className={`${course.hasModal ? "cursor-pointer group relative" : ""}`}
                      >
                        {course.hasModal && (
                          <div className="absolute inset-0 bg-gradient-to-r from-[#D84C00] to-[#E67E22] rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 blur-lg"></div>
                        )}
                        <div className={`relative bg-white rounded-lg overflow-hidden border transition p-4 h-full ${course.hasModal ? "border-gray-200 group-hover:border-[#D84C00] group-hover:shadow-lg" : "border-gray-200"}`}>
                          <div className="text-4xl mb-2">{course.icon}</div>
                          <h4 className="text-xl font-bold text-black mb-2">{course.title}</h4>
                          <p className="text-[#D84C00] font-semibold text-lg mb-3">{course.description}</p>
                          <p className="text-gray-600">{course.details}</p>
                          {course.hasModal && (
                            <div className="mt-2 pt-2 border-t border-gray-200 text-[#D84C00] text-sm font-semibold group-hover:text-[#E67E22] transition">
                              Find out more →
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {selectedCourse && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedCourse(null)}
        >
          <div
            className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#D84C00]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="text-6xl mb-4">{selectedCourse.icon}</div>
                  <h2 className="text-4xl font-bold text-black">{selectedCourse.title}</h2>
                </div>
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="text-gray-600 hover:text-[#D84C00] text-3xl font-bold w-8 h-8 flex items-center justify-center"
                >
                  ✕
                </button>
              </div>

              <p className="text-[#D84C00] font-semibold text-xl mb-4">{selectedCourse.description}</p>
              <p className="text-gray-600 text-lg mb-8">{selectedCourse.details}</p>

              {selectedCourse.title === "SDLC Course" && (
                <div>
                  <div className="mb-8 p-4 bg-gray-100 rounded border-l-4 border-[#D84C00]">
                    <p className="text-[#D84C00] text-lg font-semibold flex items-center gap-2">🚀 Bridge the Gap Between Theory and Industry Practice</p>
                    <p className="text-gray-700 mt-2">Gain hands-on experience with real-world projects and industry-standard methodologies</p>
                  </div>

                  <h3 className="text-2xl font-bold text-black mb-6">Complete Software Development Lifecycle Coverage</h3>
                  <div className="space-y-4 mb-8">
                    <div className="bg-gray-100 p-4 rounded border-l-4 border-[#D84C00]">
                      <h4 className="text-black font-semibold flex items-center gap-2">📋 Requirements Analysis</h4>
                      <p className="text-gray-700 text-sm mt-2">Learn to gather, document, and analyze client requirements using industry tools and techniques</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded border-l-4 border-[#D84C00]">
                      <h4 className="text-black font-semibold flex items-center gap-2">🎨 System Design</h4>
                      <p className="text-gray-700 text-sm mt-2">Master architectural patterns, database design, and system modeling with real-world case studies</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded border-l-4 border-[#D84C00]">
                      <h4 className="text-black font-semibold flex items-center gap-2">💻 Development</h4>
                      <p className="text-gray-700 text-sm mt-2">Hands-on coding with modern frameworks, version control, and collaborative development practices</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded border-l-4 border-[#D84C00]">
                      <h4 className="text-black font-semibold flex items-center gap-2">🔧 Implementation</h4>
                      <p className="text-gray-700 text-sm mt-2">Deploy applications using cloud platforms, containerization, and DevOps best practices</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded border-l-4 border-[#D84C00]">
                      <h4 className="text-black font-semibold flex items-center gap-2">🧪 Testing & QA</h4>
                      <p className="text-gray-700 text-sm mt-2">Comprehensive testing strategies including unit, integration, and automated testing frameworks</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded border-l-4 border-[#D84C00]">
                      <h4 className="text-black font-semibold flex items-center gap-2">🚀 Deployment</h4>
                      <p className="text-gray-700 text-sm mt-2">Production deployment, monitoring, and maintenance using industry-standard tools and practices</p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-black mb-6">🏭 Industry-Aligned Practical Training</h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    <div className="bg-gray-100 p-4 rounded">
                      <p className="text-black font-semibold mb-2">Real Projects</p>
                      <p className="text-gray-700 text-sm">Work on actual industry scenarios</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded">
                      <p className="text-black font-semibold mb-2">Modern Tools</p>
                      <p className="text-gray-700 text-sm">Latest development environments</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded">
                      <p className="text-black font-semibold mb-2">Agile Methods/Work Distribution</p>
                      <p className="text-gray-700 text-sm">Parallel Work Streams and Integration</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded">
                      <p className="text-black font-semibold mb-2">Code Reviews</p>
                      <p className="text-gray-700 text-sm">Professional feedback process</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded">
                      <p className="text-black font-semibold mb-2">Team Collaboration</p>
                      <p className="text-gray-700 text-sm">Git workflows & teamwork</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded">
                      <p className="text-black font-semibold mb-2">Portfolio Building</p>
                      <p className="text-gray-700 text-sm">Complete projects for resume</p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-black mb-6">💼 What Makes This Course Different?</h3>
                  <div className="bg-gray-100 p-6 rounded border border-[#D84C00] mb-8">
                    <div className="mb-4">
                      <p className="text-black font-semibold text-lg flex items-center gap-2">👨‍🏫 Learn from Industry experts</p>
                      <p className="text-[#D84C00] ml-6 mt-1">Over 20 years of IT experience</p>
                    </div>
                    <div>
                      <p className="text-black font-semibold text-lg">🎯 100% Practical Focus</p>
                      <p className="text-gray-700 mt-2">You'll graduate with a knowledge of end-to-end application development.</p>
                    </div>
                  </div>
                </div>
              )}

              {selectedCourse.title === "Internship" && (
                <div>
                  <div className="mb-8 p-4 bg-gray-100 rounded border-l-4 border-[#D84C00]">
                    <p className="text-black text-lg font-semibold">Internship For Final Sem B.E / MCA Graduates</p>
                    <p className="text-[#D84C00] mt-2 font-semibold">A Paid Internship by Students, Guidance provided by Experienced Working Professionals</p>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-gray-100 p-4 rounded border-l-4 border-[#D84C00]">
                      <p className="text-black font-semibold">📋 Project Guidance</p>
                      <p className="text-gray-700 text-sm mt-2">We Guide and Support for your Final Semester Project Work.</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded border-l-4 border-[#D84C00]">
                      <p className="text-black font-semibold">🔄 End to End Support</p>
                      <p className="text-gray-700 text-sm mt-2">Complete project development from idea to implementation.</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded border-l-4 border-[#D84C00]">
                      <p className="text-black font-semibold">✅ Choose Your Own</p>
                      <p className="text-gray-700 text-sm mt-2">Choose your own project domain and work on it with our guidance.</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded border-l-4 border-[#D84C00]">
                      <p className="text-black font-semibold">🛠️ Technology Selection</p>
                      <p className="text-gray-700 text-sm mt-2">Choose your preferred technology stack for project development.</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded border-l-4 border-[#D84C00]">
                      <p className="text-black font-semibold">🏗️ System Design</p>
                      <p className="text-gray-700 text-sm mt-2">Learn System Design of Applications like Netflix, Zomato, Banks, Stock Broker etc.</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded border-l-4 border-[#D84C00]">
                      <p className="text-black font-semibold">🌍 Real World Projects</p>
                      <p className="text-gray-700 text-sm mt-2">Understand real-world applications and challenges.</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded border-l-4 border-[#D84C00]">
                      <p className="text-black font-semibold">👨‍🏫 Industry Experts</p>
                      <p className="text-gray-700 text-sm mt-2">Learn from Industry Experts with 20+ years of experience.</p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-black mb-6 mt-8">Additional Benefits</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-100 p-4 rounded flex items-start gap-4">
                      <span className="text-xl">📜</span>
                      <div>
                        <p className="text-black font-semibold">Certificate</p>
                        <p className="text-gray-700 text-sm">We provide a certificate upon successful completion of the project.</p>
                      </div>
                    </div>
                    <div className="bg-gray-100 p-4 rounded flex items-start gap-4">
                      <span className="text-xl">⏱️</span>
                      <div>
                        <p className="text-black font-semibold">Duration</p>
                        <p className="text-gray-700 text-sm">4 to 6 Months, depending on the application.</p>
                      </div>
                    </div>
                    <div className="bg-gray-100 p-4 rounded flex items-start gap-4">
                      <span className="text-xl">✓</span>
                      <div>
                        <p className="text-black font-semibold">VTU Registered</p>
                        <p className="text-[#D84C00] text-sm font-semibold">We are working on this.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectedCourse.title === "Project on AI / ML" && (
                <div>
                  {/* <div className="mb-8 p-4 bg-gray-100 rounded border-l-4 border-[#D84C00]">
                    <p className="text-black text-lg font-semibold">Get on a Fast Track</p>
                    <p className="text-[#D84C00] mt-2 font-semibold">Get to Know the Learning Path</p>
                    <p className="text-[#D84C00] mt-2 font-semibold">Paradigms of Machine Learning</p>
                    <p className="text-[#D84C00] mt-2 font-semibold">Understand How Things Works!!</p>
                    <p className="text-[#D84C00] mt-2 font-semibold">Know When to Use Machine Learning</p>
                  </div> */}

                  <div className="space-y-3">
                    <div className="bg-gray-100 p-4 rounded border-l-4 border-[#D84C00]">
                      <p className="text-black font-semibold">📋 Get to Know the Learning Path</p>
                      <p className="text-gray-700 text-sm mt-2">Basics Required to Understand Machine Learning</p>
                      <p className="text-gray-700 text-sm mt-2">Topics</p>
                      <p className="text-gray-700 text-sm mt-2">Programming Languages</p>
                      <p className="text-gray-700 text-sm mt-2">Applications of Linear Algebra, Calculus</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded border-l-4 border-[#D84C00]">
                      <p className="text-black font-semibold">🔄 Paradigms of Machine Learning</p>
                      <p className="text-gray-700 text-sm mt-2">Supervised Learning</p>
                      <p className="text-gray-700 text-sm mt-2">Unsupervised Learning</p>
                      <p className="text-gray-700 text-sm mt-2">Reinforcement Learning</p>
                      <p className="text-gray-700 text-sm mt-2">Generative Learning</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded border-l-4 border-[#D84C00]">
                      <p className="text-black font-semibold">✅ Understand How Things Works!!</p>
                      <p className="text-gray-700 text-sm mt-2">Learn the underlying principles of Supervised Learning</p>
                      <p className="text-gray-700 text-sm mt-2">Learn the underlying principles Unsupervised Learning</p>
                      
                    </div>
                    <div className="bg-gray-100 p-4 rounded border-l-4 border-[#D84C00]">
                      <p className="text-black font-semibold">🛠️ Know When to Use Machine Learning</p>
                      <p className="text-gray-700 text-sm mt-2">Usecases</p>
                      <p className="text-gray-700 text-sm mt-2">When not to use Machine Learning</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded border-l-4 border-[#D84C00]">
                      <p className="text-black font-semibold">🌍 Project on ML</p>
                      <p className="text-gray-700 text-sm mt-2">Learn one of the Paradigm with a project</p>
                      <p className="text-gray-700 text-sm mt-2">Know the Challenges and Solutions</p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-black mb-6 mt-8">Additional Benefits</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-100 p-4 rounded flex items-start gap-4">
                      <span className="text-xl">📜</span>
                      <div>
                        <p className="text-black font-semibold">Certificate</p>
                        <p className="text-gray-700 text-sm">We provide a certificate upon successful completion of the Course.</p>
                      </div>
                    </div>
                    <div className="bg-gray-100 p-4 rounded flex items-start gap-4">
                      <span className="text-xl">⏱️</span>
                      <div>
                        <p className="text-black font-semibold">Duration</p>
                        <p className="text-gray-700 text-sm">4 to 6 Months, depending on Fasttrack on Normal Pace</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectedCourse.title === "Capital Markets Mastery" && (
                <div>
                  <h3 className="text-2xl font-bold text-black mb-6">Course Curriculum</h3>

                  <div className="space-y-3 mb-8">
                    <div className="bg-gray-100 p-3 rounded border-l-4 border-[#D84C00]">
                      <p className="text-black font-semibold text-sm">📊 Introduction to the Stock Market</p>
                      <p className="text-gray-700 text-xs mt-1">Understanding market structure, participants, and how trading works.</p>
                    </div>
                    <div className="bg-gray-100 p-3 rounded border-l-4 border-[#D84C00]">
                      <p className="text-black font-semibold text-sm">💰 Risk & Money Management</p>
                      <p className="text-gray-700 text-xs mt-1">Essential principles to protect capital and maximize profits.</p>
                    </div>
                    <div className="bg-gray-100 p-3 rounded border-l-4 border-[#D84C00]">
                      <p className="text-black font-semibold text-sm">🕯️ Candlestick Basics</p>
                      <p className="text-gray-700 text-xs mt-1">Foundations of candlestick patterns and their significance.</p>
                    </div>
                    <div className="bg-gray-100 p-3 rounded border-l-4 border-[#D84C00]">
                      <p className="text-black font-semibold text-sm">🔍 Advanced Candlestick Secrets</p>
                      <p className="text-gray-700 text-xs mt-1">Hidden insights for better market interpretation.</p>
                    </div>
                    <div className="bg-gray-100 p-3 rounded border-l-4 border-[#D84C00]">
                      <p className="text-black font-semibold text-sm">⬇️ Reversal Patterns - I</p>
                      <p className="text-gray-700 text-xs mt-1">Key candlestick signals for market reversals.</p>
                    </div>
                    <div className="bg-gray-100 p-3 rounded border-l-4 border-[#D84C00]">
                      <p className="text-black font-semibold text-sm">⬆️ Reversal Patterns - II</p>
                      <p className="text-gray-700 text-xs mt-1">Deep dive into advanced reversal formations.</p>
                    </div>
                    <div className="bg-gray-100 p-3 rounded border-l-4 border-[#D84C00]">
                      <p className="text-black font-semibold text-sm">📈 Indicators & Their Applications - I</p>
                      <p className="text-gray-700 text-xs mt-1">Understanding key technical indicators.</p>
                    </div>
                    <div className="bg-gray-100 p-3 rounded border-l-4 border-[#D84C00]">
                      <p className="text-black font-semibold text-sm">📊 Indicators & Their Applications - II</p>
                      <p className="text-gray-700 text-xs mt-1">Combining indicators for stronger analysis.</p>
                    </div>
                    <div className="bg-gray-100 p-3 rounded border-l-4 border-[#D84C00]">
                      <p className="text-black font-semibold text-sm">🧠 Trading Psychology & Mind-set Mastery</p>
                      <p className="text-gray-700 text-xs mt-1">Overcoming emotional biases and building discipline.</p>
                    </div>
                    <div className="bg-gray-100 p-3 rounded border-l-4 border-[#D84C00]">
                      <p className="text-black font-semibold text-sm">🎯 Winning Strategies & Stock Selection</p>
                      <p className="text-gray-700 text-xs mt-1">Proven techniques, screeners, and trade execution.</p>
                    </div>
                    <div className="bg-gray-100 p-3 rounded border-l-4 border-[#D84C00]">
                      <p className="text-black font-semibold text-sm">💹 Price Action Mastery</p>
                      <p className="text-gray-700 text-xs mt-1">Institutional trading secrets.</p>
                    </div>
                    <div className="bg-gray-100 p-3 rounded border-l-4 border-[#D84C00]">
                      <p className="text-black font-semibold text-sm">📐 Chart Patterns & Their Significance</p>
                      <p className="text-gray-700 text-xs mt-1">Identifying high-probability setups.</p>
                    </div>
                    <div className="bg-gray-100 p-3 rounded border-l-4 border-[#D84C00]">
                      <p className="text-black font-semibold text-sm">🔢 Fibonacci Retracement</p>
                      <p className="text-gray-700 text-xs mt-1">Fibonacci levels for entry and exit points.</p>
                    </div>
                    <div className="bg-gray-100 p-3 rounded border-l-4 border-[#D84C00]">
                      <p className="text-black font-semibold text-sm">🔀 Divergence & Hidden Divergence</p>
                      <p className="text-gray-700 text-xs mt-1">The secrets untold.</p>
                    </div>
                    <div className="bg-gray-100 p-3 rounded border-l-4 border-[#D84C00]">
                      <p className="text-black font-semibold text-sm">🚀 Introduction to Derivatives</p>
                      <p className="text-gray-700 text-xs mt-1">Understanding futures and options.</p>
                    </div>
                    <div className="bg-gray-100 p-3 rounded border-l-4 border-[#D84C00]">
                      <p className="text-black font-semibold text-sm">📊 Futures Trading Essentials</p>
                      <p className="text-gray-700 text-xs mt-1">How futures contracts work and trading.</p>
                    </div>
                    <div className="bg-gray-100 p-3 rounded border-l-4 border-[#D84C00]">
                      <p className="text-black font-semibold text-sm">📞 Options Trading Basics</p>
                      <p className="text-gray-700 text-xs mt-1">Calls, puts, and how to leverage options for profits.</p>
                    </div>
                    <div className="bg-gray-100 p-3 rounded border-l-4 border-[#D84C00]">
                      <p className="text-black font-semibold text-sm">🔗 Reading the Option Chain</p>
                      <p className="text-gray-700 text-xs mt-1">Analysing open interest, and implied volatility.</p>
                    </div>
                    <div className="bg-gray-100 p-3 rounded border-l-4 border-[#D84C00]">
                      <p className="text-black font-semibold text-sm">📈 Trend Identification Using Derivative Data</p>
                      <p className="text-gray-700 text-xs mt-1">Using futures and options data for market direction.</p>
                    </div>
                    <div className="bg-gray-100 p-3 rounded border-l-4 border-[#D84C00]">
                      <p className="text-black font-semibold text-sm">🎓 Mastering Derivative Trading</p>
                      <p className="text-gray-700 text-xs mt-1">Trade derivatives with confidence.</p>
                    </div>
                    <div className="bg-gray-100 p-3 rounded border-l-4 border-[#D84C00]">
                      <p className="text-black font-semibold text-sm">🔐 Deep Dive into Risk & Money Management Psychology</p>
                      <p className="text-gray-700 text-xs mt-1">Building a rule-based trading system. Mastering emotional control & decision-making.</p>
                    </div>
                    <div className="bg-gray-100 p-3 rounded border-l-4 border-[#D84C00]">
                      <p className="text-black font-semibold text-sm">⚙️ Options Greeks Explained</p>
                      <p className="text-gray-700 text-xs mt-1">Learn Delta, Theta, Vega, and Gamma.</p>
                    </div>
                    <div className="bg-gray-100 p-3 rounded border-l-4 border-[#D84C00]">
                      <p className="text-black font-semibold text-sm">🎯 Advanced Option Strategies</p>
                      <p className="text-gray-700 text-xs mt-1">Spreads, Straddles, Strangles, and Iron Condors.</p>
                    </div>
                    <div className="bg-gray-100 p-3 rounded border-l-4 border-[#D84C00]">
                      <p className="text-black font-semibold text-sm">🛡️ Hedging Portfolio with Derivatives</p>
                      <p className="text-gray-700 text-xs mt-1">Managing risk in volatile markets.</p>
                    </div>
                    <div className="bg-gray-100 p-3 rounded border-l-4 border-[#D84C00]">
                      <p className="text-black font-semibold text-sm">✅ Creating Zero-Loss (Low Risk) Strategies</p>
                      <p className="text-gray-700 text-xs mt-1">Delta-neutral & gamma scalping techniques.</p>
                    </div>
                    <div className="bg-gray-100 p-3 rounded border-l-4 border-[#D84C00]">
                      <p className="text-black font-semibold text-sm">⚡ BTST/STBT & Options Trading</p>
                    </div>
                    <div className="bg-gray-100 p-3 rounded border-l-4 border-[#D84C00]">
                      <p className="text-black font-semibold text-sm">📊 Swing, Positional Trading</p>
                      <p className="text-gray-700 text-xs mt-1">Combining candlesticks with key technical indicators.</p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-black mb-6">Course Highlights</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-100 p-4 rounded border border-[#D84C00] flex items-start gap-3">
                      <span className="text-xl">🎯</span>
                      <div>
                        <p className="text-black font-semibold">Limited Seats</p>
                      </div>
                    </div>
                    <div className="bg-gray-100 p-4 rounded flex items-start gap-3">
                      <span className="text-xl">✅</span>
                      <div>
                        <p className="text-black font-semibold">Live classes from SEBI Registered Research Analyst</p>
                      </div>
                    </div>
                    <div className="bg-gray-100 p-4 rounded flex items-start gap-3">
                      <span className="text-xl">✅</span>
                      <div>
                        <p className="text-black font-semibold">Lifetime community access</p>
                      </div>
                    </div>
                    <div className="bg-gray-100 p-4 rounded flex items-start gap-3">
                      <span className="text-xl">📍</span>
                      <div>
                        <p className="text-black font-semibold">Mode: Online / Offline (Live Classes)</p>
                      </div>
                    </div>
                    <div className="bg-gray-100 p-4 rounded flex items-start gap-3">
                      <span className="text-xl">🕒</span>
                      <div>
                        <p className="text-black font-semibold">Time: 7:30 PM - 9:30 PM (Mon-Fri)</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectedCourse.title === "Financial Literacy" && (
                <div>
                  <h3 className="text-2xl font-bold text-black mb-6">Course Modules</h3>

                  <div className="space-y-4 mb-8">
                    <div className="bg-gray-100 p-4 rounded border-l-4 border-[#D84C00]">
                      <p className="text-black font-semibold">📚 Basics of Economics</p>
                      <p className="text-gray-700 text-sm mt-2">Learn the fundamentals of economics and financial principles.</p>
                    </div>
                    {/* <div className="bg-gray-100 p-4 rounded border-l-4 border-[#D84C00]">
                      <p className="text-black font-semibold">🏛️ Govt Functioning</p>
                      <p className="text-gray-700 text-sm mt-2">Understand how government functions and its impact on the economy.</p>
                    </div> */}
                    <div className="bg-gray-100 p-4 rounded border-l-4 border-[#D84C00]">
                      <p className="text-black font-semibold">📊 Economic Indicators</p>
                      <p className="text-gray-700 text-sm mt-2">Key Concepts of Economic Indicators and their significance.</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded border-l-4 border-[#D84C00]">
                      <p className="text-black font-semibold">🏦 Banking System</p>
                      <p className="text-gray-700 text-sm mt-2">Know Structure and Functioning of the Banking System.</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded border-l-4 border-[#D84C00]">
                      <p className="text-black font-semibold">💵 Earning & Savings</p>
                      <p className="text-gray-700 text-sm mt-2">Earning is mandatory but Savings is Essential.</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded border-l-4 border-[#D84C00]">
                      <p className="text-black font-semibold">📈 Investment Horizons</p>
                      <p className="text-gray-700 text-sm mt-2">Explore the Opportunities to Grow Your Money.</p>
                    </div>
                  </div>

                  <div className="bg-gray-100 p-6 rounded border border-[#D84C00]">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">⏱️</span>
                      <div>
                        <p className="text-black font-semibold text-lg">Duration</p>
                        <p className="text-[#D84C00] font-semibold">3 Weeks, 3 Hours/Week</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectedCourse.title === "Yoga for Beginners" && (
                <div>
                  <h3 className="text-2xl font-bold text-black mb-6">Course Overview</h3>
                  <div className="mb-8 p-4 bg-gray-100 rounded border-l-4 border-[#D84C00]">
                    <p className="text-[#D84C00] text-lg font-semibold flex items-center gap-2">🧘 Start Your Yoga Journey</p>
                    <p className="text-gray-700 mt-2">Perfect for beginners looking to improve flexibility, strength, and mental well-being.</p>
                  </div>

                  <h3 className="text-2xl font-bold text-black mb-6">What You'll Learn</h3>
                  <div className="space-y-4 mb-8">
                    <div className="bg-gray-100 p-4 rounded border-l-4 border-[#D84C00]">
                      <h4 className="text-black font-semibold flex items-center gap-2">🌬️ Breathing Techniques</h4>
                      <p className="text-gray-700 text-sm mt-2">Learn Pranayama and basic breathing exercises for relaxation.</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded border-l-4 border-[#D84C00]">
                      <h4 className="text-black font-semibold flex items-center gap-2">🧘 Basic Poses</h4>
                      <p className="text-gray-700 text-sm mt-2">Master fundamental asanas like Mountain Pose, Tree Pose, and Downward Dog.</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded border-l-4 border-[#D84C00]">
                      <h4 className="text-black font-semibold flex items-center gap-2">🧘‍♀️ Meditation Basics</h4>
                      <p className="text-gray-700 text-sm mt-2">Introduction to mindfulness and simple meditation practices.</p>
                    </div>
                  </div>

                  <div className="bg-gray-100 p-6 rounded border border-[#D84C00]">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">⏱️</span>
                      <div>
                        <p className="text-black font-semibold text-lg">Duration</p>
                        <p className="text-[#D84C00] font-semibold">4 weeks</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectedCourse.title === "Advanced Yoga" && (
                <div>
                  <h3 className="text-2xl font-bold text-black mb-6">Course Overview</h3>
                  <div className="mb-8 p-4 bg-gray-100 rounded border-l-4 border-[#D84C00]">
                    <p className="text-[#D84C00] text-lg font-semibold flex items-center gap-2">🧘‍♀️ Deepen Your Practice</p>
                    <p className="text-gray-700 mt-2">Advanced techniques for experienced practitioners seeking deeper spiritual and physical growth.</p>
                  </div>

                  <h3 className="text-2xl font-bold text-black mb-6">Advanced Modules</h3>
                  <div className="space-y-4 mb-8">
                    <div className="bg-gray-100 p-4 rounded border-l-4 border-[#D84C00]">
                      <h4 className="text-black font-semibold flex items-center gap-2">🔥 Advanced Asanas</h4>
                      <p className="text-gray-700 text-sm mt-2">Master complex poses like Crow Pose, Headstand, and Lotus variations.</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded border-l-4 border-[#D84C00]">
                      <h4 className="text-black font-semibold flex items-center gap-2">🧠 Deep Meditation</h4>
                      <p className="text-gray-700 text-sm mt-2">Advanced meditation techniques including chakra balancing and transcendental meditation.</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded border-l-4 border-[#D84C00]">
                      <h4 className="text-black font-semibold flex items-center gap-2">🌿 Yoga Philosophy</h4>
                      <p className="text-gray-700 text-sm mt-2">Explore the deeper meanings of yoga through ancient texts and modern interpretations.</p>
                    </div>
                  </div>

                  <div className="bg-gray-100 p-6 rounded border border-[#D84C00]">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">⏱️</span>
                      <div>
                        <p className="text-black font-semibold text-lg">Duration</p>
                        <p className="text-[#D84C00] font-semibold">8 weeks</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <button
                onClick={() => setSelectedCourse(null)}
                className="mt-8 w-full bg-[#D84C00] hover:bg-[#C24200] text-white font-bold py-3 rounded-lg transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}