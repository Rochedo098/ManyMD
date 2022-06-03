<script>
    import { RouterView } from 'vue-router'
    export default {
        components: {
            RouterView
        }
    }
</script>

<template>
  <RouterView />
</template>

<style>
    @import '@/assets/theme.css';
    @import 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css';

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

    div#app {
        position: fixed;
        width: 100%;
        height: 100%;
    }
</style>