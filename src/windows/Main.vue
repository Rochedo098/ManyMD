<script setup>
    import Sidebar from '@/components/Sidebar.vue'
    import InstancesGrid from '@/components/instances/InstanceGrid.vue';
</script>

<template>
    <Sidebar />
    <InstancesGrid />
</template>

<style scoped>
    section {
        margin: 0 150px 0 0;
        padding: 8px;
        position: fixed;
    }
</style>