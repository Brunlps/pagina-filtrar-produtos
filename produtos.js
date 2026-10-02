let produtos = [];

// Buscar os produtos do arquivo produtos.json
function buscarProdutos() {
  // Implementar a lógica de busca
  fetch("https://fakestoreapi.com/products")
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      produtos = response;
    carregarProdutos(produtos);
    });
}
buscarProdutos();

// caregar os produtos do arquivo produtos.json
function carregarProdutos(listaProdutos = []) {
  let cards = document.querySelector("#cards");

  cards.innerHTML = "";

  listaProdutos.map((produto) => {
    cards.innerHTML += `
            <div class="bg-white rounded p-4">
                <div class="relative">
                    <img src="${
                      produto.image
                    }" alt="" class="w-full h-55 object-contain">

                    <div class="bg-sky-600 p-0.5 font-bold  text-sm top-1 absolute right-3 rounded">
                    <span class="text-white">${produto.rating.rate}</span>
                    <box-icon class=" relative px-0.5 fill-yellow-400" name='star' type='solid' ></box-icon>
                    </div>
                </div>
                <div class="pt-4">
                    <h2 class="font-semibold text-2xl">${produto.title}</h2>
                    <h6 class="font-bold">${produto.category}</h6>
                    <h6 class="text-right text-2xl">$ ${produto.price.toFixed(
                      2
                    )}</h6>
                </div>
            </div>
        `;
  });
}

// Filtrar os produtos do arquivo produtos.json
function filtrarProdutos(categoria) {
  // se categoria for diferente de All, motre cada categoria do produto
  if (categoria != "All") {
    // Variável auxiliar
    let produtosFiltrados = produtos.filter((produto) => {
      return produto.category == categoria;
    });

    carregarProdutos(produtosFiltrados);
  } else {
    carregarProdutos(produtos);
  }
}

// Ordenar os produtos do arquivo produtos.json
function ordenacaoProduto(ordem) {
  let produtoOrdenados = [];

  if (ordem == "preco") {
    produtoOrdenados = produtos.toSorted((prodA, prodB) => {
      return prodA.price - prodB.price;
    });
  } else {
    produtoOrdenados = produtos.toSorted((prodA, prodB) => {
      return prodA.rating.rate - prodB.rating.rate;
    });
  }
  carregarProdutos(produtoOrdenados);
}

// Pesquisar os produtos do arquivo produtos.json
function pesquisarProdutos(texto) {
  if (texto.length == 0) {
    carregarProdutos(produtos);
    return;
  }

  if (texto.length >= 3) {
    let produtosEncontrados = produtos.filter((produto) => {
      return produto.title.toLowerCase().includes(texto.toLowerCase());
    });
  }
  carregarProdutos(produtosEncontrados);
}
/