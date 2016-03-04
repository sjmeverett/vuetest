
<template>
  <li class="dropdown">
    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
      <slot name="title"></slot> <span class="caret"></span>
    </a>
    <ul class="dropdown-menu">
      <slot name="link"></slot>
    </ul>
  </li>
</template>

<script>

</script>

<style>

</style>
