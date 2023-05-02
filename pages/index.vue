<script lang="ts" setup>
const { t } = useCustomI18n()
</script>

<template>
  <h1 class="title">
    {{ t('main.title') }}
  </h1>
  <span>{{ t('main.wip') }}</span>
  <p class="text-lg">
    {{ t('main.cta') }}
  </p>
  <div class="flex gap-4">
    <PButton>
      {{ t('misc.github') }}
    </PButton>
    <PButton>
      {{ t('misc.black_kamelia') }}
    </PButton>
    <PButton>
      <LocalizedLink to="/projects">
        {{ t("main.projects") }}
      </LocalizedLink>
    </PButton>
  </div>
</template>
