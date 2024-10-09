const container = document.querySelector('.container');

// Array com os dados dos jogos (nome e imagem)
const jogos = [
    { nome: 'Pac-Man', imagem: 'packman.png' },
    { nome: 'Mario Bros', imagem: 'Mario3.jpeg' },
    { nome: 'Pitfall', imagem: 'pitfall.jpeg' },
    { nome: 'Enduro', imagem: 'enduro.jpeg' },
    { nome: 'Donkey Kong', imagem: 'donkey kong.jpeg' },
    { nome: 'Galaxy', imagem: 'galaxy.jpeg' },
    { nome: 'Tennis', imagem: 'tennis.png' },
    { nome: 'Galaxy', imagem: 'galaxy.jpeg' },
    { nome: 'Tennis', imagem: 'tennis.png' },   
    // ... adicione os demais jogos aqui ...
];

// Função para criar um elemento da grade
function criarGameBox(jogo) {
    const gameBox = document.createElement('div');
    gameBox.classList.add('game-box');
    gameBox.innerHTML = `<img src="${jogo.imagem}" alt="${jogo.nome}"><h2>${jogo.nome}</h2>`;
    return gameBox;
}

// Preenchendo a grade
jogos.forEach(jogo => {
    container.appendChild(criarGameBox(jogo));
});