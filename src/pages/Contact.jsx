import React, { useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [state, handleSubmit] = useForm("xqapnnqk");
  const [showFormAgain, setShowFormAgain] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      const timer = setTimeout(() => {
        setShowFormAgain(true);
      }, 4000); // 4 seconds delay

      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <>
      <div className="w-full max-w-[700px] mx-auto px-6 py-10 bg-white rounded-xl shadow-md mt-6 border-white border-2">
        <h1 className="text-3xl font-semibold text-[#1B1B1B] text-left mb-6">Contact Me</h1>

        {/* Conditional rendering: form or response message */}
        {!state.succeeded || showFormAgain ? (
          <form onSubmit={handleSubmit} className='flex flex-col items-start w-full'>
            <div className="mb-5 w-full">
              <label htmlFor="email" className="block text-[#333] text-lg pl-1 text-left font-medium mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full p-3 border border-[#E0E0E0] rounded-xl bg-white placeholder:text-[#A8A8A8] text-[#0A0A0A] focus:outline-none transition duration-300"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="mb-6 w-full">
              <label htmlFor="message" className="block text-[#333] text-lg pl-1 text-left font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                placeholder="Type your message here..."
                className="w-full p-3 border border-[#E0E0E0] rounded-xl bg-white placeholder:text-[#A8A8A8] text-[#0A0A0A] focus:outline-none transition duration-300"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="py-3 px-12 bg-[#FFCC47] text-white rounded-xl font-medium shadow-md hover:brightness-105 transition duration-300 disabled:bg-[#E0E0E0]"
            >
              Submit
            </button>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full text-center"
          >
            <p className="text-lg font-medium text-[#1B1B1B]">Your response has been submitted!</p>
          </motion.div>
        )}
      </div>

      {/* This section stays visible no matter what */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-[700px] mx-auto px-6 py-8 mt-8 bg-white rounded-xl shadow-sm mb-4"
      >
        <h2 className="text-2xl font-semibold text-[#1B1B1B] mb-3">Let’s Collaborate!</h2>
        <p className="text-[#444] text-base">
          I love connecting with creative minds. Whether you’ve got an idea, feedback, or just wanna say hi — feel free to drop a message. 🚀
        </p>
      </motion.div>
    </>
  );
}
