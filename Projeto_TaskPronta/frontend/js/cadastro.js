$(document).ready(function(){


$("#cadastrar").click(function(e) {
    e.preventDefault();

    var formNome= $("#nome").val();
    var formSobrenome = $("#sobrenome").val();
    var formDataNasc = $("#datanascimento").val();
    var formEmail = $("#email").val();
    var formSenha = $("#senha").val();

    $.ajax({
        url:'../backend/cadastro.php',
        method:'POST',
        data: {
          nome: formNome,
          sobrenome: formSobrenome,
          udata: formDataNasc,
          email: formEmail,
          senha: formSenha
        },
        success: function (response) {
          console.log(response)
          var parsedResponse = JSON.parse(response); 
          if (parsedResponse.status === 'success') {
            window.location.href = "../frontend/index.html";
          } else {
            alert("Erro ao cadastrar");
          }
        }
        
      })
      //  
       
      


    });

  });
   

