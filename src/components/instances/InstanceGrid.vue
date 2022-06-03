<script>
    import Instance from './Instance.vue'
    export default {
        data: () => {
            return {
                instances: [
                    { id: 1, thumb: "", name: "Instance 1" },
                    { id: 2, thumb: "", name: "Instance 2" },
                    { id: 3, thumb: "", name: "Instance 3" }
                ]
            };
        },
        components: {
            Instance
        }
    }
</script>

<template>
    <div class="instances">
        <Instance v-for="(instance) in instances" :key="instance.id" :name="instance.name" :thumb="instance.thumb" />
    </div>
</template>

<style scoped>
    div.instances {
        /* AVOID SIDEBAR  */
        padding: 8px;

        /* SIZE and POSITION */
        position: fixed;
        top: 0;

        width: calc(100% - 150px);
        height: 100%;

        /* GRID */
        display: grid;
        grid-template-columns: repeat(3, auto);
        grid-template-rows: repeat(5, auto);
    }
</style>
