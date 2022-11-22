let starImage = document.getElementById('starImage1')

function changeImg(e){
    e.target.src = "images/estrelaPreenchida.png"
    console.log('teste')
}

starImage.addEventListener('click', changeImg)
