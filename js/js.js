

document.addEventListener("DOMContentLoaded", function() {
    // Abrir modal
    document.getElementById("open-modal").addEventListener("click", function() {
      document.getElementById("audiencia-modal").style.display = "block";
    });
  
    // Fechar modal
    document.getElementsByClassName("close-modal")[0].addEventListener("click", function() {
      document.getElementById("audiencia-modal").style.display = "none";
    });
  
    // Animações ao carregar a página
    document.querySelectorAll(".animate__animated").forEach(function(element) {
      element.classList.add("animate__fadeIn");
    });
  });
  

  // Obtém os elementos do DOM
const modal = document.getElementById('modal-adm');
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.getElementsByClassName('close')[0];
const saveBtn = document.getElementById('saveBtn');
const adminSelect = document.getElementById('adminSelect');

// Função para abrir a tela de cadastro
function openCadastro() {
  // Aqui é para abrir a tela de cadastro
window.location.href='php/cadastro.php'
}

// Abre o modal ao clicar no botão de abrir modal
openModalBtn.addEventListener('click', function() {
  modal.style.display = 'block';
});

// Fecha o modal ao clicar no botão de fechar ou fora do modal
closeModalBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Salva a opção selecionada ao clicar no botão de salvar
saveBtn.addEventListener('click', function() {
  const selectedOption = adminSelect.value;
  if (selectedOption === 'admin') {
    // Abre a tela de cadastro
    openCadastro();
  } else if (selectedOption === 'nonAdmin') {
    modal.style.display = 'none';
  } else {
    document.querySelector('.Nlabel').style.display = 'block';
  }
});

//chat---------------

let btn_sms=document.querySelector('#idsms');
let chat=document.querySelector('.chat-container'),
itensavatar1=document.querySelector('.chat-close-modal');

btn_sms.addEventListener('click',()=>{
  var fixo_chat=document.querySelector('.fixo-chat');
  chat.classList.add("transitionpopup");
  if (fixo_chat.style.display=='') {
      fixo_chat.style.display='block';
  }
  else{
      fixo_chat.style.display = '';
  }
})
itensavatar1.addEventListener('click',()=>{
  var fixo_chat=document.querySelector('.fixo-chat')
  chat.classList.add("transitionpopup")
  if (fixo_chat.style.display=='') {
      fixo_chat.style.display='block';
  }
  else{
      fixo_chat.style.display = '';
  }
})
/*

// Função para gerar um número aleatório de 6 dígitos
function generateRandomNumber() {
  return Math.floor(Math.random() * 1000000);
}

// Função para gerar uma senha aleatória de 8 caracteres
function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let password = '';
  for (let i = 0; i < 8; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}


let valid = false;

function updateValidValue(value) {
  valid = value;
}

document.getElementById('audiencia-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o envio do formulário

  const formData = new FormData(this);

  // Obtém os dados do formulário
  const data = {};
  for (const [name, value] of formData.entries()) {
    data[name] = value;
  }

  // Verifica se todos os campos estão preenchidos
  let allFieldsFilled = true;
  for (const field in data) {
    if (data[field] === "") {
      allFieldsFilled = false;
      break;
    }
  }

  // Atualiza o valor de valid com base no preenchimento dos campos
  if (allFieldsFilled) {
    updateValidValue(true);
  } else {
    updateValidValue(false);
  }

  // Exibe o valor atual de valid
  displayValidValue();
});

//sendDataToServer(code, password);

let btndonfirmar=document.querySelector("#confirmButton"),
ignoreButton=document.querySelector("#ignoreButton")

const code = generateRandomNumber();
const password = generateRandomPassword();

function funcaobtndonfirmar() {
  const codeconf = code;
  const passwordconf = password;
  requisicao(codeconf,passwordconf);
  document.querySelector('.agenda-modal').style.display = '';
}


function funcaoignoreButton() {
    const codeconf  = null;
    const passwordconf = null;
    requisicao(codeconf,passwordconf)
    document.querySelector('.agenda-modal').style.display = '';
}

btndonfirmar.addEventListener('click',()=>{
  funcaobtndonfirmar() 
})

ignoreButton.addEventListener('click',()=>{
  funcaoignoreButton();
})

//

function displayValidValue() {
  if (valid) {
    document.querySelector('#audiencia-modal').style.display = 'none';
    document.getElementById('code').innerText = 'Código: ' + code;
    document.getElementById('password').innerText = 'Senha: ' + password;
    document.querySelector('.agenda-modal').style.display = 'block';
  } else {
    let text = document.querySelector('#preenche');
    let modal = document.querySelector('#form');
    modal.style.border = '2px solid #ff0000';
    text.innerText = "Preencha todos os campos";
  }
}

function requisicao(codeconf, passwordconf) {
  const code = codeconf;
  const password = passwordconf;
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "Dados.php", true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.send("code=" + encodeURIComponent(code) + "&password=" + encodeURIComponent(password));
}



//Requisição
  /*
  $.ajax({
    type: 'POST',
    url: '.php/Dados.php',
    data:{
      code: $('code'),
      password: $('password')
    },
    dataType: 'json',
    async: true,
  });*/



/*
// Função para enviar os dados para o servidor
function sendDataToServer(code, password) {
  fetch('get_user_messages.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: JSON.stringify(code,password)
  })
}
*/







const chatMessages = document.getElementById("chatMessages");
const messageInput = document.getElementById("messageInput");

/*
// Função para enviar uma mensagem do usuário
function sendUserMessage(code,password) {
  const message = messageInput.value;
  fetch('get_user_messages.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'sender=user&receiver=adm&message=' + encodeURIComponent(message) + '&code=' + code + '&password=' + password
  })
    .then(response => {
      if (response.ok) {
        // Mensagem enviada com sucesso
        displayMessage('user', message);
        messageInput.value = ''; // Limpa o campo de entrada
      } else {
        // Tratar erros ao enviar a mensagem
        console.error('Erro ao enviar a mensagem do usuário:', response.status);
      }
    })
    .catch(error => {
      console.error('Erro ao enviar a mensagem do usuário:', error);
    });
}

// Função para exibir a mensagem na interface
function displayMessage(sender, message) {
  // Crie um elemento HTML para exibir a mensagem
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.classList.add(sender);

  // Defina o conteúdo da mensagem
  messageElement.innerText = message;

  // Adicione a mensagem ao contêiner de mensagens
  const messageContainer = document.getElementById('message-container');
  messageContainer.appendChild(messageElement);
}

// Função para receber mensagens do administrador
function receiveAdminMessages() {
  fetch('get_admin_messages.php')
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        // Tratar erros ao receber as mensagens
        throw new Error('Erro ao receber as mensagens do administrador:', response.status);
      }
    })
    .then(data => {
      // Tratar a resposta do servidor (as mensagens do administrador)
      data.forEach(message => {
        displayMessage('adm', message.message);
      });
    })
    .catch(error => {
      console.error(error);
    });
}

sendUserMessage('Olá administrador!',  code, password);

*/