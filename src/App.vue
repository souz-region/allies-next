<script setup lang="ts">
import { useNetwork } from './composables/useNetwork'
import { Button } from '@/components/ui/button'

const { isOnline } = useNetwork()
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
    <div v-if="!isOnline" class="w-full bg-red-500 text-white text-center py-2 mb-4 rounded-lg">
      Вы оффлайн. Некоторые функции могут быть недоступны.
    </div>
    <h1 class="text-2xl font-bold mb-4">Shadcn Vue + PWA</h1>
    <Button>Кнопка</Button>
  </div>
</template>

<style scoped></style>
