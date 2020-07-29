import React from "react";

export default function col3(props) {
  return (
    <div class="py-12 bg-white">
      <div class="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-screen-xl lg:px-8">
        <div className="lg:text-center mb-12">
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            {props.title}
          </h3>
          <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
            {props.text}
          </p>
        </div>

        <div class="lg:grid lg:grid-cols-3 lg:gap-8">
          {props.bullets.map((item) => {
            return (
              <div>
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <div class="mt-5">
                  <h5 class="text-lg leading-6 font-medium text-gray-900">
                    {item.title}
                  </h5>
                  <p class="mt-2 text-base leading-6 text-gray-500">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
