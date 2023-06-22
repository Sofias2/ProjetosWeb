<?php
include 'bd.php';
session_start();

// Verifica se existe alguma atividade com status aberto e data de conclusão expirada para o usuário logado
$sql = "SELECT COUNT(*) AS numAtividadesExpiradas FROM tbl_tarefa WHERE status = 0 AND data_conclusao < NOW() AND usr_id = :usuarioId";
$smd = $pdo->prepare($sql);
$smd->bindValue(':usuarioId',  $_SESSION["id_usuario"]);
$smd->execute();
$resultado = $smd->fetch(PDO::FETCH_ASSOC);

$existeAtividadeExpirada = ($resultado['numAtividadesExpiradas'] > 0);

$response = array('existeAtividadeExpirada' => $existeAtividadeExpirada);
echo json_encode($response);
?>
