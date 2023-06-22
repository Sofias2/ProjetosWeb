$(document).ready(function() {
  $("#entrar").click(function(e) {
    e.preventDefault();

    var formEmail = $("#email").val();
    var formSenha = $("#senha").val();

    var requestParameters = {
      url: "../backend/login.php",
      type: "POST",
      beforeSend: function (xhr) {
        xhr.setRequestHeader("Authorization", "Basic " + btoa(formEmail + ":" + formSenha));
        }  
    };

    $.ajax({
      url: "../backend/login.php",
      type: "POST",
      beforeSend: function (xhr) {
        xhr.setRequestHeader("Authorization", "Basic " + btoa(formEmail + ":" + formSenha));
        }, 
      success: function(response) {
      if (response.status === 'sucesso') {
        console.log(response);      
        alert('Login bem-sucedido!');
        window.location.href = "../frontend/home.html";

      } else if (response.status === 'erro'){
        
        alert('Senha ou Email Inválidos');
        var respot = document.getElementById('resposta');

        respot.innerText = "Senha ou Email Inválidos";

        $("#email").val("");
        $("#senha").val("");

        
      }
    }
  });
  });
});
