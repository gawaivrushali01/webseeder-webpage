import React from "react";
import { TbHeartbeat } from "react-icons/tb";
import {
  LuClipboardPenLine,
  LuShieldCheck,
  LuTableProperties,
  LuBrainCircuit,
} from "react-icons/lu";
import { FaRegHandshake } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// import website from "./assets/website.png";
// import hybrid from "./assets/hybrid.png";
// import software from "./assets/software.png";
// import ai from "./assets/ai.png";
// import announce from "./assets/announce.png";

import about1 from "./assets/about1.jpg";
import about2 from "./assets/about2.webp";
import about3 from "./assets/about3.webp";
import about4 from "./assets/about4.jpg";

import team1 from "./assets/team1.jpg";
import team2 from "./assets/team2.jpeg";

import bg1 from "./assets/bg1.avif";
import bg2 from "./assets/bg2.avif";
import bg3 from "./assets/bg3.jpg";

import icon1 from "./assets/icon1.jpg";
import icon2 from "./assets/icon2.avif";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.avif";
import icon5 from "./assets/icon5.jpg";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25, // each image appears one-by-one
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Content = () => {
  return (
    <>
      {/* <section className="w-full bg-white py-16 px-6 md:px-16 lg:px-28 pb-0">
        <div className="max-w-6xl mx-auto justify-center items-center flex flex-col">
          <div className="flex flex-col items-center mx-auto max-w-[85%] sm:max-w-[75%]">
            
            <h1 className="text-lg sm:text-3xl md:text-4xl lg:text-6xl font-semibold text-[#30473a] whitespace-nowrap text-center">
              Content, Concept and Creativity
            </h1>

           =
            <h2 className="text-lg sm:text-3xl md:text-4xl lg:text-6xl font-semibold text-[#30473a] whitespace-nowrap mt-2 text-center">
              are the <span className="text-orange-700/60">three C's</span> we
              work on
            </h2>
          </div>

          <p className="mt-10 text-black font-medium text-sm md:text-lg max-w-4xl text-center leading-relaxed">
            The bunch of creative people here help to brand your business in an
            out-of-the-box manner making them distinct. Whether it is designing
            and developing difficult websites, interactive products, or digital
            marketing — our strong customer insights help you achieve more. We
            create everything from the hottest creative concepts to the simplest
            polished processes, across industries such as real estate,
            manufacturing, fashion & lifestyle.
          </p>
        </div>
      </section>

      <section className="w-full py-10 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[#d24b3c] font-semibold text-xl mb-10 tracking-wide text-center">
            WE DO THIS TO HELP YOU:
          </h2>

          <div
            className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-5 
        gap-10
        text-gray-700
      "
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-28 bg-[#57bdc0] shadow-lg rounded-t-2xl flex items-center justify-center">
                <img src={website} alt="" className="h-30 w-auto" />
              </div>
              <p className="mt-3 text-sm md:text-base font-medium">
                Website Development
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-28 bg-[#459396] shadow-lg rounded-t-2xl flex items-center justify-center">
                <img src={hybrid} alt="" className="h-25 w-auto pb-2" />
              </div>
              <p className="mt-3 text-sm md:text-base font-medium">
                Hybrid Application Development
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-28 bg-[#afa7a6] shadow-lg rounded-t-2xl flex items-center justify-center">
                <img src={software} alt="" className="h-30 w-auto" />
              </div>
              <p className="mt-3 text-sm md:text-base font-medium">
                Custom Software Development & Automation
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-28 bg-[#e05f3c] shadow-lg rounded-t-2xl flex items-center justify-center">
                <img src={ai} alt="" className="h-30 w-auto" />
              </div>
              <p className="mt-3 text-sm md:text-base font-medium">
                AI & Machine Learning Solutions
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-28 bg-[#ec795a] shadow-lg rounded-t-2xl flex items-center justify-center">
                <img src={announce} alt="" className="h-25 w-auto" />
              </div>
              <p className="mt-3 text-sm md:text-base font-medium">
                Branding & Digital Marketing
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <section className="w-full bg-white py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT — Images Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-2 order-2 lg:order-1"
          >
            {/* COLUMN 1 */}
            <div className="flex flex-col gap-6">
              <motion.img
                variants={item}
                src={about1}
                alt=""
                className="rounded-2xl w-[300px] h-[400px] object-cover pl-10"
              />

              <motion.img
                variants={item}
                src={about2}
                alt=""
                className="rounded-xl w-[400px] h-[250px] object-cover"
              />
            </div>

            {/* COLUMN 2 */}
            <div className="flex flex-col gap-6 mt-[30px]">
              <motion.img
                variants={item}
                src={about3}
                alt=""
                className="rounded-xl w-[400px] h-[250px] object-cover"
              />

              <motion.img
                variants={item}
                src={about4}
                alt=""
                className="rounded-xl w-[250px] h-[200px] object-cover"
              />
            </div>
          </motion.div>

          {/* RIGHT — Content */}
          <div className="order-1 lg:order-2 text-2xl space-y-2">
            <h4 className="text-[#30473a] font-semibold text-lg  mb-2">
              The Story of Webseeder
            </h4>

            <h2 className="text-2xl font-extrabold leading-tight text-[#0A47A3] mb-6">
              From Websites to Apps to Automations
              <br />- One Team Owning Your Digital Stack
            </h2>

            <p className="text-sm md:text-xl font-medium text-justify text-[#30473a]">
              WebSeeder started with a simple idea: modern businesses need fewer
              vendors and stronger digital partners. Over the years we've grown
              into a studio that can take ownership of your entire digital stack
              - the website your customers see, the web and mobile apps they
              use, and the internal tools and automations your team relies on
              every day.
            </p>

            <p className="text-sm md:text-xl font-medium text-justify text-[#30473a]">
              Most of our work sits at the intersection of custom development
              and practical problem-solving. We architect and build marketing
              sites, dashboards, portals, Android & iOS apps, and automations
              that stitch together CRMs, ERPs and third-party tools. On top of
              this, we layer focused SEO and performance marketing so the
              traffic you pay for or earn organically lands on fast,
              conversion-ready experiences.
            </p>

            <p className="text-sm md:text-xl font-medium text-justify text-[#30473a]">
              Our team blends backend and frontend developers, app engineers,
              UI/UX designers, SEO specialists and growth strategists who like
              to look at the whole picture. We care about how quickly a page
              loads, how clean an API integration is, how easy a flow feels on
              mobile and whether your analytics actually tell you what's
              happening. Clients come to us when they're tired of juggling
              agencies and want one team that can think, build and optimize in
              the same direction.
            </p>
          </div>
        </div>
      </section>

      {/* Core People Section */}
      <section className="w-full bg-white">
        {/* Top Gradient Section */}
        <div className="w-full bg-gradient-to-r from-[#4A5ACD] to-[#7BA7F3] pt-16 pb-28 relative overflow-hidden">
          <h2 className="text-center text-3xl font-bold text-white mb-3">
            Our Core People
          </h2>
          <p className="text-center text-white max-w-2xl mx-auto opacity-80 text-sm">
            The people who set the direction, keep the standards high and ensure
            every WebSeeder project actually delivers on its promise.
          </p>
          <div className="absolute right-10 top-10 text-white opacity-40 text-6xl">
            ✦
          </div>
        </div>

        {/* Team Members */}
        <div className="max-w-6xl mx-auto -mt-20 grid grid-cols-2 md:grid-cols-4 gap-12 px-6 pb-16 text-center relative z-10">
          {/* Member 1 */}
          <div className="col-span-1 rounded-2xl shadow-lg md:shadow-none">
            <img
              src={team1}
              alt=""
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover shadow-md"
            />
            <h3 className="text-lg font-semibold mt-4 text-center">
              Anurag Kumar
            </h3>
            <p className="text-sm font-medium text-[#30473a] mb-2 text-center">
              Co-Founder & CEO
            </p>
            <p className="text-[#30473a] text-xs pb-5 md:text-sm leading-relaxed text-center md:text-left">
              Anurag drives the overall vision at WebSeeder and keeps us focused
              on building digital products that have a clear business outcome.
              He spends most of his time with clients, understanding where
              growth is stuck, and then working with the team to design web, SEO
              and performance solutions that unlock that next level.
            </p>
          </div>

          {/* Member 2 */}
          <div className="col-span-1 rounded-2xl shadow-lg md:shadow-none">
            <img
              src={team2}
              alt=""
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover shadow-md"
            />
            <h3 className="text-lg font-semibold mt-4">Prerna Jain</h3>
            <p className="text-sm font-medium text-[#30473a] mb-2">
              Co-Founder
            </p>
            <p className="text-[#30473a] pb-5 text-xs md:text-sm leading-relaxed">
              Prerna looks after day-to-day operations and client delivery. She
              connects the dots between strategy, timelines and execution,
              making sure every project moves smoothly from discovery to launch.
              For most of our clients, she is the steady, dependable face of
              WebSeeder.
            </p>
          </div>

          {/* Member 3 */}
          <div className="col-span-1 rounded-2xl shadow-lg md:shadow-none">
            <img
              src={team1}
              alt=""
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover shadow-md"
            />
            <h3 className="text-lg font-semibold mt-4">Rajesh Kumar</h3>
            <p className="text-sm font-medium text-[#30473a] mb-2">
              Head of Technology
            </p>
            <p className="text-[#30473a] pb-5 text-xs md:text-sm leading-relaxed">
              Rajesh leads our technology and engineering practice. He is
              responsible for choosing the right stacks, keeping code quality
              high and making sure every site or product we ship is fast, secure
              and scalable. From SEO-first builds to complex integrations, his
              team ensures the tech never becomes a bottleneck for growth.
            </p>
          </div>

          {/* Member 4 */}
          <div className="col-span-1 rounded-2xl shadow-lg md:shadow-none">
            <img
              src={team2}
              alt=""
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover shadow-md"
            />
            <h3 className="text-lg font-semibold mt-4">XYZ</h3>
            <p className="text-sm font-medium text-[#30473a] mb-2">
              Co-Founder
            </p>
            <p className="text-[#30473a] pb-5 text-xs md:text-sm leading-relaxed">
              The engine of our operations and client delivery.
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="text-center pb-16">
          <Link to="/OurTeam">
            <button className="px-8 py-4 rounded-full border border-[#0A47A3] text-[#0A47A3] font-semibold text-lg transition-all hover:bg-[#0A47A3] hover:text-white shadow-md">
              See Our All Team
            </button>
          </Link>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="w-full bg-white py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
          <p className="text-[#30473a] max-w-2xl mx-auto mt-3">
            We're building a digital experience company that cares about
            results, relationships and long-term impact - these values guide how
            we work every day.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* CARD 1 */}
          <div className="border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <TbHeartbeat className="w-10 h-10 mb-4 text-blue-700" />
            <h3 className="text-lg font-semibold mb-2">Hustle with Heart</h3>
            <p className="text-[#30473a] mb-3">
              We believe the best digital work happens when smart, hungry people
              genuinely care about the brands they are shaping. At WebSeeder, we
              push hard on deadlines and quality, but we also listen,
              collaborate and celebrate wins with our clients. That mix of
              hustle and empathy helps us create solutions that feel right for
              both sides.
            </p>
            <p className="font-semibold text-[#30473a]">
              The Spirit of Possibility
            </p>
          </div>

          {/* CARD 2 */}
          <div className="border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <LuClipboardPenLine className="w-10 h-10 mb-4 text-blue-700" />
            <h3 className="text-lg font-semibold mb-2">Result Driven</h3>
            <p className="text-[#30473a] mb-3">
              Pretty design is not enough for us. Every website, funnel,
              campaign or SEO sprint is mapped to measurable outcomes - more
              qualified leads, better engagement, higher conversion, cleaner
              analytics. We research, test and iterate until we see those
              numbers move in the right direction, and we openly share what's
              working and what needs to change.
            </p>
            <p className="font-semibold  text-[#30473a]">Build for Growth</p>
          </div>

          {/* CARD 3 */}
          <div className="border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <LuShieldCheck className="w-10 h-10 mb-4 text-blue-700" />
            <h3 className="text-lg font-semibold mb-2">Excellence</h3>
            <p className="text-[#30473a] mb-3">
              Quality is non-negotiable. From page-speed and Core Web Vitals to
              accessibility, on-page SEO and content structure, we care about
              the details that most people only notice when something breaks.
              Our aim is to ship digital experiences that feel polished today
              and are robust enough to grow with you tomorrow.
            </p>
            <p className="font-semibold  text-[#30473a]">
              Speed & Technical SEO First
            </p>
          </div>

          {/* CARD 4 */}
          <div className="border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <LuTableProperties className="w-10 h-10 mb-4 text-blue-700" />
            <h3 className="text-lg font-semibold mb-2">Custom-Built</h3>
            <p className="text-[#30473a] mb-3">
              We don't believe in copy-pasting the same template onto every
              business. Your brand, your product and your audience are
              different, so your website and marketing stack should be as well.
              We design and develop from the ground up, keeping your goals,
              workflows and tech environment in mind, so the final product
              actually fits into your real world.
            </p>
            <p className="font-semibold  text-[#30473a]">Not Cookie Cutter</p>
          </div>

          {/* CARD 5 */}
          <div className="border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <LuBrainCircuit className="w-10 h-10 mb-4 text-blue-700" />
            <h3 className="text-lg font-semibold mb-2">Always Evolving</h3>
            <p className="text-[#30473a] mb-3">
              Digital behaviour, search algorithms and design standards change
              quickly. We stay curious, keep learning and bring the best of new
              tools - from modern JS frameworks to AI-assisted workflows - into
              our projects where they truly add value, not just because they are
              trendy.
            </p>
            <p className="font-semibold  text-[#30473a]">The Tech Edge</p>
          </div>

          {/* CARD 6 */}
          <div className="border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <FaRegHandshake className="w-10 h-10 mb-4 text-blue-700" />
            <h3 className="text-lg font-semibold mb-2">
              Transparent Partnership
            </h3>
            <p className="text-[#30473a] mb-3">
              We prefer long-term partnerships over quick wins. That means being
              honest about scope, timelines and expectations, sharing
              work-in-progress openly and taking responsibility when something
              needs to be fixed. Clients always know what we are working on, why
              we are doing it and what success will look like.
            </p>
            <p className="font-semibold  text-[#30473a]">Own the Outcome</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-16 px-6 lg:px-20">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <p className="text-sm text-[#0A47A3] tracking-wide">
            WEBSEEDER FEATURES
          </p>
          <h2 className="text-3xl font-bold mt-2">What WebSeeder Offers</h2>
          <p className="text-[#30473a] font-medium mt-4">
            At WebSeeder Technologies, we turn ideas into intelligent digital
            solutions. Whether you're a startup, a growing business, or an
            established brand, our services are designed to help you stand out,
            scale up, and succeed. We don't just deliver projects — we build
            lasting partnerships that drive innovation and business growth.
          </p>
        </div>

        {/* Top Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {/* Left Big Card */}
          <div
            className="lg:col-span-3 rounded-2xl p-8 shadow-sm flex flex-col justify-end items-start"
            style={{
              backgroundImage: `url(${bg1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h3 className="text-xl font-semibold mb-3">
              Convert Your Ideas <br /> into Digital Reality
            </h3>

            <p className="text-[#30473a] mb-5 font-medium">
              Most teams are sitting on product ideas, redesign wish-lists and
              “we should really automate this” conversations. We help you turn
              those into working digital experiences - websites, custom web
              apps, Android & iOS applications, and business automations that
              plug into your existing tools. Every build is made to be reliable,
              scalable and marketing-ready from day one.
            </p>
          </div>

          {/* Right Card */}
          <div className="lg:col-span-2 rounded-2xl bg-[#EEDCFD] p-6 lg:p-8 shadow-sm">
            <h3 className="text-lg sm:text-xl font-semibold mb-6">
              Collaborate & Grow with WebSeeder
            </h3>
            <p className="text-[#30473a] leading-relaxed text-sm font-medium">
              When you work with us, you're not handing your brand to a single
              specialist. You get designers, developers, app engineers and
              marketers thinking together about your roadmap, so that your site,
              your apps and your campaigns all move in the same direction
              instead of pulling against each other.
            </p>

            <div className="grid grid-cols-3 gap-6 justify-items-center">
              {/* COLUMN 1 — mid height */}
              <div className="flex flex-col items-center gap-4 mt-3">
                <img src={icon1} className="w-20 h-20 rounded-full" />
                <img src={icon4} className="w-20 h-20 rounded-full" />
              </div>

              {/* COLUMN 2 — lowest */}
              <div className="flex flex-col items-center gap-4 mt-10">
                <img src={icon3} className="w-20 h-20 rounded-full" />
              </div>

              {/* COLUMN 3 — highest */}
              <div className="flex flex-col items-center gap-4 mt-3">
                <img src={icon2} className="w-20 h-20 rounded-full" />
                <img src={icon5} className="w-20 h-20 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 max-w-7xl mx-auto">
          {/* Mission Card */}
          <div
            className={`rounded-2xl cover p-8 shadow-sm`}
            style={{ backgroundImage: `url(${bg2})` }}
          >
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-[#30473a] leading-relaxed text-sm font-medium">
              To help businesses evolve through thoughtful, well-engineered
              digital products and honest, data-driven marketing. Whether we're
              shipping a new website, a mobile app or an internal automation,
              our mission is to make your digital layer lighter to manage and
              stronger in results.
            </p>
          </div>

          {/* Vision Card */}
          <div
            className={`rounded-2xl p-8 shadow-sm`}
            style={{ backgroundImage: `url(${bg3})` }}
          >
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p className="text-[#30473a] leading-relaxed text-sm font-mediumcd webseeder-webpage">
              To be the partner founders and marketing leaders call when they
              want one team to handle their web, app and automation needs along
              with the SEO and campaigns that sit on top. We want WebSeeder to
              be known for dependable builds, clear thinking and long-term
              relationships rather than one-off launches.
            </p>
          </div>

          {/* Approach Card */}
          <div
            className={`rounded-2xl p-8 shadow-sm`}
            style={{ backgroundImage: `url(${bg2})` }}
          >
            <h3 className="text-xl font-semibold mb-3">Our Approach</h3>
            <p className="text-[#30473a] leading-relaxed text-sm font-medium ">
              Every engagement begins with understanding your business model,
              your users and your current tools. From there we follow a simple
              loop – Discover, Design, Develop, Optimize. In practice, that
              might mean redesigning your website, building a companion app,
              automating a key process and then supporting it all with SEO and
              performance marketing. We keep the loop running in sprints so your
              digital presence keeps getting better instead of freezing after
              launch.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
