export default function OurTeam() {
  return (
    <section className="w-full bg-white">
      {/* TOP SECTION */}
      <div className="w-full bg-gradient-to-r from-[#4A5ACD] to-[#7BA7F3] mt-10 pt-16 pb-20 relative overflow-hidden">
        <h2 className="text-center text-2xl  text-white mb-3">Our Team</h2>
        <h1 className="text-center font-bold text-white text-3xl md:text-5xl  mt-2">
          A team of real people
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-sm md:text-base opacity-90 text-white text-center px-6">
          At WebStacker, we are a diverse team of creative minds — designers,
          developers, and strategists — united by a passion for building meaningful
          digital experiences.
        </p>
      </div>

      {/* MEET OUR DESIGNER */}
      <div className="py-14">
        <h2 className="text-center text-2xl font-semibold text-[#30473a] mb-10">
          Meet Our Designer
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">

          {/* CARD 1 */}
          <div className="text-center">
            <img
              src="designer1.jpg"
              alt=""
              className="w-full h-52 object-cover rounded-xl shadow-sm"
            />
            <h3 className="mt-4 font-semibold text-gray-800">Neha Patel</h3>
            <p className="text-sm text-gray-500">UI/UX Designer</p>
            <p className="text-xs text-gray-400 mt-1">
              Specializing in modern-first design and accessibility.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="text-center">
            <img
              src="designer2.jpg"
              alt=""
              className="w-full h-52 object-cover rounded-xl shadow-sm"
            />
            <h3 className="mt-4 font-semibold text-gray-800">Sarthak Kapoor</h3>
            <p className="text-sm text-gray-500">Product Designer</p>
            <p className="text-xs text-gray-400 mt-1">
              Expert in UI design, prototyping, and user research.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="text-center">
            <img
              src="designer3.jpg"
              alt=""
              className="w-full h-52 object-cover rounded-xl shadow-sm"
            />
            <h3 className="mt-4 font-semibold text-gray-800">Rhea Thakur</h3>
            <p className="text-sm text-gray-500">Visual Designer</p>
            <p className="text-xs text-gray-400 mt-1">
              Focused on branding and creating visually stunning content.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="text-center">
            <img
              src="designer4.jpg"
              alt=""
              className="w-full h-52 object-cover rounded-xl shadow-sm"
            />
            <h3 className="mt-4 font-semibold text-gray-800">Ayaan Zaidi</h3>
            <p className="text-sm text-gray-500">Design Intern</p>
            <p className="text-xs text-gray-400 mt-1">
              Passionate about creative design trends.
            </p>
          </div>
        </div>
      </div>

      {/* MEET OUR DEVELOPERS */}
      <div className="py-10">
        <h2 className="text-center text-2xl font-semibold text-[#30473a] mb-10">
          Meet Our Developers
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">

          {/* CARD 1 */}
          <div className="text-center">
            <img
              src="dev1.jpg"
              alt=""
              className="w-full h-52 object-cover rounded-xl shadow-sm"
            />
            <h3 className="mt-4 font-semibold text-gray-800">Karan Verma</h3>
            <p className="text-sm text-gray-500">Senior Full-Stack Dev</p>
            <p className="text-xs text-gray-400 mt-1">
              Expert in MERN stack, APIs, and cloud.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="text-center">
            <img
              src="dev2.jpg"
              alt=""
              className="w-full h-52 object-cover rounded-xl shadow-sm"
            />
            <h3 className="mt-4 font-semibold text-gray-800">Lavanya Sharma</h3>
            <p className="text-sm text-gray-500">Frontend Engineer</p>
            <p className="text-xs text-gray-400 mt-1">
              Known for lightning-fast UI performance.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="text-center">
            <img
              src="dev3.jpg"
              alt=""
              className="w-full h-52 object-cover rounded-xl shadow-sm"
            />
            <h3 className="mt-4 font-semibold text-gray-800">Pranav Roy</h3>
            <p className="text-sm text-gray-500">Backend Specialist</p>
            <p className="text-xs text-gray-400 mt-1">
              Database optimization and Python development.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="text-center">
            <img
              src="dev4.jpg"
              alt=""
              className="w-full h-52 object-cover rounded-xl shadow-sm"
            />
            <h3 className="mt-4 font-semibold text-gray-800">Aarav Gupta</h3>
            <p className="text-sm text-gray-500">AI/ML Developer</p>
            <p className="text-xs text-gray-400 mt-1">
              Works on ML pipelines with TensorFlow.
            </p>
          </div>

          {/* CARD 5 */}
          <div className="text-center">
            <img
              src="dev5.jpg"
              alt=""
              className="w-full h-52 object-cover rounded-xl shadow-sm"
            />
            <h3 className="mt-4 font-semibold text-gray-800">Priya Singh</h3>
            <p className="text-sm text-gray-500">Software Engineer</p>
            <p className="text-xs text-gray-400 mt-1">
              Focused on clean code and accessibility.
            </p>
          </div>

          {/* CARD 6 */}
          <div className="text-center">
            <img
              src="dev6.jpg"
              alt=""
              className="w-full h-52 object-cover rounded-xl shadow-sm"
            />
            <h3 className="mt-4 font-semibold text-gray-800">Rohit Mehra</h3>
            <p className="text-sm text-gray-500">Project Manager</p>
            <p className="text-xs text-gray-400 mt-1">
              Leads development cycles and team efficiency.
            </p>
          </div>

        </div>
      </div>
      {/* MEET OUR PROJECT MANAGERS */}
<div className="py-14">
  <h2 className="text-center text-2xl font-semibold text-[#30473a] mb-10">
    Meet Our Project Managers
  </h2>

  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">

    {/* CARD 1 */}
    <div className="text-center">
      <img src="pm1.jpg" className="w-full h-52 object-cover rounded-xl shadow-sm" />
      <h3 className="mt-4 font-semibold text-gray-800">Rohit Mehra</h3>
      <p className="text-sm text-gray-500">Project Manager</p>
      <p className="text-xs text-gray-400 mt-1">
        Leading cross-functional teams to deliver high-impact solutions.
      </p>
    </div>

    {/* CARD 2 */}
    <div className="text-center">
      <img src="pm2.jpg" className="w-full h-52 object-cover rounded-xl shadow-sm" />
      <h3 className="mt-4 font-semibold text-gray-800">Sonya Anand</h3>
      <p className="text-sm text-gray-500">Agile Scrum Master</p>
      <p className="text-xs text-gray-400 mt-1">
        Agile methodology expert ensuring smooth sprint cycles.
      </p>
    </div>

    {/* CARD 3 */}
    <div className="text-center">
      <img src="pm3.jpg" className="w-full h-52 object-cover rounded-xl shadow-sm" />
      <h3 className="mt-4 font-semibold text-gray-800">Vikas Sharma</h3>
      <p className="text-sm text-gray-500">Client Delivery Lead</p>
      <p className="text-xs text-gray-400 mt-1">
        Manages client relationships and project delivery.
      </p>
    </div>
  </div>
</div>

{/* MEET OUR MARKETING STRATEGISTS */}
<div className="py-14">
  <h2 className="text-center text-2xl font-semibold text-[#30473a] mb-10">
    Meet Our Marketing Strategists
  </h2>

  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto px-6">

    {/* CARD 1 */}
    <div className="text-center">
      <img src="mkt1.jpg" className="w-full h-52 object-cover rounded-xl shadow-sm" />
      <h3 className="mt-4 font-semibold text-gray-800">Meena Kumari</h3>
      <p className="text-sm text-gray-500">Content Strategist</p>
      <p className="text-xs text-gray-400 mt-1">
        Creates compelling content for brand visibility.
      </p>
    </div>

    {/* CARD 2 */}
    <div className="text-center">
      <img src="mkt2.jpg" className="w-full h-52 object-cover rounded-xl shadow-sm" />
      <h3 className="mt-4 font-semibold text-gray-800">Rajat Goswami</h3>
      <p className="text-sm text-gray-500">SEO Specialist</p>
      <p className="text-xs text-gray-400 mt-1">
        Optimizes digital presence through SEO strategies.
      </p>
    </div>

    {/* CARD 3 */}
    <div className="text-center">
      <img src="mkt3.jpg" className="w-full h-52 object-cover rounded-xl shadow-sm" />
      <h3 className="mt-4 font-semibold text-gray-800">Jiya Pandey</h3>
      <p className="text-sm text-gray-500">Social Media Expert</p>
      <p className="text-xs text-gray-400 mt-1">
        Builds brand presence through social platforms.
      </p>
    </div>

    {/* CARD 4 */}
    <div className="text-center">
      <img src="mkt4.jpg" className="w-full h-52 object-cover rounded-xl shadow-sm" />
      <h3 className="mt-4 font-semibold text-gray-800">Esha Malik</h3>
      <p className="text-sm text-gray-500">Campaign Manager</p>
      <p className="text-xs text-gray-400 mt-1">
        Designs and manages high-converting campaigns.
      </p>
    </div>
  </div>
</div>

{/* MEET OUR SUPPORT & QA TEAM */}
<div className="py-14">
  <h2 className="text-center text-2xl font-semibold text-[#30473a] mb-10">
    Meet Our Support & QA Team
  </h2>

  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto px-6">

    {/* CARD 1 */}
    <div className="text-center">
      <img src="qa1.jpg" className="w-full h-52 object-cover rounded-xl shadow-sm" />
      <h3 className="mt-4 font-semibold text-gray-800">Priya Singh</h3>
      <p className="text-sm text-gray-500">Support Specialist</p>
      <p className="text-xs text-gray-400 mt-1">
        Providing seamless customer assistance and guidance.
      </p>
    </div>

    {/* CARD 2 */}
    <div className="text-center">
      <img src="qa2.jpg" className="w-full h-52 object-cover rounded-xl shadow-sm" />
      <h3 className="mt-4 font-semibold text-gray-800">Deepak Kumar</h3>
      <p className="text-sm text-gray-500">QA Engineer</p>
      <p className="text-xs text-gray-400 mt-1">
        Ensures product quality through detailed testing.
      </p>
    </div>

    {/* CARD 3 */}
    <div className="text-center">
      <img src="qa3.jpg" className="w-full h-52 object-cover rounded-xl shadow-sm" />
      <h3 className="mt-4 font-semibold text-gray-800">Aisha Begum</h3>
      <p className="text-sm text-gray-500">Automation Tester</p>
      <p className="text-xs text-gray-400 mt-1">
        Builds and runs automated test frameworks.
      </p>
    </div>

    {/* CARD 4 */}
    <div className="text-center">
      <img src="qa4.jpg" className="w-full h-52 object-cover rounded-xl shadow-sm" />
      <h3 className="mt-4 font-semibold text-gray-800">Rohan Iyer</h3>
      <p className="text-sm text-gray-500">Technical Support Lead</p>
      <p className="text-xs text-gray-400 mt-1">
        Solving complex technical issues with expertise.
      </p>
    </div>

    {/* CARD 5 */}
    <div className="text-center">
      <img src="qa5.jpg" className="w-full h-52 object-cover rounded-xl shadow-sm" />
      <h3 className="mt-4 font-semibold text-gray-800">Zoya Khan</h3>
      <p className="text-sm text-gray-500">QA Intern</p>
      <p className="text-xs text-gray-400 mt-1">
        Enthusiastic about testing and product quality.
      </p>
    </div>

    {/* CARD 6 */}
    <div className="text-center">
      <img src="qa6.jpg" className="w-full h-52 object-cover rounded-xl shadow-sm" />
      <h3 className="mt-4 font-semibold text-gray-800">Veer Nair</h3>
      <p className="text-sm text-gray-500">Support Associate</p>
      <p className="text-xs text-gray-400 mt-1">
        Helps clients with onboarding and troubleshooting.
      </p>
    </div>

    {/* CARD 7 */}
    <div className="text-center">
      <img src="qa7.jpg" className="w-full h-52 object-cover rounded-xl shadow-sm" />
      <h3 className="mt-4 font-semibold text-gray-800">Manzil Arora</h3>
      <p className="text-sm text-gray-500">QA Analyst</p>
      <p className="text-xs text-gray-400 mt-1">
        Ensures smooth product development through quality checks.
      </p>
    </div>

  </div>
</div>

    </section>
    
  );
}
