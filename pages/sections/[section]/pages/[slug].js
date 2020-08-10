import Head from "next/head";
import { useRouter } from "next/router";

import LeftNav from "components/nav/Left";
import Wrapper from "components/Wrapper";

import Blog from "components/blog/ThreeCard";
import Layout from "views/Layout";

import {
  MENU,
  SECTIONS,
  PAGE,
  STATIC_PAGES,
  query,
  POSTS,
} from "../../../../data/Contentful";

import Link from "next/link";
//
//
export async function getStaticPaths() {
  let pageResponse = await query(STATIC_PAGES, {});

  let paths = [];
  pageResponse.sectionCollection.items.forEach((item) => {
    item.pagesCollection.items.forEach((page) => {
      paths.push({ section: item.slug, slug: page.slug });
    });
  });

  return {
    paths: paths.map((path) => {
      return { params: path };
    }),
    fallback: false, // See the "fallback" section below
  };
}

export async function getStaticProps({ params }) {
  // Call an external API endpoint to get posts
  let postsResponse = await query(POSTS, {});

  let pageResponse = await query(PAGE, {
    variables: { slug: params.slug },
  });

  let menuResponse = await query(MENU, {});

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts: postsResponse.postCollection.items,
      page: pageResponse.pageCollection.items[0],
      menu: menuResponse.menuentryCollection,
    },
  };
}

export default function Home(props) {
  const router = useRouter();

  return (
    <Layout
      title={props.page.title}
      image={props.page.image}
      text={props.page.text}
      slug={props.page.slug}
    >
      <LeftNav posts={props.posts} menu={props.menu} />
      {props.page.componentsCollection.items.map((item) => {
        return <Wrapper item={item} />;
      })}

      {props.page.nextPage && (
        <div className="my-20 mx-auto w-48 ">
          <span className="inline-flex rounded-md shadow-sm">
            <Link
              href="/sections/[section]/pages/[slug]"
              as={`/sections/${props.page.linkedFrom.sectionCollection.items[0].slug}/pages/${props.page.nextPage.slug}`}
            >
              <button
                type="button"
                className="inline-flex  items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-700 transition ease-in-out duration-150"
              >
                Siguiente Capitulo
              </button>
            </Link>
          </span>
        </div>
      )}
      {/*
      <Blog
        onClick={(item) => {
          const section = props.page.linkedFrom.sectionCollection.items[0].slug;
          return () => {
            router.push(
              `/sections/[slug]/pages/[slug]`,
              `/sections/${section}/pages/${item.slug}`
            );
          };
        }}
        title={props.page.linkedFrom.sectionCollection.items[0].title}
        text={`${props.page.linkedFrom.sectionCollection.items[0].pagesCollection.items.length} capitulos`}
        items={
          props.page.linkedFrom.sectionCollection.items[0].pagesCollection.items
        }
      />
*/}
    </Layout>
  );
}
