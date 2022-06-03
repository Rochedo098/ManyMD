<script>
    import Sidebar from '@/components/Sidebar.vue'
    import InstancesGrid from '@/components/instances/InstanceGrid.vue';
    export default {
        components: {
            Sidebar,
            InstancesGrid
        }
    }
</script>

<template>
    <Sidebar />
    <InstancesGrid class="space" />
</template>

<style scoped>
    .space {
        margin: 0 0 0 150px;
    }
</style>