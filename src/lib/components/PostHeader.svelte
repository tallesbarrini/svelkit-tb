<script lang="ts">
  import type { MarkdownPost } from "../../types";
  import { formatPublishedAt } from "$lib/utils/dates";

  export let metadata: MarkdownPost["metadata"] | null = null; // Metadata is optional
  export let post: string | null = null; // The post content in HTML format
</script>

{#if metadata}
<header class="p-4">
  <!-- Media Section -->
  <div class="mb-6 w-full sm:w-3/5">
    <div class="aspect-h-9 aspect-w-16 overflow-hidden rounded-lg">
      {#if metadata.youtubeId}
        <iframe
          title={metadata.title}
          src={`https://www.youtube.com/embed/${metadata.youtubeId}?origin=http://example.com`}
          allow="fullscreen"
          class="w-full h-full"
        />
      {:else}
        <img
          src={metadata.imgUrl}
          alt={metadata.title}
          class="object-cover w-full h-full"
        />
      {/if}
    </div>
  </div>

  <!-- Title and Published Date -->
  <div>
    <h1 class="mb-4 text-4xl font-bold">
      {metadata.title}
    </h1>

    <div class="inline-block border-t py-2 dark:border-gray-700">
      <span>Published: </span>
      <time class="font-light" datetime={metadata.publishedAt}>
        {formatPublishedAt(metadata.publishedAt)}
      </time>
    </div>
  </div>
</header>
{/if}

<!-- Post Content -->
{#if post}
<article class="prose dark:prose-dark max-w-none p-4">
  {@html post}
</article>
{/if}

<!-- Fallback for Missing Content -->
{#if !metadata && !post}
<p class="text-center text-gray-500 py-8">Content not available.</p>
{/if}
