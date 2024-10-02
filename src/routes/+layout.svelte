<script>
    import { dev } from '$app/environment';
    import { inject } from '@vercel/analytics';

    inject({ mode: dev ? 'development' : 'production' });

    import "../app.css";
</script>

<slot />

<style>
    @import url("https://fonts.googleapis.com/css2?family=Kalnia:wght@100..700&display=swap");

    :global(html) {
        scroll-behavior: smooth;
        transition: 1s ease;
        overflow-x: hidden;
    }

    :global(body) {
        font-family: "Kalnia", serif;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
</style>
