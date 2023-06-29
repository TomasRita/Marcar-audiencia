<?php
function conectar() {
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "audiencia";
    
    // Criação da conexão
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Verifica se ocorreu algum erro na conexão
    if (mysqli_connect_errno()) {
        die("Falha na conexão com o banco de dados: " . mysqli_connect_error());
    }

    return $conn;
}

function desconectar($conexao) {
    // Fecha a conexão com o banco de dados
    mysqli_close($conexao);
}

if (isset($_POST['id']) && isset($_POST['remover']) && $_POST['remover'] === 'true') {
    $registroId = $_POST['id'];

    // Conecte-se ao banco de dados
    $conexao = conectar();

    // Verifique se o ID do registro está definido
    if ($registroId !== null) {
        // Execute a consulta para excluir o registro da base de dados
        $query = "DELETE FROM usuario_audiencia WHERE id = '$registroId'";
        $resultado = mysqli_query($conexao, $query);

        if ($resultado) {
            // Registro excluído com sucesso
            $response = array('status' => 'success', 'message' => 'Registro excluído com sucesso.');
        } else {
            // Ocorreu um erro ao excluir o registro
            $response = array('status' => 'error', 'message' => 'Erro ao excluir o registro.');
        }
    } else {
        // ID do registro não definido
        $response = array('status' => 'error', 'message' => 'ID do registro não definido.');
    }

    // Feche a conexão com o banco de dados
    desconectar($conexao);

    // Retorna a resposta como JSON
    echo json_encode($response);
}
?>


