// MUDANDO A IMAGEM DOS CÍRCULOS
let circleImage = document.getElementsByClassName('circleImage')
let valueCircle = 0

Array.from(circleImage).forEach(element => {
    element.addEventListener('click', changeImgCircle)
});

function changeImgCircle(e){
    valueCircle = e.target.id
    resetImgCircle()
    e.target.src = "images/circlePreenchido.png"
    console.log(`De 0 a 10, a probabilidade do usuário recomendar o curso para um amigo é: ${valueCircle}`)
}

function resetImgCircle(){
    Array.from(circleImage).forEach(element => {
        element.src = "images/circle.png"
    });
}

// MUDANDO A IMAGEM DAS ESTRELAS

let starImage = document.getElementsByClassName('starImage')
let valueStar = 0

// for (let i = 0; i < starImage.length; i++){
//     starImage[i].addEventListener('click', changeImg)
// } IGUAL AO DE BAIXO (USEI O ARRAY.FROM PORQUE QUANDO PEGO O ELEMENTO PELA CLASSE, O JS NÃO RECONHECE COMO UM ARRAY, ENTÃO PRECISEI FALAR QUE ERA UM ARRAY)

Array.from(starImage).forEach(element => {
    element.addEventListener('click', changeImgStar)
});

function changeImgStar(e){
    valueStar = e.target.dataset.valor
    resetImgStar()
    e.target.src = "images/estrelaPreenchida.png"
    console.log(`A nota do usuário para a monitoria ao vivo é: ${valueStar} estrela(s)`)
}

function resetImgStar(){
    Array.from(starImage).forEach(element => {
        element.src = "images/estrela.png"
    });
}

