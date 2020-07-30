import Head from "next/head";
import { useRouter } from "next/router";

import Wrapper from "../components/Wrapper";

import LeftNav from "../components/nav/Left";

import Blog from "../components/grid/Cards";

import Link from "next/link";
import Layout from "../views/Layout";
import { Register } from "../apps/Map";

import { MENU, PAGE, STATIC_PAGES, POSTS, query } from "../data/Contentful";

export async function getStaticProps({ params }) {
  let postsResponse = await query(POSTS, {});

  let pageResponse = await query(PAGE, {
    variables: { slug: "blog" },
  });

  let sectionsResponse = await query(STATIC_PAGES, {});

  let menuResponse = await query(MENU, {});

  return {
    props: {
      posts: postsResponse.postCollection.items,
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
    <Layout>
      <LeftNav posts={props.posts} menu={props.menu} />

      {props.page.componentsCollection.items.map((item) => {
        return <Wrapper item={item} />;
      })}

      <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-lg mx-auto lg:max-w-7xl">
          <div>
            <p className="mt-3 text-xl leading-7 text-gray-500 sm:mt-4">
              Aqui se publican comentarios, ideas, pensamientos y noticias de
              toda indole con el objetivo de comprender otras formas de pensar;
              no trate de identificar las alineaciones de RodriguezLab basado en
              el contenido del Blog - simplemente no tenemos alineaciones mas
              que con la busqueda de lo mas cercano a la verdad.
            </p>
          </div>
          <div className="mt-0 grid gap-6  border-t-2 border-gray-100 pt-12 lg:grid-cols-1 lg:col-gap-5 lg:row-gap-6">
            {props.posts.map((item) => {
              return (
                <Link href="/blog/[slug]" as={`/blog/${item.slug}`}>
                  <div className="hover:bg-gray-100 p-2">
                    <div>
                      <a href="#" className="inline-block">
                        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-indigo-100 text-indigo-800">
                          {item.tags}
                        </span>
                      </a>
                    </div>
                    <a href="#" className="block">
                      <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-base leading-6 text-gray-500">
                        {item.text}
                      </p>
                      {item.preTitle && (
                        <p className="mt-0 text-base leading-6 text-gray-400">
                          {item.preTitle}
                        </p>
                      )}
                    </a>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mt-12 grid gap-16  border-t-2 border-gray-100 pt-12 lg:grid-cols-3 lg:col-gap-5 lg:row-gap-12"></div>
      </div>
    </Layout>
  );
}
