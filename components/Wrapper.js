import Head from "next/head";
import { useRouter } from "next/router";

import { Media, Angle, Form, Screenshot, Split } from "./hero";

import { SideSide, Col3, Split as SectionSplit, TwoTwo } from "./sections";

import { Quote, Large, Center as TestimonialCenter } from "./testimonials";

import { Brand } from "./stats";

import Content from "./Content";
//

import { Register } from "../apps/Map";

import react from "react";

let moduleMap = { register: Register };

const map = {
  Pagehero: {
    Media: Media,
    Angle: Angle,
    Form: Form,
    Screenshot: Screenshot,
    Split: Split,
  },
  Pagesection: {
    SideSide: SideSide,
    TwoTwo: TwoTwo,
    Col3: Col3,
    Split: SectionSplit,
  },
  Pagetestimonial: {
    Quote: Quote,
    Large: Large,
    Center: TestimonialCenter,
  },
  Pagestat: {
    Brand: Brand,
  },
  Pagecontent: {
    Content: Content,
  },
};

export default function Wrapper({ item }) {
  const Component = map[item.__typename][item.type];

  const [visibleModules, setVisibleModules] = React.useState({});

  let modules = {};

  if (item.callToAction)
    modules = {
      [item.callToAction.name]: {
        component: moduleMap[item.callToAction.name],
        props: item.callToAction.props,
      },
    };

  const onShowModule = (moduleName) => {
    setVisibleModules({ ...visibleModules, [moduleName]: true });
  };

  const onHideModule = (moduleName) => {
    setVisibleModules({ ...visibleModules, [moduleName]: false });
  };

  if (!Component) return null;

  return (
    <react.Fragment>
      {Object.keys(modules).map((key) => {
        const Module = modules[key];

        if (visibleModules[key])
          return (
            <Module.component
              {...Module.props}
              onClose={() => {
                onHideModule(key);
              }}
            />
          );
        return null;
      })}
      <Component
        onShowModule={onShowModule}
        modules={modules}
        {...item}
        {...item.props}
        bullets={item.bulletsCollection ? item.bulletsCollection.items : null}
        image={item.image ? item.image.url : null}
        video={item.video ? item.video.url : null}
      />
    </react.Fragment>
  );
}
