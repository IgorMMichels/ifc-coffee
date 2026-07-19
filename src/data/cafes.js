import ref from 'vue'

const cafes = ref([
  {
    id: 1,
    nome: "Geisha",
    produtor: "Fazenda Aurora",
    aroma: 9.8,
    sabor: 9.7,
    acidez: 9.5,
    corpo: 9,
    finalizacao: 9.8,
    notamedia: (aroma+sabor+acidez+corpo+finalizacao) / 5,
    notadaobervacao:"Extremamente floral, elegante e complexo",
    avaliador: 'Eduardo Pereira'
  }
])
