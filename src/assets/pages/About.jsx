import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const About = () => {
  // State to manage visibility of title and content for animations
  const [isTitleVisible, setIsTitleVisible] = useState(false); // For title animation
  const [isContentVisible, setIsContentVisible] = useState(false); // For content slide-in animation

  useEffect(() => {
    // Set the document title to "About Us"
    document.title = "About Us";

    // Trigger animations shortly after the component mounts
    setTimeout(() => {
      setIsTitleVisible(true); // Make the title visible
      setIsContentVisible(true); // Slide in the content
    }, 100); // Delay for a smooth effect
  }, []);

  return (
    <div className="bg-body min-h-screen">
      <Header /> {/* Render the Header component */}
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1
          className={`text-3xl sm:text-4xl font-bold text-center mb-8 text-but transition-opacity duration-1000 ${
            isTitleVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          About Us
        </h1>

        <div
          className={`space-y-6 transform transition-transform duration-1000 ${
            isContentVisible ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Mission Section */}
          <section className="bg-body shadow-2xl shadow-slate-900 rounded-3xl p-5 transition-all duration-300">
            <h2 className="text-lg sm:text-xl font-medium text-but mb-4">
              Our Mission
            </h2>
            <p className="text-black">
              We are dedicated to providing the best service for our customers,
              focusing on quality, innovation, and efficiency.
            </p>
          </section>

          {/* Values Section */}
          <section className="bg-body shadow-2xl shadow-slate-900 rounded-3xl p-5 transition-all duration-300">
            <h2 className="text-lg sm:text-xl font-medium text-but mb-4">
              Our Values
            </h2>
            <p className="text-black">
              Integrity, customer satisfaction, and continuous improvement are
              at the core of our business.
            </p>
          </section>

          {/* History Section */}
          <section className="bg-body shadow-2xl shadow-slate-900 rounded-3xl p-5 transition-all duration-300">
            <h2 className="text-lg sm:text-xl font-medium text-but mb-4">
              Our History
            </h2>
            <p className="text-black">
              Founded in [Year], we have grown to become a leader in our
              industry, offering cutting-edge solutions to customers worldwide.
            </p>
          </section>

          {/* Team Section */}
          <section className="bg-body shadow-2xl shadow-slate-900 rounded-3xl p-5 transition-all duration-300">
            <h2 className="text-lg sm:text-xl font-medium text-but mb-4">
              Meet the Team
            </h2>
            <p className="text-black">
              Our team of experienced professionals is committed to driving
              innovation and delivering results.
            </p>
          </section>

          {/* Contact Section */}
          <section className="bg-body shadow-2xl shadow-slate-900 rounded-3xl p-5 transition-all duration-300">
            <Link
              to={"/contact"}
              className="text-lg sm:text-xl hover:black font-medium text-but mb-4"
            >
              Contact Us
            </Link>
            <p className="text-black">
              Reach out to us for more information or to discuss how we can
              assist you.
            </p>
          </section>
        </div>
      </div>
      <Footer /> {/* Render the Footer component */}
    </div>
  );
};

export default About;
