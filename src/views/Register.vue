<template>
  <Header></Header>
  <section class="auth">
    <h1 class="auth__title">
      Register
    </h1>
    <div class="auth__content">
      <div class="auth__content__form">
        <form action="" method="post" class="form">
          <input type="text" placeholder="Name" class="form__field">
          <input type="text" placeholder="Surname" class="form__field">
          <input type="email" placeholder="Email" class="form__field">
          <input type="number" placeholder="Phone" class="form__field">
          <input type="password" placeholder="Password" class="form__field">
          <button class="form__btn">Sign In</button>
          <p class="form__text">Already registered??  <a href="#">Sign In</a></p>
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
  name: "Register.vue",
  components: {Footer, Header}
}
</script>

<style scoped>

</style>

<style scoped>

</style>