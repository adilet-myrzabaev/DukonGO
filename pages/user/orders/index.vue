<template>
  <div class="container-fluid">
    <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Главная</a></li>
        <li class="breadcrumb-item active" aria-current="page">Мои заказы</li>
      </ol>
    </nav>

    <a :href="`/user/orders/${order.id}`" v-for="order in orderDataSource.items" class="card shadow-sm rounded-3 p-3 mb-3" >
      <div class="d-flex justify-content-between align-items-center">
        <p class="fw-semibold mb-0">Заказ No: #{{ order.id }}</p>
        <p :class="order.paid ? 'text-success' : 'text-danger'" class="fw-semibold mb-0">
          {{ order.paid ? 'Оплачено' : 'Не оплачено' }}
        </p>
      </div>
      <p class="text-muted small mb-0">{{ formattedDate(order.createDate) }}</p>
      <div class="d-flex justify-content-between align-items-center">
        <p class="mb-0"><strong>Количество:</strong> {{ order.productCount }}</p>
        <p class="mb-0"><strong>Сумма:</strong> {{ order.sum }} сом</p>
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
import {onMounted} from "vue";
import {ListDataSource} from "~/models/data-source/ListDataSource";
const userStore = useUserStore()
const cartStore = useCartStore()


const orderDataSource = reactive<ListDataSource>(new ListDataSource({
  className: "order",
  pageIndex: 1,
  pageSize: 100,
  filter: {userProfileId: null}
}))

const formattedDate = (data: any) => {
  const date = new Date(data);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};
onMounted(async () => {
  orderDataSource.filter.userProfileId=userStore.profile.id
  try {
    await orderDataSource.get()
  } catch (e){
    console.log(e)
  }

})
</script>