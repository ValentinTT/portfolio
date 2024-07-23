import { getCollection } from "astro:content";
import { collections } from "./config";

/**
 * Returns all unique values from a collection for a given field
 * @param {string} type - The type of collection such as "blog"
 * @param {string} term - The field to get such as "tags" or "author"
 * @returns {Array<Object>}
 */
export const getTaxonomy = async (
  type: keyof typeof collections,
  term: string
) => {
  // Call our custom getCollection() function from src/content/utils.js
  const items = await getCollection(type);

  // Start reducing the array of blog posts into a Map where the value is the count
  const taxonomy = items.reduce((acc, item) => {
    // We want to support both array and reference fields, i.e. both:
    // tags: ["tag 1", "tag 2"]
    // author: "houston"
    // So we're going to convert either of those into an array of values
    const values = [];

    if (Array.isArray((item.data as any)[term])) {
      values.push(...(item.data as any)[term]);
    } else if ((item.data as any)[term]?.slug) {
      values.push((item.data as any)[term].slug);
    }

    // Loop through each value and increment the count by one
    for (let value of values) {
      const count = acc.get(value) || 0;
      acc.set(value, count + 1);
    }

    // Return our accumulator
    return acc;
  }, new Map());

  // On dev, make sure we have these tags even if there are no posts with them set
  // This is so if we go to /tags/drafts/ when there are no draft posts, we won't 404
  if (term === "tags" && import.meta.env.MODE == "development") {
    if (!taxonomy.has("Drafts")) {
      taxonomy.set("Drafts", 0);
    }
    if (!taxonomy.has("Scheduled")) {
      taxonomy.set("Scheduled", 0);
    }
  }

  // Convert the Map to an array of object and sort by count
  return Array.from(taxonomy, ([value, count]) => ({ value, count })).sort(
    (a, b) => b.count - a.count
  );
};
