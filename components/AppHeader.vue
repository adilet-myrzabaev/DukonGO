<template>
  <div class="app-header">
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
      <defs>
        <symbol xmlns="http://www.w3.org/2000/svg" id="link" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 19a1 1 0 1 0-1-1a1 1 0 0 0 1 1Zm5 0a1 1 0 1 0-1-1a1 1 0 0 0 1 1Zm0-4a1 1 0 1 0-1-1a1 1 0 0 0 1 1Zm-5 0a1 1 0 1 0-1-1a1 1 0 0 0 1 1Zm7-12h-1V2a1 1 0 0 0-2 0v1H8V2a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3Zm1 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9h16Zm0-11H4V6a1 1 0 0 1 1-1h1v1a1 1 0 0 0 2 0V5h8v1a1 1 0 0 0 2 0V5h1a1 1 0 0 1 1 1ZM7 15a1 1 0 1 0-1-1a1 1 0 0 0 1 1Zm0 4a1 1 0 1 0-1-1a1 1 0 0 0 1 1Z"/>
        </symbol>
        <symbol xmlns="http://www.w3.org/2000/svg" id="arrow-right" viewBox="0 0 24 24">
          <path fill="currentColor" d="M17.92 11.62a1 1 0 0 0-.21-.33l-5-5a1 1 0 0 0-1.42 1.42l3.3 3.29H7a1 1 0 0 0 0 2h7.59l-3.3 3.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l5-5a1 1 0 0 0 .21-.33a1 1 0 0 0 0-.76Z"/>
        </symbol>
        <symbol xmlns="http://www.w3.org/2000/svg" id="category" viewBox="0 0 24 24">
          <path fill="currentColor" d="M19 5.5h-6.28l-.32-1a3 3 0 0 0-2.84-2H5a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-10a3 3 0 0 0-3-3Zm1 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-13a1 1 0 0 1 1-1h4.56a1 1 0 0 1 .95.68l.54 1.64a1 1 0 0 0 .95.68h7a1 1 0 0 1 1 1Z"/>
        </symbol>
        <symbol xmlns="http://www.w3.org/2000/svg" id="calendar" viewBox="0 0 24 24">
          <path fill="currentColor" d="M19 4h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16Zm0-9H4V7a1 1 0 0 1 1-1h2v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h2a1 1 0 0 1 1 1Z"/>
        </symbol>
        <symbol xmlns="http://www.w3.org/2000/svg" id="heart" viewBox="0 0 24 24">
          <path fill="currentColor" d="M20.16 4.61A6.27 6.27 0 0 0 12 4a6.27 6.27 0 0 0-8.16 9.48l7.45 7.45a1 1 0 0 0 1.42 0l7.45-7.45a6.27 6.27 0 0 0 0-8.87Zm-1.41 7.46L12 18.81l-6.75-6.74a4.28 4.28 0 0 1 3-7.3a4.25 4.25 0 0 1 3 1.25a1 1 0 0 0 1.42 0a4.27 4.27 0 0 1 6 6.05Z"/>
        </symbol>
        <symbol xmlns="http://www.w3.org/2000/svg" id="plus" viewBox="0 0 24 24">
          <path fill="currentColor" d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2Z"/>
        </symbol>
        <symbol xmlns="http://www.w3.org/2000/svg" id="minus" viewBox="0 0 24 24">
          <path fill="currentColor" d="M19 11H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2Z"/>
        </symbol>
        <symbol xmlns="http://www.w3.org/2000/svg" id="cart" viewBox="0 0 24 24">
          <path fill="currentColor" d="M8.5 19a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 8.5 19ZM19 16H7a1 1 0 0 1 0-2h8.491a3.013 3.013 0 0 0 2.885-2.176l1.585-5.55A1 1 0 0 0 19 5H6.74a3.007 3.007 0 0 0-2.82-2H3a1 1 0 0 0 0 2h.921a1.005 1.005 0 0 1 .962.725l.155.545v.005l1.641 5.742A3 3 0 0 0 7 18h12a1 1 0 0 0 0-2Zm-1.326-9l-1.22 4.274a1.005 1.005 0 0 1-.963.726H8.754l-.255-.892L7.326 7ZM16.5 19a1.5 1.5 0 1 0 1.5 1.5a1.5 1.5 0 0 0-1.5-1.5Z"/>
        </symbol>
        <symbol xmlns="http://www.w3.org/2000/svg" id="check" viewBox="0 0 24 24">
          <path fill="currentColor" d="M18.71 7.21a1 1 0 0 0-1.42 0l-7.45 7.46l-3.13-3.14A1 1 0 1 0 5.29 13l3.84 3.84a1 1 0 0 0 1.42 0l8.16-8.16a1 1 0 0 0 0-1.47Z"/>
        </symbol>
        <symbol xmlns="http://www.w3.org/2000/svg" id="trash" viewBox="0 0 24 24">
          <path fill="currentColor" d="M10 18a1 1 0 0 0 1-1v-6a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1ZM20 6h-4V5a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v1H4a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2ZM10 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h-4Zm7 14a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8h10Zm-3-1a1 1 0 0 0 1-1v-6a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z"/>
        </symbol>
        <symbol xmlns="http://www.w3.org/2000/svg" id="star-outline" viewBox="0 0 15 15">
          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 9.804L5.337 11l.413-2.533L4 6.674l2.418-.37L7.5 4l1.082 2.304l2.418.37l-1.75 1.793L9.663 11L7.5 9.804Z"/>
        </symbol>
        <symbol xmlns="http://www.w3.org/2000/svg" id="star-solid" viewBox="0 0 15 15">
          <path fill="currentColor" d="M7.953 3.788a.5.5 0 0 0-.906 0L6.08 5.85l-2.154.33a.5.5 0 0 0-.283.843l1.574 1.613l-.373 2.284a.5.5 0 0 0 .736.518l1.92-1.063l1.921 1.063a.5.5 0 0 0 .736-.519l-.373-2.283l1.574-1.613a.5.5 0 0 0-.283-.844L8.921 5.85l-.968-2.062Z"/>
        </symbol>
        <symbol xmlns="http://www.w3.org/2000/svg" id="search" viewBox="0 0 24 24">
          <path fill="currentColor" d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z"/>
        </symbol>
        <symbol xmlns="http://www.w3.org/2000/svg" id="user" viewBox="0 0 24 24">
          <path fill="currentColor" d="M15.71 12.71a6 6 0 1 0-7.42 0a10 10 0 0 0-6.22 8.18a1 1 0 0 0 2 .22a8 8 0 0 1 15.9 0a1 1 0 0 0 1 .89h.11a1 1 0 0 0 .88-1.1a10 10 0 0 0-6.25-8.19ZM12 12a4 4 0 1 1 4-4a4 4 0 0 1-4 4Z"/>
        </symbol>
        <symbol xmlns="http://www.w3.org/2000/svg" id="close" viewBox="0 0 15 15">
          <path fill="currentColor" d="M7.953 3.788a.5.5 0 0 0-.906 0L6.08 5.85l-2.154.33a.5.5 0 0 0-.283.843l1.574 1.613l-.373 2.284a.5.5 0 0 0 .736.518l1.92-1.063l1.921 1.063a.5.5 0 0 0 .736-.519l-.373-2.283l1.574-1.613a.5.5 0 0 0-.283-.844L8.921 5.85l-.968-2.062Z"/>
        </symbol>
        <symbol xmlns="http://www.w3.org/2000/svg" id="list" viewBox="0 0 15 15">
          <path fill="currentColor" d="M2 3.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10A.5.5 0 0 1 2 3.5Zm0 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5Zm.5 3.5a.5.5 0 0 0 0 1h10a.5.5 0 0 0 0-1h-10Z"/>
        </symbol>

        <symbol xmlns="http://www.w3.org/2000/svg" id="categories" viewBox="0 0 15 15">
          <path fill="currentColor" d="M2 2h4v4H2V2Zm7 0h4v4H9V2ZM2 9h4v4H2V9Zm7 0h4v4H9V9Z"/>
        </symbol>
        <symbol xmlns="http://www.w3.org/2000/svg" id="catalog" viewBox="0 0 15 15">
          <path fill="currentColor" d="M2 2h3v3H2V2Zm5 0h3v3H7V2Zm5 0h3v3h-3V2ZM2 7h3v3H2V7Zm5 0h3v3H7V7Zm5 0h3v3h-3V7Z"/>
        </symbol>
      </defs>
    </svg>

  
    <!--  sidebar  -->
    <!--  my cart  -->
    <div class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasCart" aria-labelledby="My Cart">
      <div class="offcanvas-header justify-content-end">
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div class="order-md-last">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-primary">Корзинка</span>
            <span class="badge bg-primary rounded-pill">3</span>
          </h4>
          <ul class="list-group mb-3">
            <li class="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 class="my-0">Growers cider</h6>
                <small class="text-body-secondary">Brief description</small>
              </div>
              <span class="text-body-secondary">$12</span>
            </li>
            <li class="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 class="my-0">Fresh grapes</h6>
                <small class="text-body-secondary">Brief description</small>
              </div>
              <span class="text-body-secondary">$8</span>
            </li>
            <li class="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 class="my-0">Heinz tomato ketchup</h6>
                <small class="text-body-secondary">Brief description</small>
              </div>
              <span class="text-body-secondary">$5</span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>$20</strong>
            </li>
          </ul>

          <button class="w-100 btn btn-primary btn-lg" type="submit">Перейти к покупкам</button>
        </div>
      </div>
    </div>

    <!--  mobile search  -->
    <div class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasSearch" aria-labelledby="Search">
      <div class="offcanvas-header justify-content-end">
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div class="order-md-last">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span >Поиск</span>
          </h4>
          <form role="search" action="#" method="get" class="d-flex mt-3 gap-0">
            <input v-model="searchProduct" class="form-control rounded-start rounded-0 bg-light" placeholder="Что вы хотели видеть?" aria-label="What are you looking for?">
            <button @click="search" class="btn btn-dark rounded-end rounded-0" type="submit">Искать</button>
          </form>
          <div class="product-grid row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">

            <div v-for="item in commodityDataSource.items" :key="item.id" class="col mt-4">
              <div class="product-item">
                <!--                      <span class="badge bg-success position-absolute m-2">-30%</span>-->
                <figure>
                  <a href="#" :title="item.caption">
                    <img :src="`/api/v1/componentimage/${item.defaultImageId}.jpg`" class="product-image" alt="">
                  </a>
                </figure>
                <div class="product-body">
                  <h3 class="product__caption">{{ item.caption }}</h3>
                  <div>
                    <div class="d-flex align-items-center justify-content-between mb-2">
                      <span class="price">{{ item.price }} c</span>
                      <span class="qty">{{item.unit}}</span>
                    </div>
                    <div class="d-flex align-items-end flex-column">
                      <template v-if="item.productCount > 0">
                        <div v-if="cartStore.hasItem(item)" class="input-group product-qty product-qty--mobile">
                                <span @click="cartStore.decrement(item)" class="input-group-btn">
                                  <button type="button" class="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                                    <svg width="16" height="16"><use xlink:href="#minus"></use></svg>
                                  </button>
                                </span>
                          <span class="input-number">{{item.count}}</span>
                          <span @click="cartStore.increment(item)" class="input-group-btn">
                                  <button type="button" class="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                      <svg width="16" height="16"><use xlink:href="#plus"></use></svg>
                                  </button>
                                </span>
                        </div>
                        <button v-else @click="cartStore.increment(item)" href="#" class=" btn btn-primary w-100">В корзину</button>
                      </template>
                      <template v-else>
                        <button href="#" class=" btn btn-danger w-100">нет в наличии</button>
                      </template>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <header class="header-sticky">
      <div class="container-fluid">
        <div class="d-flex justify-content-between align-items-center border-bottom py-2">

          <div class="text-center text-sm-start">
            <div class="main-logo">
              <a href="/">
                <h4>DukonGO</h4>
              </a>
            </div>
          </div>

          <div class="d-flex justify-content-end gap-5 align-items-center">
            <div class="search-bar d-none d-lg-flex justify-content-between align-items-center bg-light p-2 rounded-4">
              <div>
                <form id="search-form" class="text-center" action="#" method="post">
                  <input type="text" class="form-control border-0 bg-transparent" placeholder="Поиск..." />
                </form>
              </div>
              <div class="d-flex justify-content-end align-items-center me-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z"/></svg>
              </div>
            </div>
            <ul class="d-flex justify-content-end list-unstyled m-0">
              <li class="d-lg-none">
                <a href="#" class="rounded-circle bg-light p-2 mx-1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSearch" aria-controls="offcanvasSearch">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <use xlink:href="#search"></use>
                  </svg>
                </a>
              </li>
              <li>
                <a href="/categories/" class="rounded-circle bg-light p-2 mx-1">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <use xlink:href="#catalog"></use>
                  </svg>
                </a>
              </li>
              <li>
                <a href="/cart" class="position-relative rounded-circle bg-light p-2 mx-1">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <use xlink:href="#cart"></use>
                  </svg>
                  <span class="position-absolute top-0 end-0" v-if="cartStore.total">
                    {{ cartStore.total }}
                  </span>
                </a>
              </li>
              <li class="dropdown">
                <a ref="dropdownProfile" href="#" class="rounded-circle bg-light p-2 mx-1" data-bs-toggle="dropdown" aria-expanded="false">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <use xlink:href="#user"></use>
                  </svg>
                </a>
                <ul class="dropdown-menu">
                  <li v-for="item in dropdownItems" :key="item.id">
                    <a class="dropdown-item" @click="item.action()" :href="item.url">{{ item.label }}</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {CommodityDataSource} from "~/models/data-source/ListDataSource";

