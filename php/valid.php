<?php
if (isset($_POST['id'])) {
  $registroId = $_POST['id'];
  // Envio da mensagem para o chat do usuário 
  $mensagem = "Você foi aceito! Parabéns!";

  // Retorno da resposta como JSON
  $response = array('status' => 'success', 'message' => 'Registro validado com sucesso.');
  echo json_encode($response);
}
?>
