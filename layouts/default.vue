<template>

  <AppHeader/>
  <div data-bs-delay='{"show":0,"hide":150}' ref="toast" style="z-index: 1000" aria-live="polite" aria-atomic="true" class="bg-body-secondary position-relative bd-example-toasts rounded-3">
    <div class="toast-container p-3" id="toastPlacement">
      <div class="toast">
        <div class="toast-header">
          <img src="..." class="rounded me-2" alt="...">
          <strong class="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
        </div>
        <div class="toast-body">
          Hello, world! This is a toast message.
        </div>
      </div>
    </div>
  </div>
  <slot />
  <AppFooter/>
</template>
<script setup lang="ts">
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter.vue"
import {onMounted} from "vue";
const toast = ref();
onMounted(() => {
  toast.value.addEventListener("shown.bs.toast", () => {
    toast.value.classList.add("show");
  })
})

</script>