<script lang="ts" setup>
const { toggle } = useDark()
</script>

<template>
  <header class="p-5 w-full flex-center flex-row justify-between absolute">
    <div />
    <div class="flex flex-row gap-2">
      <LocaleSwitch />
      <button class="icon-btn text-5" @click="toggle()">
        <div i="tabler-sun dark:tabler-moon" />
      </button>
    </div>
  </header>
</template>
