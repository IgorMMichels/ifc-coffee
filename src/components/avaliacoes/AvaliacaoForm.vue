<script setup lang="ts">
import { ref, computed } from 'vue'
import { useCafeStore } from '@/stores/cafeStore'

const store = useCafeStore()

const nome = ref('')
const produtor = ref('')
const aroma = ref(0)
const sabor = ref(0)
const acidez = ref(0)
const corpo = ref(0)
const finalizacao = ref(0)
const observacao = ref('')
const avaliador = ref('')
const erro = ref('')

const mediaPreview = computed(() => {
  const m = (aroma.value + sabor.value + acidez.value + corpo.value + finalizacao.value) / 5
  return Math.round(m * 10) / 10
})

function enviar() {
  erro.value = ''
  if (!nome.value.trim()) { erro.value = 'Nome do café é obrigatório.'; return }
  if (!produtor.value.trim()) { erro.value = 'Produtor é obrigatório.'; return }

  store.adicionarCafe({
    nome: nome.value.trim(),
    produtor: produtor.value.trim(),
    aroma: aroma.value,
    sabor: sabor.value,
    acidez: acidez.value,
    corpo: corpo.value,
    finalizacao: finalizacao.value,
    observacao: observacao.value.trim(),
    avaliador: avaliador.value.trim() || 'Anônimo'
  })

  nome.value = ''
  produtor.value = ''
  aroma.value = 0
  sabor.value = 0
  acidez.value = 0
  corpo.value = 0
  finalizacao.value = 0
  observacao.value = ''
  avaliador.value = ''
}
</script>

<template>
  <form @submit.prevent="enviar">
    <h2 class="tituloForm">Nova Avaliação</h2>

    <p v-if="erro" class="erro-msg">{{ erro }}</p>

    <div class="campo">
      <label>Nome do Café <span class="obrigatorio">*</span></label>
      <input v-model="nome" type="text" placeholder="Ex: Bourbon Amarelo" />
    </div>

    <div class="campo">
      <label>Produtor <span class="obrigatorio">*</span></label>
      <input v-model="produtor" type="text" placeholder="Ex: Fazenda Boa Vista" />
    </div>

    <div class="notas-grid">
      <div v-for="item in [
        { label: 'Aroma', val: aroma },
        { label: 'Sabor', val: sabor },
        { label: 'Acidez', val: acidez },
        { label: 'Corpo', val: corpo },
        { label: 'Finalização', val: finalizacao }
      ]" :key="item.label" class="nota-item">
        <label>{{ item.label }}</label>
        <input v-model.number="item.val" type="number" min="0" max="10" step="0.1" />
      </div>
    </div>

    <div class="media-box">
      <span>Média:</span>
      <strong>{{ mediaPreview.toFixed(1) }}</strong>
    </div>

    <div class="campo">
      <label>Avaliador</label>
      <input v-model="avaliador" type="text" placeholder="Seu nome" />
    </div>

    <div class="campo">
      <label>Observações</label>
      <textarea v-model="observacao" placeholder="Notas sensoriais..." rows="2"></textarea>
    </div>

    <button type="submit" class="btn-salvar">Salvar Avaliação</button>
  </form>
</template>

<style scoped>
.tituloForm {
  font-size: 22px;
  font-weight: 700;
  color: #3E2723;
  margin: 0 0 1.5rem 0;
}

.erro-msg {
  color: #dc2626;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-size: 14px;
  margin-bottom: 1rem;
}

.campo {
  margin-bottom: 1rem;
}

.campo label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #3E2723;
  margin-bottom: 0.25rem;
}

.campo input,
.campo textarea {
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  padding: 0.5rem 0.75rem;
  font-size: 14px;
  outline: none;
  transition: border 0.2s;
}

.campo input:focus,
.campo textarea:focus {
  border-color: #E5A91A;
}

.obrigatorio {
  color: #dc2626;
}

.notas-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.nota-item {
  text-align: center;
}

.nota-item label {
  display: block;
  font-size: 12px;
  color: #6B7280;
  margin-bottom: 0.25rem;
}

.nota-item input {
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  padding: 0.4rem;
  font-size: 14px;
  text-align: center;
  outline: none;
  transition: border 0.2s;
}

.nota-item input:focus {
  border-color: #E5A91A;
}

.media-box {
  background: #FFF8E1;
  border: 1px solid #E5A91A4D;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  font-size: 14px;
  color: #3E2723;
}

.media-box strong {
  font-size: 28px;
  color: #E5A91A;
}

.btn-salvar {
  width: 100%;
  background: #3E2723;
  color: white;
  font-weight: 600;
  padding: 0.75rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 16px;
}

.btn-salvar:hover {
  background: #E5A91A;
  color: #3E2723;
  box-shadow: 0 4px 20px rgba(229, 169, 26, 0.4);
}

@media screen and (max-width: 768px) {
  .notas-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
