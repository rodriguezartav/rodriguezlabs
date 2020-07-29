import React from "react";

export default function Card(props) {
  return (
    <div className="bg-gray-50 pt-12 sm:pt-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
            {props.title}
          </h2>
          <p className="mt-3 text-xl leading-7 text-gray-500 sm:mt-4">
            {props.text}
          </p>
        </div>
      </div>
      <div className="mt-10 pb-12 bg-white sm:pb-16">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-50" />
          <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                  <dt
                    className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500"
                    id="item-1"
                  >
                    Pepperoni
                  </dt>
                  <dd
                    className="order-1 text-5xl leading-none font-extrabold text-red-600"
                    aria-describedby="item-1"
                  >
                    100%
                  </dd>
                </div>
                <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                    Delivery
                  </dt>
                  <dd className="order-1 text-5xl leading-none font-extrabold text-red-600">
                    24/7
                  </dd>
                </div>
                <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                    Calories
                  </dt>
                  <dd className="order-1 text-5xl leading-none font-extrabold text-red-600">
                    100k
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
