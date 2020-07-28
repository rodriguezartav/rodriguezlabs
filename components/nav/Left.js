import React, { useState } from "react";

import Transition from "../utils/Transition.js";
import Link from "next/link";

export default function Left(props) {
  const [entry, setEntry] = useState();

  //const menu = menuentryCollection.items;

  //menuCategoriesCollection;

  //menuLinksCollection;

  //sys;

  //menu.menuentryCollection.items[0].menuCategoriesCollection.items[1]
  // .menuLinksCollection.items[0].page.sys.id;

  const renderEntry = (currentEntry) => {
    return (
      <button
        onClick={() => {
          setEntry(entry ? null : currentEntry);
        }}
        type="button"
        className="text-gray-500 group inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
      >
        <span>{currentEntry.title}</span>
        {/* Item active: "text-gray-600", Item inactive: "text-gray-400" */}
        <svg
          className={`text-gray-${
            currentEntry ? "600" : "400"
          } h-5 w-5 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    );
  };

  const renderEntryMenu = () => {
    if (!entry) return <div></div>;
    return (
      <div className="absolute inset-x-0 transform shadow-lg">
        <div className="absolute inset-0 flex">
          <div className="bg-white w-1/2" />
          <div className="bg-gray-50 w-1/2" />
        </div>
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
          <nav className="grid row-gap-10 px-4 py-8 bg-white sm:grid-cols-2 sm:col-gap-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
            {entry.menuCategoriesCollection.items.map((category) => {
              return (
                <div className="space-y-5">
                  <h3 className="text-sm leading-5 font-medium tracking-wide text-gray-500 uppercase">
                    {category.title}
                  </h3>
                  <ul className="space-y-6">
                    {category.menuLinksCollection.items.map((link) => {
                      return (
                        <li className="flow-root">
                          <a
                            href="#"
                            className="-m-3 p-3 flex items-center space-x-4 rounded-md text-base leading-6 font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150"
                          >
                            <svg
                              className="flex-shrink-0 h-6 w-6 text-gray-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span>
                              {link.page && (
                                <Link
                                  href={`/sections/${link.page.section.slug}/${link.page.slug}`}
                                >
                                  <a>{link.title}</a>
                                </Link>
                              )}
                              {link.section && (
                                <Link href={`/sections/${link.section.slug}`}>
                                  <a>{link.title}</a>
                                </Link>
                              )}
                            </span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </nav>
          <div className="space-y-6 bg-gray-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
            <div className="space-y-6">
              <h3 className="text-sm leading-5 font-medium tracking-wide text-gray-500 uppercase">
                From the blog
              </h3>
              <ul className="space-y-6">
                <li className="flow-root">
                  <a
                    href="#"
                    className="-m-3 p-3 flex rounded-lg hover:bg-gray-100 transition ease-in-out duration-150 sm:space-x-8"
                  >
                    <div className="hidden sm:block flex-shrink-0">
                      <img
                        className="w-32 h-20 object-cover rounded-md"
                        src="https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80"
                        alt
                      />
                    </div>
                    <div className="space-y-1 min-w-0 flex-1">
                      <h4 className="text-base leading-6 font-medium text-gray-900 truncate">
                        Boost your conversion rate
                      </h4>
                      <p className="text-sm leading-5 text-gray-500">
                        Eget ullamcorper ac ut vulputate fames nec mattis
                        pellentesque elementum. Viverra tempor id mus.
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-sm leading-5 font-medium">
              <a
                href="#"
                className="text-red-600 hover:text-red-500 transition ease-in-out duration-150"
              >
                View all posts →
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="z-20 relative">
      <div className="relative z-10 bg-white shadow">
        <div
          className={`text-gray-${
            entry ? "900" : "500"
          } flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10`}
        >
          {/* Item active: "text-gray-900", Item inactive: "text-gray-500" */}

          <div>
            <a href="/" className="flex">
              <img
                className="h-8 w-auto sm:h-10"
                src="/logo.png"
                alt="Workflow"
              />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {props.menu.items.map((entry) => {
            return renderEntry(entry);
          })}
        </div>
      </div>

      <Transition show={entry != null}>
        <div>
          <Transition
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 -translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-1"
          >
            {renderEntryMenu()}
          </Transition>
        </div>
      </Transition>
    </div>
  );
}
