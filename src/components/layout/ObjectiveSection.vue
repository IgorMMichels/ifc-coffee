<script setup lang="ts">
import { Target, Coffee, BarChart3, Heart, Trophy } from 'lucide-vue-next'
</script>

<template>
  <div class="mx-4 md:mx-12 lg:mx-32 my-10">

    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div class="objectiveCard">
        <Coffee class="w-10 h-10 text-[#E5A91A] mb-3" />
        <h4>Degustar</h4>
        <p>Use seus sentidos para dar notas justas.</p>
      </div>

      <div class="objectiveCard">
        <BarChart3 class="w-10 h-10 text-[#E5A91A] mb-3" />
        <h4>Comparar</h4>
        <p>Veja os destaques do campeonato.</p>
      </div>

      <div class="objectiveCard">
        <Heart class="w-10 h-10 text-[#E5A91A] mb-3" />
        <h4>Valorizar</h4>
        <p>Incentive a qualidade e os produtores.</p>
      </div>

      <div class="objectiveCard">
        <Trophy class="w-10 h-10 text-[#E5A91A] mb-3" />
        <h4>Reconhecer</h4>
        <p>Descubra os melhores cafés do concurso.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.objectiveCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

h4 {
  color: #3E2723;
  font-size: 22px;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
}

p {
  color: #6B7280;
  margin: 0;
  font-size: 16px;
}
</style>
