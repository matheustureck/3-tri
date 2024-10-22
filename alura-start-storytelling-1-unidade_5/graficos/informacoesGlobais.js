const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    console. log(dados);
    const paragrafo = documento.creatElement('p')
    paragrafo.classlist.add('graficos-conteiner__texto')
    paragrafo.innerHTML = `você sabia que o mundo tem ${dados.total_pessoas_mundo} de pessoas e que aproximadamente `
}

vizualizarInformacoesGlobais()
