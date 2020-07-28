import Head from "next/head";
import { useRouter } from "next/router";

import LeftNav from "components/nav/Left";
import Wrapper from "components/Wrapper";

import Blog from "components/blog/ThreeCard";

import { MENU, SECTIONS, PAGE, STATIC_PAGES, query } from "data/Contentful";
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

  let pageResponse = await query(PAGE, {
    variables: { slug: params.slug },
  });

  let menuResponse = await query(MENU, {});

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      page: pageResponse.pageCollection.items[0],
      menu: menuResponse.menuentryCollection,
    },
  };
}

export default function Home(props) {
  const router = useRouter();

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
    </div>
  );
}
