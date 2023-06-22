<?php

session_start();

if(!isset($_SESSION['nome'])){
  echo '{ "isLogged" : 0}';
} else {
  echo '{ "isLogged" : 1, "nome" : "' . $_SESSION['nome'] . '" }';
}


?>