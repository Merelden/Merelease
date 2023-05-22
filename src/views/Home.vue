<template>
  <Header></Header>
  <main>
        <section class="hero">
          <div class="hero__info">
            <h5 class="hero__title">
              LUXURY CAR SALE
            </h5>
            <div class="hero__choose">
              <router-link to="/fleet" class="hero__link">
                Choose your sportcar today
              </router-link>
            </div>
          </div>
        </section>
    <section class="about wrapper">
      <div class="about__header">
        <div class="about__header__block">
          <h2 class="about__header__title">
            ABOUT
          </h2>
          <p class="number">/01</p>
        </div>
        <div class="about__header__block">
          <p class="about__header__info">
            We offer the best deals
            in the world on beautiful
            luxury cars.
            Dynamic performance,
            top speed, and thrill of driving - these are all available to you
          </p>
        </div>
      </div>
      <div class="about__content">
        <div class="about__content__block">
          <img src="@/assets/img/about/smallCar.jpg" alt="smallCar" class="about__content__img_small">
          <p class="about__content__info">
            Explore 7,000+ luxury cars, supercars and exotic cars for sale worldwide in one simple search.
          </p>
        </div>
        <div class="about__content__block">
          <img src="@/assets/img/about/largeCar.jpeg" alt="largeCar" class="about__content__img_large ">
        </div>
      </div>
    </section>
    <section class="numbers wrapper">
      <div class="numbers__header">
        <h2 class="numbers__title">
          NUMBERS
        </h2>
        <p class="number">
          /02
        </p>
      </div>
      <div class="numbers__info">
        <div class="numbers__info__block">
          <h1 class="numbers__info__num" data-num="5000" id="num1">
            0
          </h1>
          <p class="numbers__info__text">
            CARS SOLD
          </p>
        </div>
        <div class="numbers__info__block">
          <h1 class="numbers__info__num" data-num="341" id="num2">
            0
          </h1>
          <p class="numbers__info__text">
            NUMBER OF SHOPS
          </p>
        </div>
        <div class="numbers__info__block">
          <h1 class="numbers__info__num" data-num="1525" id="num3">
            0
          </h1>
          <p class="numbers__info__text">
            EMPLOYEES
          </p>
        </div>
        <div class="numbers__info__block">
          <h1 class="numbers__info__num" data-num="1998" id="num4">
            0
          </h1>
          <p class="numbers__info__text">
            FOUNDED
          </p>
        </div>
      </div>
    </section>
    <section class="partner wrapper">
      <div class="partner__header">
        <h2 class="partner__header__title">
          PARTNER
        </h2>
        <p class="number">
          /03
        </p>
      </div>
      <div class="partner__info">
        <div class="partner__info__block">
          <img src="@/assets/img/partner/nissan.png" alt="nissan_main" class="partner__block__img">
          <p class="partner__block__title">
            Makoto Uchida
          </p>
          <p class="partner__block__subtitle">
            Japanese businessman, CEO of Nissan Motor Corporation.
          </p>
        </div>
        <div class="partner__info__block">
          <img src="@/assets/img/partner/toyota.png" alt="toyota_main" class="partner__block__img">
          <p class="partner__block__title">
            Akio Toyoda
          </p>
          <p class="partner__block__subtitle">
            Japanese businessman and current president of Toyota Motor Corporation.
          </p>
        </div>
        <!--            <div class="partner__info__block">-->
        <!--                <img src="/assets/img/partner/koenig.png" alt="koenig_main" class="partner__block__img">-->
        <!--                <p class="partner__block__title">-->
        <!--                    Christian von Koenigsegg-->
        <!--                </p>-->
        <!--                <p class="partner__block__subtitle">-->
        <!--                    Founder of the Swedish company Koenigsegg Automotive AB, which specializes in the production of sports cars.-->
        <!--                </p>-->
        <!--            </div>-->
        <div class="partner__info__block">
          <img src="@/assets/img/partner/lamborghini.png" alt="lamborghini_main" class="partner__block__img">
          <p class="partner__block__title">
            Stephan Winkelmann
          </p>
          <p class="partner__block__subtitle">
            CEO of the Italian company Lamborghini.
          </p>
        </div>
      </div>
    </section>
    <!--    <section class="gallery wrapper">-->
    <!--        <div class="gallery__header">-->
    <!--            <h2 class="gallery__header__title">-->
    <!--                GALLERY-->
    <!--            </h2>-->
    <!--            <p class="number">/04</p>-->
    <!--        </div>-->
    <!--        <div class="slider">-->
    <!--            <div class="carousel">-->
    <!--                <img src="./assets/img/slider/1.jpg" alt="slide" class="slide">-->
    <!--                <img src="./assets/img/slider/2.jpg" alt="slide" class="slide">-->
    <!--                <img src="./assets/img/slider/3.jpg" alt="slide" class="slide">-->
    <!--                <img src="./assets/img/slider/4.jpg" alt="slide" class="slide">-->
    <!--                <img src="./assets/img/slider/5.jpg" alt="slide" class="slide">-->
    <!--                <img src="./assets/img/slider/6.jpg" alt="slide" class="slide">-->
    <!--            </div>-->
    <!--        </div>-->
    <!--    </section>-->
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
  header {
    position: absolute;
    width: 100%;
    z-index: 100;
  }
  header >>> a {
    color: white;
  }
  header >>> .header__login {
    border: 1px solid white;
  }
  header >>> span {
    color: white;
  }
  .header__login >>> router-link {
    color: white;
  }
  .header__login__text:after {
    display: block;
    content: "";
    height: 1px;
    width: 0;
    color: white;
    background-color: black;
    transition: width 0.4s ease-in-out;
  }

  .header__login__text:hover:after,
  .header__login__text:focus:after {
    width: 100%;
  }

  .header__login__text:hover {
    color: white;
  }
</style>