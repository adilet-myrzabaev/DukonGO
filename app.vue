<template>
  <div>
    <NuxtLayout>
      <div class="app">
        <NuxtPage />
      </div>
    </NuxtLayout>

  </div>
</template>
<script setup lang="js">
import("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js");
</script>
<style>
@import url("/assets/styles/style.css");
.app{
  min-height: 100vh;
}
</style>