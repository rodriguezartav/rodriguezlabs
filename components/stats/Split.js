import React from "react";

export default function Split() {
  return (
    <div className="relative bg-white">
      <div className="h-56 bg-red-600 sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
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
          <h2 className="mt-6 text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
            Deliver what your customers want every time
          </h2>
          <p className="mt-6 text-lg leading-7 text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
            nihil ea rerum ipsa. Nostrum consectetur sequi culpa doloribus
            omnis, molestiae esse placeat, exercitationem magnam quod molestias
            quia aspernatur deserunt voluptatibus.
          </p>
          <div className="mt-8 overflow-hidden">
            <dl className="-mx-8 -mt-8 flex flex-wrap">
              <div className="flex flex-col px-8 pt-8">
                <dt className="order-2 text-base leading-6 font-medium text-gray-500">
                  Delivery
                </dt>
                <dd className="order-1 text-2xl leading-8 font-extrabold text-red-600 sm:text-3xl sm:leading-9">
                  24/7
                </dd>
              </div>
              <div className="flex flex-col px-8 pt-8">
                <dt className="order-2 text-base leading-6 font-medium text-gray-500">
                  Pepperoni
                </dt>
                <dd className="order-1 text-2xl leading-8 font-extrabold text-red-600 sm:text-3xl sm:leading-9">
                  99.9%
                </dd>
              </div>
              <div className="flex flex-col px-8 pt-8">
                <dt className="order-2 text-base leading-6 font-medium text-gray-500">
                  Calories
                </dt>
                <dd className="order-1 text-2xl leading-8 font-extrabold text-red-600 sm:text-3xl sm:leading-9">
                  100k+
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
