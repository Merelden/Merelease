<template>
  <Header></Header>
  <section class="auth">
    <h1 class="auth__title">
      Register
    </h1>
    <div class="registration__content">
      <div class="registration__content__info">
        <div class="registration-content-block">
          <input v-model="formData.login" name="login" type="text" placeholder="Login" class="form__field">
          <input v-model="formData.email" type="email" placeholder="Email" class="form__field">
          <input v-model="formData.password" type="password" placeholder="Password" class="form__field">
          <input v-model="formData.password_confirmation" type="password" placeholder="Password" class="form__field">
          <div class="sign__block">
            <button @click="register" class="form__btn">Register</button>
            <p class="form__text">Already registered??  <router-link to="/auth">Sign In</router-link></p>
          </div>
        </div>
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
  components: {Footer, Header},
  data() {
    return {
      formData: {
        login: null,
        email: null,
        password: null,
        password_confirmation: null
      },
    }
  },
  methods: {
    async register() {
      console.log(this.formData)
      let res = await fetch('http://localhost/Merelease/php/regist.php', {
        method: 'POST',
        body: JSON.stringify(this.formData)
      })
      let json = await res.json()
      if (res.ok) this.$router.push('/auth')

    }
  }
}
</script>

<style scoped>

</style>

<style scoped>

</style>