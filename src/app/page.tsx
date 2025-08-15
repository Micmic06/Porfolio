export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Christian M. Miclat
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-blue-400 transition-colors duration-300">About</a>
              <a href="#experience" className="hover:text-blue-400 transition-colors duration-300">Experience</a>
              <a href="#skills" className="hover:text-blue-400 transition-colors duration-300">Skills</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors duration-300">Projects</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors duration-300">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-gray-900"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-6">
                IT Graduate • Tech Operations Specialist
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight">
              Backend Admin &<br />Web Developer
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Specialized in SEO optimization, web development, and tech operations with hands-on experience 
              in data analysis, lead generation, and full-stack solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#experience" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View My Experience
              </a>
              <a 
                href="#contact" 
                className="border border-gray-600 hover:border-blue-400 hover:bg-blue-400/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-lg text-gray-300 leading-relaxed space-y-6">
                <p>
                  I'm a passionate <strong className="text-blue-400">IT Graduate</strong> with specialized expertise in 
                  <strong className="text-purple-400"> tech operations</strong> and <strong className="text-green-400">backend administration</strong>. 
                  With over 2 years of hands-on experience in web development, SEO optimization, and data management.
                </p>
                <p>
                  My journey spans from <strong className="text-blue-400">freelance virtual assistance</strong> to 
                  <strong className="text-purple-400"> SEO/CMS specialization</strong>, where I've successfully managed 
                  multiple client projects, optimized website performance, and delivered measurable results in lead generation 
                  and digital marketing.
                </p>
                <p>
                  I thrive on solving complex problems, optimizing systems, and creating efficient workflows that drive business growth.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Education</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-white">Bachelor of Science in Information Technology</p>
                    <p className="text-gray-400">University of Perpetual Help System - Laguna | 2022</p>
                  </div>
                  <div>
                    <p className="font-medium text-white">STEM Track</p>
                    <p className="text-gray-400">University of Perpetual Help System - Laguna | 2019</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold mb-3 text-green-400">Contact</h3>
                <div className="space-y-2">
                  <p className="text-gray-300">📱 09162176966</p>
                  <p className="text-gray-300">✉️ cmiclat14@gmail.com</p>
                  <p className="text-gray-300">📍 Laguna, Philippines</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="space-y-8">
            {/* Experience 1 */}
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-800/80 p-8 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-400 mb-2">Project-Based / Freelance Virtual Assistant</h3>
                  <p className="text-gray-300 font-medium">March 2023 - June 2025</p>
                </div>
                <span className="inline-block px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm mt-2 md:mt-0">
                  2+ Years
                </span>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Processed and validated lead data, ensuring quality standards
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Systematically completed administrative tasks for multiple projects
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Organized spreadsheets, documents, and internal systems
                  </li>
                </ul>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Managed email outreach campaigns and follow-ups
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Created social media content and visuals
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Researched and repurposed high-performing content
                  </li>
                </ul>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-800/80 p-8 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-purple-400 mb-2">SEO/CMS Specialist & Web Developer</h3>
                  <p className="text-gray-300 font-medium">DialBox Solutions - EmpowerMe Business</p>
                  <p className="text-gray-400">May 2023 - June 2024</p>
                </div>
                <span className="inline-block px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-300 text-sm mt-2 md:mt-0">
                  1+ Year
                </span>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Conducted comprehensive keyword research and analysis
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Analyzed competition and search trends for optimization
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Used Google Analytics and Search Console for performance tracking
                  </li>
                </ul>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    Generated regular SEO performance reports
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    Optimized internal linking and URL structures
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    Developed and maintained client websites
                  </li>
                </ul>
              </div>
            </div>

            {/* Experience 3 & 4 */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-800/80 p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-bold text-green-400 mb-2">Marketing Department Intern</h3>
                <p className="text-gray-300 font-medium mb-1">University of Perpetual Help System - Laguna</p>
                <p className="text-gray-400 text-sm mb-4">August 2021 - January 2022 (5 months)</p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    Created visuals for social media presence
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    Successfully completed 500 hours of internship
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-800/80 p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-bold text-yellow-400 mb-2">Quality Assurance Trainee</h3>
                <p className="text-gray-300 font-medium mb-1">CREOTEC Philippines Inc. - Laguna</p>
                <p className="text-gray-400 text-sm mb-4">Work Immersion Program</p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    Ensured products met standard expectations
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    Factory industry simulation experience
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Technical Arsenal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* SEO & Analytics */}
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 p-6 rounded-xl border border-blue-500/30">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">🔍 SEO & Analytics</h3>
              <div className="space-y-2 text-gray-300 text-sm">
                <p>Google Analytics</p>
                <p>Google Search Console</p>
                <p>Semrush & AHRef</p>
                <p>Shopify SEO</p>
                <p>Keyword Research</p>
              </div>
            </div>

            {/* Web Development */}
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 p-6 rounded-xl border border-purple-500/30">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">💻 Web Development</h3>
              <div className="space-y-2 text-gray-300 text-sm">
                <p>HTML & CSS</p>
                <p>C++ & Java</p>
                <p>Cisco Networking</p>
                <p>Link Building</p>
                <p>CMS Management</p>
              </div>
            </div>

            {/* Lead Generation */}
            <div className="bg-gradient-to-br from-green-900/30 to-green-800/30 p-6 rounded-xl border border-green-500/30">
              <h3 className="text-xl font-semibold mb-4 text-green-400">📈 Lead Generation</h3>
              <div className="space-y-2 text-gray-300 text-sm">
                <p>LinkedIn Sales Navigator</p>
                <p>Apollo & ZoomInfo</p>
                <p>Email Outreach</p>
                <p>Data Entry & Vetting</p>
                <p>BrilliantDirectories</p>
              </div>
            </div>

            {/* Creative & Admin */}
            <div className="bg-gradient-to-br from-pink-900/30 to-pink-800/30 p-6 rounded-xl border border-pink-500/30">
              <h3 className="text-xl font-semibold mb-4 text-pink-400">🎨 Creative & Admin</h3>
              <div className="space-y-2 text-gray-300 text-sm">
                <p>Canva & CapCut</p>
                <p>Microsoft Office</p>
                <p>Google Workspace</p>
                <p>Asana & Trello</p>
                <p>GoHighLevel</p>
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-800/80 p-8 rounded-xl border border-gray-700">
            <h3 className="text-2xl font-bold mb-6 text-center text-blue-400">Soft Skills & Expertise</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                "Fluent English Speaker", "Analytical & Resourceful", "Efficient & Productive",
                "Willing to be Trained", "Adaptive & Collaborative", "Data Analysis",
                "Performance Monitoring", "Computer Troubleshooting", "PC Assembling",
                "Project Management"
              ].map((skill, index) => (
                <span key={index} className="px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects & Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="group bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-blue-500/50">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <span className="text-6xl">🔍</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-400">SEO Optimization Projects</h3>
                <p className="text-gray-300 mb-4 text-sm">Complete SEO audits, keyword research, and performance optimization for multiple client websites with measurable traffic improvements.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-600 px-2 py-1 rounded text-xs">SEO</span>
                  <span className="bg-green-600 px-2 py-1 rounded text-xs">Analytics</span>
                  <span className="bg-purple-600 px-2 py-1 rounded text-xs">Reporting</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-purple-500/50">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                <span className="text-6xl">📊</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-purple-400">Lead Generation Systems</h3>
                <p className="text-gray-300 mb-4 text-sm">Automated lead qualification processes using Apollo, ZoomInfo, and LinkedIn Sales Navigator with high conversion rates.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-600 px-2 py-1 rounded text-xs">Apollo</span>
                  <span className="bg-green-600 px-2 py-1 rounded text-xs">LinkedIn</span>
                  <span className="bg-yellow-600 px-2 py-1 rounded text-xs">Data Analysis</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-green-500/50">
              <div className="h-48 bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                <span className="text-6xl">🌐</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-green-400">Web Development & CMS</h3>
                <p className="text-gray-300 mb-4 text-sm">Full-stack website development and maintenance with focus on performance optimization and user experience.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-600 px-2 py-1 rounded text-xs">HTML/CSS</span>
                  <span className="bg-green-600 px-2 py-1 rounded text-xs">CMS</span>
                  <span className="bg-purple-600 px-2 py-1 rounded text-xs">Optimization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Ready to optimize your digital presence and streamline your operations? Let's discuss your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a 
              href="mailto:cmiclat14@gmail.com" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
            >
              📧 Send Email
            </a>
            <a 
              href="tel:09162176966" 
              className="border border-gray-600 hover:border-blue-400 hover:bg-blue-400/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center"
            >
              📱 Call Me
            </a>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <div className="text-3xl font-bold text-blue-400 mb-2">2+</div>
              <div className="text-gray-300 text-sm">Years Experience</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-300 text-sm">Projects Completed</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <div className="text-3xl font-bold text-green-400 mb-2">15+</div>
              <div className="text-gray-300 text-sm">Tools Mastered</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <div className="text-3xl font-bold text-pink-400 mb-2">100%</div>
              <div className="text-gray-300 text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 Christian M. Miclat. All rights reserved. | Tech Operations & Backend Admin Specialist</p>
        </div>
      </footer>
    </div>
  );
}