const authStore = useAuthStore();
const cartStore = useCartStore();
const dropdownProfile = ref()
const searchProduct = ref('');
const dropdownItems = ref([
  {
    id: 1,
    label: "Войти",
    url: "/login/signIn",
    cssClass: "btn btn-primary",
    action: () => {}

  },
  {
    id: 2,
    label: "Регистрация",
    url: "/login/signUp",
    cssClass: "btn btn-outline-primary",
    action: () => {}

  }
])
const authorizedItems = ref([
  {
    id: 1,
    label: "Профиль пользователя",
    url: "/user/account/profile",
    cssClass: "dropdown-menu__list",
    action: () => {}

  },
  {
    id: 2,
    label: "Мои заказы",
    url: "/user/orders/",
    cssClass: "dropdown-menu__list",
    action: () => {}

  },

  {
    id: 3,
    label: "Смена пароля",
    url: "/user/account/resetPassword/",
    cssClass: "dropdown-menu__list",
    action: () => {}
  },
  {
    id: 4,
    label: "Выйти",
    url: "#",
    cssClass: "dropdown-menu__list",
    action: () => {
      authStore.logout();
    }
  }
]);

const commodityDataSource = reactive<CommodityDataSource>(new CommodityDataSource({
  className: "commodity",
}))

const search = async () => {
  commodityDataSource.filter.searchText = searchProduct.value;
  await commodityDataSource.get()
}

onMounted(() => {
  dropdownProfile.value.addEventListener("show.bs.dropdown", (e:any) => {
      if (authStore.isAuthenticate){
        dropdownItems.value = [];
        dropdownItems.value = [...authorizedItems.value];
      }
  })
})
</script>
<style scoped>
.app-header{
  padding-bottom: 80px;
}
@media screen and (max-width: 576px) {
  .app-header{
    padding-bottom: 60px;
  }
}
</style>
