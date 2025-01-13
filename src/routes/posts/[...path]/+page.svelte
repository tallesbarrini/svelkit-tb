<script lang="ts">
  import "../../prism-night-owl.css";
  import type { PageData } from "../../$types";
  import CopyCodeInjector from "$lib/components/CopyCodeInjector.svelte";
  import PostHeader from "$lib/components/PostHeader.svelte";
  import PostListing from "$lib/components/PostListing.svelte";

  import "prismjs/plugins/line-numbers/prism-line-numbers.js";

  export let data: PageData; // Data passed from load function
  let Post, metadata;
  const { posts } = data; // Destructure data object
  console.log(posts);
  const type = posts.length > 0 ? "list" : "post";

  // If type is 'post', rename posts to Post to render the post content
  if (type === 'post') {
    Post = posts[0]; // posts now contains the MD data in this case
    metadata = Post.metadata
  }

  // Debugging: Log the data object to inspect its structure
  console.log("Received data:", data);
</script>

<!-- <svelte:head>
  {#if metadata}
    <title>{metadata.title}</title>
    <meta name="description" content={metadata.summary} />
    <meta property="og:title" content={metadata.title} />
    <meta property="og:type" content="article" />
    <meta property="og:description" content={metadata.summary} />
    <meta property="og:image" content={metadata.imgUrl} />
    <meta property="og:url" content={data.youtubeId} />
    <meta name="twitter:card" content="summary_large_image" />
  {/if}
</svelte:head> -->

{#if type === 'list'}
  <!-- Render Post List -->
  {#if posts.length > 0}
    <section class="divide-y dark:divide-gray-700">
      {#each data.posts as post}
        <PostListing {post} />
      {/each}
    </section>
  {:else}
    <p>No posts found in this category.</p>
  {/if}
{:else if type === 'post'}
  <!-- Render Single Post -->
  <article>
    <header>
      {#if metadata}
        <h1 class="text-4xl font-bold">{metadata.title}</h1>
        <p class="text-gray-600">
          Published on <time datetime={metadata.publishedAt}>{metadata.publishedAt}</time>
        </p>
        <PostHeader {metadata} />
      {/if}
    </header>

    <div class="prose max-w-none px-4 py-4 dark:prose-invert md:prose-lg">
      <CopyCodeInjector>
        <!-- {@html content} -->
        <Post />
      </CopyCodeInjector>
    </div>
  </article>
{:else}
  <p>Content not found</p>
{/if}