<script>
    import Sidebar from '@/components/settings/Sidebar.vue'
import DynamicPage from '@/components/settings/DynamicPage.vue'
    export default {
        components: {
    Sidebar,
    DynamicPage
}    
    }
</script>

<template>
    <Sidebar />
    <DynamicPage class="space" />
</template>

<style scoped>
    .space {
        margin: 0 0 0 150px;
    }
</style>