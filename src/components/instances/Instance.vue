<script setup>
    defineProps({
        name: String,
        thumb: String
    })
</script>

<template>
    <div class="body">
        <img :src="thumb" width="256" height="144">
        <div class="infos">
            <h1> {{ name }} </h1>
        </div>
    </div>
</template>

<style scoped>
    div.body {
        border: 1px solid var(--lines);
        border-radius: 12px;

        margin: 2px;
        /* padding: 2px; */
        height: 160px
    }

    div.infos {
        display: inline-block;
        position: relative;
        margin-left: 5px;
        vertical-align: top;
    }

    * {
        color: var(--font)
    }

    img {
        display: inline-block;
        border: 1px solid var(--lines);
        border-radius: 12px;
        margin-left: 5px;
        margin-top: 6px
    }

    h1, p {
        margin: 0;
        padding: 0;
    }

    h1 {
        font-weight: bolder;   
    }
    
    a {
        text-decoration: none;
    }
</style>