<script setup>
import { InstagramIcon } from 'vue3-simple-icons'
import { FacebookIcon } from 'vue3-simple-icons'
import { ArrowRight } from 'lucide-vue-next'

</script>

<template>
  <a
    href="https://instagram.com/lendapetFood"
    target="_blank"
    title="Instagram"
    class="inline-flex items-center px-3 py-1 mx-auto my-4 space-x-1 text-sm font-medium rounded-lg bg-muted"
  >
    <InstagramIcon class="w-4 h-4" />
    <Separator
      orientation="vertical"
      class="h-4"
    />
    <span>@LendaPetFood</span>
    <ArrowRight class="w-4 h-4" />
  </a>
  <a
    href="https://facebook.com/lendapetFood"
    target="_blank"
    title="Faceobok"
    class="inline-flex items-center px-3 py-1 mx-auto my-4 space-x-1 text-sm font-medium rounded-lg bg-muted"
  >
    <FacebookIcon class="w-4 h-4" />
    <Separator
      orientation="vertical"
      class="h-4"
    />
    <span>Facebook</span>
    <ArrowRight class="w-4 h-4" />
  </a>
</template>
