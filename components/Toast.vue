<template>
  <div class="toast-container position-fixed top-0 start-50 p-3">
    <div
        id="liveToast"
        class="toast text-bg-primary"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        ref="toastRef"
    >
      <div class="toast-header">
        <strong class="me-auto">Уведомление</strong>
        <button type="button" class="btn-close" @click="hideToast"></button>
      </div>
      <div class="toast-body">
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const message = ref(null);
const toastRef = ref(null);

const showToast = (msg) => {
  message.value = msg;
  const toastElement = toastRef.value;
  if (toastElement) {
    const toast = new bootstrap.Toast(toastElement);
    toast.show();
  }
};

const hideToast = () => {
  const toastElement = toastRef.value;
  if (toastElement) {
    const toast = bootstrap.Toast.getInstance(toastElement);
    if (toast) {
      toast.hide();
    }
  }
};

defineExpose({ showToast });
</script>
