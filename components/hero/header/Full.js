import React from "react";
{
  /* This example requires Tailwind CSS v1.4.0+ */
}
export default function Full() {
  return (
    <div className="z-0 relative bg-white">
      <div className="relative z-10 shadow">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
          <div>
            <a href="#" className="flex">
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
                alt="Workflow"
              />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
            >
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div className="hidden md:flex-1 md:flex md:items-center md:justify-between md:space-x-12">
            <nav className="flex space-x-10">
              <div className="relative">
                {/* Item active: "text-gray-900", Item inactive: "text-gray-500" */}
                <button
                  type="button"
                  className="text-gray-500 group inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
                >
                  <span>Solutions</span>
                  {/* Item active: "text-gray-600", Item inactive: "text-gray-400" */}
                  <svg
                    className="text-gray-400 h-5 w-5 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <a
                href="#"
                className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
              >
                Docs
              </a>
              <div className="relative">
                {/* Item active: "text-gray-900", Item inactive: "text-gray-500" */}
                <button
                  type="button"
                  className="text-gray-500 group inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
                >
                  <span>Menu</span>
                  {/* Item active: "text-gray-600", Item inactive: "text-gray-400" */}
                  <svg
                    className="text-gray-400 h-5 w-5 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </nav>
            <div className="flex items-center space-x-8">
              <a
                href="#"
                className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
              >
                Sign in
              </a>
              <span className="inline-flex rounded-md shadow-sm">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-700 transition ease-in-out duration-150"
                >
                  Sign up
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Solutions menu */}
      {/*
    'Solutions' flyout menu, show/hide based on flyout menu state.

    Entering: "transition ease-out duration-200"
From: "opacity-0 -translate-y-1"
To: "opacity-100 translate-y-0"
    Leaving: "transition ease-in duration-150"
From: "opacity-100 translate-y-0"
To: "opacity-0 -translate-y-1"
  */}
      <div className="hidden md:block absolute inset-x-0 transform shadow-lg">
        <div className="bg-white">
          <div className="max-w-7xl mx-auto grid row-gap-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
            <a
              href="#"
              className="-m-3 p-3 flex flex-col justify-between space-y-6 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
            >
              <div className="space-x-4 flex md:h-full lg:flex-col lg:space-x-0 lg:space-y-4">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-red-500 text-white sm:h-12 sm:w-12">
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
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </span>
                </div>
                <div className="space-y-2 md:flex-1 md:flex md:flex-col md:justify-between lg:space-y-4">
                  <div className="space-y-1">
                    <p className="text-base leading-6 font-medium text-gray-900">
                      Analytics
                    </p>
                    <p className="text-sm leading-5 text-gray-500">
                      Get a better understanding of where your traffic is coming
                      from.
                    </p>
                  </div>
                  <p className="text-sm leading-5 font-medium text-red-600">
                    Learn more →
                  </p>
                </div>
              </div>
            </a>
            <a
              href="#"
              className="-m-3 p-3 flex flex-col justify-between space-y-6 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
            >
              <div className="space-x-4 flex md:h-full lg:flex-col lg:space-x-0 lg:space-y-4">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-red-500 text-white sm:h-12 sm:w-12">
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
                        d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                      />
                    </svg>
                  </span>
                </div>
                <div className="space-y-2 md:flex-1 md:flex md:flex-col md:justify-between lg:space-y-4">
                  <div className="space-y-1">
                    <p className="text-base leading-6 font-medium text-gray-900">
                      Engagement
                    </p>
                    <p className="text-sm leading-5 text-gray-500">
                      Speak directly to your customers in a more meaningful way.
                    </p>
                  </div>
                  <p className="text-sm leading-5 font-medium text-red-600">
                    Learn more →
                  </p>
                </div>
              </div>
            </a>
            <a
              href="#"
              className="-m-3 p-3 flex flex-col justify-between space-y-6 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
            >
              <div className="space-x-4 flex md:h-full lg:flex-col lg:space-x-0 lg:space-y-4">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-red-500 text-white sm:h-12 sm:w-12">
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
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </span>
                </div>
                <div className="space-y-2 md:flex-1 md:flex md:flex-col md:justify-between lg:space-y-4">
                  <div className="space-y-1">
                    <p className="text-base leading-6 font-medium text-gray-900">
                      Security
                    </p>
                    <p className="text-sm leading-5 text-gray-500">
                      Your customer data will be safe and secure.
                    </p>
                  </div>
                  <p className="text-sm leading-5 font-medium text-red-600">
                    Learn more →
                  </p>
                </div>
              </div>
            </a>
            <a
              href="#"
              className="-m-3 p-3 flex flex-col justify-between space-y-6 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
            >
              <div className="space-x-4 flex md:h-full lg:flex-col lg:space-x-0 lg:space-y-4">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-red-500 text-white sm:h-12 sm:w-12">
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
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                      />
                    </svg>
                  </span>
                </div>
                <div className="space-y-2 md:flex-1 md:flex md:flex-col md:justify-between lg:space-y-4">
                  <div className="space-y-1">
                    <p className="text-base leading-6 font-medium text-gray-900">
                      Integrations
                    </p>
                    <p className="text-sm leading-5 text-gray-500">
                      Connect with third-party tools that you're already using.
                    </p>
                  </div>
                  <p className="text-sm leading-5 font-medium text-red-600">
                    Learn more →
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
            <div className="flow-root">
              <a
                href="#"
                className="-m-3 p-3 space-x-3 flex items-center rounded-md text-base leading-6 font-medium text-gray-900 hover:bg-gray-100 transition ease-in-out duration-150"
              >
                <svg
                  className="flex-shrink-0 h-6 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Watch Demo</span>
              </a>
            </div>
            <div className="flow-root">
              <a
                href="#"
                className="-m-3 p-3 space-x-3 flex items-center rounded-md text-base leading-6 font-medium text-gray-900 hover:bg-gray-100 transition ease-in-out duration-150"
              >
                <svg
                  className="flex-shrink-0 h-6 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>View all products</span>
              </a>
            </div>
            <div className="flow-root">
              <a
                href="#"
                className="-m-3 p-3 space-x-3 flex items-center rounded-md text-base leading-6 font-medium text-gray-900 hover:bg-gray-100 transition ease-in-out duration-150"
              >
                <svg
                  className="flex-shrink-0 h-6 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>Contact Sales</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* More menu */}
      {/*
    'More' flyout menu, show/hide based on flyout menu state.

    Entering: "transition ease-out duration-200"
From: "opacity-0 -translate-y-1"
To: "opacity-100 translate-y-0"
    Leaving: "transition ease-in duration-150"
From: "opacity-100 translate-y-0"
To: "opacity-0 -translate-y-1"
  */}
      <div className="hidden md:block absolute inset-x-0 transform shadow-lg">
        <div className="absolute inset-0 flex">
          <div className="bg-white w-1/2" />
          <div className="bg-gray-50 w-1/2" />
        </div>
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
          <nav className="grid row-gap-10 px-4 py-8 bg-white sm:grid-cols-2 sm:col-gap-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
            <div className="space-y-5">
              <h3 className="text-sm leading-5 font-medium tracking-wide text-gray-500 uppercase">
                Company
              </h3>
              <ul className="space-y-6">
                <li className="flow-root">
                  <a
                    href="#"
                    className="-m-3 p-3 flex items-center space-x-4 rounded-md text-base leading-6 font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150"
                  >
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>About</span>
                  </a>
                </li>
                <li className="flow-root">
                  <a
                    href="#"
                    className="-m-3 p-3 flex items-center space-x-4 rounded-md text-base leading-6 font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150"
                  >
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    <span>Customers</span>
                  </a>
                </li>
                <li className="flow-root">
                  <a
                    href="#"
                    className="-m-3 p-3 flex items-center space-x-4 rounded-md text-base leading-6 font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150"
                  >
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                      />
                    </svg>
                    <span>Press</span>
                  </a>
                </li>
                <li className="flow-root">
                  <a
                    href="#"
                    className="-m-3 p-3 flex items-center space-x-4 rounded-md text-base leading-6 font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150"
                  >
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span>Careers</span>
                  </a>
                </li>
                <li className="flow-root">
                  <a
                    href="#"
                    className="-m-3 p-3 flex items-center space-x-4 rounded-md text-base leading-6 font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150"
                  >
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <span>Privacy</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-5">
              <h3 className="text-sm leading-5 font-medium tracking-wide text-gray-500 uppercase">
                Resources
              </h3>
              <ul className="space-y-6">
                <li className="flow-root">
                  <a
                    href="#"
                    className="-m-3 p-3 flex items-center space-x-4 rounded-md text-base leading-6 font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150"
                  >
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span>Community</span>
                  </a>
                </li>
                <li className="flow-root">
                  <a
                    href="#"
                    className="-m-3 p-3 flex items-center space-x-4 rounded-md text-base leading-6 font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150"
                  >
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                    <span>Partners</span>
                  </a>
                </li>
                <li className="flow-root">
                  <a
                    href="#"
                    className="-m-3 p-3 flex items-center space-x-4 rounded-md text-base leading-6 font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150"
                  >
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span>Guides</span>
                  </a>
                </li>
                <li className="flow-root">
                  <a
                    href="#"
                    className="-m-3 p-3 flex items-center space-x-4 rounded-md text-base leading-6 font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150"
                  >
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span>Webinars</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="space-y-6 bg-gray-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
            <div className="space-y-6">
              <h3 className="text-sm leading-5 font-medium tracking-wide text-gray-500 uppercase">
                From the blog
              </h3>
              <ul className="space-y-6">
                <li className="flow-root">
                  <a
                    href="#"
                    className="-m-3 p-3 flex rounded-lg hover:bg-gray-100 transition ease-in-out duration-150 sm:space-x-8"
                  >
                    <div className="hidden sm:block flex-shrink-0">
                      <img
                        className="w-32 h-20 object-cover rounded-md"
                        src="https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80"
                        alt
                      />
                    </div>
                    <div className="space-y-1 w-0 flex-1">
                      <h4 className="text-base leading-6 font-medium text-gray-900 truncate">
                        Boost your conversion rate
                      </h4>
                      <p className="text-sm leading-5 text-gray-500">
                        Eget ullamcorper ac ut vulputate fames nec mattis
                        pellentesque elementum. Viverra tempor id mus.
                      </p>
                    </div>
                  </a>
                </li>
                <li className="flow-root">
                  <a
                    href="#"
                    className="-m-3 p-3 flex rounded-lg hover:bg-gray-100 transition ease-in-out duration-150 sm:space-x-8"
                  >
                    <div className="hidden sm:block flex-shrink-0">
                      <img
                        className="w-32 h-20 object-cover rounded-md"
                        src="https://images.unsplash.com/1/apple-gear-looking-pretty.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                        alt
                      />
                    </div>
                    <div className="space-y-1 w-0 flex-1">
                      <h4 className="text-base leading-6 font-medium text-gray-900 truncate">
                        How to use search engine optimization to drive traffic
                        to your site
                      </h4>
                      <p className="text-sm leading-5 text-gray-500">
                        Eget ullamcorper ac ut vulputate fames nec mattis
                        pellentesque elementum. Viverra tempor id mus.
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-sm leading-5 font-medium">
              <a
                href="#"
                className="text-red-600 hover:text-red-500 transition ease-in-out duration-150"
              >
                View all posts →
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
From: "opacity-0 scale-95"
To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
From: "opacity-100 scale-100"
To: "opacity-0 scale-95"
  */}
      <div className="absolute z-20 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div className="rounded-lg shadow-lg">
          <div className="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5 space-y-6 sm:space-y-8 sm:pb-8">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                  >
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div>
                <nav className="space-y-8">
                  <div className="grid gap-7 sm:grid-cols-2 sm:row-gap-8 sm:col-gap-4">
                    <a
                      href="#"
                      className="-m-3 space-x-4 flex items-center p-3 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                    >
                      <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-red-500 text-white sm:h-12 sm:w-12">
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
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                      </div>
                      <div className="text-base leading-6 font-medium text-gray-900">
                        Analytics
                      </div>
                    </a>
                    <a
                      href="#"
                      className="-m-3 space-x-4 flex items-center p-3 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                    >
                      <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-red-500 text-white sm:h-12 sm:w-12">
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
                            d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                          />
                        </svg>
                      </div>
                      <div className="text-base leading-6 font-medium text-gray-900">
                        Engagement
                      </div>
                    </a>
                    <a
                      href="#"
                      className="-m-3 space-x-4 flex items-center p-3 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                    >
                      <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-red-500 text-white sm:h-12 sm:w-12">
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
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </div>
                      <div className="text-base leading-6 font-medium text-gray-900">
                        Security
                      </div>
                    </a>
                    <a
                      href="#"
                      className="-m-3 space-x-4 flex items-center p-3 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                    >
                      <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-red-500 text-white sm:h-12 sm:w-12">
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
                            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                          />
                        </svg>
                      </div>
                      <div className="text-base leading-6 font-medium text-gray-900">
                        Integrations
                      </div>
                    </a>
                  </div>
                  <div className="text-base leading-6">
                    <a
                      href="#"
                      className="font-medium text-red-600 hover:text-red-500 transition ease-in-out duration-150"
                    >
                      View all products →
                    </a>
                  </div>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="#"
                  className="rounded-md text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="rounded-md text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                >
                  Docs
                </a>
                <a
                  href="#"
                  className="rounded-md text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                >
                  Company
                </a>
                <a
                  href="#"
                  className="rounded-md text-base leading-6 font-medium text-gray-900 hover:text-gray-600 transition ease-in-out duration-150"
                >
                  Resources
                </a>
                <a
                  href="#"
                  className="rounded-md text-base leading-6 font-medium text-gray-900 hover:text-gray-600 transition ease-in-out duration-150"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="rounded-md text-base leading-6 font-medium text-gray-900 hover:text-gray-600 transition ease-in-out duration-150"
                >
                  Contact Sales
                </a>
              </div>
              <div className="space-y-6">
                <span className="w-full flex rounded-md shadow-sm">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-700 transition ease-in-out duration-150"
                  >
                    Sign up
                  </a>
                </span>
                <p className="text-center text-base leading-6 font-medium text-gray-500">
                  Existing customer?
                  <a
                    href="#"
                    className="text-red-600 hover:text-red-500 transition ease-in-out duration-150"
                  >
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
