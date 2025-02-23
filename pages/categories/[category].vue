<template>
  <div>
    <section class="py-md-5">
      <div class="container-fluid">
        <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
          <ol class="breadcrumb">

            <li class="breadcrumb-item"><a href="/">Главная</a></li>
            <li class="breadcrumb-item"><a href="/categories/">Категории</a></li>
            <li class="breadcrumb-item active" aria-current="page">{{ translateCategory(route.params.category) }}</li>
          </ol>
        </nav>
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
  </div>
</template>

<script setup lang="ts">
import {reactive} from "vue";
const route = useRoute();
const isLoading = useState("isLoading");
const translationMap = {
  "dlya-doma-i-sada": "для дома и сада",
  "chipsyi-i-sneki": "чипсы и снеки",
  "chaj-i-kofe": "чай и кофе",
  "alkogolnyie-napitki-tabak": "алкогольные напитки табак",
  "zamorozhennyie-produktyi": "замороженные продукты",
  "stirka-i-uborka": "стирка и уборка",
  "shokolad-konfetyi-sladosti": "шоколад конфеты сладости",
  "produktyi-byistrogo-prigotovleniya": "продукты быстрого приготовления",
  "ovoschifruktyigribyi": "овощи фрукты грибы",
  "napitki": "напитки",
  "molochnyie-produktyi-syir-yajtsa": "молочные продукты сыр яйца",
  "makaronyi-krupyi-maslo": "макароны крупы масло",
  "krasota-i-gigiena": "красота и гигиена",
  "konservyi": "консервы",
  "kolbasnyie-izdeliya": "колбасные изделия",
  "hleb-i-vyipechka": "хлеб и выпечка"
};
useHead({
  title: `DukonGO - ${translateCategory(route.params.category)}`,
})
definePageMeta({ middleware: ["auth"] });
import {CommodityDataSource} from "~/models/data-source/ListDataSource";

const cartStore = useCartStore();

const commodityDataSource = reactive<CommodityDataSource>(new CommodityDataSource({
  className: "commodity",
  filter: {folderName: null}
}));


function translateCategory(category) {
  return translationMap[category] || category.replace(/-/g, " ");
}

onMounted(async () => {
  isLoading.value = true;
  console.log(route.params.category, commodityDataSource);
  try {
    commodityDataSource.filter.folderName=route.params.category;
    await Promise.all([
      commodityDataSource.get(),
      cartStore.get(),
    ]);
    console.log("pass");
  } catch (error) {
    console.error('Ошибка при загрузке данных:', error);
  }
  isLoading.value = false;
})

</script>