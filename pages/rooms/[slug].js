import Head from "next/head";
import { useRouter } from "next/router";

import LeftNav from "components/nav/Left";
import Wrapper from "components/Wrapper";

import Layout from "views/Layout";

import Room from "components/room/Home";

import { MENU, ROOM, ROOMS, query } from "data/Contentful";
import { useGlobalState } from "data/Visitor/Context";

//
//
export async function getStaticPaths() {
  let pageResponse = await query(ROOMS, {});

  let paths = [];
  pageResponse.roomCollection.items.forEach((item) => {
    paths.push({ slug: item.slug });
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

  let roomResponse = await query(ROOM, {
    variables: { slug: params.slug },
  });

  let menuResponse = await query(MENU, {});

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      room: roomResponse.roomCollection.items[0],
      menu: menuResponse.menuentryCollection,
    },
  };
}

export default function RoomView(props) {
  const { video } = useGlobalState();

  return (
    <Layout>
      {typeof window !== undefined && <Room />}
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
