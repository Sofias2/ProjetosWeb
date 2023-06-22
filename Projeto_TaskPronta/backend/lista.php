<?php

include "bd.php";
session_start();

$tab = array(); // Array para armazenar os dados

$sql = "SELECT * FROM tbl_tarefa WHERE usr_id = :id_usuario";
$stmt = $pdo->prepare($sql);
$stmt->bindValue(':id_usuario', $_SESSION["id_usuario"]);
$stmt->execute();
$dados = $stmt->fetchAll(PDO::FETCH_ASSOC);

foreach ($dados as $d) {
    $tab[] = array(
        'id' => $d['tar_id'],
        'titulo' => $d['tar_titulo'],
        'data_conclusao' => $d['tar_data_conclusao'],
        'concluida' => $d['tar_status']
    );
}

header('Content-Type: application/json');
echo json_encode($tab);
