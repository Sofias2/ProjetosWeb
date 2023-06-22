 $(document).ready(function(){

    var path = window.location.pathname;
    var page = path.split("/").pop();
    
    if (page.includes("home.html")) {
      $.ajax({
        url:'../backend/protecao.php',
        method:'GET'
      }).done(function(resposta) {
        var json = JSON.parse(resposta);
    
        if (json.isLogged == 0) {
            window.location = "../frontend/index.html";
        } else {
          $("#userName").text(json.nome);
          
        }
    
      });
}

});