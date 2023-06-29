//Onde vamos pegar a imagens
const image = document.getElementById('img');
function changeImg(image) {
    document.querySelector('#img').src=image
}


var updateInterval = 1200; // Intervalo de atualização em milissegundos
let stop= setInterval(setTimeoutimg, updateInterval);
function setTimeoutimg() {
  var senha=document.querySelector('#passwordadm').value
  if (senha === "Tomas") {
 
  }
  else if(senha.length > 0 ){
      changeImg('../img/img.png')
      if (senha.length > 1 ) {
        changeImg('../img/img3.png')
      }
   }
 else if (senha === "") {
    setTimeout(function() {
      changeImg('../img/img04.png')
    }, 50);
    setTimeout(function() {
      changeImg('./img/img1.png')
    }, 300);
    setTimeout(function() {
      changeImg('../img/img01.png')
    }, 300);
    setTimeout(function() {
      changeImg('../img/img02.png')
    },300);
    setTimeout(function() {
      changeImg('../img/img01.png')
    },300);
  }
  else if (senha.length > 0 && senha != "Tomas") {
      changeImg('../img/img4.png')
  }
}
// Verificar a senha
function verificarsenha() {
  setTimeoutimg()
}

// Lidar com o clique no botão de login
document.getElementById('passwordadm').addEventListener('input', verificarsenha);
document.querySelector('.button').addEventListener('click', verificarsenha);