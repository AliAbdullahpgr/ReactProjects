import React from "react";

const Entry = () => {
  return (
    <article className="flex w-[85%] gap-4 p-8 overflow-x-hidden">
      <img className="w-36 rounded-md" src="./assets/mountFuji.jpg" alt="its japan" />
      <div className="w-[52rem] font-inter flex gap-3 flex-col">
        <div className="flex items-center gap-3 p-1">
          <span className="flex items-center gap-1">
            <svg
              className="w-3.5 text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              fill="currentColor"
            >
              <path d="M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0-50.2-54.5-170.4-197.5-170.4-316.8zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
            </svg>
            <span className="tracking-wider  ">JAPAN</span>
          </span>
          <a
            href="#"
            target="_blank"
            className=" text-green-500 font-semibold"
          >
            View on Google Maps
          </a>
        </div>
        <h1 className="pl-1 pb-2">Mount Fuji</h1>
        <h4>12 Jan, 2025-26 Jan, 2025</h4>
        <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
      </div>
    </article>
  );
};
export default Entry;
