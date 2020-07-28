import React from "react";

export default function Center(props) {
  return (
    <section className="py-12 bg-gray-50 overflow-hidden md:py-12 lg:py-12">
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl uppercase mx-auto text-center text-xl leading-9 font-medium text-red-600">
          {props.title}
        </div>
        <div className="relative">
          <blockquote className="mt-8">
            <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
              <p>"{props.text}"</p>
            </div>
            <footer className="mt-8">
              <div className="md:flex md:items-center md:justify-center">
                <div className="md:flex-shrink-0"></div>
                <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                  <div className="text-base leading-6 font-medium text-gray-900">
                    {props.source}
                  </div>
                  <svg
                    className="hidden md:block mx-1 h-5 w-5 text-red-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M11 0h3L9 20H6l5-20z" />
                  </svg>
                  <div className="text-base leading-6 font-medium text-gray-500">
                    {props.position}
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
