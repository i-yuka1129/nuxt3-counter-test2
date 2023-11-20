<template>
  <div>
    <p>{{ counter }}</p>
    <button @click="inc">+</button>
    <button @click="dec">-</button>
    <button @click="reset">Reset</button>
  </div>
</template>
<script setup lang="ts">
  const {counter, inc, dec, reset} = useCounterState()
</script>