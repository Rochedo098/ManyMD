<script>
    export default {

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
                Launch
            </a>
          </li>

          <hr>
          
          <li>
            <a class="nav-link">
                Edit Instance
            </a>
          </li>
          <li>
            <a class="nav-link">
              View Mods
            </a>
          </li>
          <li>
            <a class="nav-link">
              View Folder
            </a>
          </li>

          <hr>

          <li>
            <a class="nav-link">
                Export Instance
            </a>
            <a class="nav-link">
                Delete Instance
            </a>
            <a class="nav-link">
                Copy Instance
            </a>
          </li>
        </ul>
        <hr>
        <div>
            <a href="#" class="d-flex align-items-center link-dark text-decoration-none " aria-expanded="false">
                <img src="" alt="" width="24" height="24" class="rounded-circle me-2">
                <strong> Settings </strong>
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
