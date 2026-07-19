<script setup lang="ts">
import { Coffee } from 'lucide-vue-next'
import Button from '../ui/button/Button.vue'
import { useCafeStore } from '@/stores/cafeStore.ts';

const store
</script>

<template>
  <div class="banner flex justify-between items-center">
    <div>
      <h2>Campeonato de Avaliação de Qualidade de Café</h2>
      <h4>
        Avalie, compare e descubra os melhores cafés especiais através dos seus sentidos utilizando
        a metodologia SCA.
      </h4>
      <router-link to="/avaliacao"
        ><Button class="w-100 to-background">Ver Avaliações <Coffee /></Button
      ></router-link>
    </div>
    <div>
      <img src="/logo.svg" alt="" />
    </div>
    <div class="grid grid-cols-3 gap-16 mx-5">
      <div>

      </div>
    </div>
  </div>
</template>

<style scoped>
button {
  background-color: #3E2723;
  color: #ffffff;
  transition: 0.3s all ease;
  cursor: pointer;
  font-family: 'Outfit';
}

* {
  font-family: 'Outfit';
}

button:hover {
  background-color: #E5A91A;
  color: #3E2723;
  transform: translateY(-3px);
  box-shadow: rgba(229, 169, 26, 0.5) 0px 5px 15px;
}

.banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 2rem;
  padding: 3rem 5rem;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

h2 {
  font-size: 90px;
  margin: 2rem 0 0 0;
  color: #E5A91A;
  text-shadow: 0 2px 8px rgba(62, 39, 35, 0.15);
}

h4 {
  color: #3E2723;
  margin: 1rem 15rem 3rem 0;
  font-size: 27px;
}

img {
  margin: 0 1rem 0 3rem;
  max-width: 100%;
}

@media screen and (max-width: 768px) {
  .banner {
    flex-direction: column;
    padding: 2rem 1.5rem;
    text-align: center;
  }

  h2 {
    font-size: 38px;
    text-align: center;
    width: 100%;
  }

  h4 {
    font-size: 17px;
    margin: 1rem 2rem 2rem 2rem;
  }

  img {
    margin: 1.5rem 0 0 0;
    width: 100%;
  }

  button {
    width: 100%;
  }
}
</style>
