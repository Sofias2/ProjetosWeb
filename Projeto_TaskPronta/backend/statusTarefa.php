<?php
include 'bd.php';

session_start();

$id = trim($_POST['id']);

$update = "UPDATE tbl_tarefa SET tar_status = NOT tar_status WHERE tar_id = :tid";

$stmt = $pdo->prepare($update);
$stmt->bindValue(":tid", $id);

$response = array();

if ($stmt->execute()) {
    $response['status'] = 'success';
    $response['message'] = 'Atualização bem-sucedida';
} else {
    $response['status'] = 'error';
    $response['message'] = 'Erro ao atualizar os dados';
}

header('Content-Type: application/json');
echo json_encode($response);
?>
