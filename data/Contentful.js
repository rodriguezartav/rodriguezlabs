const ACCESS_TOKEN = "ox0co3KbPh1YWbwWUi2DZm39VemmntNnj4oqBV00ZU0";
const SPACE = "0txkpt2nv3no";

import { MENU, SECTIONS, PAGE, SECTION, STATIC_PAGES } from "./Queries";

export { MENU, SECTIONS, PAGE, SECTION, STATIC_PAGES };

export async function query(query, { variables, preview }) {
  // Call an external API endpoint to get posts
  //
  try {
    // Fetch data and remember product id

    const response = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${SPACE}/environments/master?access_token=${ACCESS_TOKEN}`,
      {
        headers: {
          accept: "application/json",
          "accept-language": "en-US,en;q=0.9,es;q=0.8",
          authorization: "Bearer undefined",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          query,
          variables,
        }),
        method: "POST",
      }
    );

    const json = await response.json();
    if (json.errors) {
      console.error(json.errors);
      throw new Error("Failed to fetch API");
    }
    return json.data;
  } catch (e) {
    console.log(e);
    return {
      message: e.message || "Server Error",
      status: e.status || e.statusCode || 500,
    };
  }
}
