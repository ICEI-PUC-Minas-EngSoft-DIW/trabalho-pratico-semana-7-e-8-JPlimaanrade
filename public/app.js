const posts = [
    {
        titulo: "Kaido ?",
        descricao: "Embora muitas sejam vistas hoje em dia, a primeira Serpente Terrível nasceu quando um homem, conhecido apenas como O Mordomo Louco...",
        imagem: "Imagens/Conteudo_posts/wp11599134-deepwoken-wallpapers (1).jpg",
        link: "#"
    },
    {
        titulo: "Deep Owl's",
        descricao: "As Corujas Profundas chegam a Lumen vindas de uma dimensão inconcebível...",
        imagem: "Imagens/Conteudo_posts/DEEEPowl.jpg",
        link: "#"
    },
    {
        titulo: "Lore Deepwoken",
        descricao: "\"Deepdelver\" é uma patente especial na União da Ignição para aqueles que se aprofundam nas profundezas...",
        imagem: "Imagens/Conteudo_posts/wp11599145-deepwoken-wallpapers.jpg",
        link: "#"
    },
    {
        titulo: "Torneio PVP",
        descricao: "Faixa de poder - jogadores terão no máximo 5 níveis de diferença ao serem pareados.",
        imagem: "Imagens/Conteudo_posts/wp11599208-deepwoken-wallpapers.jpg",
        link: "#"
    },
    {
        titulo: "Como matar o Enforcer",
        descricao: "O Enforcer é um Mini-Chefe das Profundezas que atua como o penúltimo teste dos Testes das Profundezas...",
        imagem: "Imagens/Conteudo_posts/Enforcer.jpg",
        link: "#"
    },
    {
        titulo: "Evento Especial",
        descricao: "Eventos mundiais ocorrem em cada servidor uma vez a cada hora real (às XX:00).",
        imagem: "Imagens/Conteudo_posts/Deepwoken_post.avif",
        link: "#"
    }
];


function renderCards() {
    const container = document.getElementById("cards-container");
    container.innerHTML = ""; 

    posts.forEach(post => {
        const card = `
            <article class="card col-5 m-2 p-2" style="width: 18rem;">
                <img src="${post.imagem}" class="card-img-top" alt="${post.titulo}">
                <div class="card-body">
                    <h5 class="card-title">${post.titulo}</h5>
                    <p class="card-text">${post.descricao}</p>
                    <a href="${post.link}" class="btn btn-primary">Ir para a página</a>
                </div>
            </article>
        `;
        container.innerHTML += card;
    });
}
document.addEventListener("DOMContentLoaded", renderCards);
