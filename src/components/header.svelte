<script>
  export let segment;
</script>

<style>
  a {
    color: inherit;
    text-decoration: none;
    display: block;
    position: relative;
  }

  a:not(.active):not(.site-name) {
    opacity: 0.7;
  }

  a::before {
    content: '';
    position: absolute;
    transition: transform 0.3s ease;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: #aaa;
    transform: scaleX(0);
  }

  a:not(.site-name):hover::before,
  .active::before {
    transform: scaleX(1);
  }

  .active::before {
    background: #e0fbfc;
  }
</style>

<header class="flex mx-auto py-6 px-6 md:px-20 lg:px-32 font-semibold">
  <a href="." class="site-name ml-0 font-bold">iamyuu.dev</a>

  <nav class="flex flex-1 items-end justify-end uppercase">
    <a href="tulisan" class={segment === 'tulisan' ? 'active mr-4' : 'mr-4'}>tulisan</a>
    <a href="berbicara" class={segment === 'berbicara' ? 'active' : ''}>berbicara</a>
  </nav>
</header>
