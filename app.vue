<script setup lang="ts">
const r = ref(await $fetch("/api/test"));

const text = computed(() => {
  if (!r.value) return "empty";
  
  return JSON.stringify(r.value);
})
</script>

<template>
  <div>
    {{ text }}
  </div>
</template>
