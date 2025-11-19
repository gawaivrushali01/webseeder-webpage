import React from "react";
import { TbHeartbeat } from "react-icons/tb";
import {
  LuClipboardPenLine,
  LuShieldCheck,
  LuTableProperties,
  LuBrainCircuit,
} from "react-icons/lu";
import { FaRegHandshake } from "react-icons/fa";
import {Link} from 'react-router-dom';
import website from "./assets/website.png";
import hybrid from "./assets/hybrid.png";
import software from "./assets/software.png";
import ai from "./assets/ai.png";
import announce from "./assets/announce.png";

import about1 from "./assets/about1.jpg";
import about2 from "./assets/about2.webp";
import about3 from "./assets/about3.webp";
import about4 from "./assets/about4.jpg";

import team1 from "./assets/team1.jpg";
import team2 from "./assets/team2.jpeg";

import bg1 from "./assets/bg1.avif";
import bg2 from "./assets/bg2.avif";

import icon1 from "./assets/icon1.jpg";
import icon2 from "./assets/icon2.avif";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.avif";
import icon5 from "./assets/icon5.jpg";


const Content = () => {
  return (
    <>
      <section className="w-full bg-white py-16 px-6 md:px-16 lg:px-28 pb-0">
        <div className="max-w-6xl mx-auto justify-center items-center flex flex-col">
          <div className="flex flex-col items-center mx-auto max-w-[85%] sm:max-w-[75%]">
            {/* HEADING */}
            <h1
              className="text-lg sm:text-3xl md:text-4xl lg:text-6xl font-semibold text-[#30473a] whitespace-nowrap text-center">
              Content, Concept and Creativity
            </h1>

            {/* SUB LINE */}
            <h2
              className="text-lg sm:text-3xl md:text-4xl lg:text-6xl font-semibold text-[#30473a] whitespace-nowrap mt-2 text-center">
              are the <span className="text-orange-700/60">three C's</span> we
              work on
            </h2>
          </div>

          {/* PARAGRAPH */}
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
            {/* Box */}
            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-28 bg-[#57bdc0] shadow-lg rounded-t-2xl flex items-center justify-center">
                <img
                  src={website}
                  alt=""
                  className="h-30 w-auto"
                />
              </div>
              <p className="mt-3 text-sm md:text-base font-medium">
                Website Development
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-28 bg-[#459396] shadow-lg rounded-t-2xl flex items-center justify-center">
                <img
                  src={hybrid}
                  alt=""
                  className="h-25 w-auto pb-2"
                />
              </div>
              <p className="mt-3 text-sm md:text-base font-medium">
                Hybrid Application Development
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-28 bg-[#afa7a6] shadow-lg rounded-t-2xl flex items-center justify-center">
                <img
                  src={software}
                  alt=""
                  className="h-30 w-auto"
                />
              </div>
              <p className="mt-3 text-sm md:text-base font-medium">
                Custom Software Development & Automation
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-28 bg-[#e05f3c] shadow-lg rounded-t-2xl flex items-center justify-center">
                <img
                  src={ai}
                  alt=""
                  className="h-30 w-auto"
                />
              </div>
              <p className="mt-3 text-sm md:text-base font-medium">
                AI & Machine Learning Solutions
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-28 bg-[#ec795a] shadow-lg rounded-t-2xl flex items-center justify-center">
                <img
                  src={announce}
                  alt=""
                  className="h-25 w-auto"
                />
              </div>
              <p className="mt-3 text-sm md:text-base font-medium">
                Branding & Digital Marketing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* story section */}
      <section className="w-full bg-white py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT — Images Grid */}
          <div className="grid grid-cols-2 gap-2 order-2 lg:order-1">
            {/* COLUMN 1 */}
            <div className="flex flex-col gap-6">
              <img
                src={about1}
                alt=""
                className="rounded-2xl w-[300px] h-[400px] object-cover pl-10"
              />

              <img
                src={about2}
                alt=""
                className="rounded-xl w-[400px] h-[250px] object-cover"
              />
            </div>

            {/* COLUMN 2 */}
            <div className="flex flex-col gap-6 mt-[30px]">
              <img
                src={about3}
                alt=""
                className="rounded-xl w-[400px] h-[250px] object-cover"
              />

              <img
                src={about4}
                alt=""
                className="rounded-xl w-[250px] h-[200px] object-cover"
              />
            </div>
          </div>

          {/* RIGHT — Content */}
          <div className="order-1 lg:order-2">
            <h4 className="text-gray-700 font-semibold text-lg mb-2">
              The Story of Webseeder
            </h4>

            <h2 className="text-4xl font-extrabold leading-tight text-[#0A47A3] mb-6">
              Empowering Digital
              <br />
              Growth
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              Webseeder was founded on the belief that a strong digital presence
              is the foundation of modern business success. Since 2015, we've
              dedicated ourselves to delivering cutting-edge, performance-driven
              web solutions that not only look fantastic but also achieve
              measurable results for our clients.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              Our team is composed of seasoned designers, developers, and
              strategists who thrive on solving complex digital challenges. We
              don't just build websites; we craft end-to-end digital
              experiences—from the initial concept and development to ongoing
              maintenance and strategic growth.
            </p>

            <p className="text-gray-600 leading-relaxed">
              We measure our success by the success of our clients. Our
              commitment to transparency, technical excellence, and genuine
              partnership has made us a trusted name in the digital industry.
              Let's build something extraordinary together.
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
            The Visionaries, Strategic Leaders, and Dedicated Experts Fueling
            WebSeeder's Growth and Innovation.
          </p>
          <div className="absolute right-10 top-10 text-white opacity-40 text-6xl">
            ✦
          </div>
        </div>

        {/* Team Members */}
        <div
          className="max-w-6xl mx-auto -mt-20 grid grid-cols-2 md:grid-cols-3 gap-12 px-6 pb-16 text-center relative z-10"
        >
          {/* Member 1 */}
          <div className="col-span-1">
            <img
              src={team1}
              alt=""
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover shadow-md"
            />
            <h3 className="text-lg font-semibold mt-4">Anurag Kumar</h3>
            <p className="text-sm font-medium text-gray-600 mb-2">
              Co-Founder & CEO
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              A dynamic leader focused on strategic growth and innovation.
            </p>
          </div>

          {/* Member 2 */}
          <div className="col-span-1">
            <img
              src={team2}
              alt=""
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover shadow-md"
            />
            <h3 className="text-lg font-semibold mt-4">Prerna Jain</h3>
            <p className="text-sm font-medium text-gray-600 mb-2">Co-Founder</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              The engine of our operations and client delivery.
            </p>
          </div>

          {/* Member 3 */}
          <div className="col-span-2 md:col-span-1 flex justify-center">
            <div className="w-full md:w-auto">
              <img
                src={team1}
                alt=""
                className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover shadow-md"
              />
              <h3 className="text-lg font-semibold mt-4">Rajesh Sharma</h3>
              <p className="text-sm font-medium text-gray-600 mb-2">
                Head of Technology
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Builds scalable and high-performance digital infrastructure.
              </p>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="text-center pb-16">
          <Link to="/OurTeam"><button className="px-8 py-4 rounded-full border border-[#0A47A3] text-[#0A47A3] font-semibold text-lg transition-all hover:bg-[#0A47A3] hover:text-white shadow-md">
            See Our All Team
          </button></Link>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="w-full bg-white py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-3">
            We are building a powerful digital experience company, fueled by a
            relentless focus on results and customer-centric innovation
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* CARD 1 */}
          <div className="border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <TbHeartbeat className="w-10 h-10 mb-4 text-blue-700" />
            <h3 className="text-lg font-semibold mb-2">Hustle with Heart</h3>
            <p className="text-gray-600 mb-3">
              We believe anything is possible when the right individuals come
              together. We maintain a high-energy, creative environment where we
              'hustle, innovate, and make the impossible possible.'
            </p>
            <p className="font-medium text-gray-800">
              The Spirit of Possibility
            </p>
          </div>

          {/* CARD 2 */}
          <div className="border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <LuClipboardPenLine className="w-10 h-10 mb-4 text-blue-700" />
            <h3 className="text-lg font-semibold mb-2">Result Driven</h3>
            <p className="text-gray-600 mb-3">
              Our strategies are built on meticulous research, ensuring every
              solution is tailored to maximize conversions and deliver
              measurable business growth. We never settle for good enough.
            </p>
            <p className="font-medium text-gray-800">Build for Growth</p>
          </div>

          {/* CARD 3 */}
          <div className="border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <LuShieldCheck className="w-10 h-10 mb-4 text-blue-700" />
            <h3 className="text-lg font-semibold mb-2">Excellence</h3>
            <p className="text-gray-600 mb-3">
              Quality is non-negotiable, and speed is revenue. Our custom
              products are optimized to load in under 2 seconds and are built
              with an 'SEO First' approach.
            </p>
            <p className="font-medium text-gray-800">Speed & Technical SEO</p>
          </div>

          {/* CARD 4 */}
          <div className="border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <LuTableProperties className="w-10 h-10 mb-4 text-blue-700" />
            <h3 className="text-lg font-semibold mb-2">Custom-Built</h3>
            <p className="text-gray-600 mb-3">
              We reject template-based solutions. We build every pixel and every
              line of code from the ground up—no shortcuts—to ensure the final
              product aligns with your business goals.
            </p>
            <p className="font-medium text-gray-800">Not Cookie Cutter</p>
          </div>

          {/* CARD 5 */}
          <div className="border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <LuBrainCircuit className="w-10 h-10 mb-4 text-blue-700" />
            <h3 className="text-lg font-semibold mb-2">Always Evolving</h3>
            <p className="text-gray-600 mb-3">
              We push boundaries with advanced tech: AI, ML, and Blockchain,
              delivering bold and unique digital solutions that move our clients
              ahead.
            </p>
            <p className="font-medium text-gray-800">The Tech Edge</p>
          </div>

          {/* CARD 6 */}
          <div className="border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <FaRegHandshake className="w-10 h-10 mb-4 text-blue-700" />
            <h3 className="text-lg font-semibold mb-2">
              Transparent Partnership
            </h3>
            <p className="text-gray-600 mb-3">
              We operate with transparency, working in agile sprints, giving
              clients complete visibility and ownership of the project's
              success.
            </p>
            <p className="font-medium text-gray-800">Own the Outcome</p>
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
          <p className="text-gray-600 mt-4">
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
          <div className={`lg:col-span-3 rounded-2xl p-8 shadow-sm`} style={{ backgroundImage: `url(${bg1})` }}>
            <h3 className="text-xl font-semibold mb-3">
              Convert Your Ideas <br /> into Digital Reality
            </h3>
            <p className="text-gray-600 mb-5">
              Fast, reliable, and scalable digital development.
              <br />
              We help you transform your business ideas into real digital
              products — websites, apps, or platforms that perform seamlessly
              across all devices.
            </p>
          </div>

          {/* Right Card */}
          <div className="lg:col-span-2 rounded-2xl bg-[#EEDCFD] p-8 shadow-sm">
            <h3 className="text-xl font-semibold mb-6">
              Collaborate & Grow with WebSeeder
            </h3>

            <div className="grid grid-cols-3  justify-items-center">
              <img
                src={icon1}
                className="w-25 h-25 rounded-full"
              />
              <img
                src={icon2}
                className="w-30 h-30 rounded-full"
              />
              <img
                src={icon3}
                className="w-40 h-40 rounded-full"
              />
              <img
                src={icon4}
                className="w-30 h-30 rounded-full"
              />
              <img
                src={icon5}
                className="w-25 h-25 rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 max-w-7xl mx-auto">
          {/* Mission Card */}
          <div className={`rounded-2xl cover p-8 shadow-sm`} style={{ backgroundImage: `url(${bg2})` }}
>
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To help businesses evolve through technology-driven creativity,
              delivering impactful solutions that inspire growth and innovation.
            </p>
          </div>

          {/* Vision Card */}
          <div className="rounded-2xl bg-[url('https://plus.unsplash.com/premium_photo-1701892428822-8bd4341f5532?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8')] p-8 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be recognized globally as a trusted digital partner that
              transforms ideas into experiences and empowers businesses through
              design and technology.
            </p>
          </div>

          {/* Approach Card */}
          <div className={`rounded-2xl p-8 shadow-sm`} style={{ backgroundImage: `url(${bg2})` }}>
            <h3 className="text-xl font-semibold mb-3">Our Approach</h3>
            <p className="text-gray-600 leading-relaxed">
              At WebSeeder, every project begins with understanding your goals
              and audience. We follow a “Design, Develop, Deliver” approach —
              ensuring that every solution is functional, meaningful, and built
              to last.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
