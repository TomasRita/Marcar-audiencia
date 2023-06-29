<!DOCTYPE html>
<html lang="pt-br">
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Marcação de Audiência</title>
  <link rel="stylesheet" type="text/css" href="./css/style.css">
</head>
<body>
<header>
  <div class="logo"><a href="#">Logo</a></div>
    <nav>
      <ul>
        <li><a href="#">Início</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#servicos">Serviços</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
      <div class="audiencia">
        <a href="#" id="open-modal">Marcar audiência</a>
    </div>
    </nav>
    <div id="openModal" class="class-cadastrar" >
      <img src="./imagens/icons8_login_512px.png" alt="cadastrar adm">
    </div>
</header>
<div class="agenda-modal">
<div id="modal-conf" class="modal-conf">
  <div class="modal-content">
    <h2 id="H2">Código e Senha Aleatórios</h2>
    <p id="code"></p>
    <p id="password"></p>
    <button id="ignoreButton">Ignorar</button>
    <button id="confirmButton">Confirmar</button>
  </div>
</div>
</div>


  <section id="inicio">
    <div class="container">
      <h1>Bem-vindo ao Belas Angola</h1>
      <p>Um lugar maravilhoso para viver e visitar.</p>
    </div>
  </section>

  <section id="sobre">
    <div class="container">
      <h2>Sobre</h2>
      <p>O sistema de marcação de audiência é para diminuir o tempo de espera na seção de vistos e aumentar a segurança de todas as pessoas que se encontram na área dos vistos. Isso significa que todos os solicitantes que pretendam pedir um visto devem combinar uma audiência antes de se deslocarem à Embaixada. É obrigatória a marcação de uma audiência para cada pessoa que viaja.</p>
    </div>
  </section>

  <section id="servicos">
    <div class="container">
        <div class="text">
                <h2>Serviços Municipais</h2>
            <p>Alguns serviços oferecidos pelo município:</p>
            <ul>
                <li>Reciclagem e coleta de resíduos</li>
                <li>Transporte público eficiente</li>
                <li>Parques e áreas de lazer</li>
            </ul>
        </div>
      <img src="./imagens/0021807-1-1-big-47181.jpg" alt="Serviços Municipais">
    </div>
  </section>

  <section id="contato">
    <div class="container">
      <h2>Contato</h2>
      <p>Entre em contato conosco para mais informações:</p>
      <form method="POST" action="Dados.php">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="form_nome" required>
        
        <label for="email">E-mail:</label>
        <input type="email" id="email" name="form_email" required>
        
        <label for="mensagem">Mensagem:</label>
        <textarea id="mensagem" name="form_mensagem" required></textarea>
        
        <button type="submit">Enviar</button>
      </form>
    </div>
  </section>

    <div id="modal-adm" class="modal-adm">
      <div class="modal-content-adm">
        <span class="close">&times;</span>
        <h2>Você é administrador?</h2>
        <label for="adminSelect">Selecione uma opção:</label>
        <select id="adminSelect">
          <option value="admin">Sou administrador</option>
          <option value="nonAdmin">Não sou administrador</option>
        </select>
        <label class="Nlabel" for="">escolha uma opção</label>
        <button id="saveBtn">Avançar</button>
      </div>
    </div>

  <div id="audiencia-modal">
    <div class="modal-content" id="form">
      <span class="close-modal">&times;</span>
      <h2 id="preenche">Agendamento de Audiência</h2>

      <form id="audiencia-form" method="POST" action="Dados.php">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required>
        
        <label for="sobrenome">Sobrenome:</label>
        <input type="text" id="sobrenome" name="sobrenome" required>
        
        <label for="email">E-mail:</label>
        <input type="email" id="email" name="email" required>
        
        <label for="telefone">Telefone:</label>
        <input type="text" id="telefone" name="telefone" required>
        
        <label for="datahora">Data e Hora da Audiência:</label>
        <input type="datetime-local" id="datahora" name="datahora" required>
        
        <label for="motivo">Motivo da Audiência:</label>
        <textarea id="motivo" name="motivo" ></textarea>
        
        <button type="submit" id="agendar">Agendar Audiência</button>
      </form>
    </div>
  </div>
  <dv class="fixo-chat">
      <div class="chat-container" id="chat">
        <span class="chat-close-modal">&times;</span>
          <div class="chat-messages" id="chatMessages">
            <div class="message received">
              <span class="sender">Bot:</span>
              <span class="text">Olá! Como posso ajudar?</span>
            </div>
          </div>
          <div class="chat-input">
            <input type="text" id="messageInput" placeholder="Digite sua mensagem...">
            <button id="userSendButton" class="send-button" onclick="sendUserMessage()">Enviar</button>
          </div>
        </div>
      </div>
    </dv>

  <div class="content-clicle">
    <div class="cicle" id="idsms">
          <img src="./imagens/icons8_chat_144px.png"   alt="">
    </div>
  </div>
  <footer>
    <p>&copy; 2023 Administração do Belas Angola. Todos os direitos reservados.</p>
  </footer>
  <script src="./js/code.jquery.com_jquery-3.6.0.min.js"></script>
  <script src="./js/js.js"></script>
</body>
</html>
