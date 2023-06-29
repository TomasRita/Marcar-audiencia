<?php
// Obter os parâmetros enviados pela requisição POST
$sender = $_POST['sender'];
$receiver = $_POST['receiver'];
$message = $_POST['message'];

// Salvar a mensagem no banco de dados ou fazer qualquer outra operação necessária

// Retornar uma resposta de sucesso para o cliente
http_response_code(200);
?>
