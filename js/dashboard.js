// Modal configuração

let modal_config=document.querySelector('.modal-config'),
btnmodal_comfig=document.querySelector('.definir');
let btn_sms=document.querySelector('#idsms');
let chat=document.querySelector('.chat'),itensavatar=document.querySelector('.itensavatar'),
itensavatar1=document.querySelector('.close-modal');
/*----------------------------------------------------*/

btnmodal_comfig.addEventListener('click',()=>{
var img=document.querySelector('#img')
modal_config.classList.add("transitionpopup")
if (modal_config.style.display=='') {
    img.src="../imagens/icons8_multiply_500px.png"
    modal_config.style.display = 'flex';
}
else{
    img.src="../imagens/icons8_menu_500px.png"
    modal_config.style.display = '';
}

})
/*botão onde vamos chamar a tela list_chat */

btn_sms.addEventListener('click',()=>{
  var content_chat=document.querySelector('.content-chat')
  chat.classList.add("transitionpopup")
  if (content_chat.style.display=='') {
      content_chat.style.display='block';
  }
  else{
      content_chat.style.display = '';
  }
})
  
/*botão onde vamos chamar a tela list_chat */
itensavatar.addEventListener('click',()=>{
  var fixo_chat=document.querySelector('.fixo-chat')
  chat.classList.add("transitionpopup")
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
  


// Função para carregar os dados da tabela usuario_audiencia usando JavaScript
function carregarDadosAudiencia() {
  // Fazer uma requisição AJAX para obter os dados da tabela usuario_audiencia
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
          var dados = JSON.parse(xhr.responseText);
          var tabela = document.getElementById("audienciaTable");

          // Limpar os dados existentes na tabela
          tabela.getElementsByTagName("tbody")[0].innerHTML = "";
          tabela = tabela.getElementsByTagName("tbody")[0];

          // Adicionar os novos dados à tabela
          dados.Records.forEach(function(registro) {
              var row = tabela.insertRow(-1);
              var cell1 = row.insertCell(0);
              var cell2 = row.insertCell(1);
              var cell3 = row.insertCell(2);
              var cell4 = row.insertCell(3);
              var cell5 = row.insertCell(4);
              var cell6 = row.insertCell(5);
              var cell7 = row.insertCell(6);

              cell1.innerHTML = registro.nome;
              cell2.innerHTML = registro.email;
              cell3.innerHTML = registro.tel;
              cell4.innerHTML = registro.data_hora;
              cell5.innerHTML = registro.motivo;
              cell6.innerHTML = "<img src=\"../imagens/valid.png\" width=\"24px\" height=\"20px\" style=\"cursor: pointer;margin-left:1rem\" onclick=\"validRegistro(" + registro.id + ")\">";
              cell7.innerHTML = "<img src=\"../imagens/eliminar.png\" width=\"24px\" height=\"20px\" style=\"cursor: pointer;margin-left:1rem\" onclick=\"excluirRegistro(" + registro.id + ")\">";
          });
      }
  };

  xhr.open("POST", "listar.php", true);
  xhr.send();
}

function buscar() {
  /* pesquisar por id */
let input_busca = document.querySelector("#input-pesquisar");
let busca_id = document.getElementById("tbody");
let linha = busca_id.getElementsByTagName("tr");
let valor = input_busca.value;
if (false==isNaN(valor)) {

  if (valor == "") {
      for (let posicao = 0; posicao < linha.length; posicao++) {
          linha[posicao].style.display = "";
      }
  } else {
      let cont=1
      for (let posicao = 0; posicao < linha.length; posicao++) {

          if (valor  == cont) {
                  let conteudoDaLinha = linha[valor - 1].innerHTML;
                  if (conteudoDaLinha.includes(posicao) == true && valor - 1 == posicao) {      
                      linha[posicao].style.display = "";
                  } 
              }   
              else
              {
                  linha[posicao].style.display = "none";
              } 
                  if ( valor > linha.length) {
                      linha[posicao].style.display = "";
                      alert("Id invalido")
             
                  }
          cont=cont+1
      }
  }

  input_busca.addEventListener("keyup", () => {
      for (let posicao = 0; posicao < linha.length; posicao++) {
          linha[posicao].style.display = "";
      }
  })
}

}

// Carregar os dados da tabela assim que a página for carregada
window.onload = function() {
  carregarDadosAudiencia();
};

// Função para enviar uma solicitação ao servidor PHP para validar o registro e enviar a mensagem
function validRegistro(registroId) {
  if (confirm('Tem certeza que deseja validar este registro?')) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          if (response.status === 'success') {
            localStorage.setItem('recebe', 'sucesso');
            addMessage('O registro foi validado com sucesso.');
            removeRegistrationFromTable(registroId);
          } else {
            console.error('Erro ao validar registro: ' + response.message);
          }
        } else {
          console.error('Erro ao fazer a solicitação: ' + xhr.status);
        }
      }
    };

    xhr.open('POST', 'valid.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('id=' + registroId);
  }
}

// Função para remover o registro da tabela (implementação simulada)
function removeRegistrationFromTable(registroId) {
  const registrationRow = document.getElementById(`registration-${registroId}`);
  registrationRow.remove();
}



function excluirRegistro(registroId) {
  if (confirm("Tem certeza que deseja excluir este registro e remover da base de dados?")) {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
          if (xhr.readyState === 4) {
              if (xhr.status === 200) {
                  // Analisar a resposta JSON
                  var response = JSON.parse(xhr.responseText);
                  if (response.status === 'success') {
                      // Registro excluído com sucesso, atualize a tabela ou faça outras ações necessárias
                      carregarDadosAudiencia();
                  } else {
                      // Ocorreu um erro ao excluir o registro
                      console.error("Erro ao excluir registro: " + response.message);
                  }
              } else {
                  // Ocorreu um erro ao fazer a solicitação
                  console.error("Erro ao fazer a solicitação: " + xhr.status);
              }
          }
      };
      xhr.open("POST", "excluir.php", true);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.send("id=" + registroId + "&remover=true");
  }
}
