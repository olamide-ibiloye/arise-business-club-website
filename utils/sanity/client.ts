import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "s1xppzmq",
  dataset: "production",
  apiVersion: "2024-03-11",
  // Set to `true` for production environments
  useCdn: false,
});

export const urlFor = (source: any) => {
  const builder = imageUrlBuilder(client);

  return builder.image(source);
};
