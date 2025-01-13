import type { MarkdownPost, MarkdownPosts } from "../../../types";
import { json, type RequestHandler } from "@sveltejs/kit";

// Load all markdown files under the `/src/posts` directory and its subdirectories
const markdownPostModules = import.meta.glob('/src/posts/**/*.md', { eager: true }) as Record<string, MarkdownPost>;

const loadPostsByCategory = async (category: string, subCategories: string[] = []): Promise<MarkdownPosts> => {
  try {
    console.log("Loading posts for category:", category);
    console.log("Subcategories:", subCategories);

    const basePath = `/src/posts/${category}`;
    const nestedPath = subCategories.length
      ? `${basePath}/${subCategories.join('/')}`
      : basePath;

    console.log("Base path:", basePath);
    console.log("Nested path:", nestedPath);

    const posts: MarkdownPost[] = [];

    for (const path in markdownPostModules) {
      // Only include posts that match the category and subcategories
      if (path.startsWith(nestedPath)) {
        console.log("Matching file path:", path);
        const markdownPostModule = markdownPostModules[path];

        // Extract slug from the file path
        const slug = path
          .slice(path.lastIndexOf("/") + 1)
          .replace(".md", "");

        posts.push({
          metadata: markdownPostModule.metadata,
          default: markdownPostModule.default,
        });
      }
    }

    // Sort posts by published date
    const sortedPosts = posts.sort((post1, post2) => {
      return (
        new Date(post2.metadata.publishedAt).getTime() -
        new Date(post1.metadata.publishedAt).getTime()
      );
    });

    console.log("Loaded and sorted posts count:", sortedPosts.length);

    return { slug: category, posts: sortedPosts };
  } catch (err) {
    console.error("Error while loading posts:", err.message);
    throw new Error("Failed to load posts.");
  }
};

export const GET: RequestHandler = async ({ params }) => {
  try {
    const { category, subCategory = "" } = params;

    if (!category) {
      console.error("No category provided in parameters.");
      return json({ error: "Category is required." }, { status: 400 });
    }

    console.log("Category:", category);
    console.log("Subcategory:", subCategory);

    const subCategories = subCategory ? subCategory.split("/") : []; // Split subcategories if nested

    // Load posts for the category and subcategories
    const categoryPosts = await loadPostsByCategory(category, subCategories);

    console.log(`Returning posts for category: ${category}`);
    return json(categoryPosts);
  } catch (err) {
    console.error("Error in GET handler:", err.message);
    return json({ error: "Failed to load posts." }, { status: 500 });
  }
};
