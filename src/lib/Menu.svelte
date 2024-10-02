<script>
    import { fly, scale } from "svelte/transition";
    import { quadOut } from "svelte/easing";

    export let open;
</script>

{#if open}
    <div class="bg-white font-medium rounded-3xl border border-gray-100 text-blue-500 flex justify-between items-center shadow-xl p-3 pl-6 pr-6 mt-4 w-4/5">
        <a href="#liturgia">Litúrgia Do Dia</a>
        <a href="#sobre">Sobre</a>
    </div>

    <hr transition:scale={{ duration: 750, easing: quadOut, opacity: 0 }} />
{/if}

<style>
    div {
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: start;
        background-color: white;
    }
    
    a {
        text-decoration: none;
        transition: 1s all;
        cursor: pointer;
        font-size: 18px;
    }

    a:focus {
        text-decoration: underline;
    }
</style>
