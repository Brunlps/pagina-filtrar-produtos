// const conteinerCategorias = document.querySelector("#categorias")
// const conteinerOrdenacao = document.querySelector("#ordenacao")
// const conteinerCards = document.querySelector("#cards")

// function criarCards(produto) {
//     return `
//      <div id="cards" class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 ">
//             <div class="bg-white rounded p-4">
//                 <div class="relative">
//                     <img src="${produto.imagem}" alt="${produto.title}">
//                     <div class="p-1 bg-sky-600 text-white font-bold -top-0.5 absolute right-3 rounded">
//                     ${produto.rating.rate.toFixed(1)}
//                     <box-icon class="relative top-0.5 fill-yellow-400" name='star' type='solid' ></box-icon></div>
//                 </div>
//                 <div class="pt-4">
//                     <h2 class="font-semibold text-2xl">${produto.title}</h2>
//                     <h6 class="font-bold">${produto.category}</h6>
//                     <h6 class="text-right text-2xl">R$ ${produto.price.toFixed(2)}</h6>
//                 </div>
//             </div>
//         </div>
//         `;
// };

// function filtrarProdutos() {
//     let lista = [...produto];

//     // Filtrando por categoria.
//     const categoria = selecionarCategoria.value;
//     if(categoria !== "" && categoria !== "todas") {
//         lista = lista.filter(p => p.category === categoria);
//     }

//     return filtrarProdutos();
    
// }