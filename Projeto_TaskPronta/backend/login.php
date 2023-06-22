<?php
require 'bd.php';

// Verificar se as credenciais de autenticação básica estão presentes
if (!isset($_SERVER['PHP_AUTH_USER']) || !isset($_SERVER['PHP_AUTH_PW'])) {
  header('HTTP/1.1 401 Unauthorized');
  $response = array('status' => 'error', 'message' => 'Autenticação não presente');
  echo json_encode($response);

  exit;
}

$email = addslashes($_SERVER['PHP_AUTH_USER']);
$senha = md5($_SERVER['PHP_AUTH_PW']);

if (!$email || !$senha) {
  header('HTTP/1.1 400 Bad Request');
  $response = array('status' => 'error', 'message' => 'Por favor, Preencha os dados');
  echo json_encode($response);
  exit;
}

// Consultar o banco de dados para verificar as credenciais
$sql = "SELECT * FROM tbl_usuario WHERE usr_email = :email AND usr_senha = :senha";
$stmt = $pdo->prepare($sql);
$stmt->bindValue(':email', $email);
$stmt->bindValue(':senha', $senha);
$stmt->execute();

if ($stmt->rowCount() > 0) {
  // Credenciais válidas, realizar o login
  if (session_status() !== PHP_SESSION_ACTIVE) {
    session_start();
  }

  $linha = $stmt->fetch();

  $_SESSION["id_usuario"] = $linha["usr_id"];
  $_SESSION["nome"] = $linha["usr_nome"];
  $_SESSION['email'] = $linha['usr_email'];

  $response = array('status' => 'sucesso', 'message' => 'Login bem-sucedido');
  header('Content-Type: application/json');
  echo json_encode($response);
} else {
  // Credenciais inválidas
  header('HTTP/1.1 401 Unauthorized');

  $response = array('status' => 'erro', 'message' => 'Credenciais inválidas');
  header('Content-Type: application/json');
  echo json_encode($response);
  exit;
}
?>
