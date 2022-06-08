<script>
    export default {
        components: {
            Dynamic: () => import('@/windows/settings/ManyMD.vue')
        }
    }
</script>

<template>
    <div id="main">
        <Dynamic />
    </div>
</template>

<style scoped>
    div {
        /* AVOID SIDEBAR  */
        padding: 8px;

        /* SIZE and POSITION */
        position: fixed;
        top: 0;

        width: calc(100% - 150px);
        height: 100%;
    }
</style>