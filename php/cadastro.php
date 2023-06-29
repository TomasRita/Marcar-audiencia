<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="../css/cadastrar.css">
    <title>Marcação de Audiência</title>
</head>
<body>
<section>
        <div class="img">
            <img src="../img/img04.png" alt="" id="img">
        </div>
        <div class="box">
            <form action="pass.php" method="POST">
                <div class="conteudo">
                <h2 for="">Seja bem-vindo</h2>
                </div>
            <div class="input">
                <input type="text" id="nomeadm" name="nomeadm" required>
                <label for="nomeadm">Insira Nome do Admistrador</label>
            </div>
            <div class="input">
                <input type="password" id="passwordadm" name="passwordadm" required>
                <label for="passwordadm">Insira a Senha</label>
            </div>
            <div class="buttons">
                <div class="button">
                    <input type="submit" value="Entrar">
                </div>
                <div class="btnvoltar">
                  <a href="../index.php">Voltar</a>
                </div>
            </div>
            <div class="links">
                <a href="">Esqueceu a senha?</a>
            </div>
            </form>
        </div>

    </section>
<script src="../js/cadastro.js"></script>
</body>
</html>