<template>
  <Header></Header>
  <section class="news wrapper">
    <h1 class="news__title">
      The journal
    </h1>
    <div class="news__content">
      <div class="news__block">
        <div class="news__block__img">
          <img src="@/assets/img/Tesla3Review.png" alt="tesla" class="news__img">
        </div>
        <h4 class="news__block__title">Tesla New Model</h4>
        <p class="news__block_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dicta, vitae?
          Architecto delectus ex inventore minus quae ratione sint voluptatem!</p>
      </div>
    </div>
  </section>
  <Footer></Footer>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Journal.vue",
  components: {Footer, Header}

}
</script>

<style scoped>
.header__login >>> a, span {
  color: black;
}
</style>