import Head from "next/head";
import { useRouter } from "next/router";

import Wrapper from "../components/Wrapper";

import LeftNav from "../components/nav/Left";

import Blog from "../components/grid/Cards";

import Link from "next/link";

import { Register } from "../apps/Map";

import { MENU, PAGE, STATIC_PAGES, query } from "../data/Contentful";

export async function getStaticProps({ params }) {
  let pageResponse = await query(PAGE, {
    variables: { slug: "home" },
  });

  let sectionsResponse = await query(STATIC_PAGES, {});

  let menuResponse = await query(MENU, {});

  return {
    props: {
      sections: sectionsResponse.sectionCollection.items,
      page: pageResponse.pageCollection.items[0],
      menu: menuResponse.menuentryCollection,
    },
  };
}

export default function Home(props) {
  const router = useRouter();

  const [showRegister, setShowRegister] = React.useState(false);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LeftNav menu={props.menu} />

      {props.page.componentsCollection.items.map((item) => {
        return <Wrapper item={item} />;
      })}

      <div className="container mx-auto my-14">
        <Blog
          title=""
          text=""
          items={props.sections}
          renderer={(item) => {
            return (
              <li className="col-span-1 flex flex-col bg-white rounded-lg shadow">
                <div className="w-full flex items-center justify-between p-6 space-x-6">
                  <div className="flex-1 ">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-gray-900 text-sm leading-5 font-medium ">
                        {item.title}
                      </h3>
                      <span className="flex-shrink-0  inline-block px-2 py-0.5 text-teal-800 text-xs leading-4 font-medium bg-teal-100 rounded-full">
                        Patent Pending
                      </span>
                    </div>
                    <p className="mt-1 text-gray-500 text-sm leading-5 ">
                      {item.text}
                    </p>
                  </div>
                </div>

                <div className=" flex-grow w-full   justify-between px-6 pb-4 ">
                  {item.pagesCollection.items.map((page) => {
                    return (
                      <p className="mt-1 text-gray-500  text-sm leading-5 ">
                        {page.title}
                      </p>
                    );
                  })}
                </div>
                <div className="border-t border-gray-200">
                  <div className="-mt-px flex">
                    <div className="w-0 flex-1 flex border-r  bg-red-600 border-gray-200">
                      <a
                        onClick={() => {
                          setShowRegister(item.slug);
                        }}
                        className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-white font-medium border border-transparent rounded-bl-lg hover:text-gray-50 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
                      >
                        <span className="ml-3">Solicitar Acceso</span>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            );
          }}
        />
      </div>

      {showRegister && (
        <Register
          onClose={() => setShowRegister(false)}
          redirect={[`/sections/[section]`, `/sections/${showRegister}`]}
        />
      )}
    </div>
  );
}
