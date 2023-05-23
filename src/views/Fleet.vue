<template>
  <Header></Header><div>
</div>
  <div class="fleet_wrapper">
    <div class="fleet__header">
      <h1>Luxury car for sale</h1>
      <div class="fleet__nav">
        <button @click="sort('price')" class="fleet__btn">Sort by Price</button>
        <button @click="sort('date')" class="fleet__btn">Sort by Release Date</button>
      </div>
    </div>
    <div class="product-list">
      <div v-for="item in sortedItems" :key="item.id">
        <img :src="item.image" :alt="item.name" class="product__image"/>
        <div class="product__info">
          <h3>${{ item.price }}</h3>
          <p class="product__name">{{ item.name }}</p>
          <p class="product__date">Release date: {{ item.date }}</p>
        </div>
      </div>
    </div>
<!--    <div class="product-list">-->
<!--      <div class="product__item" v-for="product in sortedProducts" :key="product.id">-->
<!--        <img :src="product.image" :alt="product.name" class="product__image">-->
<!--        <h3 class="product__price">{{ product.price }} {{ "$" }}</h3>-->
<!--        <p class="product__title">{{ product.name }}</p>-->
<!--        <p class="product__location">{{ product.location }}</p>-->
<!--      </div>-->
<!--    </div>-->
  </div>
<!--  <section class="newsletter">-->
<!--    <div class="newsletter__info">-->
<!--      <h1 class="newsletter__info-title">Weekly Luxury Newsletter</h1>-->
<!--      <p class="newsletter__info-text">-->
<!--        Receive the beautifully curated selection of what’s trending in luxury with-->
<!--        inside stories and tips from our experts-->
<!--      </p>-->
<!--    </div>-->
<!--    <div class="newsletter__form">-->
<!--      <input type="email" placeholder="Email" class="newsletter__field-mail form-field">-->
<!--      <input type="submit" value="SUBSCRIBE" class="newsletter__field-btn form-field">-->
<!--    </div>-->
<!--  </section>-->
  <Footer></Footer>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";


export default {
  data() {
    return {
      items: [
        {
          price: 250000,
          name: "Ferrari 488 Spider",
          location: "Billings, MO, United States ",
          image: "http://autotuni.ru/uploads/posts/2017-09/1506357350_ferrari-488-spider-n-largo-2.jpg",
          id: 1,
          date: 2015
        },
        {
          price: 185000,
          name: "BMW XM",
          location: "Rotterdam, Netherlands ",
          image: "https://cdn.carbuzz.com/gallery-images/2023-bmw-xm-carbuzz-1042486.jpg",
          id: 2,
          date: 2023
        },
        {
          price: 424555,
          name: "Lamborghini Aventador",
          location: "Palm beach, FL, United States ",
          image: "https://cdn.carbuzz.com/gallery-images/1600/540000/300/540349.jpg",
          id: 3,
          date: 2017
        },
        {
          price: 116000,
          name: "Nissan GT-R",
          location: "Stuhr, Germany",
          image: "https://cdn.carbuzz.com/gallery-images/1600/1055000/0/1055003.jpg",
          id: 4,
          date: 2020
        },
        {
          price: 225500,
          name: "2022 Lamborghini Urus",
          location: "Dubai, United Arab Emirates ",
          image: "https://cdn.carbuzz.com/gallery-images/1600/929000/700/929795.jpg",
          id: 5,
          date: 2022
        },
        {
          price: 60000,
          name: "Chevrolet Corvette Stingray Coupe",
          location: "Shinagawa city, Japan",
          image: "https://cdn.carbuzz.com/gallery-images/1600/763000/100/763143.jpg",
          id: 6,
          date: 2019
        },
      ],
      sortKey: 'date',
      sortDir: 1,
    };
  },
  computed: {
    sortedItems() {
      const sorted = this.items.sort((a, b) => {
        const factor = this.sortDir === 1 ? 1 : -1;
        if (this.sortKey === 'date') {
          return factor * (new Date(a.date) - new Date(b.date));
        } else {
          return factor * (a.price - b.price);
        }
      });
      return sorted;
    },
  },
  methods: {
    sort(key) {
      if (this.sortKey === key) {
        this.sortDir = -this.sortDir;
      } else {
        this.sortDir = 1;
        this.sortKey = key;
      }
    },
  },
  components: {
    Header, Footer
  }
};
</script>

<style scoped>

</style>