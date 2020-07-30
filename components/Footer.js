import React from "react";

export default function Footer() {
  return (
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-4 xl:gap-8">
          <div className="xl:col-span-1">
            <img className="h-10" src="/logo.svg" alt="Company name" />
            <p className="mt-8 text-gray-500 text-base leading-6">
              Laboratorio de Emprendedurismo Social Digital
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 xl:mt-0 xl:col-span-2">
            <div>
              <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                Sobre el Inventor
              </h4>
              <p className="text-gray-500">
                RodriguezLabs es la consolidación de los diversos intereses del
                inventor Roberto Rodriguez.
              </p>

              <p className="mt-2 text-gray-500">
                Trabajando desde los 19 años en gran variedad de industrias como
                turismo, periodismo, comercio, educación y conservacion - a
                veces con exito.
              </p>

              <p className="mt-2 text-gray-500">
                Recorriendo mas de 60 paises en 4 continentes a veces como
                viajero, algunas veces artista y a veces conferencista - a veces
                sin rasguños
              </p>

              <p className="mt-2 text-gray-500">
                Con una apertura a compartir sus experiencias de salud mental y
                un interes en las artes como el Qi Gong, Yoga y Meditacion - a
                veces con disciplina.
              </p>

              <p className="mt-2 text-gray-500">
                En cada etapa de su vida ha tenido una vocación por inventar
                nuevas formas de hacer las cosas y un talento ( a veces
                controversial ) para ver el mundo desde otras perspectivas.
              </p>
            </div>
          </div>
          <div className="mt-12 ml-5 md:mt-0">
            <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
              Contacto
            </h4>
            <ul className="mt-4">
              <li>
                <a
                  href="#"
                  className="text-base leading-6 text-gray-500 hover:text-gray-900"
                >
                  150 N Escuela IDA Guadalupe, <br />
                  Parque Nacional Corvovado, <br />
                  Peninsula de Osa, Costa Rica
                </a>
              </li>
              <li className="mt-4">
                <a
                  href="#"
                  className="text-base leading-6 text-gray-500 hover:text-gray-900"
                >
                  Telefono: +506 2735-1733
                </a>
              </li>
              <li className="mt-4">
                <a
                  href="#"
                  className="text-base leading-6 text-gray-500 hover:text-gray-900"
                >
                  Email: roberto@rodriguezlab.co
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base leading-6 text-gray-400 xl:text-center">
            © 2020 eFactura INC All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
