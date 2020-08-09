//
//
// aaa

export const MENU = /* GraphQL */ `
  query {
    menuentryCollection(limit: 10) {
      items {
        title
        menuCategoriesCollection(limit: 10) {
          items {
            title
            menuLinksCollection(limit: 10) {
              items {
                title
                section {
                  title
                  slug
                }
                page {
                  title
                  sys {
                    id
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const STATIC_PAGES = /* GraphQL */ `
  query {
    sectionCollection {
      items {
        title
        slug
        text
        pagesCollection(limit: 50) {
          items {
            title
            slug
          }
        }
      }
    }
  }
`;

export const ROOMS = /* GraphQL */ `
  query {
    roomCollection(limit: 20) {
      items {
        title
        slug
        type
      }
    }
  }
`;

export const ROOM = /* GraphQL */ `
  query($slug: String!) {
    roomCollection(limit: 1, where: { slug: $slug }) {
      items {
        title
        slug
        type
      }
    }
  }
`;

export const SECTIONS = /* GraphQL */ `
  query {
    items {
      title
      slug
      text
      componentsCollection(limit: 25) {
        ... on SectionComponentsCollection {
          items {
            __typename
            ... on Pagesection {
              title
              text
              props
              image {
                url
              }
              mainBullet {
                ... on Bullet {
                  title
                  text
                  icon {
                    url
                  }
                }
              }
              type
              bulletsCollection(limit: 4) {
                items {
                  ... on Bullet {
                    title
                    text
                    icon {
                      url
                    }
                  }
                }
              }
            }

            ... on Pagecontent {
              title
              type
              content {
                json
              }
            }
            ... on Pagestat {
              title
              text
              type
              bulletsCollection(limit: 4) {
                items {
                  ... on Bullet {
                    title
                    text
                  }
                }
              }
            }
            ... on Pagehero {
              overTitle
              text
              titleBlack
              titleColor
              type
              video {
                url
              }
              image {
                url
              }
            }
          }
        }
      }

      pagesCollection(limit: 10) {
        items {
          title
          slug
        }
      }
    }
  }
`;

export const SECTION = /* GraphQL */ `
  query($slug: String!) {
    sectionCollection(limit: 1, where: { slug: $slug }) {
      items {
        title
        slug
        text
        componentsCollection(limit: 20) {
          ... on SectionComponentsCollection {
            items {
              __typename
              ... on Pagesection {
                title
                text
                props
                image {
                  url
                }
                mainBullet {
                  ... on Bullet {
                    title
                    text
                    icon {
                      url
                    }
                  }
                }
                type
                bulletsCollection(limit: 4) {
                  items {
                    ... on Bullet {
                      title
                      text
                      icon {
                        url
                      }
                    }
                  }
                }
              }

              ... on Pagestat {
                title
                text
                type
                bulletsCollection(limit: 4) {
                  items {
                    ... on Bullet {
                      title
                      text
                    }
                  }
                }
              }

              ... on Pagecontent {
                title
                type
                content {
                  json
                }
              }
              ... on Pagehero {
                overTitle
                text
                titleBlack
                titleColor
                type
                video {
                  url
                }
                image {
                  url
                }
              }
            }
          }
        }

        pagesCollection(limit: 10) {
          items {
            title
            slug
          }
        }
      }
    }
  }
`;

export const POSTS = /* GraphQL */ `
  query {
    postCollection(limit: 20) {
      items {
        title
        slug
        text
        tags
        preTitle
        image {
          url
        }
      }
    }
  }
`;

export const POST = /* GraphQL */ `
  query($slug: String!) {
    postCollection(limit: 1, where: { slug: $slug }) {
      items {
        title
        slug
        text
        tags
        preTitle
        sys {
          publishedAt
        }
        image {
          url
        }
        componentsCollection(limit: 10) {
          ... on PostComponentsCollection {
            items {
              __typename

              ... on Pagesection {
                title
                text
                props
                image {
                  url
                }
                mainBullet {
                  ... on Bullet {
                    title
                    text
                    icon {
                      url
                    }
                  }
                }
                type
                bulletsCollection(limit: 4) {
                  items {
                    ... on Bullet {
                      title
                      text
                      icon {
                        url
                      }
                    }
                  }
                }
              }

              ... on Pagecontent {
                title
                type
                content {
                  json
                }
              }
              ... on Pagehero {
                overTitle
                text
                titleBlack
                titleColor
                type
                video {
                  url
                }
                image {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const PAGE = /* GraphQL */ `
  query($slug: String!) {
    pageCollection(limit: 1, where: { slug: $slug }) {
      items {
        title
        nextPage {
          slug
        }
        linkedFrom {
          sectionCollection(limit: 1) {
            items {
              slug
              title
              text
              pagesCollection(limit: 5) {
                items {
                  title
                  slug
                }
              }
            }
          }
        }

        componentsCollection(limit: 14) {
          ... on PageComponentsCollection {
            items {
              __typename
              ... on Pagetestimonial {
                title
                text
                type
                source
              }
              ... on Pagestat {
                title
                text
                type
                bulletsCollection(limit: 4) {
                  items {
                    ... on Bullet {
                      title
                      text
                    }
                  }
                }
              }
              ... on Pagesection {
                title
                text
                props
                image {
                  url
                }
                mainBullet {
                  ... on Bullet {
                    title
                    text
                    icon {
                      url
                    }
                  }
                }
                type
                bulletsCollection(limit: 4) {
                  items {
                    ... on Bullet {
                      title
                      text
                      icon {
                        url
                      }
                    }
                  }
                }
              }
              ... on Pagehero {
                overTitle
                text
                titleBlack
                titleColor
                type
                callToAction {
                  title
                  name
                  props
                }
                video {
                  url
                }
                image {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;

//
