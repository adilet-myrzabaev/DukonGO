<template>
  <div>
    <div ref="summary" class="summary">
          <div><h5><b>ОФОРМИТЬ ЗАКАЗ</b></h5></div>
          <hr>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Адрес</label>
            <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="textHelp">
            <div v-if="false" id="textHelp" class="form-text text-danger">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Комментарий</label>
            <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="textHelp">
            <div v-if="false" id="textHelp" class="form-text text-danger">We'll never share your email with anyone else.</div>
          </div>
          <div class="d-flex align-items-center justify-content-between" style="border-top: 1px solid rgba(0,0,0,.1); padding: 2vh 0;">
            <div>Итого: </div>
            <div>137.00 с</div>
          </div>
          <button class="btn btn-primary btn-primary--md-text">Оформить</button>
        </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>