import React from "react";

export default function ThreeCard(props) {
  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
            {props.title}
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4">
            {props.text}
          </p>
        </div>
        <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
          {props.items.map((item) => {
            return (
              <div
                onClick={props.onClick(item)}
                className="flex flex-col rounded-lg shadow-lg overflow-hidden"
              >
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                    alt
                  />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm leading-5 font-medium text-red-600">
                      <a href="#" className="hover:underline">
                        {item.preTitle}
                      </a>
                    </p>
                    <a href="#" className="block">
                      <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-base leading-6 text-gray-500">
                        {item.text}
                      </p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <a href="#">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={item.image}
                          alt
                        />
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm leading-5 font-medium text-gray-900">
                        <a href="#" className="hover:underline">
                          {item.author}
                        </a>
                      </p>
                      <div className="flex text-sm leading-5 text-gray-500">
                        <time dateTime="2020-03-16">{item.date}</time>
                        <span className="mx-1">·</span>
                        <span>{item.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
