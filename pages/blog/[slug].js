import Head from "next/head";
import { useRouter } from "next/router";

import LeftNav from "components/nav/Left";
import Wrapper from "components/Wrapper";

import Layout from "views/Layout";
//import TwilioVideo from "../../video/Component";

import { MENU, POST, POSTS, query } from "data/Contentful";

//
//
export async function getStaticPaths() {
  let pageResponse = await query(POSTS, {});

  let paths = [];
  pageResponse.postCollection.items.forEach((item) => {
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
  let postsResponse = await query(POSTS, {});

  let pageResponse = await query(POST, {
    variables: { slug: params.slug },
  });

  let menuResponse = await query(MENU, {});

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts: postsResponse.postCollection.items,
      post: pageResponse.postCollection.items[0],
      menu: menuResponse.menuentryCollection,
    },
  };
}

export default function Blog(props) {
  const router = useRouter();
  console.log(props);
  return (
    <Layout>
      <LeftNav posts={props.posts} menu={props.menu} />

      {props.post.componentsCollection.items.map((item) => {
        return <Wrapper parent={props.post} item={item} />;
      })}

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
