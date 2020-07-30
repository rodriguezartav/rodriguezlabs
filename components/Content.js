import React from "react";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { BLOCKS, MARKS } from "@contentful/rich-text-types";

const Bold = ({ children }) => <span className="bold">{children}</span>;

const Text = ({ children }) => <p className="  mb-5">{children}</p>;

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.QUOTE]: (node, children) => <blockquote>{children}</blockquote>,
  },
};

export default function Content(props) {
  return (
    <div className="relative py-16 bg-white overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full"></div>

      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg text-gray-600 mx-auto">
          {documentToReactComponents(props.content.json, options)}
        </div>
      </div>
    </div>
  );
}
