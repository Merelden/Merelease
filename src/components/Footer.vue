<template>
  <footer>
    <div class="footer__content wrapper">
      <h1 class="footer__logo logo">Merelease</h1>
      <div class="footer__contact">
        <h1 class="footer__title">
          OUR CONTACT INFO
        </h1>
        <div class="footer__text">
          <a href="tel:+79028645874">Phone: +7 902 864 58 74</a>
          <a href="mailto:merelden.77@gmail.com">Email: merelden.77@gmail.com</a>
        </div>
      </div>
      <div class="footer__social">
        <h1 class="footer__title">
          OUR SOCIAL
        </h1>
        <div class="footer__text">
          <span>Follow us on Vkontakte</span>
          <span>Follow us on Youtube</span>
          <span>Follow us on Instagram</span>
        </div>
      </div>
      <div class="footer__address">
        <h1 class="footer__title">
          OUR ADDRESS
        </h1>
        <div class="footer__text">
          <span>Pobřežní 249/46</span>
          <span>186 00</span>
          <span>Praha 8</span>
        </div>
      </div>
    </div>
    <div class="footer__copyright">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
           xmlns:xlink="http://www.w3.org/1999/xlink">
        <rect width="16" height="16" fill="url(#pattern0)"/>
        <defs>
          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0_16_254" transform="scale(0.0208333)"/>
          </pattern>
          <image id="image0_16_254" width="48" height="48"
                 xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD/UlEQVR4nO2Zy2/VRRTHf5ELxtAEazHB1rAnRhe0Vle6IFFI6YYCccNj0xh8JihWTSwbqlsIGl4lNBBXaGI0PnYt8R+QplZLUYMQWqhttJi0ReRDDp4Jk2FmOr97f7etyf0mN7m5c+Y8fr8zZ77n3CyroYYaKgbwAPAs8D7wOTAETAE39TOlv30GvAc8I3uyxQbwOPARcIX8uAx8CDQthuMNwBFgjsoxC3wCPLJQzr8E/OFx5CrQC+wA1muQy/WzGmgGdgIngTHP/glgezUdL+lTd9EPtAHLcuraDAx49H0s60U7/xDwlWPoAvBCAbo3AaOO7i/FZlHOlzzO9wErCzGQ3bVRB5z2BFH5m/CkzQeFeO231e3YOlzEgU12Xsvqq8C3wE/A31plpMx+B+wD1uYMYmu5zjc41aYvItsIHAduMT/+Ac5IsFlYn6wbXAfqK02dC6GcB9qBafLjL2Bb5ExcLDuVNBXsS+rFgNxrwL+Uj9vA65HqZCBp2JgnAKEHBv2RJ+9z/gdxClgnbw1YBTwJ7AV+DATREbBxzpLrSXV+mcNt2gI576bNDNAZI2mq+22VtTEakJfLzuBSEgFUVmnTg/tqMXDC4/xzSU/onmPCUg1+jdxB45Zca4pyocQGvYHz4VabzlTnLT1CPy4pK90YkTtl2elKUSx83mBH4OC6OV81bg/ssmydTdkgjYfBes/6N04A3ipSFIAWy9ZgyoZJa0ODZ33ECWBdtZwXAI9atiay+eDU/xWe9RtOAHVZFQE8aNmaLSKA6aUewOQ8KfTzUk+hIWtDs2f9ayeAN6rlvAB4Ou8htsvoTs+60GUb56tcRnfnLaMytzE4GbjIhBLbeLnMi+w34BdgQ0ROur9cF5kMnQzGAlTimBOAsMXnczjf7lCJkQiVuGbJtaRO2eR6j5G5x4A/PUHsSSBz76isjZFIoPnInG6UiZnBQCQFfB3YIPAm8IRFp59SFjqck05/b8kdSHJeNzY5T2lTQO6VxDYyhNtSFCIPyGa76Q2NKpBxn8Fo6MJSQ9Ie5oWkYEekpZTDbXAol/NWUy/jPoPTEdk1wFFPdYo19cGhLvCpJX+trKZeFW13jHcnpN4eveyGlTfNaFEQFvtWbBohAPY7NrdklUBnlclBVGhrv2PrYBFKSzrms3GmSBLHfzlvp43gizwD45ThrhvExVB1yqm7zTmwxvlihrvOmzjsOZTntEkv5dQll5Rd5w0OFfbkA8a3Ote7wbg24Lu0DZQ/NVboZ7X+tlu5TWj/lqo57gRRr2/DpQTlYEaf+sML4rxnwNUD/F6G48JtDgivWnDHAwSwFXhXOLvyoUltT+f0+3ld69ImZfH/Zq2hhuz/jztt0/mW1P4rfQAAAABJRU5ErkJggg=="/>
        </defs>
      </svg>
      <p class="footer__copyright__text">
        Copyright 2023 merelease.com
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
footer {
  background: black;
  color: white;
}

.footer__content {
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
}

.footer__logo {
  font-size: var(--xl);
}

.footer__block {
  display: flex;
  flex-direction: column;
}
.footer__text {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 25px;
  font-size: var(--sm);
}
.footer__title {
  font-size: var(--md);
}
.footer__copyright {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding-top: 200px;
  padding-bottom: 30px;
}
.footer__text >>> a {
  color: white;
}
</style>