import React from "react";

export default function Brand(props) {
  return (
    <div className="bg-red-700 mb-10 lg:mb-0 md:mb-0">
      <div className="max-w-screen-xl sm:mb-8 mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10">
            {props.title}
          </h2>
          <p className="mt-3 text-xl leading-7 text-red-200 sm:mt-4">
            {props.text}
          </p>
        </div>

        {props.bullets.length > 0 && (
          <dl
            className={`mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-${props.bullets.length} sm:gap-8`}
          >
            {props.bullets.map((item) => {
              return (
                <div className="flex flex-col mb-10 md:mb-0 lg:mb-0">
                  <dt className=" uppercase order-2 mt-2 text-lg leading-6 font-medium text-red-200">
                    {item.text}
                  </dt>
                  <dd className="  order-1 text-5xl leading-none font-extrabold text-white">
                    {item.title}
                  </dd>
                </div>
              );
            })}
          </dl>
        )}
      </div>
    </div>
  );
}
