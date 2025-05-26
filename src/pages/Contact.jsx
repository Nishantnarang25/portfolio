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
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <>
      <div className="w-full max-w-[700px] mx-auto px-6 py-10 bg-white rounded-xl shadow-md mt-6 border-white border-2">
        {/* Header with status */}


        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-8">
          <h1 className="text-xl font-medium text-left text-[#6B7280] mb-4 before:content-['●'] before:mr-2 before:text-[#6B7280]">
            Contact me
          </h1>
          <p className="flex items-center bg-[#D9F6E1] text-[#9CC7A8] px-4 py-2 rounded-xl text-sm font-normal gap-2">
            <span className="w-2 h-2 rounded-full bg-[#82c782] animate-pulse "></span>
            Available for work
          </p>
        </div>

        <p className="text-left px-2  text-[#6B7280] mb-6">Got something to say? Just write a mail</p>

        {/* Form or success message */}
        {!state.succeeded || showFormAgain ? (
          <form onSubmit={handleSubmit} className="flex flex-col items-start w-full">
            <div className="mb-5 w-full">
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full p-3 rounded-xl bg-[#F8F8F9] placeholder:text-[#A8A8A8] text-[#0A0A0A] focus:outline-none transition duration-300"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="mb-6 w-full">
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                placeholder="Type your message here..."
                className="w-full p-3 rounded-xl bg-[#F8F8F9] placeholder:text-[#A8A8A8] text-[#0A0A0A] focus:outline-none transition duration-300"
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
              className="py-3 px-12 bg-[#111827] text-white rounded-xl font-medium shadow-md hover:brightness-110 transition duration-300 disabled:opacity-50"
            >
              Send Message!
            </button>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full text-center"
          >
            <p className="text-lg font-medium text-[#6B7280]">Your response has been submitted!</p>
          </motion.div>
        )}
      </div>

     <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
  viewport={{ once: true }}
  className="max-w-[700px] mx-auto px-6 py-8 mt-8 bg-white rounded-xl shadow-sm mb-4"
>
  <h2 className="text-lg text-left font-medium text-[#6B7280] mb-3">Open for Ideas 💡</h2>
  <p className="text-[#6B7280] text-md  text-left">
    Got something exciting in mind? Whether it’s a fresh UI/UX challenge, a freelance gig, or a startup idea — I’d love to hear about it. Let’s bring it to life together!
  </p>
</motion.div>

    </>
  );
}
