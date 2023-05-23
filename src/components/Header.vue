<template>
  <header>
    <div class="header__content">
      <h1 class="header__logo">
        <router-link to="/" class="header__link">MERELEASE</router-link>
      </h1>
      <nav class="header__nav">
        <router-link to="/" class="header__nav-item header__link">Home</router-link>
        <router-link to="/fleet" class="header__nav-item header__link">Our fleet</router-link>
        <router-link to="/journal" class="header__nav-item header__link">Journal</router-link>
      </nav>
      <div class="header__login">
        <router-link to="/register" class="header__login__text header__link">Register</router-link>
        <span>/</span>
        <router-link to="/authorization" class="header__login__text header__link">
          Sign In
        </router-link>
      </div>
      <router-link to="/AddProduct">Add Product</router-link>

    </div>

  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
.header__content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-inline: 50px;
  position: relative;
}

.header__logo {
  color: black;
  font-size: var(--xl);
}

.header__nav {
  display: flex;
  gap: 100px;
}

.header__login {
  display: flex;
  align-items: center;
  color: black;
  gap: 5px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
}

.header__login__text {
  font-size: var(--xs);
}
.header__login__text:after {
  display: block;
  content: "";
  height: 1px;
  width: 0;
  background-color: white;
  transition: width 0.4s ease-in-out;
}

.header__login__text:hover:after,
.header__login__text:focus:after {
  width: 100%;
}

.header__login__text:hover {
}
.header__login__text {
  color: black;
}
</style>