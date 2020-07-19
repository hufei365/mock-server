<template>
    <table class="m-table">
            <slot name="thead"></slot>
            <slot name="tbody"></slot>
            <slot name="tfoot"></slot>
    </table>
</template>


<script>
export default {
    
}
</script>

<style >
table{
    border-color: var(--secondary);
    width: 100%;
    border-width: 1px;
    border-style: solid;
    border-spacing: 0;
}
table, table  td, table  thead{
    border-color: var(--secondary);
}

td{ 
    border-width: 1px;
    border-style: solid;
    border-left: none;
    border-top:none;
}
td:last-child{
    border-right: none;
}

tbody tr:last-child td{
    border-bottom: none;
}

thead{
    font-weight: bold;
}
</style>