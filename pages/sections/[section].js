import Head from "next/head";
import { useRouter } from "next/router";

import LeftNav from "../../components/nav/Left";
import Wrapper from "../../components/Wrapper";

import Link from "next/link";

import Blog from "../../components/blog/ThreeCard";
import Layout from "../../views/Layout";
import { MENU, STATIC_PAGES, SECTION, query } from "../../data/Contentful";

export async function getStaticPaths() {
  let pageResponse = await query(STATIC_PAGES, {});

  let paths = [];
  pageResponse.sectionCollection.items.forEach((item) => {
    paths.push({ section: item.slug });
  });

  return {
    paths: paths.map((path) => {
      return { params: path };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  let sectionResponse = await query(SECTION, {
    variables: { slug: params.section },
  });
  let postsResponse = await query(POSTS, {});

  let menuResponse = await query(MENU, {});

  return {
    props: {
      posts: postsResponse.postCollection.items,

      section: sectionResponse.sectionCollection.items[0],
      menu: menuResponse.menuentryCollection,
    },
  };
}

export default function Home(props) {
  const router = useRouter();

  console.log(props);
  return (
    <Layout>
      <LeftNav posts={props.posts} menu={props.menu} />

      {props.section.componentsCollection.items.map((item) => {
        return <Wrapper item={item} />;
      })}

      {props.section.pagesCollection.items &&
        props.section.pagesCollection.items.length > 0 && (
          <div className="my-20 mx-auto w-48 ">
            <span className="inline-flex rounded-md shadow-sm">
              <Link
                href="/sections/[section]/pages/[slug]"
                as={`/sections/${props.section.slug}/pages/${props.section.pagesCollection.items[0].slug}`}
              >
                <button
                  type="button"
                  className="inline-flex  items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-700 transition ease-in-out duration-150"
                >
                  Primer Capítulo
                </button>
              </Link>
            </span>
          </div>
        )}

      {/*
      <Blog
        onClick={(item) => {
          return () => {
            router.push(
              `/sections/[section]/pages/[slug]`,
              `/sections/${props.section.slug}/pages/${item.slug}`
            );
          };
        }}
        title="Capítulos"
        text=""
        items={props.section.pagesCollection.items}
      />
*/}
    </Layout>
  );
}
