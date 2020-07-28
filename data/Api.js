export async function query(route, body) {
  // Call an external API endpoint to get posts

  try {
    // Fetch data and remember product id

    const response = await fetch(
      `https://rodriguezlabs-api.herokuapp.com/${route}`,
      {
        headers: {
          accept: "application/json",
          "accept-language": "en-US,en;q=0.9,es;q=0.8",
          authorization: "Bearer undefined",
          "content-type": "application/json",
        },
        body: JSON.stringify(body),
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
