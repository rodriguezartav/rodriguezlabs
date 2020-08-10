import React from "react";

export default function Angle(props) {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mt-0 mx-auto max-w-screen-xl px-4 sm:mt-0 sm:px-6 md:mt-0 lg:mt-20 lg:px-8 xl:mt-0">
            <div className="sm:text-center lg:text-left pt-20">
              <p className="text-gray-500">
                {props.parent && props.parent.sys.publishedAt.split("T")[0]}
              </p>
              <h2 className="text-4xl  tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                {props.titleBlack}
                <br />
                <span className="text-red-600 pl-2">{props.titleColor}</span>
              </h2>

              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                {props.text}
              </p>

              {
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  {props.callToAction && (
                    <div className="rounded-md shadow">
                      <a
                        onClick={() => {
                          props.onShowModule(props.callToAction.name);
                        }}
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                      >
                        {props.callToAction.title}
                      </a>
                    </div>
                  )}
                </div>
              }
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute bg-red-600 lg:inset-y-0 lg:right-0 lg:w-1/2">
        {props.image && (
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src={props.image}
            alt
          />
        )}
        {!props.image && (
          <img
            className="w-3/4 ml-20 pl-28 h-full object-fill"
            src="/logo3.svg"
          />
        )}
      </div>
    </div>
  );
}
