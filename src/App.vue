<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
    @import '@/assets/theme.css';

    html {
        width: 100%;
        height: 100%;

        left: 0;
        top: 0;
        
        margin: 0;
        padding: 0;
    }

    body {
        background: var(--background);
        color: var(--font);
    }
</style>