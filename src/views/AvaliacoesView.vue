<script setup lang="ts">
import AppHeader from '@/components/Basic/AppHeader.vue'
import AvaliacaoForm from '@/components/avaliacoes/AvaliacaoForm.vue'
import AvaliacaoCard from '@/components/avaliacoes/AvaliacaoCard.vue'
import { useCafeStore } from '@/stores/cafeStore'
import { ClipboardList, Coffee } from 'lucide-vue-next'
import AppFooter from '@/components/Basic/AppFooter.vue'

const store = useCafeStore()
</script>

<template>
  <AppHeader />

  <main>
    <div class="cabecalho">
      <ClipboardList class="icone-cabecalho" />
      <div>
        <h1>Avaliações</h1>
        <p>Registre uma nova avaliação e acompanhe os cafés já avaliados.</p>
      </div>
    </div>

    <div class="layout">
      <section class="coluna-form">
        <div class="panel">
          <AvaliacaoForm />
        </div>
      </section>

      <section class="coluna-lista">
        <div class="lista-header">
          <h2><Coffee class="icone" /> Cafés Avaliados</h2>
          <span class="contador">{{ store.totalCafes }} registro{{ store.totalCafes !== 1 ? 's' : '' }}</span>
        </div>

        <div v-if="store.cafes.length === 0" class="vazio">
          <ClipboardList class="icone-vazio" />
          <p>Nenhum café avaliado ainda.</p>
          <p>Preencha o formulário ao lado para começar.</p>
        </div>

        <div v-else class="cards-rolagem">
          <AvaliacaoCard v-for="cafe in store.cafes" :key="cafe.id" :cafe="cafe" />
        </div>
      </section>
    </div>
  </main>
  <AppFooter/>
</template>

<style scoped>
main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.cabecalho {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.icone-cabecalho {
  width: 40px;
  height: 40px;
  color: #E5A91A;
  flex-shrink: 0;
}

.cabecalho h1 {
  font-size: 28px;
  font-weight: 700;
  color: #3E2723;
  margin: 0;
}

.cabecalho p {
  color: #6B7280;
  margin: 0.25rem 0 0 0;
  font-size: 15px;
}

.layout {
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 2rem;
  align-items: start;
}

.coluna-form {
  position: sticky;
  top: 6rem;
  align-self: start;
}

.panel {
  background: #ffffff;
  padding: 1.5rem 2rem;
  border-radius: 14px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.cards-rolagem {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.lista-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.lista-header h2 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 20px;
  font-weight: 700;
  color: #3E2723;
  margin: 0;
}

.icone {
  width: 20px;
  height: 20px;
  color: #E5A91A;
}

.contador {
  font-size: 14px;
  color: #6B7280;
  background: #F3F4F6;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  white-space: nowrap;
}

.vazio {
  text-align: center;
  padding: 3rem 0;
  color: #9CA3AF;
}

.icone-vazio {
  width: 48px;
  height: 48px;
  margin: 0 auto 0.5rem;
  opacity: 0.5;
}

.vazio p {
  margin: 0.25rem 0;
}

@media screen and (max-width: 900px) {
  .layout {
    grid-template-columns: 1fr;
  }

  .cards-rolagem {
    max-height: none;
    overflow-y: visible;
  }
}

@media screen and (max-width: 768px) {
  main {
    padding: 1rem;
  }

  .panel {
    padding: 1rem;
  }

  .cabecalho h1 {
    font-size: 22px;
  }
}
</style>
