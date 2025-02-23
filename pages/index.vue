<template>
  <section class="py-3 bg-image d-none d-md-block">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">

          <div class="banner-blocks">

            <div class="banner-ad large bg-info block-1 d-none d-md-block">
              <div class="row banner-content p-5">
                <div class="content-wrapper col-md-7">
                  <div class="categories my-3">100% натуральный</div>
                  <h3 class="display-4">Свежий Смузи & Летний Сок</h3>
                  <p>Натуральный продукт, выращенный без использования химических удобрений и добавок. Сохраняет свой естественный вкус, пользу и свежесть. Идеален для здорового питания и заботы о вашем организме.</p>
                  <a href="/categories/napitki" class="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1 px-4 py-3 mt-3">Купить сейчас</a>
                </div>
                <div class="img-wrapper col-md-5 d-none d-md-block">
                  <img src="/assets/images/product-thumb-1.png" class="img-fluid" alt="">
                </div>
              </div>
            </div>

            <div class="banner-ad bg-success-subtle block-2 bg-image-2" >
              <div class="row banner-content p-5">

                <div class="content-wrapper col-md-7">
                  <h3 class="banner-title">Фрукты & Овощи</h3>
                  <a href="/categories/ovoschifruktyigribyi" class="d-flex align-items-center nav-link">Купить
                    <svg width="24" height="24">
                      <use xlink:href="#arrow-right"></use>
                    </svg>
                  </a>
                </div>

              </div>
            </div>

            <div class="banner-ad bg-danger block-3 bg-image-3">
              <div class="row banner-content p-5">

                <div class="content-wrapper col-md-7">
                  <h3 class="item-title">Хлебобулочные изделия</h3>
                  <a href="/categories/hleb-i-vyipechka" class="d-flex align-items-center nav-link">Купить
                    <svg width="24" height="24">
                      <use xlink:href="#arrow-right"></use>
                    </svg>
                  </a>
                </div>

              </div>
            </div>

          </div>
          <!-- / Banner Blocks -->

        </div>
      </div>
    </div>
  </section>

  <section class="py-md-5 overflow-hidden">
    <div class="container-fluid">
      <div class="row">
        <div class="section-header d-flex flex-wrap justify-content-between mb-2 mb-md-5">
          <h2 class="section-title">Популярные категории</h2>
        </div>
      </div>
      <div class="row">
        <div v-for="item in categories" :key="item.id" class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
          <a :href="`/categories/${item.name}`">
            <div class="category-card" :style="{backgroundImage: `url('/images/categories/${item.defaultImageId}.png')`} ">
              <!--              <img class="category-image" :src="`/images/categories/${item.defaultImageId}.png`" alt="Category Thumbnail">-->
              <h3 class="category-title">{{ item.caption }}</h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!--  Products  -->
  <section class="py-md-5">
    <div class="container-fluid">

      <div class="row">
        <div class="col-md-12">

          <div class="bootstrap-tabs product-tabs">
            <div class="tabs-header d-flex justify-content-between border-bottom my-5">
              <h3>Товары</h3>
            </div>
            <div class="tab-content" id="nav-tabContent">
              <div class="tab-pane fade show active" id="nav-all" role="tabpanel" aria-labelledby="nav-all-tab">

                <div class="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">

                  <div v-for="item in commodityDataSource.items" :key="item.id" class="col mb-4">
                    <div class="product-item">
