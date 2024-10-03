<script>
    import Header from "../lib/Header.svelte";
    import WhatsappLogo from "../images/whatsapp.png";
    import FacebookLogo from "../images/facebook.png";
    import TelegramLogo from "../images/telegram.png";

    /** @type {import('./$types').PageData} */
    export let data;

    let leituraSelecionada = data.json.primeiraLeitura; // Valor inicial
    let leituraAtual = 0;

    const leituras = [
        "Primeira Leitura",
        "Salmo",
        "Segunda Leitura",
        "Evangelho",
    ];

    let isActive = [true, false, false, false];

    const textosLeituras = [
        /* Adicione aqui os textos completos de cada leitura */
        data.json.primeiraLeitura, // 0
        data.json.salmo, // 1
        data.json.segundaLeitura, //2
        data.json.evangelho, // 3
    ];

    const selecionarLeitura = (index) => {
        leituraAtual = index;
        leituraSelecionada = textosLeituras[index];
        isActive = Array(leituras.length).fill(false); // Limpa todos os active
        isActive[index] = true;
    };

    function adicionarQuebrasDeLinha(texto) {
        return texto.replace(/—/g, "\n—");
    }

    let textoComQuebras = adicionarQuebrasDeLinha(data.json.salmo.texto);

    // (function (d, s, id) {
    //     var js,
    //         fjs = d.getElementsByTagName(s)[0];
    //     if (d.getElementById(id)) return;
    //     js = d.createElement(s);
    //     js.id = id;
    //     js.src =
    //         "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
    //     fjs.parentNode.insertBefore(js, fjs);
    // })(document, "script", "facebook-jssdk");
</script>

<section class="flex flex-col items-center w-full">
    <Header></Header>
    <div
        id="compartilhe"
        class="flex items-center justify-between gap-2 text-gray-950 mt-8 w-4/5"
    >
        <span class="text-sm sm:text-lg">Data: {data.json.data}</span>
        <div class="flex items-center gap-2 text-gray-950">
            <span class="font-medium">Compartilhe: </span>
            <a
                class="bg-green-500 p-2 rounded-full border border-green-600"
                href="whatsapp://send?text=Você já leu a Liturgia de hoje?✨ Não perca essa reflexão para o seu dia! Acesse agora e compartilhe também: https://liturgia.site "
                data-action="share/whatsapp/share"
                target="_blank"
            >
                <img
                    class="max-w-4 lg:max-w-5"
                    src={WhatsappLogo}
                    alt="Compartilhe no Whatsapp"
                    title="Compartilhe no Whatsapp"
                />
            </a>
            <a
                class="bg-fbblue p-2 rounded-full border border-blue-600"
                href="https://www.facebook.com/dialog/share?app_id=145634995501895&display=popup&href=https%3A%2F%2Fliturgia.site&text=Veja a litúrgia de hoje!"
                target="_blank"
            >
                <img
                    class="max-w-4 lg:max-w-5"
                    src={FacebookLogo}
                    alt="Compartilhe no Facebook"
                    title="Compartilhe no Facebook"
                />
            </a>
        </div>
    </div>
    <div
        id="liturgia"
        class="flex flex-col gap-3 items-start text-gray-950 mt-4 w-4/5"
    >
        <span class="flex items-center gap-2 text-sm sm:text-lg"
            >Cor litúrgica: {data.json.cor}
            <div
                class="w-4 h-4 rounded-full border border-gray-200 {data.json
                    .cor === 'Vermelho'
                    ? 'bg-red-800'
                    : ''} {data.json.cor === 'Branco' ? 'bg-white' : ''} {data
                    .json.cor === 'Verde'
                    ? 'bg-green-800'
                    : ''} {data.json.cor === 'Roxo'
                    ? 'bg-purple-900'
                    : ''} {data.json.cor === 'Rosa' ? 'bg-pink-400' : ''} {data
                    .json.cor === 'Preto'
                    ? 'bg-black'
                    : ''}"
            /></span
        >
        <h2 class="text-md sm:text-xl font-medium">
            Litúrgia: {data.json.liturgia}
        </h2>
    </div>

    <div
        id="selecionar"
        class="flex items-center justify-center shadow-md rounded-full bg-white gap-1 text-xs p-1 max-w-72 sm:max-w-2xl lg:max-w-7xl sm:text-base sm:w-auto mt-4"
    >
        {#each leituras as leitura, index}
            <button
                on:click={() => selecionarLeitura(index)}
                class="border rounded-3xl
                {index === 0 ? 'rounded-r-none' : ''} 
                {index === 1 || index === 2 ? 'rounded-none' : ''}
                {index === 3 ? 'rounded-l-none' : ''}
                {isActive[index] ? 'bg-blue-300 ' : ''}
                 text-gray-950 bg-gray-50 transition-all hover:bg-gray-200 h-12 p-1 md:w-[200px]"
            >
                {leitura}
            </button>
        {/each}
    </div>

    <div
        id="leitura"
        class="flex flex-col transition-all bg-white rounded-3xl border border-gray-100 p-4 mt-4 shadow-2xl w-4/5 gap-2 text-sm sm:text-lg"
    >
        {#if leituraSelecionada === "Não há segunda leitura hoje!"}
            <h1 class="font-medium">{leituraSelecionada}</h1>
        {:else}
            <h1 class="font-medium">{leituraSelecionada.referencia}</h1>

            <h2>
                {leituraSelecionada.refrao
                    ? "Refrão: " + leituraSelecionada.refrao
                    : leituraSelecionada.titulo}
            </h2>

            <!-- Caso seja evangelho, mostrar resposta da comunidade 'Gloria a Vós, Senhor'-->
            {#if leituraAtual === 3}
                <span class="font-medium"> - Glória a Vós, Senhor</span>
            {/if}

            <!-- Texto da Leitura, caso for Salmo, mostrar o texto com quebras de linha -->
            <p>
                {leituraAtual === 1
                    ? textoComQuebras
                    : leituraSelecionada.texto}
            </p>

            <!-- Mostrar respostas corretas de acordo com a Leitura -->
            {#if leituraAtual === 0 || leituraAtual === 2}
                <span class=""> - Palavra do Senhor</span>
                <span class="font-medium"> - Graças a Deus</span>
            {:else if leituraAtual === 3}
                <span class=""> - Palavra da Salvação</span>
                <span class="font-medium"> - Glória a Vós, Senhor</span>
            {/if}
        {/if}
    </div>

    <footer
        id="sobre"
        class="flex flex-col mt-8 items-center text-gray-600 text-xs border-t-2 border-gray-100 border-opacity-10 w-full pt-2 mb-4 mt-4"
    >
        <span class="mb-4">Projeto para fins de evangelização 🙏 📖 ✞ 🕊️</span>

        <span class="mb-4 w-4/5 text-center">Liturgia.site existe para que os fiéis possam ler a palavra diária de forma simples e concisa, muito obrigado por utilizar. <br> Deus Abençoe-nos!</span>

        <a href="https://github.com/Dancrf/liturgia-diaria" class="font-medium">
            Clique aqui para saber mais sobre a <strong class="font-medium"
                >API</strong
            >
        </a>
        <span
            >Liturgia.site é feito por <a
                href="github.com/caiordm"
                class="font-medium">caiordm</a
            ></span
        >
    </footer>
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
