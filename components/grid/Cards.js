import React from "react";
import Link from "next/link";

export default function Cards(props) {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {props.items.map((item) => {
        if (props.renderer) return props.renderer(item);
        return (
          <li className="col-span-1 bg-white rounded-lg shadow">
            <div className="w-full flex items-center justify-between p-6 space-x-6">
              <div className="flex-1 truncate">
                <div className="flex items-center space-x-3">
                  <h3 className="text-gray-900 text-sm leading-5 font-medium truncate">
                    {item.title}
                  </h3>
                  <span className="flex-shrink-0 inline-block px-2 py-0.5 text-teal-800 text-xs leading-4 font-medium bg-teal-100 rounded-full">
                    Admin
                  </span>
                </div>
                {item.pagesCollection.items.map((page) => {
                  return (
                    <p className="mt-1 text-gray-500 text-sm leading-5 truncate">
                      {page.title}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="border-t border-gray-200">
              <div className="-mt-px flex">
                <div className="w-0 flex-1 flex border-r  bg-red-600 border-gray-200">
                  <Link
                    href="/sections/[section]"
                    as={`/sections/${item.slug}`}
                  >
                    <a className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-white font-medium border border-transparent rounded-bl-lg hover:text-gray-50 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150">
                      <span className="ml-3">Ingresar</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
