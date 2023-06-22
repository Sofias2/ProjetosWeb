<?php
include 'bd.php';

session_start();

$id = trim($_POST['code']);
$titulo = trim($_POST['titulo']);
$data = trim($_POST['data']);
$datac = trim($_POST['dataC']);
$anot = trim($_POST['anotacao']);

$update = "UPDATE tbl_tarefa SET tar_titulo = :ttitulo, tar_descricao = :tanot, tar_data_criacao = :tdatacri, tar_data_conclusao = :tdatacon WHERE tar_id = :tid";

$stmt = $pdo->prepare($update);
$stmt->bindValue(":ttitulo", $titulo);
$stmt->bindValue(":tanot", $anot);
$stmt->bindValue(":tdatacri", $data);
$stmt->bindValue(":tdatacon", $datac);
$stmt->bindValue(":tid", $id);

if ($stmt->execute()) {
    $response = array('status' => 'success', 'message' => 'Atualização bem-sucedida');
} else {
    $response = array('status' => 'error', 'message' => 'Erro ao atualizar os dados');
}

header('Content-Type: application/json');
echo json_encode($response);
?>
