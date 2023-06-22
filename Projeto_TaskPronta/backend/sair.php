<?php
session_start();
session_destroy();

$response = array('status' => 'success', 'message' => 'Sessão encerrada com sucesso');

echo json_encode($response);
?>