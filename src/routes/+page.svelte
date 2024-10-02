<script>
    import Header from "../lib/Header.svelte";
</script>

<section class="flex flex-col items-center w-full">
    <Header></Header>

    <div
        id="liturgia"
        class="flex flex-col items-start text-gray-950 mt-8 w-4/5"
    >
        <h2 class="text-md sm:text-lg font-medium">
            Santa Teresinha do Menino Jesus, Virgem e Doutora da Igreja, Memória
        </h2>
        <span class="text-sm sm:text-base">Data: 01/10/2024</span>
        <span class="text-sm sm:text-base">Cor litúrgica: Branca</span>
    </div>

    <div
        id="selecionar"
        class="flex items-center justify-center shadow-md rounded-full bg-white gap-1 text-xs p-1 max-w-72 sm:max-w-7xl sm:text-base sm:w-auto mt-4"
    >
        <button
            class="border rounded-3xl rounded-r-none text-gray-950 bg-gray-50 h-12 p-1 md:w-[200px]"
            >Primeira Leitura</button
        >
        <button
            class="border rounded-none text-gray-950 bg-gray-50 h-12 p-1 md:w-[200px]"
            >Salmo</button
        >
        <button
            class="border rounded-none text-gray-950 bg-gray-50 h-12 p-1 md:w-[200px]"
            >Segunda Leitura</button
        >
        <button
            class="border rounded-3xl rounded-l-none text-gray-950 bg-gray-50 h-12 p-1 md:w-[200px]"
            >Evangelho</button
        >
    </div>

    <div
        id="leitura"
        class="flex flex-col bg-white rounded-3xl border border-gray-100 p-4 mt-4 shadow-2xl w-4/5 gap-2 text-sm sm:text-base"
    >
        <h1 class="font-medium">Primeira Leitura (Jó 3,1-3.11-17.20-23)</h1>
        <h2>Leitura do Livro de Jó</h2>
        <span
            >1Jó abriu a boca e amaldiçoou o seu dia, 2dizendo: 3“Maldito o dia
            em que nasci e a noite em que fui concebido. 11Por que não morri
            desde o ventre materno ou não expirei ao sair das entranhas? 12Por
            que me acolheu um regaço e uns seios me amamentaram? 13Estaria agora
            deitado e poderia descansar, dormiria e teria repouso, 14com os reis
            e ministros do país, que construíram para si sepulcros grandiosos;
            15ou com os nobres, que amontoaram ouro e prata em seus palácios.
            16Ou, então, enterrado como aborto, eu agora não existiria, como
            crianças que nem chegaram a ver a luz. 17Ali acaba o tumulto dos
            ímpios, ali repousam os que esgotaram as forças. 20Por que foi dado
            à luz um infeliz e vida àqueles que têm a alma amargurada? 21Eles
            desejam a morte que não vem e a buscam mais que um tesouro; 22eles
            se alegrariam por um túmulo e gozariam ao receberem sepultura. 23Por
            que, então, foi dado à luz o homem a quem seu próprio caminho está
            oculto, a quem Deus cercou de todos os lados?”</span
        >
        <span class=""> - Palavra do Senhor</span>
        <span class="font-medium"> - Graças a Deus</span>
    </div>

    <div
        id="sobre"
        class="flex flex-col mt-8 items-center text-gray-600 text-xs border-t-2 border-gray-100 border-opacity-10 w-full pt-2 mb-4"
    >
        <span>Projeto para fins de evangelização</span>
        <span
            >API de Litúrgia Diária por <a
                href="https://github.com/Dancrf/liturgia-diaria"
                class="font-medium">Danyel</a
            ></span
        >
        <span
            >Liturgia.me é feito por <a
                href="github.com/caiordm"
                class="font-medium">caiordm</a
            ></span
        >
    </div>
</section>

<style lang="postcss">
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

    header {
        background-color: #f0f0f0;
    }
</style>
