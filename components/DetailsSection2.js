import React from "react";

export default function DetailsSection2() {
  return (
    <div className="relative mt-10 sm:mt-16 lg:mt-20 mr-10 mb-10">
      <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
        <div className="lg:col-start-2">
          <ul className="">
            <li>
              <div className="flex">
                <div className="flex-shrink-0">
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
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-lg leading-6 font-medium text-gray-900">
                    Transformacion Digital es una palabra de moda
                  </h5>
                  <p className="mt-2  text-base leading-6 text-gray-500">
                    Muchos empresarios desconfiaron de la tendencia de la
                    transformación, no es que no creian en ella, pero si sentian
                    que estaba inflada.
                  </p>
                </div>
              </div>
            </li>
            <li className="mt-10">
              <div className="flex">
                <div className="flex-shrink-0">
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-lg leading-6 font-medium text-gray-900">
                    Aprendizaje de Emergencia
                  </h5>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    En este momento todas las empresas del mundo estan
                    aprendiendo la importancia de los procesos digitales desde
                    comunicaciones y compras en linea hasta operaciones
                    administrativas
                  </p>
                </div>
              </div>
            </li>
          </ul>

          <div className="mt-10">
            <h4 className="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
              Las ramificationes son masivas
            </h4>
            <p className="mt-3 text-lg leading-7 text-gray-500">
              Todo trabajador, todo lider, toda organizacion va ser afectada y
              muchos se van a quedar atras.
            </p>
          </div>
        </div>

        <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
          <svg
            className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
            width={784}
            height={404}
            fill="none"
            viewBox="0 0 784 404"
          >
            <defs>
              <pattern
                id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={784}
              height={404}
              fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
            />
          </svg>
          <img
            className="relative mx-auto"
            width={490}
            src="https://tailwindui.com/img/features/feature-example-2.png"
            alt
          />
        </div>
      </div>
    </div>
  );
}
