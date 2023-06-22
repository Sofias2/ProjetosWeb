<?php

session_start();

$titulo = trim($_POST['titulo']);
$dataini = trim($_POST['datainicio']);
$dataf = trim($_POST['datafinal']);
$anot = trim($_POST['anotacao']);

require_once("bd.php");

$sql = "INSERT INTO tbl_tarefa (tar_titulo, tar_descricao, tar_data_criacao, tar_data_conclusao, usr_id) VALUES (:ttitulo, :tdesc, :tdcri, :tdfi, :ucodigo)";

$stmt = $pdo->prepare($sql);
$stmt->bindValue(":ttitulo", $titulo);
$stmt->bindValue(":tdesc", $anot);
$stmt->bindValue(":tdcri", $dataini);
$stmt->bindValue(":tdfi", $dataf);
$stmt->bindValue(":ucodigo", $_SESSION["id_usuario"]);

if ($stmt->execute()) {
    $response = array('status' => 'success', 'message' => 'Tarefa adicionada com sucesso');
} else {
    $response = array('status' => 'error', 'message' => 'Erro ao adicionar tarefa');
}

echo json_encode($response);
?>
