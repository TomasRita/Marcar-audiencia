<?php

$senha=12345;
$email="adm@gmail.com";

$formdados=filter_input_array(INPUT_POST,FILTER_DEFAULT);

if ($formdados['nomeadm']==$email && $formdados['passwordadm']==$senha) {
    header('location:dashboard.php');
}
 else {
    header('location:cadastro.php');
}

?>