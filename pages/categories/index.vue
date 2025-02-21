<template>
  <div>
    <div class="container-fluid">

      <nav style="--bs-breadcrumb-divider: '';" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Главная</a></li>
          <li class="breadcrumb-item active" aria-current="page">Категории</li>
        </ol>
      </nav>
      <div class="row">
        <div v-for="item in categoryDataSource" :key="item.id" class="col-6 col-md-4 col-lg-3">
          <div  class="category-card">
            <img class="category-image" :src="`/images/categories/${item.defaultImageId}.png`" alt="Category Thumbnail">
            <h3 class="category-title">{{ item.caption }}</h3>
            <a  href="" class="category-link">
              {{item.defaultImageId}}
            </a>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
const categoryDataSource = ref([
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
  {
    id: 4148,
    name: "zamorozhennyie-produktyi",
    defaultImageId: 4148,
    caption: "Замороженные продукты"
  },
  {
    id: 4244,
    name: "stirka-i-uborka",
    defaultImageId: 4244,
    caption: "Стирка и уборка"
  },
  {
    id: 4375,
    name: "shokolad-konfetyi-sladosti",
    defaultImageId: 4375,
    caption: "Шоколад, конфеты, сладости"
  },
  {
    id: 4878,
    name: "produktyi-byistrogo-prigotovleniya",
    defaultImageId: 4878,
    caption: "Продукты быстрого приготовления"
  },
  {
    id: 4934,
    name: "ovoschifruktyigribyi",
    defaultImageId: 7050,
    caption: "Овощи, фрукты, грибы"
  },
  {
    id: 5007,
    name: "napitki",
    defaultImageId: 7051,
    caption: "Напитки"
  },
  {
    id: 5385,
    name: "molochnyie-produktyi-syir-yajtsa",
    defaultImageId: 7052,
    caption: "Молочные продукты, сыр, яйца"
  },
  {
    id: 5763,
    name: "makaronyi-krupyi-maslo",
    defaultImageId: 7066,
    caption: "Макароны, крупы, масло"
  },
  {
    id: 6350,
    name: "krasota-i-gigiena",
    defaultImageId: 6902,
    caption: "Красота и гигиена"
  },
  {
    id: 6902,
    name: "konservyi",
    defaultImageId: 7067,
    caption: "Консервы"
  },
  {
    id: 6991,
    name: "kolbasnyie-izdeliya",
    defaultImageId: 6991,
    caption: "Колбасные изделия"
  },
  {
    id: 7023,
    name: "hleb-i-vyipechka",
    defaultImageId: 7058,
    caption: "Хлеб и выпечка"
  }
]);
</script>

<style scoped>

</style>