<?php
include "bd.php";
session_start();

$idtarefa = trim($_POST['code']);

$tab = array();

$sql = "SELECT * from tbl_tarefa WHERE tar_id = ". $idtarefa;

$smd = $pdo->prepare($sql);

$smd->execute();

$dados = $smd->fetchAll(PDO::FETCH_ASSOC);

foreach($dados as $d) {
    $tab['tid'] = $d['tar_id'];
    $tab['tarefa'] = $d['tar_titulo'];
    $tab['data_criacao'] = $d['tar_data_criacao'];
    $tab['data_conclusao'] = $d['tar_data_conclusao'];
    $tab['descricao'] = $d['tar_descricao'];
}

header('Content-Type: application/json');
echo json_encode($tab);
?>