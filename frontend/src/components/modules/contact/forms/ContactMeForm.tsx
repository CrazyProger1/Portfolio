import React from "react";

import { Motion } from "@/components/common/utils";

export const ContactMeForm = () => {
  return (
    <form className="flex w-1/2 flex-col gap-8 select-none">
      <div>
        <label htmlFor="subject" className="block pb-2 text-white">
          Subject
        </label>
        <input
          tabIndex={1}
          type="text"
          id="subject"
          className="w-full border-b border-gray-500 p-2 outline-none focus:border-white"
        />
      </div>
      <div>
        <label htmlFor="email" className="block pb-2 text-white">
          Email
        </label>
        <input
          tabIndex={2}
          type="email"
          id="email"
          className="w-full border-b border-gray-500 p-2 outline-none focus:border-white"
        />
      </div>
      <div>
        <label htmlFor="message" className="block pb-2 text-white">
          Message
        </label>
        <textarea
          tabIndex={3}
          rows={3}
          id="message"
          className="w-full border-b border-gray-500 p-2 outline-none focus:border-white"
        />
      </div>
      <Motion whileHover={{ scale: 1.05 }} className="flex flex-col items-center">
        <button
          tabIndex={4}
          type="button"
          className="text-shine glow-up cursor-pointer border-b border-gray-500 p-2 text-center outline-none select-none hover:border-white"
        >
          Send
        </button>
      </Motion>
    </form>
  );
};
