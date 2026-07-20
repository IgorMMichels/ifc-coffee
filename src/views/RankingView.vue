<script setup lang="ts">
import { useCafeStore } from '@/stores/cafeStore'
import AppHeader from '@/components/Basic/AppHeader.vue'
import { Trophy, Medal, ArrowRight, Sprout } from 'lucide-vue-next'
import AppFooter from '@/components/Basic/AppFooter.vue';

const store = useCafeStore()
</script>

<template>
  <AppHeader />

  <main class="max-w-4xl mx-auto px-4 py-8">
    <div class="flex items-center gap-3 mb-2">
      <Trophy class="w-8 h-8 text-[#E5A91A]" />
      <h1 class="text-3xl font-bold text-[#3E2723]">Ranking Geral</h1>
    </div>
    <p class="text-gray-500 mb-8">Confira a classificação dos cafés avaliados.</p>

    <div class="space-y-3">
      <div
        v-for="(cafe, index) in store.ranking"
        :key="cafe.id"
        class="rankingCard"
      >
        <!-- Medalha / Posição -->
        <div class="flex items-center gap-4 flex-1">
          <div class="w-12 text-center">
            <Trophy v-if="index === 0" class="w-8 h-8 mx-auto text-[#E5A91A]" />
            <Medal v-else-if="index === 1" class="w-8 h-8 mx-auto text-gray-400" />
            <Medal v-else-if="index === 2" class="w-8 h-8 mx-auto text-amber-700" />
            <span v-else class="text-lg font-bold text-[#3E2723]">{{ index + 1 }}º</span>
          </div>

          <div class="flex-1">
            <h3 class="text-lg font-bold text-[#3E2723]">{{ cafe.nome }}</h3>
            <p class="text-sm text-gray-500 flex items-center gap-1"><Sprout class="w-4 h-4" /> {{ cafe.produtor }}</p>
          </div>

          <div class="text-right">
            <span
              class="text-2xl font-bold"
              :class="index === 0 ? 'text-[#E5A91A]' : 'text-[#3E2723]'"
            >
              {{ cafe.notamedia.toFixed(1) }}
            </span>
          </div>

          <router-link
            :to="`/cafe/${cafe.id}`"
            class="botaoDetalhes"
          >
            Detalhes
            <ArrowRight class="w-4 h-4" />
          </router-link>
        </div>
      </div>
    </div>

    <p class="text-center text-gray-400 mt-8">
      Total de cafés avaliados: {{ store.totalCafes }}
    </p>
  </main>
  <AppFooter/>
</template>

<style scoped>
.rankingCard {
  background: #ffffff;
  border-radius: 14px;
  padding: 1rem 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.rankingCard:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.botaoDetalhes {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  background: #3E2723;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.botaoDetalhes:hover {
  background: #E5A91A;
  color: #3E2723;
}
</style>
