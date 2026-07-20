<script setup lang="ts">
import { Coffee, Award, Clock } from 'lucide-vue-next'
import { useCafeStore } from '@/stores/cafeStore'

const store = useCafeStore()
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mx-4 md:mx-12 lg:mx-32 my-10">
    <div class="miniCard">
      <Coffee class="w-8 h-8 text-[#E5A91A]" />
      <h3>{{ store.totalCafes }}</h3>
      <h4>Cafés Participantes</h4>
    </div>

    <div class="miniCard">
      <Award class="w-8 h-8 text-[#E5A91A]" />
      <h3>{{ store.melhorNota.toFixed(1) }}</h3>
      <h4>Maior Nota</h4>
    </div>

    <div class="miniCard">
      <Clock class="w-8 h-8 text-[#E5A91A]" />
      <h3 v-if="store.ultimaAvaliacao">{{ store.ultimaAvaliacao.nome }}</h3>
      <h3 v-else>---</h3>
      <h4 v-if="store.ultimaAvaliacao">{{ store.ultimaAvaliacao.data }}</h4>
      <h4 v-else>Última Avaliação</h4>
    </div>
  </div>
</template>

<style scoped>
.miniCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  text-align: center;
  gap: 0.25rem;
}

h3 {
  color: #E5A91A;
  font-size: 48px;
  font-weight: 700;
  margin: 0;
  line-height: 1.1;
}

h4 {
  color: #3E2723;
  font-size: 20px;
  font-weight: 500;
  margin: 0;
}
</style>
