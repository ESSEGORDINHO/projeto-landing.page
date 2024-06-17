var setadireita=window.document.getElementById("seta-direita")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")
var setaesquerda = window.document.getElementById("seta-esquerda")


function RolarParaDireita() {
     Leonardo.style ="display:none"
     Bruna.style ="display:inline"
     setadireita.style = "display:none"
     setaesquerda.style = "display:inline"
}

var image1 = document.getElementById("img1");
var image2 = document.getElementById("img2");


// function RolarParaDireita() {
//     image1.src = "cards/leonardo.svg";
//     image2.src = "cards/samantha.svg";
// }

function RolarParaEsquerda(){
Leonardo.style = "display: inline"
Bruna.style = "display: none"
setadireita.style = "display: inline"
setaesquerda.style = "display: none "
}