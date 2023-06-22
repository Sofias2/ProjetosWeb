<?php
require_once("bd.php");

session_start();

$idtarefa = trim($_POST['id']);

$sql = "DELETE FROM tbl_tarefa WHERE tbl_tarefa.tar_id = :idtarefa";
   
$stmt = $pdo->prepare($sql);
$stmt->bindValue(":idtarefa", $idtarefa);

$response = array();

if ($stmt->execute()) {
    $response['status'] = 'success';
    $response['message'] = 'Tarefa excluída com sucesso';
} else {
    $response['status'] = 'error';
    $response['message'] = 'Erro ao excluir a tarefa';
}

echo json_encode($response);
?>