<template>
  <div class="h-screen w-screen flex flex-col">
    <header class="flex items-center justify-between h-14 px-4 border-b bg-background">
      <button @click="isOpen = true" class="p-2">
        <Menu class="w-6 h-6" />
      </button>
      <h1 class="font-semibold text-lg">Союзники</h1>
      <button class="p-2">
        <User class="w-6 h-6" />
      </button>
    </header>

    <Sheet v-model:open="isOpen">
      <SheetContent side="left" class="w-64">
        <div class="p-4">
          <h2 class="font-semibold text-xl mb-4">Меню</h2>
          <nav class="flex flex-col space-y-2">
            <RouterLink
              v-for="item in menu"
              :key="item.to"
              :to="item.to"
              class="flex items-center space-x-2 p-2 rounded hover:bg-muted"
              @click="isOpen = false"
            >
              <component :is="item.icon" class="w-5 h-5" />
              <span>{{ item.label }}</span>
            </RouterLink>
          </nav>
        </div>
      </SheetContent>
    </Sheet>

    <main class="flex-1 overflow-y-auto bg-muted/10">
      <div v-if="!isOnline" class="w-full bg-red-500 text-white text-center py-2 mb-4 rounded-lg">
        Вы оффлайн. Некоторые функции могут быть недоступны.
      </div>

      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useNetwork } from '@/composables/useNetwork'
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { Menu, User, Home, Settings } from 'lucide-vue-next'
import { Sheet, SheetContent } from '@/components/ui/sheet'

const isOpen = ref(false)
const { isOnline } = useNetwork()

const menu = [
  { to: '/', label: 'Главная', icon: Home },
  { to: '/settings', label: 'Настройки', icon: Settings },
]
</script>
