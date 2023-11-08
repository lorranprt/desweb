const promessa = fetch("https://botafogo-atletas.mange.li/")

const numero_jogador = 36;



const pega_json = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
}

const cria_cartão = (jogador) => {
    const cartao = document.createElement("div");
    cartao.classList.add("cartao");
    cartao.innerHTML = ` 
    <div class="cartao__foto">
        <img src="${jogador.foto}" alt="${jogador.nome}">
    </div>
    <div class="cartao__info">
        <h1 class="cartao__nome">${jogador.nome}</h1>
        <p class="cartao__idade">${jogador.idade} anos</p>
        <p class="cartao__posicao">${jogador.posicao}</p>
        <p class="cartao__nacionalidade">${jogador.nacionalidade}</p>
        <p class="cartao__altura">${jogador.altura}m</p>
    </div>`;
    return cartao;}

pega_json (url).then((r) => {console.log(r)});

pega_json (${url}/${numero_jogador})
.then((r) => {console.log(r)});
console.log("sincrono")