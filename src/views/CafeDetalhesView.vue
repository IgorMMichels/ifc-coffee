<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { useCafeStore } from '@/stores/cafeStore'
import AppHeader from '@/components/Basic/AppHeader.vue'
import { Coffee, ArrowLeft, Star, Calendar, User, Award } from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()
const store = useCafeStore()

const id = Number(route.params.id)
const cafe = store.cafePorId(id)
</script>

<template>
  <AppHeader />

  <main class="max-w-2xl mx-auto px-4 py-8">
    <button @click="router.push('/ranking')" class="flex items-center gap-1 text-sm text-gray-500 hover:text-[#3E2723] mb-6 cursor-pointer">
      <ArrowLeft class="w-4 h-4" /> Voltar ao Ranking
    </button>

    <div v-if="!cafe" class="text-center py-16">
      <Coffee class="w-16 h-16 mx-auto text-gray-300 mb-4" />
      <h2 class="text-2xl font-bold text-[#3E2723]">Café não encontrado</h2>
      <p class="text-gray-500 mt-2">Esse café não existe ou foi removido.</p>
    </div>

    <div v-else class="bg-white rounded-xl shadow-md p-8">
      <div class="flex items-start justify-between mb-6">
        <div>
          <h1 class="text-3xl font-bold text-[#3E2723] flex items-center gap-2">
            <Coffee class="w-7 h-7 text-[#E5A91A]" />
            {{ cafe.nome }}
          </h1>
          <p class="text-gray-500 flex items-center gap-1 mt-1">
            <User class="w-4 h-4" /> {{ cafe.produtor }}
          </p>
        </div>
        <div class="text-center">
          <span class="text-4xl font-bold text-[#E5A91A]">{{ cafe.notamedia.toFixed(1) }}</span>
          <p class="text-xs text-gray-400">média</p>
        </div>
      </div>

      <div class="space-y-3 mb-6">
        <div v-for="item in [
          { label: 'Aroma', valor: cafe.aroma },
          { label: 'Sabor', valor: cafe.sabor },
          { label: 'Acidez', valor: cafe.acidez },
          { label: 'Corpo', valor: cafe.corpo },
          { label: 'Finalização', valor: cafe.finalizacao }
        ]" :key="item.label">
          <div class="flex items-center justify-between text-sm mb-1">
            <span class="text-gray-600">{{ item.label }}</span>
            <span class="font-bold text-[#3E2723]">{{ item.valor.toFixed(1) }}</span>
          </div>
          <div class="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              class="h-full rounded-full"
              :class="item.valor >= 7 ? 'bg-green-500' : item.valor >= 5 ? 'bg-yellow-500' : 'bg-red-500'"
              :style="{ width: (item.valor / 10) * 100 + '%' }"
            ></div>
          </div>
        </div>
      </div>

      <p v-if="cafe.observacao" class="text-gray-600 italic bg-gray-50 rounded-lg p-4 mb-4">
        "{{ cafe.observacao }}"
      </p>

      <div class="flex items-center justify-between text-sm text-gray-400 border-t border-gray-100 pt-4">
        <span class="flex items-center gap-1"><Star class="w-4 h-4" /> {{ cafe.avaliador }}</span>
        <span class="flex items-center gap-1"><Calendar class="w-4 h-4" /> {{ cafe.data }}</span>
        <span class="flex items-center gap-1"><Award class="w-4 h-4" /> ID {{ cafe.id }}</span>
      </div>
    </div>
  </main>
</template>
