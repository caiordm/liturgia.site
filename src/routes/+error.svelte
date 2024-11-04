<script>
	import { page } from '$app/stores';
</script>

<div class="w-full h-5/6 flex flex-col gap-2 items-center justify-center text-xl">
    <h1 class="text-xl">{$page.status} {$page.error.message}</h1>
    <h2 class="text-lg w-4/5">Houve um erro na API por nossa parte, já estamos consertando! :-( </h2>
</div>

<style>
    :global(html) {
        background-color: theme(colors.blue.300);
        opacity: 0.8;
        background-image: linear-gradient(#a7cdf9 2px, transparent 2px),
            linear-gradient(90deg, #a7cdf9 2px, transparent 2px),
            linear-gradient(#a7cdf9 1px, transparent 1px),
            linear-gradient(90deg, #a7cdf9 1px, #93c5fd 1px);
        background-size:
            50px 50px,
            50px 50px,
            10px 10px,
            10px 10px;
        background-position:
            -2px -2px,
            -2px -2px,
            -1px -1px,
            -1px -1px;
    }
</style>