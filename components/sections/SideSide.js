import React from "react";
import PropTypes from "prop-types";

export default function SideSide(props) {
  const renderBullets = () => {
    return (
      <ul className="mt-0">
        {props.side == "left" ? renderMainBullet() : null}
        {props.bullets.map((item) => {
          return (
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
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-lg leading-6 font-medium text-gray-900">
                    {item.title}
                  </h5>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    {item.text}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
        {props.side != "left" ? renderMainBullet() : null}
      </ul>
    );
  };

  const renderMainBullet = () => {
    if (!props.mainBullet) return null;
    return (
      <li className="mt-8">
        <div className="flex">
          <div className="flex-shrink-0"></div>
          <div className="ml-0">
            <h5 className="text-2xl leading-6 font-medium text-gray-900">
              {props.mainBullet.title}
            </h5>
            <p className="mt-2 text-lg  leading-6 text-gray-500">
              {props.mainBullet.text}
            </p>
          </div>
        </div>
      </li>
    );
  };

  const renderMainTitle = () => {
    if (!props.title) return null;
    return (
      <div className="relative">
        <h3 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          {props.title}
        </h3>
        <p className="mt-4 max-w-3xl mx-auto text-center text-xl leading-7 text-gray-500">
          {props.text}
        </p>
      </div>
    );
  };

  const renderImage = () => {
    return (
      <div className="mt-0 -mx-4 relative lg:mt-0">
        <svg
          className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
          width={784}
          height={404}
          fill="none"
          viewBox="0 0 784 404"
        >
          <defs>
            <pattern
              id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
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
            fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
          />
        </svg>
        <img className="relative mx-auto" width={490} src={props.image} alt />
      </div>
    );
  };

  const renderTitle = () => {
    return (
      <React.Fragment>
        <h4 className="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
          {props.summaryTitle}
        </h4>
        <p className="mt-3 text-lg leading-7 text-gray-500">
          {props.summaryText}
        </p>
      </React.Fragment>
    );
  };

  const renderDotsSvg = () => {
    let classes =
      "hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12";
    if (props.side == "left")
      classes =
        "hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4";

    return (
      <svg
        className={classes}
        width={404}
        height={784}
        fill="none"
        viewBox="0 0 404 784"
      >
        <defs>
          <pattern
            id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
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
          width={404}
          height={784}
          fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
        />
      </svg>
    );
  };

  const renderTitleAndBullets = () => {
    return (
      <div className="relative">
        {!props.inverse ? renderTitle() : renderBullets()}

        {props.inverse ? renderTitle() : renderBullets()}
      </div>
    );
  };

  return (
    <div className="pb-20 bg-gray-50 overflow-hidden  lg:pt-20">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
        {renderDotsSvg()}
        {renderMainTitle()}

        <div className="relative mt-16 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          {props.side == "left" ? renderTitleAndBullets() : renderImage()}
          {props.side == "left" ? renderImage() : renderTitleAndBullets()}
        </div>
      </div>
    </div>
  );
}

SideSide.propTypes = {
  title: PropTypes.string,
  bullets: PropTypes.array,
};
