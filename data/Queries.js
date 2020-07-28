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

export const SECTIONS = /* GraphQL */ `
  query {
    items {
      title
      slug

      componentsCollection(limit: 10) {
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
              text
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
`;

export const SECTION = /* GraphQL */ `
  query($slug: String!) {
    sectionCollection(limit: 1, where: { slug: $slug }) {
      items {
        title
        slug

        componentsCollection(limit: 10) {
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
                text
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

export const PAGE = /* GraphQL */ `
  query($slug: String!) {
    pageCollection(limit: 1, where: { slug: $slug }) {
      items {
        title

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
