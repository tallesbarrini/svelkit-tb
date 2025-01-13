import type { ComponentType } from "svelte";

export type MarkdownPost = {
  metadata: {
    title: string;
    imgUrl: string;
    youtubeId?: string;
    publishedAt: string;
    summary: string;
  };
  default: ComponentType;
};

export type MarkdownPostMetadataAndSlug = {
  slug: string;
  metadata: MarkdownPost["metadata"];
};

export type MarkdownPosts = {
  slug: string;
  posts: MarkdownPost[]; // Array of MarkdownPost
};
