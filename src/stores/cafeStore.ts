import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface Cafe {
  id: number
  nome: string
  produtor: string
  aroma: number
  sabor: number
  acidez: number
  corpo: number
  finalizacao: number
  notamedia: number
  observacao: string
  avaliador: string
  data: string
}

export const useCafeStore = defineStore('cafe', () => {
  const cafes = ref<Cafe[]>([
    {
      id: 1,
      nome: 'Bourbon Amarelo',
      produtor: 'Fazenda Boa Vista',
      aroma: 9,
      sabor: 9.5,
      acidez: 8.5,
      corpo: 9,
      finalizacao: 9.5,
      notamedia: 9.1,
      observacao: 'Doçura intensa, corpo aveludado',
      avaliador: 'Eduardo Pereira',
      data: '2026-07-15'
    },
    {
      id: 2,
      nome: 'Arara',
      produtor: 'Sítio das Flores',
      aroma: 8,
      sabor: 9,
      acidez: 8,
      corpo: 8.5,
      finalizacao: 9,
      notamedia: 8.5,
      observacao: 'Equilibrado, frutado e persistente',
      avaliador: 'Eduardo Pereira',
      data: '2026-07-15'
    },
    {
      id: 3,
      nome: 'Catuaí Vermelho',
      produtor: 'Fazenda Horizonte',
      aroma: 8.5,
      sabor: 8.7,
      acidez: 8,
      corpo: 8.2,
      finalizacao: 8.4,
      notamedia: 8.4,
      observacao: 'Clássico brasileiro, corpo médio',
      avaliador: 'Eduardo Pereira',
      data: '2026-07-15'
    },
    {
      id: 4,
      nome: 'Mundo Novo',
      produtor: 'Fazenda Monte Alegre',
      aroma: 7.8,
      sabor: 8.2,
      acidez: 7.5,
      corpo: 8.8,
      finalizacao: 8,
      notamedia: 8.1,
      observacao: 'Corpo encorpado, acidez baixa',
      avaliador: 'Eduardo Pereira',
      data: '2026-07-15'
    },
    {
      id: 5,
      nome: 'Topázio',
      produtor: 'Fazenda Santa Clara',
      aroma: 8.7,
      sabor: 9,
      acidez: 8.4,
      corpo: 8.6,
      finalizacao: 8.8,
      notamedia: 8.7,
      observacao: 'Muito doce, final limpo',
      avaliador: 'Eduardo Pereira',
      data: '2026-07-15'
    },
    {
      id: 6,
      nome: 'Icatu',
      produtor: 'Sítio Vale Verde',
      aroma: 8,
      sabor: 8.4,
      acidez: 8.6,
      corpo: 8,
      finalizacao: 8.5,
      notamedia: 8.3,
      observacao: 'Acidez cítrica agradável',
      avaliador: 'Eduardo Pereira',
      data: '2026-07-15'
    },
    {
      id: 7,
      nome: 'Acauã',
      produtor: 'Fazenda Pedra Branca',
      aroma: 8.9,
      sabor: 9.2,
      acidez: 8.7,
      corpo: 8.9,
      finalizacao: 9.1,
      notamedia: 9.0,
      observacao: 'Complexo, floral com finalização longa',
      avaliador: 'Eduardo Pereira',
      data: '2026-07-15'
    },
    {
      id: 8,
      nome: 'Catucaí 785',
      produtor: 'Fazenda Serra Azul',
      aroma: 8.3,
      sabor: 8.5,
      acidez: 8.4,
      corpo: 8.2,
      finalizacao: 8.6,
      notamedia: 8.4,
      observacao: 'Uniforme, bom corpo',
      avaliador: 'Eduardo Pereira',
      data: '2026-07-15'
    },
    {
      id: 9,
      nome: 'Obatã',
      produtor: 'Fazenda Esperança',
      aroma: 7.9,
      sabor: 8.1,
      acidez: 7.8,
      corpo: 8.3,
      finalizacao: 8,
      notamedia: 8.0,
      observacao: 'Resistente, sabor marcante',
      avaliador: 'Eduardo Pereira',
      data: '2026-07-15'
    },
    {
      id: 10,
      nome: 'Pacamara',
      produtor: 'Fazenda Alto da Serra',
      aroma: 9.4,
      sabor: 9.6,
      acidez: 9.1,
      corpo: 9.2,
      finalizacao: 9.5,
      notamedia: 9.4,
      observacao: 'Graúdo, exótico e muito doce',
      avaliador: 'Eduardo Pereira',
      data: '2026-07-15'
    },
    {
      id: 11,
      nome: 'Geisha',
      produtor: 'Fazenda Aurora',
      aroma: 9.8,
      sabor: 9.7,
      acidez: 9.5,
      corpo: 9,
      finalizacao: 9.8,
      notamedia: 9.6,
      observacao: 'Extremamente floral, elegante e complexo',
      avaliador: 'Eduardo Pereira',
      data: '2026-07-15'
    },
    {
      id: 12,
      nome: 'SL28',
      produtor: 'Fazenda Recanto',
      aroma: 9,
      sabor: 9.1,
      acidez: 9.3,
      corpo: 8.7,
      finalizacao: 9,
      notamedia: 9.0,
      observacao: 'Varietal africano, notas de caramelo',
      avaliador: 'Eduardo Pereira',
      data: '2026-07-15'
    }
  ])

  let nextId = 13

  const totalCafes = computed(() => cafes.value.length)

  const melhorNota = computed(() => {
    if (cafes.value.length === 0) return 0
    return Math.max(...cafes.value.map((c) => c.notamedia))
  })

  const ultimaAvaliacao = computed(() => {
    if (cafes.value.length === 0) return null
    return cafes.value[cafes.value.length - 1]
  })

  const ranking = computed(() => {
    return [...cafes.value].sort((a, b) => b.notamedia - a.notamedia)
  })

  function adicionarCafe(cafe: Omit<Cafe, 'id' | 'notamedia' | 'data'>) {
    const media = calcularMedia(cafe)
    const nova: Cafe = {
      ...cafe,
      id: nextId++,
      notamedia: media,
      data: new Date().toISOString().split('T')[0] ?? ''
    }
    cafes.value.push(nova)
  }

  function cafePorId(id: number): Cafe | undefined {
    return cafes.value.find((c) => c.id === id)
  }

  function removerCafe(id: number) {
    cafes.value = cafes.value.filter((c) => c.id !== id)
  }

  return {
    cafes,
    totalCafes,
    melhorNota,
    ultimaAvaliacao,
    ranking,
    adicionarCafe,
    cafePorId,
    removerCafe
  }
})

export function calcularMedia(cafe: Pick<Cafe, 'aroma' | 'sabor' | 'acidez' | 'corpo' | 'finalizacao'>): number {
  const media = (cafe.aroma + cafe.sabor + cafe.acidez + cafe.corpo + cafe.finalizacao) / 5
  return Math.round(media * 10) / 10
}
