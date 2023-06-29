<?php
// Conexão com o banco de dados
// ...
include_once "conexao.php";

// Obter os dados da requisição
$sender = $_POST['sender'];
$receiver = $_POST['receiver'];
$message = $_POST['message'];
$code = $_POST['code'];
$password = $_POST['password'];

// Verificar a senha do usuário
$sql = "SELECT password FROM users WHERE code = '$code'";
$result = $conn->query($sql);

if ($result -> num_rows > 0) {
  $row = $result->fetch_assoc();
  $userPassword = $row['password'];

  // Verificar se a senha fornecida é igual à senha do usuário
  if ($userPassword === $password) {
    // Senha correta, inserir a mensagem no banco de dados
    $sql = "INSERT INTO sms (sender, receiver, message, code, password) VALUES ('$sender', '$receiver', '$message', '$code', '$password')";
    if ($conn->query($sql) === TRUE) {
      http_response_code(200); // OK
    } else {
      http_response_code(500); // Internal Server Error
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
