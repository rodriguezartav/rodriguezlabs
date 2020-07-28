import React from "react";
import { useRouter } from "next/router";

export default function register(props) {
  const router = useRouter();
  const onRegister = () => {
    if (props.redirect && Array.isArray(props.redirect))
      router.push(props.redirect[0], props.redirect[1]);
    else if (props.redirect) router.push(props.redirect);
  };

  return (
    <div className="fixed inset-0 overflow-hidden z-40">
      <div className="absolute inset-0 overflow-hidden">
        <section className="absolute inset-y-0 pl-16 max-w-full right-0 flex">
          {/*
        Slide-over panel, show/hide based on slide-over state.
      
        Entering: "transform transition ease-in-out duration-500 sm:duration-700"
          From: "translate-x-full"
          To: "translate-x-0"
        Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
          From: "translate-x-0"
          To: "translate-x-full"
      */}
          {props.children}
        </section>
      </div>
    </div>
  );
}
