<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="../css/dashboard.css">
    <title>Marcação de Audiência</title>
</head>
<body>
    <header>
        <nav>
            <a href="#"><img src="../imagens/icons8_dashboard_layout_480px.png" alt=""></a>
            <input type="search" placeholder="Pesquisar" id="input-pesquisar">
            <button onclick ="buscar()"> Buscar </button>
        </nav>
        <div class="confing">
          <div class="definir">
            <img src="../imagens/icons8_menu_500px.png" alt="" id="img">
          </div>
        </div>
      
    </header>
    <div class="modal-config">
      <div class="modal-content-config">
        <div class="list">
          <span>Configurações</span>
          <span>Ajuda</span>
          <span>Terminar sessão</span>
        </div>
      </div>
    </div>
    <main>
    <section class="table-content" id="audienciaTable">
      <h1>Lista de audiências marcadas</h1>
      <div class="tab">
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Número de telefone</th>
              <th>Data e hora</th>
              <th>Motivo</th>
              <th>Validar</th>
              <th>Deletar</th>
            </tr>
          </thead>
           <tbody id="tbody">
          </tbody>
          </table>
      </div>
    </section>
  <div class="content-chat">
    <div class="list-chat">
      <div class="chat">
        <input type="search" placeholder="Pesquisar">
        <div class="itensavatar">
          <div class="dados_avatar">
            <div class="avatar">
              <img src="../imagens/contacts_910px.png" alt="">
            </div>
            <div class="text-chat">
              <span class="text-name">Ana basto</span>
              <span class="text-sms">nova sms</span>
            </div>
          </div>
        </div>
      </div>
  </div>
  </div>
    </main>
    <dv class="fixo-chat">
      <div class="chat-container">
        <span class="close-modal">&times;</span>
          <div class="chat-messages" id="chatMessages">
            <div class="message received">
            </div>
          </div>
          <div class="chat-input">
            <input type="text" id="messageInput" placeholder="Digite sua mensagem...">
            <button id="sendButton" onclick="sendAdminMessage()">Enviar</button>
          </div>
        </div>
      </div>
    </dv>

  <div class="content-clicle">
    <div class="cicle" id="idsms">
          <img src="../imagens/icons8_chat_144px.png"   alt="">
    </div>
  </div>
  <div class="chat-container1" id="chatContainer"></div>
    <script src="../js/dashboard.js"></script>
</body>
</html>