$(document).ready(function(){

  lista();
  listaTarefasConcluidas();
  listaTarefasAtrasadas();
    $("#sair").click(function() {
      
      $.ajax({
        url:'../backend/sair.php',
        method:'POST',
        success: function (response) {
          window.location.href = "../frontend/index.html";
        }
      })
    });


    $("#AddTarefa").click(function() {
      var formTarefa = $("#tarefa").val();
      var formDataC = $("#inputDataCriacao").val();
      var formDataCon = $("#inputDataConclusao").val();
      var formAnot = $("#textareaTarefa").val();
  
      if (formTarefa.trim().length != 0 ) {
        $.ajax({
          url:'../backend/cadastroTarefa.php',
          method:'POST', 
          data: {
            titulo: formTarefa,
            datainicio: formDataC,
            datafinal: formDataCon,
            anotacao:formAnot
            
          },
          dataType: "json",
          success: function (response) {
            if (response.status === 'success') {
              lista();
              listaTarefasConcluidas();
              listaTarefasAtrasadas();
            } else {
              alert("Erro ao cadastrar");
            }
          } 
        })        
    }});


    function lista() {
      $.ajax({
        url: "../backend/lista.php",
        type: "POST",
        dataType: "json",
        success: function(response) {
        console.log(response)
          var table = document.createElement('table');
          table.setAttribute("id", "tabela-tarefas-abertas");
          table.classList.add("table", "table-hover", "table-click");
    
          // Cria o cabeçalho da tabela
          var thead = document.createElement('thead');
          var trHead = document.createElement('tr');
          var thId = document.createElement('th');
          var thTitulo = document.createElement('th');
          var thDataConclusao = document.createElement('th');
          var thAcoes = document.createElement('th');
    
          thId.textContent = 'ID';
          thTitulo.textContent = 'Título';
          thDataConclusao.textContent = 'Data de Conclusão';
          thAcoes.textContent = 'Ações';
    
          trHead.appendChild(thId);
          trHead.appendChild(thTitulo);
          trHead.appendChild(thDataConclusao);
          trHead.appendChild(thAcoes);
    
          thead.appendChild(trHead);
          table.appendChild(thead);
    
          // Cria o corpo da tabela
          var tbody = document.createElement('tbody');
    
          response.forEach(function(data) {
            var dataConclusao = new Date(data.data_conclusao);
            var dataAtual = new Date();

            if (dataConclusao > dataAtual && data.concluida === 0 ) {
              
              var tr = document.createElement('tr');
              tr.setAttribute("id", "id-linha");
      
              var tdId = document.createElement('td');
              tdId.classList.add("tarefa");
              tdId.setAttribute("id", "id-tarefa");
      
              var tdTitulo = document.createElement('td');
      
              var tdDataConclusao = document.createElement('td');
         
      
              var tdAcoes = document.createElement('td');
      
              tdAcoes.insertAdjacentHTML('afterbegin', '<i type="submit" value="Editar" data-bs-toggle="modal" data-bs-target="#modalAlterarTarefa" class="fa-solid fa-pencil edit" ></i>');
              tdAcoes.insertAdjacentHTML('beforeend', ' <i type="submit" value="Deletar" data-bs-toggle="modal" data-bs-target="#modalExcluirTarefa"class="fa-solid fa-trash delete mx-2"></i>');
              tdAcoes.insertAdjacentHTML('beforeend', ' <i type="submit" value="Concluída" class="fa-solid fa-check status"></i>');
      
              tdId.textContent = data.id;
              tdTitulo.textContent = data.titulo;
              tdDataConclusao.textContent = data.data_conclusao.split('-').reverse().join('/');
      
              tr.appendChild(tdId);
              tr.appendChild(tdTitulo);
              tr.appendChild(tdDataConclusao);
              tr.appendChild(tdAcoes);
              tbody.appendChild(tr);
              
            }
          });
    
          table.appendChild(tbody);
    
          // Adiciona a tabela ao elemento desejado na página
          var tableContainer = document.getElementById('tabela-tarefas-abertas');
          tableContainer.innerHTML = ''; // Limpa o conteúdo atual do elemento
          tableContainer.appendChild(table);
        },
        error: function() {
          console.log('Erro ao atualizar a tabela.');
        }
      });
    }

    function listaTarefasConcluidas() {
      $.ajax({
        url: "../backend/lista.php",
        type: "POST",
        dataType: "json",
        success: function(response) {
        console.log(response)
          var table = document.createElement('table');
          table.setAttribute("id", "tabela-tarefas-concluidas");
          table.classList.add("table", "table-hover", "table-click");
    
          // Cria o cabeçalho da tabela
          var thead = document.createElement('thead');
          var trHead = document.createElement('tr');
          var thId = document.createElement('th');
          var thTitulo = document.createElement('th');
          var thDataConclusao = document.createElement('th');
          var thAcoes = document.createElement('th');
    
          thId.textContent = 'ID';
          thTitulo.textContent = 'Título';
          thDataConclusao.textContent = 'Data de Conclusão';
          thAcoes.textContent = 'Ações';
    
          trHead.appendChild(thId);
          trHead.appendChild(thTitulo);
          trHead.appendChild(thDataConclusao);
          trHead.appendChild(thAcoes);
    
          thead.appendChild(trHead);
          table.appendChild(thead);
    
          // Cria o corpo da tabela
          var tbody = document.createElement('tbody');
    
          response.forEach(function(data) {
            
    
            if (data.concluida === 1) { // Alterado para verificar o valor numérico
              
              var tr = document.createElement('tr');
              tr.setAttribute("id", "id-linha");
      
              var tdId = document.createElement('td');
              tdId.classList.add("tarefa");
              tdId.setAttribute("id", "id-tarefa");
      
              var tdTitulo = document.createElement('td');
      
              var tdDataConclusao = document.createElement('td');
       
      
              var tdAcoes = document.createElement('td');
      
              tdAcoes.insertAdjacentHTML('afterbegin', '<i type="submit" value="Editar" data-bs-toggle="modal" data-bs-target="#modalAlterarTarefa" class="fa-solid fa-pencil edit" ></i>');
              tdAcoes.insertAdjacentHTML('beforeend', ' <i type="submit" value="Deletar" data-bs-toggle="modal" data-bs-target="#modalExcluirTarefa"class="fa-solid fa-trash delete mx-2"></i>');
              tdAcoes.insertAdjacentHTML('beforeend', ' <i type="submit" value="Concluída" class="fa-solid fa-xmark status"></i>');
      
              tdId.textContent = data.id;
              tdTitulo.textContent = data.titulo;
              tdDataConclusao.textContent = data.data_conclusao.split('-').reverse().join('/');
      
              tr.appendChild(tdId);
              tr.appendChild(tdTitulo);
              tr.appendChild(tdDataConclusao);
              tr.appendChild(tdAcoes);
              tr.classList.add('tarefa-concluida');
              tbody.appendChild(tr);
              
            }
          });
    
          table.appendChild(tbody);
    
          // Adiciona a tabela ao elemento desejado na página
          var tableContainer = document.getElementById('tabela-tarefas-concluidas');
          tableContainer.innerHTML = ''; // Limpa o conteúdo atual do elemento
          tableContainer.appendChild(table);
        },
        error: function() {
          console.log('Erro ao atualizar a tabela.');
        }
      });
    }

    function listaTarefasAtrasadas() {
      $.ajax({
        url: "../backend/lista.php",
        type: "POST",
        dataType: "json",
        success: function(response) {
        console.log(response)
          var table = document.createElement('table');
          table.setAttribute("id", "tabela-tarefa-atrasada");
          table.classList.add("table", "table-hover", "table-click");
    
          // Cria o cabeçalho da tabela
          var thead = document.createElement('thead');
          var trHead = document.createElement('tr');
          var thId = document.createElement('th');
          var thTitulo = document.createElement('th');
          var thDataConclusao = document.createElement('th');
          var thAcoes = document.createElement('th');
    
          thId.textContent = 'ID';
          thTitulo.textContent = 'Título';
          thDataConclusao.textContent = 'Data de Conclusão';
          thAcoes.textContent = 'Ações';
    
          trHead.appendChild(thId);
          trHead.appendChild(thTitulo);
          trHead.appendChild(thDataConclusao);
          trHead.appendChild(thAcoes);
    
          thead.appendChild(trHead);
          table.appendChild(thead);
    
          // Cria o corpo da tabela
          var tbody = document.createElement('tbody');
    
          response.forEach(function(data) {
            
            var dataConclusao = new Date(data.data_conclusao);
            var dataAtual = new Date();

            if (dataConclusao < dataAtual && data.concluida == 0) { // Alterado para verificar o valor numérico
              
              var tr = document.createElement('tr');
              tr.setAttribute("id", "id-linha");
      
              var tdId = document.createElement('td');
              tdId.classList.add("tarefa");
              tdId.setAttribute("id", "id-tarefa");
      
              var tdTitulo = document.createElement('td');
      
              var tdDataConclusao = document.createElement('td');
              
      
              var tdAcoes = document.createElement('td');
      
              tdAcoes.insertAdjacentHTML('afterbegin', '<i type="submit" value="Editar" data-bs-toggle="modal" data-bs-target="#modalAlterarTarefa" class="fa-solid fa-pencil edit" ></i>');
              tdAcoes.insertAdjacentHTML('beforeend', ' <i type="submit" value="Deletar" data-bs-toggle="modal" data-bs-target="#modalExcluirTarefa"class="fa-solid fa-trash delete mx-2"></i>');
              tdAcoes.insertAdjacentHTML('beforeend', ' <i type="submit" value="Concluída" class="fa-solid fa-check status"></i>');
      
              tdId.textContent = data.id;
              tdTitulo.textContent = data.titulo;
              tdDataConclusao.textContent = data.data_conclusao.split('-').reverse().join('/');
      
              tr.appendChild(tdId);
              tr.appendChild(tdTitulo);
              tr.appendChild(tdDataConclusao);
              tr.appendChild(tdAcoes);
              tr.classList.add('tarefa-atrasada');
              tbody.appendChild(tr);
              
            }
          });
    
          table.appendChild(tbody);
    
          // Adiciona a tabela ao elemento desejado na página
          var tableContainer = document.getElementById('tabela-tarefas-atrasadas');
          tableContainer.innerHTML = ''; // Limpa o conteúdo atual do elemento
          tableContainer.appendChild(table);
        },
        error: function() {
          console.log('Erro ao atualizar a tabela.');
        }
      });
    }
    
    $(document).on('click', '.edit', function (e) {
      var tarefaid = $(this).closest('tr').find('.tarefa').text();


      $.ajax({
          url: '../backend/puxaTarefa.php',
          method: 'POST',
          data: {
              code: tarefaid
          },
          success: function(response) {

            // Preencha os campos do formulário com os dados da tarefa
            $("#alTarefa").val(response.tarefa);
            $("#alInputDataCriacao").val(response.data_criacao);
            $("#alInputDataConclusao").val(response.data_conclusao);
            $("#alTextareaTarefa").val(response.descricao);


            $('.tid').attr('id', response.tid); 

          },
          error: function() {
            console.log('Erro ao carregar a tarefa.');
          }
      });
    });

    $("#alterarTarefa").click(function() {

      var id = $(".tid").attr("id");
      var formTituloTarefa= $("#alTarefa").val();
      var formData = $("#alInputDataCriacao").val();
      var formDataConclusao= $("#alInputDataConclusao").val();
      var formAnot = $("#alTextareaTarefa").val();
      
      $.ajax({
        url:'../backend/alterarTarefa.php',
        method:'POST', 
        data: {
          code: id,
          titulo: formTituloTarefa,
          dataC: formDataConclusao,
          data:formData,
          anotacao:formAnot,

        },
        success: function (response) {
          if (response.status === 'success') {
            $("#modalAlterarTarefa").modal('toggle');
            lista();
            listaTarefasConcluidas();
            listaTarefasAtrasadas();
          }else{
            alert ("Erro ao atualizar");
          }
        }        
      });  
    });   

    $(document).on('click','.delete', function(e){

      var tarefaid = $(this).closest('tr').find('.tarefa').text();


      $("#excluirTarefa").click(function() {     
        $.ajax({
          url:'../backend/excluirTarefa.php',
          method:'POST', 
          data: {
            id: tarefaid

          },
          dataType: "json",
          success: function (response) {
            if (response.status === 'success') {
              lista();
              listaTarefasConcluidas();
              listaTarefasAtrasadas();

            }else{
              alert ("Erro ao excluir");
            }
          }
        })
      });
    });

    $(document).on('click', '.status', function(e) {
      var tarefaid = $(this).closest('tr').find('td.tarefa').text();

      $.ajax({
        url: '../backend/statusTarefa.php',
        method: 'POST',
        data: {
          id: tarefaid
        },
        dataType: 'json',
        success: function(response) {
          if (response.status === 'success') {
            lista();
            listaTarefasConcluidas();
            listaTarefasAtrasadas();

          } else {
            alert('Erro ao marcar a tarefa como concluída');
          }
        },
        error: function() {
          alert('Erro na requisição AJAX');
        }
      });
    });
    




  
    



});


