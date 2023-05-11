<template>
  <Header></Header>
  <section class="auth">
    <h1 class="auth__title">
      Sign In
    </h1>
    <div class="auth__content">
      <div class="auth__content__form">
        <form action="" method="post" class="form">
          <input type="text" placeholder="Name" class="form__field">
          <input type="password" placeholder="Password" class="form__field">
          <button class="form__btn">Sign In</button>
          <p class="form__text">Don`t have an account?  <a href="#">Register for free</a></p>
        </form>
        <img src="@/assets/img/register/car_register.png" alt="car_register">
      </div>
    </div>
  </section>
  <Footer></Footer>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Auth.vue",
  components: {Footer, Header}
}
</script>

<style scoped>

</style>