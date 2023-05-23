<template>
  <Header></Header>
  <div>
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
          <p class="product__date">Release date: {{ item.description }}</p>
        </div>
      </div>
    </div>
    <div class="product-list">
      <div class="product__item" v-for="product in items" :key="product.id" >
        <img :src="product.image" :alt="product.name" class="product__image">
        <h3 class="product__price">{{ product.price }} {{ "$" }}</h3>
        <p class="product__title">{{ product.description }}</p>
      </div>
    </div>
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
import AddProduct from "@/components/AddProduct.vue";


export default {
  mounted() {
    this.getProducts()
  },
  data() {
    return {
      items: [],
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
    async getProducts(){
      await fetch('http://localhost/Merelease/php/getProduct.php', {
        method: 'GET',
        headers: {}
      }).then(response => response.json())
          .then(json => {
            json.forEach(item => {
              this.items.push({
                name: item[1],
                price: item[2],
                description: item[3],
                image: item[4]
              })
              console.log(item[4])
            })
          })
    },
  },
  components: {
    AddProduct,
    Header, Footer
  },
};
</script>

<style scoped>

</style>