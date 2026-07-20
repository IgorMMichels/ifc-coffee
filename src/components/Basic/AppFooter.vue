<script setup lang="ts">
import { Coffee } from 'lucide-vue-next'
</script>

<template>
  <footer>
    <div class="footercontent">
      <div class="footerlogo">
        <Coffee class="w-5 h-5 text-[#E5A91A]" />
        <span>Coffee Quality Challenge</span>
      </div>
      <p>&copy; 2026 - Igor Marcon Michels</p>
      <p class="footersub">Sistema acadêmico para avaliação de cafés especiais</p>
    </div>
  </footer>
</template>

<style scoped>
footer {
  margin: 3rem 10vw;
  border-radius: 16px;
  padding: 1.2rem 2rem;
  background-color: rgba(255, 255, 255, 1);
  backdrop-filter: blur(8px);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 16px;
  text-align: center;
}

.footercontent {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}

.footerlogo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 16px;
  font-weight: 700;
  color: #3E2723;
}

p {
  margin: 0;
  font-size: 13px;
  color: #6B7280;
}

.footersub {
  font-size: 12px;
  color: #9CA3AF;
}

@media screen and (max-width: 768px) {
  footer {
    margin: 2rem 1rem;
    padding: 1rem;
  }
}
</style>
