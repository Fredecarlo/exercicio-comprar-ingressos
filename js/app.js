function comprar(){
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = Number(document.getElementById('qtd').value);

    if (!Number.isInteger(qtd) || qtd < 1) {
        alert('Informe uma quantidade válida');
        return;
    }



    let compraRealizada;

    if(tipo.value =="pista"){
        compraRealizada = comprarIngresso(qtd, 'qtd-pista', 'Pista');
    } else if(tipo.value =='superior'){
        compraRealizada = comprarIngresso(qtd, 'qtd-superior', 'Superior');
    } else {
        compraRealizada = comprarIngresso(qtd, 'qtd-inferior', 'Inferior');
    }
    
    if (compraRealizada) {
        alert('Compra realizada com sucesso!');
        document.getElementById('qtd').value = '';
    }
}

function comprarIngresso(qtd, idEstoque, tipoIngresso) {
    let estoque = document.getElementById(idEstoque);
    let estoqueAtual = parseInt(estoque.textContent);

    if (qtd > estoqueAtual) {
        alert(`Quantidade indisponível para tipo ${tipoIngresso}`);
        return false;
    } 
        estoqueAtual = estoqueAtual - qtd;
        estoque.textContent = estoqueAtual;
    
    return true;

}
