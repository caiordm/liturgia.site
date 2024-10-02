<script>
    import { Hamburger } from "svelte-hamburgers";
    import Menu from "./Menu.svelte";

    let open;
</script>

<header
    class="bg-white rounded-3xl border border-gray-100 flex justify-between items-center shadow-xl p-3 pl-6 pr-6 mt-4 w-4/5"
>
    <a href="/"><h1 class="font-medium text-xl">Liturgia.me 📖</h1></a>
    <ul class="flex gap-4 text-md sm:text-lg">
        <a href="#liturgia" class="transition ease-in-out hover:text-blue-400"><li>Liturgia do dia</li></a>
        <a href="#sobre" class="transition ease-in-out hover:text-blue-400"><li>Sobre</li></a>
    </ul>
    <div class="hamburguer-icon">
        <Hamburger class="hamburguer-icon" bind:open color="white" />
    </div>
</header>
<Menu class="hamburguer-menu" bind:open />

<style>
    /* Estilo do menu hamburguer */
    .hamburguer-menu {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 80%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.9);
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 999;
        transition: 0.3s ease;
    }

    .hamburguer-menu.open {
        display: flex;
    }

    .hamburguer-icon {
        display: none;
        z-index: 1000;
        cursor: pointer;
    }

    .hamburguer-menu a {
        color: white;
        font-size: 24px;
        margin: 1rem 0;
    }

    /* Esconde o menu normal em telas menores */
    @media (max-width: 1000px) {
        ul {
            display: none;
        }

        .hamburguer-icon {
            display: block;
        }
    }
</style>
