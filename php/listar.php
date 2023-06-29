<?php
// Incluir a conexão
include_once "conexao.php";

// Consultar os dados da tabela usuario_audiencia
$query = "SELECT * FROM usuario_audiencia";
$resultado = $conn->query($query);

// Verificar se há registros encontrados
if ($resultado->num_rows > 0) {
    // Array para armazenar os registros
    $registros = array();

    // Loop através dos resultados da consulta
    while ($row = $resultado->fetch_assoc()) {
        $registros[] = $row;
    }

    // Retornar os registros como JSON
    header('Content-Type: application/json');
    echo json_encode(array('Records' => $registros));
} else {
    // Caso não haja registros encontrados
    echo json_encode(array('message' => 'Nenhum registro encontrado.'));
}

// Fechar a conexão com o banco de dados
$conn->close();
?>
