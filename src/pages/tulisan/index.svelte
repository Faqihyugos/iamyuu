<script>
  import SEO from '../../components/seo.svelte';

  const routes = WRITING_ROUTES;
</script>

<SEO title="Tulisan" />

<h1>Tulisan</h1>

{#each routes as route}
  <a href="tulisan/{route}">{route}</a>
{/each}
