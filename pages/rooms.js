import Head from "next/head";
import { useRouter } from "next/router";

import Wrapper from "../components/Wrapper";

import LeftNav from "../components/nav/Left";

import Blog from "../components/grid/Cards";

import Link from "next/link";
import Layout from "../views/Layout";
import { Register } from "../apps/Map";

import TwilioVideo from "../video/Component";

import Rooms from "components/room/List";
import useVideoContext from "video/hooks/useVideoContext/useVideoContext";

import { MENU, PAGE, POSTS, ROOMS, query } from "../data/Contentful";
import { VideoProvider } from "video/components/VideoProvider";

export async function getStaticProps({ params }) {
  let pageResponse = await query(PAGE, {
    variables: { slug: "meeetings" },
  });

  let roomsResponse = await query(ROOMS, {});
  let postsResponse = await query(POSTS, {});

  let menuResponse = await query(MENU, {});

  return {
    props: {
      rooms: roomsResponse.roomCollection.items,

      posts: postsResponse.postCollection.items,
      page: pageResponse.pageCollection.items[0],
      menu: menuResponse.menuentryCollection,
    },
  };
}

export default function Meetings(props) {
  const router = useRouter();

  const [showRegister, setShowRegister] = React.useState(false);

  return (
    <Layout>
      <LeftNav posts={props.posts} menu={props.menu} />

      {props.page.componentsCollection.items.map((item) => {
        return <Wrapper item={item} />;
      })}

      <div className="container mx-auto my-14">
        <Rooms rooms={props.rooms} />
      </div>
    </Layout>
  );
}
