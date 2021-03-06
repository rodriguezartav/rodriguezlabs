import React from "react";

export default function Stats1() {
  return (
    <div className="bg-red-800">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10">
            Asi se acelero la transformación digital
          </h2>
          <p className="mt-3 text-xl leading-7 text-red-200 sm:mt-4">
            Segun estudio de Twilio con 660 Empresas
          </p>
        </div>
        <dl className="mt-10 text-center sm:max-w-2xl sm:mx-auto sm:grid sm:grid-cols-2 sm:gap-8">
          <div className="flex flex-col">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-red-200">
              Tiempo
            </dt>
            <dd className="order-1 text-5xl leading-none font-extrabold text-white">
              6 Años
            </dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-red-200">
              Cobertura
            </dt>
            <dd className="order-1 text-5xl leading-none font-extrabold text-white">
              97%
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
