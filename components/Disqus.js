import React from "react";
import { DiscussionEmbed } from "disqus-react";

export default function Disqus(props) {
  if (typeof window === "undefined") return null;
  return (
    <React.Fragment>
      <div className="mx-auto max-w-4xl ">
        <div id="disqus_thread">{""}</div>
      </div>

      <DiscussionEmbed
        shortname="rodriguezlab"
        config={{
          url: window.location.href,
          identifier: props.id,
          title: props.title || "",
          language: "es_CR", //e.g. for Traditional Chinese (Taiwan)
        }}
      />
    </React.Fragment>
  );
}
