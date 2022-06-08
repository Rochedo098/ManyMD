<script>
    import { getLang } from '@/scripts/lang.js'
    export default {
        methods: {
            getLang
        }
    }
</script>


<template>
    <div class="d-flex flex-column flex-shrink-0 p-3" id="sidebar">
        <a class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
          <span class="fs-4">ManyMD</span>
        </a>
        <hr>
        <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item">
            <a class="nav-link" aria-current="page">
                {{ getLang("main.sidebar.launch") }}
            </a>
          </li>

          <hr>
          
          <li>
            <a class="nav-link">
                {{ getLang("main.sidebar.edit_instance") }}
            </a>
          </li>
          <li>
            <a class="nav-link">
                {{ getLang("main.sidebar.view_mods") }}
            </a>
          </li>
          <li>
            <a class="nav-link">
                {{ getLang("main.sidebar.view_folder") }}
            </a>
          </li>

          <hr>

          <li>
            <a class="nav-link">
                {{ getLang("main.sidebar.export_instance") }}
            </a>
            <a class="nav-link">
                {{ getLang("main.sidebar.delete_instance") }}
            </a>
            <a class="nav-link">
                {{ getLang("main.sidebar.copy_instance") }}
            </a>
          </li>
        </ul>
        <hr>
        <div>
            <a href="/settings?page=manymd" class="d-flex align-items-center text-decoration-none " aria-expanded="false">
                <img src="" alt="" width="24" height="24" class="rounded-circle me-2">
                <strong> {{ getLang("main.sidebar.settings") }} </strong>
            </a>
        </div>
    </div>
</template>

<style scoped>
    div#sidebar {
        background: var(--background-contrast);
        border-right: solid 1px var(--lines);

        display: inline-block;
        position: relative;

        width: 150px;
        height: 100%;
        padding: 4px !important;

        font-size: 14px;
    }

    a {
        cursor: pointer;
        
        -webkit-touch-callout: none;
          -webkit-user-select: none;
           -khtml-user-select: none;
             -moz-user-select: none;
              -ms-user-select: none;
                  user-select: none;
    }

    hr {
        color: var(--lines);
        margin: 8px 0 8px 0;
    }
    
    div#sidebar a {
        color: var(--font) !important;
        padding: 8 4 8 4;
    }

    .nav-link {
        color: var(--font) !important;
    }
</style>
