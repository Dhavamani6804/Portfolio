import React, { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://getform.io/f/bnllyomb", {
      method: "POST",
      body: new FormData(e.target),
    }).then(() => {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    });
  };

  return (
    <div
      name="contact"
      className="scroll-mt-24 bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="flex flex-col justify-center p-4 max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              required
              placeholder="Enter your message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button
              type="submit"
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            >
Send            </button>
          </form>
        </div>

        {submitted && (
          <p className="text-cyan-400 text-center mt-4 text-lg">
            Thank you for your message! I'll get back to you soon.
          </p>
        )}
      </div>
    </div>
  );
};

export default Contact;
