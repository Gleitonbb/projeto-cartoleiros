let JogadoresCart = [
    {nome: 'Gleiton', pontuacao: 470, imagem: 'gleiton.png'},
    {nome: 'Ingrid', pontuacao:600 , imagem: 'ingrid.png'},
    {nome: 'Taty', pontuacao: 580, imagem: 'taty.png'},
    {nome: 'Vinicio', pontuacao: 420, imagem: 'vinicio.png'},
    {nome: 'Nadya', pontuacao: 380, imagem: 'nadya.png'},
    {nome: 'Caio', pontuacao: 375, imagem: 'caio.png'},
]
JogadoresCart.sort((a, b)=> b.pontuacao - a.pontuacao)
let jogadores = JogadoresCart[0]
let res = document.getElementById('res')
if(jogadores){
    res.innerHTML = `o jogador com maior pontuação e <strong>${jogadores.nome}</strong> com <strong>${jogadores.pontuacao}</strong> pontos`
}