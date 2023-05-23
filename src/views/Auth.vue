<template>
  <Header></Header>
  <section class="auth">
    <h1 class="auth__title">
      Sign In
    </h1>
    <div class="auth__content">
      <div class="auth__content__form">
        <form @submit.prevent="login" method="post" class="form">
          <input v-model="formData.login" type="text" placeholder="Login" class="form__field">
          <input v-model="formData.password" type="password" placeholder="Password" class="form__field">
          <button class="form__btn">Sign In</button>
          <p class="form__text">Don`t have an account?  <router-link to="/register">Register for free</router-link></p>
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
  components: {Footer, Header},
  data(){
    return {
      formData: {
        login: '',
        password: ''
      }
    }
  },
  methods: {
    async login(){
      let formData = new FormData()
      formData.append('login', this.formData.login)
      formData.append('password', this.formData.password)
      let res = await fetch('http://localhost/Merelease/php/login.php', {
        method: 'POST',
        body: JSON.stringify(this.formData)
      })
      let json = await res.json()

      if(res.ok) {
        localStorage.setItem('user', JSON.stringify(json.userData))
        alert('заепися пахнет пися');
        this.$router.push('/')
      }
    }
  }
}
</script>

<style scoped>

</style>