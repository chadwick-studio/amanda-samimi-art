import { createClient } from "@sanity/client";
const client = createClient({
  projectId: "0qqw8usd",
  dataset: "production",
  useCdn: false,
  // set to `true` to fetch from edge cache
  apiVersion: "2023-03-12"
  // use current date (YYYY-MM-DD) to target the latest API version
});
async function load({}) {
  const filter = `*[_type == "artwork"] | order(orderRank) {title, medium, image, video, height, width, year}`;
  const query = filter;
  const data = await client.fetch(query);
  if (data) {
    return {
      galleryItems: data
    };
  }
  return {
    status: 500,
    body: new Error("Internal Server Error")
  };
}
export {
  load
};
