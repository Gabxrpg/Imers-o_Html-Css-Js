function pesquisar() {
    // Seleciona a seção com o ID "formato"
    let section = document.getElementById("formato");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    //se campoPesquisa for uma string sem nada
    if (campoPesquisa == "") {
        section.innerHTML = "<p> Falha Critica! </p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // Se no dado titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Cria um novo elemento div para cada dado e adiciona informações relevantes
            resultados += `
            <div class="formato-card">
              <img src=${dado.imagem}></img>
              <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
              </h2>
              <p class="descricao">${dado.descricao}</p>
              <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
          `;
        }
        }
      
    if (!resultados) {
        resultados = "<p> Falha Critica! </p>"
    } 
  
    // Atribui os resultados gerados ao conteúdo da seção
    section.innerHTML = resultados;
  }