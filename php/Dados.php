<?php
// Incluir a conexão
include_once "conexao.php";
/*
header('Acess-Control-Allow-Headers: Content-Type');
header('Acess-Control-Allow-Methods: GET,POST');
header('Acess-Control-Allow-Origin: *');
*/
$Dados = filter_input_array(INPUT_POST, FILTER_DEFAULT);
/*
// RECEBER OS DADOS DO FORM DE AUDIÊNCIA

$jsonData = file_get_contents('php://input');
$data = json_decode($jsonData);

var_dump($data);

// Processar os dados recebidos

// Retornar uma resposta
$response = "Dados recebidos com sucesso!";
echo $response;
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
   
}*//*
if (isset($_POST['code'])) {
    $code = $_POST['code'];
    var_dump($code);
    $mensagem = "Você foi aceito! Parabéns!";

    // Retorno da resposta como JSON
    $response = array('status' => 'success', 'message' => 'Registro validado com sucesso.');
    echo json_encode($response);
  }*/

var_dump($_POST);
// Verificar se todos os campos foram preenchidos
if (empty($Dados['nome']) || empty($Dados['sobrenome']) || empty($Dados['email']) || empty($Dados['telefone']) || empty($Dados['datahora']) || empty($Dados['motivo'] )) {
    echo "Todos os campos devem ser preenchidos.";
} else {
    // Formatar a data e hora para o formato do banco de dados (AAAA-MM-DD HH:MM:SS)
    $dataHoraFormatada = date('Y-m-d H:i:s', strtotime($Dados['datahora']));

    // Montar a query SQL de inserção para a tabela usuario_audiencia
    $query_usuario = "INSERT INTO usuario_audiencia 
        (nome, sobrenome, email, tel, data_hora, motivo) VALUES
        ('".$Dados['nome']."', '".$Dados['sobrenome']."', '".$Dados['email']."', '".$Dados['telefone']."', '".$dataHoraFormatada."', '".$Dados['motivo']."')";

    // Executar a query
    if ($conn->query($query_usuario) === TRUE) {
        echo "Dados de audiência inseridos com sucesso.";
    } else {
        echo "Erro ao inserir os dados de audiência: " . $conn->error;
    }
}

// RECEBER OS DADOS DO FORMULÁRIO
$FormDados = filter_input_array(INPUT_POST, FILTER_DEFAULT);

// Verificar se todos os campos foram preenchidos
if (empty($FormDados['form_nome']) || empty($FormDados['form_email']) || empty($FormDados['form_mensagem'])) {
    echo "Todos os campos devem ser preenchidos2.";
} else {
    // Montar a query SQL de inserção para a tabela form
    $query_form = "INSERT INTO form 
        (form_nome, form_email, sms) VALUES
        ('".$FormDados['form_nome']."', '".$FormDados['form_email']."', '".$FormDados['form_mensagem']."')";

    // Executar a query
    if ($conn->query($query_form) === TRUE) {
        echo "Dados do formulário inseridos com sucesso.";
    } else {
        echo "Erro ao inserir os dados do formulário: " . $conn->error;
    }
}

// Fechar a conexão com o banco de dados
$conn->close();
?>
