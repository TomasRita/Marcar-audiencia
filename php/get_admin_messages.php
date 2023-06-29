<?php
// Conexão com o banco de dados
// ...
include_once "conexao.php";
// Buscar as mensagens do administrador
$sql = "SELECT * FROM sms WHERE receiver = 'adm'";
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
?>
