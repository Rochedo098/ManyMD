<script>
    import { Converter } from 'showdown'
    export default {
        computed: {
            page() {
                return this.$route.query.page
            }
        },
        methods: {
            tomd(url) {
                fetch(url)
                    .then(response => response.text())
                    .then(data => {
                        if (!data) data = '## Not Found'
                        
                        var converter = new Converter(),
                        html = converter.makeHtml(data);
                        
                        if (!html) console.error("ERROR: html variable is null")
                        document.getElementById('main').innerHTML = html 
                    });
            }
        }
    }
</script>

<template>
    <div id="main">
        {{ tomd(`http://localhost:8080/pages/${page}.md`) }}
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