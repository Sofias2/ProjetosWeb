<?php

session_start();

include 'bd.php';

$nome = addslashes($_POST['nome']);
$sobrenome = addslashes($_POST['sobrenome']);
$data = addslashes($_POST['udata']);
$email = addslashes($_POST['email']);
$senha = md5($_POST['senha']);

$response = array();

if (empty($_POST['nome']) || empty($_POST['email']) || empty($_POST['senha']) || empty($_POST['sobrenome'])) {
    $response['status'] = 'error';
    $response['message'] = 'Por favor, preencha todos os campos obrigatórios';
    echo json_encode($response);
    exit();
}

$statement = $pdo->prepare("SELECT * FROM tbl_usuario WHERE usr_email = :email");
$statement->bindValue(':email', $_POST['email']);
$statement->execute();
if ($statement->rowCount() > 0) {
    $response['status'] = 'error';
    $response['message'] = 'Este e-mail já está em uso. Por favor, use outro.';
    echo json_encode($response);
    exit();
}



$statement = $pdo->prepare("INSERT INTO tbl_usuario (usr_nome, usr_sobre_nome, usr_data_nascimento, usr_email, usr_senha) VALUES (:nome, :sobrenome, :udata, :email, :senha)");
$statement->bindValue(':nome', $nome);
$statement->bindValue(':sobrenome', $sobrenome);
$statement->bindValue(':udata', $data);
$statement->bindValue(':email', $email);
$statement->bindValue(':senha', $senha);

if ($statement->execute()) {
    $response['status'] = 'success';
    $response['message'] = 'Cadastro realizado com sucesso';
    echo json_encode($response);
    exit();
} else {
    $response['status'] = 'error';
    $response['message'] = 'Erro ao cadastrar usuário';
    echo json_encode($response);
    exit();
}

?>
