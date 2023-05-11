<template>
  <Header></Header>
  <main class="page">
    <section class="cars">
      <p class="breadcrumbs">
        Cars
      </p>
      <div class="cars__grid">
        <div class="cars__grid-card">
          <a href="#" class="grid-card-wrapper" target="_blank">
            <img src="@/assets/img/card/ferrari_spider/1.jpg" alt="ferrari" class="grid-card__img">
            <div class="grid-card__description">
              <div class="grid-card__price">
                $250,500
              </div>
              <div class="grid-card__tag">
                Ferrari 488 Spider
              </div>
            </div>
          </a>
        </div>
        <div class="cars__grid-card">
          <a href="#" class="grid-card-wrapper" target="_blank">
            <img src="@/assets/img/card/nissan_nismo/1.jpg" alt="ferrari" class="grid-card__img">
            <div class="grid-card__description">
              <div class="grid-card__price">
                $120,500
              </div>
              <div class="grid-card__tag">
                Nissan GT - R NISMO
              </div>
            </div>
          </a>
        </div>
        <div class="cars__grid-card">
          <a href="#" class="grid-card-wrapper" target="_blank">
            <img src="@/assets/img/card/koenigsegg_gemera/1.jpg" alt="ferrari" class="grid-card__img">
            <div class="grid-card__description">
              <div class="grid-card__price">
                $1,700,000
              </div>
              <div class="grid-card__tag">
                Koenigsegg Gemera
              </div>
            </div>
          </a>
        </div>
        <div class="cars__grid-card">
          <a href="#" class="grid-card-wrapper" target="_blank">
            <img src="@/assets/img/card/audi_tt/1.jpg" alt="audi" class="grid-card__img">
            <div class="grid-card__description">
              <div class="grid-card__price">
                $85,000
              </div>
              <div class="grid-card__tag">
                Audi TT RS
              </div>
            </div>
          </a>
        </div>
        <div class="cars__grid-card">
          <a href="#" class="grid-card-wrapper" target="_blank">
            <img src="@/assets/img/card/tesla/1.jpg" alt="tesla" class="grid-card__img">
            <div class="grid-card__description">
              <div class="grid-card__price">
                $200,000
              </div>
              <div class="grid-card__tag">
                Tesla Roadster
              </div>
            </div>
          </a>
        </div>
        <div class="cars__grid-card">
          <a href="#" class="grid-card-wrapper" target="_blank">
            <img src="@/assets/img/card/bmw/1.jpg" alt="bmw" class="grid-card__img">
            <div class="grid-card__description">
              <div class="grid-card__price">
                $110,000
              </div>
              <div class="grid-card__tag">
                BMW iX
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
    <section class="newsletter">
      <div class="newsletter__info">
        <h1 class="newsletter__info-title">Weekly Luxury Newsletter</h1>
        <p class="newsletter__info-text">
          Receive the beautifully curated selection of what’s trending in luxury with
          inside stories and tips from our experts
        </p>
      </div>
      <div class="newsletter__form">
        <input type="email" placeholder="Email" class="newsletter__field-mail form-field">
        <input type="submit" value="SUBSCRIBE" class="newsletter__field-btn form-field">
      </div>
    </section>
  </main>
  <Footer></Footer>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  data() {
    return {}
  },
  components: {
    Header, Footer
  },
  methods: {},
}
</script>

<style scoped>

</style>