
<script setup lang="ts">

</script>

<template>

  <main class="grid min-h-full place-items-center bg-[#f6ead8] px-6 py-24 h-240 sm:py-32 lg:px-8">
    <div class="text-center">
      <img src="/404img.png" alt="" class="block m-auto">
      <h1 class="mt-4 text-5xl font-semibold tracking-tight text-balance text-[#E5A91A] sm:text-7xl">Café Não Encontrado</h1>
      <p class="mt-6 text-lg text-pretty text-[#3E2723] font-bold sm:text-xl/8">Parece que seu sabor de café não se encontra por aqui...</p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <RouterLink
          to="/"
          class="group inline-flex items-center gap-2 rounded-lg bg-[#3E2723] px-5 py-3 text-sm font-semibold text-[#f8efe2] shadow-[0_14px_32px_rgba(62,39,35,0.28)] ring-1 ring-[#6b473f]/40 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#5d3b34] hover:shadow-[0_18px_36px_rgba(62,39,35,0.36)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A91A]"
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

</style>
