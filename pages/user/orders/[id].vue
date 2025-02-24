<template>
  <div class="container-fluid">
    <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
      <ol class="breadcrumb">

        <li class="breadcrumb-item"><a href="/">Главная</a></li>
        <li class="breadcrumb-item"><a href="/user/orders/">Мои заказы</a></li>
        <li class="breadcrumb-item active" aria-current="page">#{{ route.params.id }}</li>
      </ol>
    </nav>
    <h1>Заказ № {{route.params.id}}</h1>
    <div v-for="item in orderItemDataSource.items" class="cart cart-show">
      <img class="cart__image" :src="`/api/v1/componentimage/${item.product.defaultImageId}.jpg`" alt="">
      <div class="cart-body">
        <div class="cart__item">
          <h2 class="cart__caption">{{ item.product.caption }}</h2>
          <div class="cart__price">
            <h2 class="cart__caption mb-0">Сумма</h2>
            <div class="d-flex align-items-center gap-2">
              <p class="mb-0">{{ item.product.price }} c</p>
              <p class="mb-0"><small class="text-black-50">x </small> {{item.count}}</p>
            </div>
            <div class="d-flex align-items-center gap-2">
              <p class="mb-0">{{ item.product.price * item.count }} c</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="total-box">
      <span class="label">Итог:</span>
      <span class="amount">{{total}} сом</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ListDataSource} from "~/models/data-source/ListDataSource";

const route = useRoute()
const total = ref(0)
const isLoading = useState("isLoading")

useHead({
  title: `DukonGO - Заказ №${route.params.id}`,
})
definePageMeta({ middleware: ["auth"] });
const orderItemDataSource = reactive<ListDataSource>(new ListDataSource({
  className: "orderitem",
  pageIndex: 1,
  pageSize: 100,
  filter: {orderId: null}
}))
const check = async () => {
  await nextTick()
  const totalSum = orderItemDataSource.items.reduce((t, item) => {
    total.value += item.price * item.count
    return t
  }, 0)
  console.log(totalSum)
}

onMounted(async () => {
  isLoading.value = true
  orderItemDataSource.filter.orderId= +route.params.id;
  try {
    await orderItemDataSource.get()
    await check()
  }catch(e) {
    console.log(e)
  }finally{
    isLoading.value = false
  }
})
</script>

<style scoped>
.total-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  font-size: 18px;
  font-weight: 600;
  color: #333;
  background: #fff;

  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);

  width: 90%;
}

.label {
  font-weight: 500;
}

.amount {
  font-weight: 600;
}
</style>