<template>
  <Card v-for="appl in applications?.new" class="mx-1 my-2">
    <CardHeader>
      <CardTitle><MapPin class="inline text-red" />{{ appl.loading }}</CardTitle>
      <CardDescription>{{ appl.reg_loading }}</CardDescription>
    </CardHeader>
    <CardHeader>
      <CardTitle><MapPin class="inline text-red" />{{ appl.unloading }}</CardTitle>
      <CardDescription>{{ appl.reg_unloading }}</CardDescription>
    </CardHeader>
    <!-- <CardContent>
      <form>
        <div class="grid items-center w-full gap-4">
          <div class="flex flex-col space-y-1.5">
            <Label for="name">Name</Label>
            <Input id="name" placeholder="Name of your project" />
          </div>
          <div class="flex flex-col space-y-1.5">
            <Label for="framework">Framework</Label>
            <Select>
              <SelectTrigger id="framework">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="nuxt"> Nuxt </SelectItem>
                <SelectItem value="next"> Next.js </SelectItem>
                <SelectItem value="sveltekit"> SvelteKit </SelectItem>
                <SelectItem value="astro"> Astro </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </form>
    </CardContent>
    <CardFooter class="flex justify-between px-6 pb-6">
      <Button variant="outline"> Cancel </Button>
      <Button>Deploy</Button>
    </CardFooter> -->
  </Card>
</template>

<script setup lang="ts">
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { MapPin } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { useApplicationsStore } from '@/stores/applications'
import { storeToRefs } from 'pinia'

const { applications } = storeToRefs(useApplicationsStore())
</script>
