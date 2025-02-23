<template>
  <div>
    <div v-if="isLoading" class="loading-overlay">
      <div class="spinner"></div>
    </div>
    <NuxtLayout>
      <div class="app">
        <NuxtPage />
      </div>
    </NuxtLayout>

  </div>
</template>
<script setup lang="js">
import("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js");
const isLoading = useState("isLoading", () => false);

onMounted(() => {
  // Убираем загрузку после первой инициализации
  isLoading.value = false;
});

watchEffect(() => {
  const router = useRouter();
  router.beforeEach(() => (isLoading.value = true));
  router.afterEach(() => (isLoading.value = false));
});
</script>
<style>
@import url("/assets/styles/style.css");
.app{
  min-height: 100vh;
}
 .loading-overlay {
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: rgba(0, 0, 0, 0.5);
   display: flex;
   justify-content: center;
   align-items: center;
   z-index: 9999;
 }
.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid #fff;
  border-top: 5px solid transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>