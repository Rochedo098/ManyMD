<script>
    export default {
        props: {
            name: String,
            thumb: String
        },
        methods: {
            select(id) {
                const element = document.getElementsByClassName('toaffect')
                for (var i = 0; i < element.length; i++) {
                    if (!element[i].classList.contains('selected') && element[i].parentElement.id == id) {
                        element[i].classList.add('selected')
                    } else {
                        element[i].classList.remove('selected')
                    }
                }
            }
        }
    }
</script>

<template>
    <div class="item" @click="select(`Instance-${name}`)">
        <div>
            <img :src="thumb" width="64" height="64">
            <div class="infos">
                <a> {{ name }} </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
    div.item {
        cursor: default;
    }

    div.item:hover {
        text-decoration: underline;
    }

    div.infos {
        display: block;
        position: relative;
    }

    * {
        color: var(--font)
    }

    img {
        display: inline-block;
        border: 1px solid var(--lines);
        border-radius: 12px;
    }

    h1, a {
        margin: 0;
        padding: 0;
    }
 
    a {
        text-decoration: none;
        font-size: 15px;

        -webkit-touch-callout: none;
          -webkit-user-select: none;
           -khtml-user-select: none;
             -moz-user-select: none;
              -ms-user-select: none;
                  user-select: none;
    }

    .selected {
        background: blue;
    }
</style>