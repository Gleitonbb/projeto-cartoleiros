
let comp = [
    {nome: 'Gleiton', pontuacao: 1445.26, imagem:'gleiton.png',},
    {nome: 'Ingrid', pontuacao: 1307.24, imagem:'ingrid.png',},
    {nome: 'Vinicio', pontuacao: 1553.97,imagem:'vinicio.png',},
    {nome: 'Taty', pontuacao: 1736.27,imagem:'taty.png',},
    {nome: 'Caio', pontuacao: 1528.31,imagem:'caio.png',},
    {nome: 'Nadya', pontuacao: 1396.35,imagem:'nadya.png',},
    {nome: 'Danilo', pontuacao: 1647.65,imagem:'danilo.png',},
]
comp.sort((a, b) => b.pontuacao - a.pontuacao)
let nomepontuacao = comp[0]
let res = document.getElementById('res')  

if(nomepontuacao){
 let buscarimg = document.createElement('img')
    buscarimg.src = nomepontuacao.imagem
     res.innerHTML = `<p>Nome: ${nomepontuacao.nome} <br>Pontos:
     ${nomepontuacao.pontuacao}</p>`
    
    res.appendChild(buscarimg)

    buscarimg.addEventListener('click', function(){
        window.location.href = 'glepagina02.html'
    })

} 
//funções para abrir outo arquivo com dados de cada competidor
function taabrirpagina2() {
    window.location.href = 'tatypagina02.html'
  
}

function gleabrirpagina() {
    window.location.href = 'glepagina02.html'
}

function ingabrirpagina(){
    window.location.href = 'ingpagina02.html'
   
}
function danabrirpagina() {
    window.location.href = 'danpagina02.html'
} 

function vinabrirpagina(){
    window.location.href = 'vinpagina.html'
}

function caiabrirpagina() {
    window.location.href = 'caipagina.html'
}

function nadabrirpagina() {
    window.location.href = 'nadpagina.html'
}

  





    







    



  

 
  

