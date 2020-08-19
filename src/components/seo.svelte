<script>
  const siteName = 'iamyuu.dev';
  export let title = undefined;
</script>

<svelte:head>
  <title>{title ? `${title} - ${siteName}` : siteName}</title>
</svelte:head>
