<template>
  <div>
    <p>{{ counter }}</p>
    <button>+</button>
    <button>-</button>
    <button>Reset</button>
  </div>
</template>
<script setup>
  const counter = useCountState()
</script>