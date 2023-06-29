<?php
// Conexão com o banco de dados
// ...
include_once "conexao.php";

// Obter os dados da requisição
$code = $_POST['code'];
$password = $_POST['password'];

// Verificar a senha do usuário
$sql = "SELECT password FROM users WHERE code = '$code'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  $row = $result->fetch_assoc();
  $userPassword = $row['password'];

  // Verificar se a senha fornecida é igual à senha do usuário
  if ($userPassword === $password) {
    // Senha correta, buscar as mensagens do usuário
    $sql = "SELECT * FROM sms WHERE receiver = 'user' AND code = '$code'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
      $messages = [];
      while ($row = $result->fetch_assoc()) {
        $messages[] = $row;
      }
      echo json_encode($messages);
    } else {
      echo json_encode([]);
    }
  } else {
    // Senha incorreta
    http_response_code(401); // Unauthorized
  }
} else {
  // Usuário não encontrado
  http_response_code(404); // Not Found
}
?>
