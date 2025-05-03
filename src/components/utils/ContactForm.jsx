import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import PortfolioButton from "./PortfolioButton";

export function ContactForm() {
  const [formData, setFormData] = useState({
    contactname: "",
    contactemail: "",
    contactmessage: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // your submit logic here
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <section className="w-full px-4 py-8 sm:px-6 md:px-12 lg:px-24 bg-[#010122]">
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto flex flex-col space-y-6"
      >
        {/* Name */}
        <div className="relative">
          <input
            type="text"
            id="contactname"
            value={formData.contactname}
            onChange={handleChange}
            placeholder="Name"
            className="
              peer w-full bg-transparent border border-gray-700 rounded-lg
              px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-5
              text-sm sm:text-base md:text-lg
              placeholder-transparent focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500
              transition-all"
          />
          <label
            htmlFor="contactname"
            className="
              absolute left-4 top-1/2 transform -translate-y-1/2
              peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500
              peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-400
              text-gray-400 text-sm
              transition-all"
          >
            Name
          </label>
        </div>

        {/* Email */}
        <div className="relative">
          <input
            type="email"
            id="contactemail"
            value={formData.contactemail}
            onChange={handleChange}
            placeholder="Email"
            className="
              peer w-full bg-transparent border border-gray-700 rounded-lg
              px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-5
              text-sm sm:text-base md:text-lg
              placeholder-transparent focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500
              transition-all"
          />
          <label
            htmlFor="contactemail"
            className="
              absolute left-4 top-1/2 transform -translate-y-1/2
              peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500
              peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-400
              text-gray-400 text-sm
              transition-all"
          >
            Email
          </label>
        </div>

        {/* Message */}
        <div className="relative">
          <textarea
            id="contactmessage"
            value={formData.contactmessage}
            onChange={handleChange}
            placeholder="Message"
            rows={4}
            className="
              peer w-full bg-transparent border border-gray-700 rounded-lg
              px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-5
              text-sm sm:text-base md:text-lg
              placeholder-transparent focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500
              transition-all resize-none"
          />
          <label
            htmlFor="contactmessage"
            className="
              absolute left-4 top-1/2 transform -translate-y-1/2
              peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500
              peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-400
              text-gray-400 text-sm
              transition-all"
          >
            Message
          </label>
        </div>

        <div className="flex justify-center">
          <PortfolioButton>
            <span className="flex items-center space-x-2">
              <FaGithub className="text-lg sm:text-xl" />
              <span>Submit</span>
            </span>
          </PortfolioButton>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
