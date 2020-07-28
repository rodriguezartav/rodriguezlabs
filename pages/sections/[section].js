import Head from "next/head";
import { useRouter } from "next/router";

import LeftNav from "../../components/nav/Left";
import Wrapper from "../../components/Wrapper";

import Blog from "../../components/blog/ThreeCard";

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

  let menuResponse = await query(MENU, {});

  return {
    props: {
      section: sectionResponse.sectionCollection.items[0],
      menu: menuResponse.menuentryCollection,
    },
  };
}

export default function Home(props) {
  const router = useRouter();

  console.log(props);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LeftNav menu={props.menu} />

      {props.section.componentsCollection.items.map((item) => {
        return <Wrapper item={item} />;
      })}

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
    </div>
  );
}
