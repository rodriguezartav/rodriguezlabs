import React from "react";

export default function TestimonialStat(props) {
  return (
    <div className="relative bg-white">
      <div className="h-56  sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
        <img
          className="w-full h-full object-cover"
          src={props.image}
          alt="Support team"
        />
      </div>
      <div className="relative max-w-screen-xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
        <div className="max-w-2xl mx-auto lg:max-w-none lg:mr-0 lg:ml-auto lg:w-1/2 lg:pl-10">
          <div>
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
          </div>

          {props.bullets.map((item) => {
            return (
              <React.Fragment>
                <h2 className="mt-6 text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
                  {item.title}
                </h2>
                <p className="mt-6 text-lg leading-7 text-gray-500">
                  {item.text}
                </p>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}
