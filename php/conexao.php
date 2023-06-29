<?php
// Dados de conexão com o banco de dados
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "audiencia";

// Criação da conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificação de erros na conexão
if ($conn->connect_error) {
    die("Falha na conexão com o banco de dados: " . $conn->connect_error);
}

// Aqui você pode executar as consultas e operações no banco de dados
?>
