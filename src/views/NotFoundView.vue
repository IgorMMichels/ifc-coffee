<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="not-found-page grid min-h-[100vh] place-items-center px-6 py-20 sm:py-28 lg:px-8">
    <div class="text-center">
      <img
        src="/404img.png"
        alt="Ilustração de café não encontrado"
        class="mx-auto block w-full max-w-[320px] drop-shadow-[0_16px_35px_rgba(62,39,35,0.22)]"
      />

      <h1 class="mt-5 text-4xl font-semibold tracking-tight text-[#E5A91A] sm:text-6xl">
        Café Não Encontrado
      </h1>

      <p class="mx-auto mt-5 max-w-2xl text-lg font-bold text-[#3E2723] sm:text-xl">
        Parece que seu sabor de café não se encontra por aqui...
      </p>

      <div class="mt-10 flex items-center justify-center gap-x-6">
        <RouterLink
          to="/"
          class="group inline-flex items-center gap-2 rounded-full bg-[#3E2723] px-5 py-3 text-sm font-semibold text-[#f8efe2] shadow-[0_14px_32px_rgba(62,39,35,0.28)] ring-1 ring-[#6b473f]/40 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#5d3b34] hover:shadow-[0_18px_36px_rgba(62,39,35,0.36)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A91A]"
        >
          Voltar para Página inicial
          <span
            aria-hidden="true"
            class="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </RouterLink>
      </div>
    </div>
  </main>
</template>

<style scoped>
.not-found-page {
  background:
    radial-gradient(circle at top, rgba(255, 255, 255, 0.7), transparent 28%),
    linear-gradient(135deg, #f6ead8 0%, #f1dfbf 100%);
}

img {
  animation: floatCup 3.6s ease-in-out infinite;
}

@keyframes floatCup {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}
</style>
