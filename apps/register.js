import React, { useState } from "react";
import { useRouter } from "next/router";

import SlideOver from "../components/slideOver/Brand";

import {
  useGlobalDispatch,
  useGlobalState,
  useNotify,
} from "../data/Visitor/Context";
import { registerVisitor } from "../data/Visitor/Actions";

export default function register(props) {
  const router = useRouter();
  const [notify] = useNotify();
  const dispatch = useGlobalDispatch();
  const state = useGlobalState();

  const [visitor, setVisitor] = React.useState(state.visitor);

  const onRegister = async () => {
    try {
      if (!visitor.name || visitor.name.lenght < 2)
        return notify("Ingrese su nombre y apellido completo para continuar");

      await registerVisitor(dispatch, visitor);
      if (props.redirect && Array.isArray(props.redirect))
        router.push(props.redirect[0], props.redirect[1]);
      else if (props.redirect) router.push(props.redirect);
    } catch (e) {
      console.log(e);
      return notify("Ocurrio un error guardando la información");
    }
  };

  return (
    <SlideOver {...props}>
      <div className="w-screen max-w-md">
        <div className="h-full divide-y divide-gray-200 flex flex-col bg-white shadow-xl">
          <div className="flex-1 h-0 overflow-y-auto">
            <header className="space-y-1 py-6 px-4 bg-red-700 sm:px-6">
              <div className="flex items-center justify-between space-x-3">
                <h2 className="text-lg leading-7 font-medium text-white">
                  Registro de Visitantes
                </h2>
                <div className="h-7 flex items-center">
                  <button
                    onClick={props.onClose}
                    aria-label="Close panel"
                    className="text-red-200 hover:text-white transition ease-in-out duration-150"
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
                <p className="text-sm leading-5 text-red-300">
                  Le pedimos registrarse para llevar un control de nuestra
                  propiedad intelectual.
                </p>
              </div>
            </header>
            <div className="flex-1 flex flex-col justify-between">
              <div className="px-4 divide-y divide-gray-200 sm:px-6">
                <div className="space-y-6 pt-6 pb-5">
                  <div className="space-y-1">
                    <label
                      htmlFor="project_name"
                      className="block text-sm font-medium leading-5 text-gray-900"
                    >
                      Nombre
                    </label>
                    <div className="relative rounded-md shadow-sm">
                      <input
                        value={visitor.name}
                        onChange={(e) => {
                          setVisitor({
                            ...visitor,
                            name: e.currentTarget.value,
                          });
                        }}
                        id="project_name"
                        className="form-input block w-full sm:text-sm sm:leading-5 transition ease-in-out duration-150"
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-4 pt-4 pb-6">
                  <div className="flex text-sm leading-5 text-red-600">
                    <span>Terminos y Condiciones</span>
                  </div>
                  <div className="flex text-sm leading-5">
                    <a
                      href="#"
                      className="group space-x-2 inline-flex items-center text-gray-500 hover:text-gray-900 transition ease-in-out duration-150"
                    >
                      <svg
                        className="h-5 w-5 text-red-500 group-hover:text-red-400 transition ease-in-out duration-150"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        Se solicita siempre hacer referencia a la propiedad
                        intelectual de Rodríguez Labs
                      </span>
                    </a>
                  </div>
                  <div className="flex text-sm leading-5">
                    <a
                      href="#"
                      className="group space-x-2 inline-flex items-center text-gray-500 hover:text-gray-900 transition ease-in-out duration-150"
                    >
                      <svg
                        className="h-5 w-5 text-orange-500 group-hover:text-red-400 transition ease-in-out duration-150"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        La propiedad intelectual es compartida en este sitio
                        bajo acuerdo de que su uso o reproducción total o
                        parcial esta sujeta a licenciamiento comercial.
                      </span>
                    </a>
                  </div>

                  <div className="flex text-sm leading-5">
                    <a
                      href="#"
                      className="group space-x-2 inline-flex items-center text-gray-500 hover:text-gray-900 transition ease-in-out duration-150"
                    >
                      <svg
                        className="h-5 w-5 text-orange-500 group-hover:text-red-400 transition ease-in-out duration-150"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        Al dar click en Ingresar usamos su IP y nombre como
                        metodo vinculante de aceptación de las condiciones aquí
                        establecidas.
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 px-4 py-4 space-x-4 flex justify-end">
            <span className="inline-flex rounded-md shadow-sm">
              <button
                onClick={onRegister}
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-700 transition duration-150 ease-in-out"
              >
                Ingresar
              </button>
            </span>
          </div>
        </div>
      </div>
    </SlideOver>
  );
}
