import type { MarkdownPost, MarkdownPostMetadataAndSlug } from "../../../types";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params, fetch }) => {
  const slug = params.path;

  try {
    // Fetch posts from an API endpoint
    const response = await fetch(`/api/posts/${slug}`);
    console.log(slug)
    // Ensure response is valid
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const posts: MarkdownPostMetadataAndSlug[] = await response.json();

    console.log(posts);

    return {
      posts, // Return the list of posts
    };
  } catch (err) {
    console.error("Error loading posts:", err);
    return { error: "Failed to load posts" };
  }

  // If a slug is provided, load a single post
//   if (slug) {
//     try {
//       // Dynamically import the markdown file for a single post
//       const markdownPost: MarkdownPost = await import(
//         `../../../../posts/${slug}.md`
//       );

//       if(markdownPost){
//         return {
//             metadata: markdownPost.metadata,
//             posts: markdownPost.default,
//           };
//       }

      

//     } catch (err) {
//       console.error("Error loading post:", err);
//       return { error: "Post not found" };
//     }
//   }
};
