<script setup lang="ts">
const { locale: currentLocale } = useCustomI18n()
</script>

<template>
  <PDropdown v-model="currentLocale" :options="availableLocales" />
</template>
