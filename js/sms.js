  
const chatMessages = document.getElementById("chatMessages");
const messageInput = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");

// Função para enviar uma mensagem do administrador
function sendAdminMessage() {
  const message = messageInput.value;

  fetch('send_admin_message.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'sender=adm&receiver=user&message=' + encodeURIComponent(message)
  })
    .then(response => {
      if (response.ok) {
        // Mensagem enviada com sucesso
        displayMessage('adm', message);
        messageInput.value = ''; // Limpa o campo de entrada
      } else {
        // Tratar erros ao enviar a mensagem
        console.error('Erro ao enviar a mensagem do administrador:', response.status);
      }
    })
    .catch(error => {
      console.error('Erro ao enviar a mensagem do administrador:', error);
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

// Função para receber mensagens do usuário
function receiveUserMessages() {
  fetch('get_user_messages.php')
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        // Tratar erros ao receber as mensagens
        throw new Error('Erro ao receber as mensagens do usuário:', response.status);
      }
    })
    .then(data => {
      // Tratar a resposta do servidor (as mensagens do usuário)
      data.forEach(message => {
        displayMessage('user', message.message);
      });
    })
    .catch(error => {
      console.error(error);
    });
}

// Chamar a função para receber mensagens do usuário
receiveUserMessages();
