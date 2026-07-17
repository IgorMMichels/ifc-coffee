
<script setup lang="ts">

</script>

<template>

  <main class="grid min-h-full place-items-center bg-[#FDF8EE] px-6 py-24 sm:py-32 lg:px-8">]
    <div class="text-center">
      <svg class="coffee-svg" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
        <!-- Poça de Café -->
        <path d="M40 130 C 60 145, 140 145, 170 125 C 190 110, 160 90, 120 95 C 80 100, 20 110, 40 130 Z" fill="#3E2723" class="coffee-puddle" />
        <!-- Corpo da Xícara Tombada -->
        <path d="M120 40 L60 80 L75 110 L135 70 Z" fill="#E5A91A" />
        <!-- Borda / Abertura da xícara -->
        <ellipse cx="90" cy="60" rx="35" ry="15" transform="rotate(33 90 60)" fill="#FDF8EE" stroke="#E5A91A" stroke-width="4"/>
        <!-- Café dentro da xícara -->
        <ellipse cx="90" cy="60" rx="28" ry="10" transform="rotate(33 90 60)" fill="#3E2723" />
        <!-- Alça da Xícara -->
        <path d="M125 45 C 150 40, 155 70, 130 80" fill="none" stroke="#E5A91A" stroke-width="8" stroke-linecap="round" />
        <!-- Gotas animadas (Opcional: você pode animar com CSS) -->
        <circle cx="150" cy="115" r="4" fill="#3E2723" class="drop" />
        <circle cx="165" cy="105" r="2.5" fill="#3E2723" class="drop" />
      </svg>
      <h1 class="mt-4 text-5xl font-semibold tracking-tight text-balance text-[#E5A91A] sm:text-7xl">Café Não Encontrado</h1>
      <p class="mt-6 text-lg text-pretty text-[#3E2723] font-bold sm:text-xl/8">Parece que seu sabor de café não se encontra por aqui...</p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <a href="#" class="rounded-md bg-[#3E2723] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#5e3b35]focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5e3b35]">Voltar para Página inicial <span aria-hidden="true">&rarr;</span></a>
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>
