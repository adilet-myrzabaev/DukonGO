<template>
  <div v-cloak v-if="cartStore.cartItems.length <= 0" class="container-fluid d-flex flex-column align-items-center">
    <h4>Корзина пусто</h4>
    <a style="color: #0d91f4" href="/"><b>Перейти к покупкам</b></a>
  </div>
  <div v-else>
    <div class="container-fluid">
      <div class="row mt-3">
        <div class="col-md-8 pe-md-5 border-1 border-gray-200">
          <div class="title mb-3">
            <div class="d-flex align-items-center justify-content-between">
              <b class="fs-4 cart-title">Корзина</b>
              <p class="text-right mb-0">всего: {{cartStore.totalSum}} с</p>
            </div>
          </div>
          <div v-for="item in cartStore.cartItems" class="cart">
            <img class="cart__image" :src="`/api/v1/componentimage/${item.defaultImageId}.jpg`" alt="">
            <div class="cart-body">
              <div class="cart__item">
                <h2 class="cart__caption">{{ item.caption }}</h2>
                <span class="cart__description">{{ item.unit }}</span>
                <div class="cart__price">
                  <span>{{ item.price }} c <small class="text-black-50">x </small> </span>
                  <span>{{item.count}}</span>
                </div>
              </div>
              <div class="d-flex flex-column justify-content-between align-items-end">
                <div @click="cartStore.deleteCart(item.id)" class="btn-close rounded"></div>
                <div class="input-group product-qty">
                  <span class="input-group-btn">
                      <button @click="cartStore.decrementCart(item)" type="button" class="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                        <svg width="16" height="16"><use xlink:href="#minus"></use></svg>
                      </button>
                  </span>
                  <span class="input-number">{{item.count}}</span>
                  <span class="input-group-btn">
                      <button @click="cartStore.incrementCart(item)" type="button" class="quantity-right-plus btn btn-success btn-number" data-type="plus">
                          <svg width="16" height="16"><use xlink:href="#plus"></use></svg>
                      </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 d-none d-md-block">
          <div ref="summary" class="summary">
            <div><h5><b>ОФОРМИТЬ ЗАКАЗ</b></h5></div>
            <hr>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Адрес</label>
              <input
                  v-model="checkoutModel.address"
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="textHelp" required>
              <div v-if="false" id="textHelp" class="form-text text-danger">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Комментарий</label>
              <input
                  v-model="checkoutModel.comment"
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="textHelp">
              <div v-if="false" id="textHelp" class="form-text text-danger">We'll never share your email with anyone else.</div>
            </div>

            <div class="d-flex align-items-center justify-content-between pb-2">
              <small class="mb-0">Сумма: </small>
              <div>{{ cartStore.totalSum  }} с</div>
            </div>
            <div class="d-flex align-items-center justify-content-between pb-2">
              <small class="mb-0">Доставка: </small>
              <div>{{ cartStore.delivery }} с</div>
            </div>
            <div class="d-flex align-items-center justify-content-between pt-2" style="border-top: 1px solid rgba(0,0,0,.1);">
              <small>Итого: </small>
              <div>{{ cartStore.totalSum + +cartStore.delivery }} с</div>
            </div>
            <div class="text-danger mb-3" style="line-height: 100%">Оплата при получении</div>
            <button data-bs-toggle="modal" data-bs-target="#checkModal" class="btn btn-primary btn-primary--md-text w-100">Оформить</button>
          </div>

        </div>

      </div>
    </div>
    <button class="d-block d-md-none btn btn-primary btn-fixed" data-bs-toggle="modal" data-bs-target="#exampleModal">Оформить заказ</button>
    <!-- Check Modal -->
    <div class="modal fade" id="checkModal" tabindex="-1" aria-labelledby="checkModal" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Подтверждение</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
           Вы действительно хотите заказать в сумме {{cartStore.totalSum + +cartStore.delivery }} с
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Отмена</button>
            <button @click="addOrder" type="button" class="btn btn-primary">Подтвердить</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Оформление заказа</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div ref="summary" class="summary">
              <div><h5><b>ОФОРМИТЬ ЗАКАЗ</b></h5></div>
              <hr>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Адрес</label>
                <input
                    v-model="checkoutModel.address"
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="textHelp" required>
                <div class="invalid-feedback">
                  {{ errors.address }}
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Комментарий</label>
                <input
                    v-model="checkoutModel.comment"
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="textHelp">
                <div v-if="false" id="textHelp" class="form-text text-danger">We'll never share your email with anyone else.</div>
              </div>

              <div class="d-flex align-items-center justify-content-between pb-2">
                <small class="mb-0">Сумма: </small>
                <div>{{ cartStore.totalSum  }} с</div>
              </div>
              <div class="d-flex align-items-center justify-content-between pb-2">
                <small class="mb-0">Доставка: </small>
                <div>{{ cartStore.delivery }} с</div>
              </div>
              <div class="d-flex align-items-center justify-content-between pt-2" style="border-top: 1px solid rgba(0,0,0,.1);">
                <small>Итого: </small>
                <div>{{ cartStore.totalSum }} с</div>
              </div>
              <div class="text-danger mb-3">Оплата при получении</div>
              <button data-bs-toggle="modal" data-bs-target="#checkModal" class="btn btn-primary btn-primary--md-text w-100">Оформить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="globalError" class="alert alert-danger mt-3">
      {{ globalError }}
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "DukonGO - Корзина"
})
import axios from "axios";
const router = useRouter();
const cartStore = useCartStore();
const userStore = useUserStore();
const checkoutModal = ref()
const isLoading = useState("isLoading");
const globalError = ref("");
const errors = ref({
  address: ""
});

const checkoutModel = reactive({
  userProfileId: 0,
  comment: "",
  address: ""
})


const validateForm = () => {
  errors.value.address = "";
  globalError.value = "";

  if (!checkoutModel.address) {
    errors.value.address = "Адрес обязателен!";
    globalError.value = "Заполните все обязательные поля.";
    return;
  }
};


const addOrder = async (product: any) => {
  if (checkoutModel.address === "" && checkoutModel.address === null) return;
  checkoutModel.userProfileId = userStore.profile.id;
  if (product){
    try {
      await axios.post(`/api/v1/public/order/?cartId=${cartStore.cart.id}`, checkoutModel)
      await cartStore.get()
      checkoutModel.address = "";
      checkoutModel.comment = ""
    }catch(error){
      console.log(error)
    } finally {
      router.push("/");

    }
  }
}
onMounted(async () => {
  isLoading.value = true
  await Promise.all([
    userStore.get(),
    cartStore.get(),
    cartStore.getDelivery()
  ])
  isLoading.value = false

})
</script>

<style scoped>

.summary{
  position: sticky;
  top: 100px;
  left: 0;
  background-color: #e3e3e3;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  padding: 4vh;
  color: rgb(113, 113, 113);
}

.fixed-summary {
  position: sticky;
  top: 20px;
  right: 0;
  width: 30%; /* Или другой размер, соответствующий макету */
  z-index: 1000;
}
@media(max-width:767px){
  .summary{
    border-top-right-radius: unset;
    border-bottom-left-radius: 1rem;
  }
}
</style>