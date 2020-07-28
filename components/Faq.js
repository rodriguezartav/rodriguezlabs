import React from "react";

export default function Faq() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
            Resumen de la lección
          </h2>
          <div className="mt-6 border-t-2 border-gray-200 pt-6">
            <dl>
              <div>
                <dt className="text-lg leading-7">
                  {/* Expand/collapse question button */}
                  <button className="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none focus:text-gray-900">
                    <span className="font-medium text-gray-900">
                      Que es la transformacion Digital?
                    </span>
                    <span className="ml-6 h-7 flex items-center">
                      {/*
              Expand/collapse icon, toggle classes based on question open state.

              Open: "-rotate-180", Closed: "rotate-0"
            */}
                      <svg
                        className="-rotate-180 h-6 w-6 transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>
                </dt>
                <dd className="mt-2 pr-12">
                  <p className="text-base leading-6 text-gray-500">
                    I don't know, but the flag is a big plus. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Quas cupiditate
                    laboriosam fugiat.
                  </p>
                </dd>
              </div>
              <div className="mt-6 border-t border-gray-200 pt-6">
                <div>
                  <dt className="text-lg leading-7">
                    {/* Expand/collapse question button */}
                    <button className="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none focus:text-gray-900">
                      <span className="font-medium text-gray-900">
                        Que hicieron las empresas para afrontar al Covid?
                      </span>
                      <span className="ml-6 h-7 flex items-center">
                        {/*
                Expand/collapse icon, toggle classes based on question open state.

                Open: "-rotate-180", Closed: "rotate-0"
              */}
                        <svg
                          className="rotate-0 h-6 w-6 transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </button>
                  </dt>
                  <dd className="mt-2 pr-12">
                    <p className="text-base leading-6 text-gray-500">
                      You boil the hell out of it. Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Magnam aut tempora vitae
                      odio inventore fuga aliquam nostrum quod porro. Delectus
                      quia facere id sequi expedita natus.
                    </p>
                  </dd>
                </div>
              </div>
              <div className="mt-6 border-t border-gray-200 pt-6">
                <div>
                  <dt className="text-lg leading-7">
                    {/* Expand/collapse question button */}
                    <button className="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none focus:text-gray-900">
                      <span className="font-medium text-gray-900">
                        Que cambio en los ultimos 4 meses?
                      </span>
                      <span className="ml-6 h-7 flex items-center">
                        {/*
                Expand/collapse icon, toggle classes based on question open state.

                Open: "-rotate-180", Closed: "rotate-0"
              */}
                        <svg
                          className="rotate-0 h-6 w-6 transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </button>
                  </dt>
                  <dd className="mt-2 pr-12">
                    <p className="text-base leading-6 text-gray-500">
                      Nobody knows. Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Culpa, voluptas ipsa quia excepturi,
                      quibusdam natus exercitationem sapiente tempore labore
                      voluptatem.
                    </p>
                  </dd>
                </div>
              </div>
              <div className="mt-6 border-t border-gray-200 pt-6">
                <div>
                  <dt className="text-lg leading-7">
                    {/* Expand/collapse question button */}
                    <button className="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none focus:text-gray-900">
                      <span className="font-medium text-gray-900">
                        Why do you never see elephants hiding in trees?
                      </span>
                      <span className="ml-6 h-7 flex items-center">
                        {/*
                Expand/collapse icon, toggle classes based on question open state.

                Open: "-rotate-180", Closed: "rotate-0"
              */}
                        <svg
                          className="rotate-0 h-6 w-6 transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </button>
                  </dt>
                  <dd className="mt-2 pr-12">
                    <p className="text-base leading-6 text-gray-500">
                      Because they're so good at it. Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Quas cupiditate laboriosam
                      fugiat.
                    </p>
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
