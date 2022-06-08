<template>
    <div class="d-flex flex-column flex-shrink-0 p-3" id="sidebar">
        <ul class="nav nav-pills flex-column mb-auto">
          <li>
            <a class="nav-link" href='/'>
                <b>⮨</b>
            </a>
          </li>
          <li>
            <a class="nav-link" href='/settings?page=manymd'>
                ManyMD
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href='/settings?page=mindustry'>
                Mindustry
            </a>
          </li>
          <li>
            <a class="nav-link" href='/settings?page=java'>
                Java
            </a>
          </li>
          <li>
            <a class="nav-link" href='/settings?page=language'>
                Language
            </a>
          </li>
        </ul>
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
