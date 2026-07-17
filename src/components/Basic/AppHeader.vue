<script setup lang="ts">
import { ref, nextTick, onMounted, onUnmounted } from 'vue'
import { Search } from 'lucide-vue-next'
import Button from '../ui/button/Button.vue';
</script>

<template>
  <div class="header-root">
    <header ref="headerEl">
      <div class="flex justify-between items-center w-full gap-4">

        <div class="flex-shrink-0 w-1/4">
        <router-link class="whitespace-nowrap" to="/"><img src="/logo-nobg.png " alt="logo" class="w-30" /></router-link>
        </div>


        <div
          class="navegacao relative flex-1 max-w-2xl h-14 flex items-center justify-center"
        >

          <nav
            class="flex gap-8 items-center transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] absolute"
          >
            <router-link class="link-nav whitespace-nowrap" to="/">Início</router-link>
            <router-link class="link-nav whitespace-nowrap" to="/avaliacao">Avaliar</router-link>
          </nav>

          </div>

        <div class="shrink-0 w-1/4 flex justify-end">
          <router-link to="/ranking">
            <Button
              variant="outline"
              class="bg-[#E5A91A] text-white hover:bg-[#E5A91A]/90 hover:text-white w-30 botao"
            >Ranking</Button>
          </router-link>
        </div>

      </div>
    </header>
    <div ref="spacerEl" class="header-spacer" />
  </div>
</template>

<style scoped>
header {
  position: fixed;
  top: 1rem;
  left: 10vw;
  right: 10vw;
  z-index: 9999;
  border-radius: 16px;
  padding: 0.6rem 1.2rem;
  background-color: rgba(255, 255, 255, 1);
  backdrop-filter: blur(8px);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 16px;
  transform: translateZ(0);
}

.header-spacer {
  margin-top: 1rem;
  width: 100%;
  pointer-events: none;
}

.navegacao {
  position: relative;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 10px;
  border-radius: 12px;
  padding: 0.5rem 1rem;
}

.link-nav {
  font-weight: 500;
  color: #374151;
  text-decoration: none;
  position: relative;
  padding: 0.25rem 0;
  transition: color 200ms ease;
}

.link-nav:hover {
  color: #1f2937;
}

.link-nav:after {
  display: block;
  content: '';
  width: 100%;
  border-bottom: solid 2px #E5A91A;
  transform: scaleX(0);
  transition: transform 250ms ease-in-out;
  margin-top: 2px;
}

.link-nav:hover:after {
  transform: scaleX(1);
}

.botao {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.botao:hover {
  transform: scale(1.03);
  box-shadow: 0 0 20px rgba(229, 169, 26, .55)
}

.botao:active {
  transform: scale(1.06);
}
</style>
