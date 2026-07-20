<script setup lang="ts">
import type { Cafe } from '@/stores/cafeStore'
import { Coffee, User, Star, Calendar } from 'lucide-vue-next'

defineProps<{
  cafe: Cafe
}>()
</script>

<template>
  <div class="card">
    <div class="card-header">
      <div>
        <h3><Coffee class="icon" /> {{ cafe.nome }}</h3>
        <p class="produtor"><User class="icon" /> {{ cafe.produtor }}</p>
      </div>
      <div class="nota">
        <strong>{{ cafe.notamedia.toFixed(1) }}</strong>
        <span>média</span>
      </div>
    </div>

    <div class="notas">
      <div v-for="item in [
        { label: 'Aroma', valor: cafe.aroma },
        { label: 'Sabor', valor: cafe.sabor },
        { label: 'Acidez', valor: cafe.acidez },
        { label: 'Corpo', valor: cafe.corpo },
        { label: 'Finalização', valor: cafe.finalizacao }
      ]" :key="item.label" class="nota-bar">
        <div class="barra">
          <div class="preenchimento" :style="{ width: (item.valor / 10) * 100 + '%' }"
            :class="item.valor >= 7 ? 'verde' : item.valor >= 5 ? 'amarelo' : 'vermelho'">
          </div>
        </div>
        <div class="rotulo">
          <span>{{ item.label }}</span>
          <span>{{ item.valor.toFixed(1) }}</span>
        </div>
      </div>
    </div>

    <p v-if="cafe.observacao" class="obs">"{{ cafe.observacao }}"</p>

    <div class="card-footer">
      <span><Star class="icon" /> {{ cafe.avaliador }}</span>
      <span><Calendar class="icon" /> {{ cafe.data }}</span>
    </div>
  </div>
</template>

<style scoped>
.card {
  background: #ffffff;
  border-radius: 14px;
  padding: 1.25rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: rgba(0, 0, 0, 0.45) 0px 8px 25px;
}

.icon {
  width: 16px;
  height: 16px;
  color: #E5A91A;
}

.card-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.card-header h3 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 18px;
  font-weight: 700;
  color: #3E2723;
  margin: 0;
}

.produtor {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 14px;
  color: #6B7280;
  margin: 0.25rem 0 0 0;
}

.nota {
  text-align: center;
}

.nota strong {
  display: block;
  font-size: 24px;
  color: #E5A91A;
}

.nota span {
  font-size: 12px;
  color: #9CA3AF;
}

.notas {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.nota-bar {
  flex: 1;
}

.barra {
  height: 8px;
  background: #F3F4F6;
  border-radius: 999px;
  overflow: hidden;
  margin-bottom: 0.25rem;
}

.preenchimento {
  height: 100%;
  border-radius: 999px;
  transition: width 0.5s;
}

.verde { background: #22C55E; }
.amarelo { background: #EAB308; }
.vermelho { background: #EF4444; }

.rotulo {
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  color: #6B7280;
}

.obs {
  font-size: 14px;
  color: #6B7280;
  font-style: italic;
  border-top: 1px solid #F3F4F6;
  padding-top: 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #9CA3AF;
  border-top: 1px solid #F3F4F6;
  padding-top: 0.5rem;
  margin-top: 0.5rem;
}

.card-footer span {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
</style>