<!--                      <span class="badge bg-success position-absolute m-2">-30%</span>-->
                      <figure>
                        <a href="#" :title="item.caption">
                          <img :src="`https://manage.dukongo.kg/api/v1/componentimage/${item.defaultImageId}.jpg`" class="product-image" alt="">
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
                              <div v-if="cartStore.hasItem(item)" class="input-group product-qty">
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

        </div>
      </div>
    </div>
  </section>

  <section class="py-3 bg-image d-block d-md-none">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">

          <div class="banner-blocks">

            <div class="banner-ad large bg-info block-1">
              <div class="row banner-content p-3 p-md-5">
                <div class="content-wrapper col-md-7">
                  <div class="categories my-3">100% натуральный</div>
                  <h3 class="display-4">Свежий Смузи & Летний Сок</h3>
                  <p>Натуральный продукт, выращенный без использования химических удобрений и добавок. Сохраняет свой естественный вкус, пользу и свежесть. Идеален для здорового питания и заботы о вашем организме.</p>
                  <a href="/categories/napitki" class="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1 px-4 py-3 mt-3">Купить сейчас</a>
                </div>
                <div class="img-wrapper col-md-5 d-none d-md-block">
                  <img src="/assets/images/product-thumb-1.png" class="img-fluid" alt="">
                </div>
              </div>
            </div>

            <div class="banner-ad bg-success-subtle block-2 bg-image-2" >
              <div class="row banner-content p-3 p-md-5">

                <div class="content-wrapper col-md-7">
                  <h3 class="banner-title">Фрукты & Овощи</h3>
                  <a href="/categories/ovoschifruktyigribyi" class="d-flex align-items-center nav-link">Купить
                    <svg width="24" height="24">
                      <use xlink:href="#arrow-right"></use>
                    </svg>
                  </a>
                </div>

              </div>
            </div>

            <div class="banner-ad bg-danger block-3 bg-image-3">
              <div class="row banner-content p-3 p-md-5">

                <div class="content-wrapper col-md-7">
                  <h3 class="item-title">Хлебобулочные изделия</h3>
                  <a href="/categories/hleb-i-vyipechka" class="d-flex align-items-center nav-link">Купить
                    <svg width="24" height="24">
                      <use xlink:href="#arrow-right"></use>
                    </svg>
                  </a>
                </div>

              </div>
            </div>

          </div>
          <!-- / Banner Blocks -->

        </div>
      </div>
    </div>
  </section>

  <section class="py-5 my-5">
    <div class="container-fluid">

      <div class="bg-warning py-5 rounded-5 bg-image-4">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <img src="/assets/images/phone.png" alt="phone" class="image-float img-fluid">
            </div>
            <div class="col-md-8">
              <h2 class="my-5">Совершайте покупки легко и быстро с приложением DukonGO!</h2>
              <p>Экономьте время и заказывайте любимые товары в пару кликов. Удобный интерфейс, быстрая доставка и выгодные предложения — всё для вашего комфорта! 🛒📱</p>
              <div class="d-flex gap-2 flex-wrap">
                <img src="/assets/images/app-store.jpg" alt="app-store">
                <img src="/assets/images/google-play.jpg" alt="google-play">
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
useHead({
  title: "Главная страница",
})
import {CommodityDataSource} from "~/models/data-source/ListDataSource";
const authStore = useAuthStore();
const userStore = useUserStore();
const cartStore = useCartStore();
const isLoading = useState("isLoading");

const categories = ref([
  {
    id: 3335,
    name: "dlya-doma-i-sada",
    defaultImageId: 6983,
    caption: "Для дома и сада"
  },
  {
    id: 3456,
    name: "chipsyi-i-sneki",
    defaultImageId: 3456,
    caption: "Чипсы и снеки"
  },
  {
    id: 3516,
    name: "chaj-i-kofe",
    defaultImageId: 3516,
    caption: "Чай и кофе"
  },
  {
    id: 3829,
    name: "alkogolnyie-napitki-tabak",
    defaultImageId: 3829,
    caption: "Алкогольные напитки, табак"
  },
])

const commodityDataSource = reactive<CommodityDataSource>(new CommodityDataSource({
  className: "commodity"
}));

onMounted(async () => {
  isLoading.value = true;
  await commodityDataSource.get();
  await cartStore.get()
  isLoading.value = false

})
</script>

<style scoped>
.bg-image{
  background-image: url('/assets/images/background-pattern.jpg');
  background-repeat: no-repeat;
  background-position: right bottom;
}
.bg-image-2{
  background-image: url('../assets/images/ad-image-1.png');
  background-repeat: no-repeat;
  background-position: right bottom;
}
.bg-image-3{
  background-image: url('../assets/images/ad-image-2.png');
  background-repeat: no-repeat;
  background-position: right bottom;
}
.bg-image-4{
  background-image: url('/assets/images/bg-pattern-2.png');
  background-repeat: no-repeat;
  background-position: center;
}
</style>