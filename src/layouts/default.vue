<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
    <div v-if="!isOnline" class="w-full bg-red-500 text-white text-center py-2 mb-4 rounded-lg">
      Вы оффлайн. Некоторые функции могут быть недоступны.
    </div>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { useNetwork } from '@/composables/useNetwork'

const { isOnline } = useNetwork()
</script>
