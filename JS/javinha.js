const formulario = document.getElementById('formulario')
const produtos = document.getElementById('produtos')
const nomes = document.getElementById('nomes')
const quantidades = document.getElementById('quantidades')
const enderecos = document.getElementById('enderecos')
const numeros = document.getElementById('numeros')
const pagamentos = document.getElementById('pagamentos')
const respostas = document.getElementById('respostas')

let produto = []
let pagamento = []

carregarProduto()
carregarPagamentos()

formulario.onsubmit = event => {
    event.preventDefault()

    if (!validarProdutos() | !validarQuantidades() | !validarNomes() | !validarEnderecos() | !validarNumeros() |
        !validarPagamentos()) return

    const jeito = {
        produtos: produtos.value,
        quantidades: quantidades.value.trim(),
        nomes: nomes.value.trim(),
        enderecos: enderecos.value.trim(),
        numeros: numeros.value.trim(),
        pagamentos: pagamentos.value
    }

    produto.push(jeito)
    localStorage.setItem('venda', JSON.stringify(produto))

    produtos.value = ''
    quantidades.value = ''
    nomes.value = ''
    enderecos.value = ''
    numeros.value = ''
    pagamentos.value = ''

    exibirProduto()
}
function carregarProduto() {
    produto = [
        { codigo: '1', texto: 'Galão de água 20 litros -BONAFONT' },
        { codigo: '2', texto: 'Galão de água 20 litros - MINAURA' },
        { codigo: '3', texto: 'Galão de água 10 litros - MINAURA' },
        { codigo: '4', texto: 'Galão de água 10 litros - BONAFONT' },
        { codiga: '6', texto: 'Dilute - Frutas Vermelhas' },
        { codigo: '7', texto: 'Dilute - Limão Siciliano' },
        { codigo: '8', texto: 'Dilute - Morango' },
        { codigo: '9', texto: 'Dilute - Tangerina' },
        { codigo: '10', texto: 'Dilute - Maça Verde' },
        { codigo: '11', texto: 'Dilute - Gengibre' },
        { codigo: '12', texto: 'Dilute - Guaraná' },
        { codigo: '13', texto: 'Dilute - Uva' },
        { codigo: '15', texto: 'Dilute - Melancia' },
        { codigo: '5', texto: 'Botijão de gás' },
        { codigo: '14', texto: 'Água com gás - ACQUAMIX' },
    ]

    for (let item of produto) {
        const option = document.createElement('option')
        option.value = item.codigo
        option.textContent = item.texto
        produtos.append(option)
    }

}



formulario.onsubmit = event => {
    event.preventDefault()


    if (!validarProdutos() | !validarQuantidades() | !validarNomes() | !validarEnderecos() | !validarNumeros() |
        !validarPagamentos()) return

    const caminho = {
        produtos: produtos.value,
        quantidades: quantidades.value.trim(),
        nomes: nomes.value.trim(),
        enderecos: enderecos.value.trim(),
        numeros: numeros.value.trim(),
        pagamentos: pagamentos.value
    }

    pagamento.push(caminho)
    localStorage.setItem('hehe', JSON.stringify(pagamento))

    produtos.value = ''
    quantidades.value = ''
    nomes.value = ''
    endereços.value = ''
    numeros.value = ''
    pagamentos.value = ''

    exibirPagamentos()
}
function carregarPagamentos() {
    pagamento = [
        { codigo: '1', texto: 'Pagamento a vista' },
        { codigo: '2', texto: 'Pagamento com o cartão' }
    ]

    for (let item of pagamento) {
        const option = document.createElement('option')
        option.value = item.codigo
        option.textContent = item.texto
        pagamentos.append(option)
    }

}

function carregarProdutos() {
    registros = JSON.parse(localStorage.getItem('venda')) || []
    exibirProduto()
}

function validarProdutos() {
    produtos.value = produtos.value.trim()

    if (!produtos.value) {
        respostas.textContent = 'O campo é obrigatório'
        respostas.className = 'error'
        produtos.classList.add('error')
        produtos.focus()
        return false
    }
    produtos.classList.remove('error')
    return true

}



function validarQuantidades() {
    quantidades.value = quantidades.value.trim()

    if (!quantidades.value) {
        respostas.textContent = 'Campo é obrigatório!'
        respostas.className = 'error'
        quantidades.classList.add('error')
        quantidades.focus()
        return false
    }
    quantidades.classList.remove('error')
    return true
}

function validarNomes() {
    nomes.value = nomes.value.trim()

    if (!nomes.value) {
        respostas.textContent = 'Campo é obrigatório!'
        respostas.className = 'error'
        nomes.focus()
        return false
    }
    nomes.classList.remove('error')
    return true
}

function validarEnderecos() {
    enderecos.value = enderecos.value.trim()

    if (!enderecos.value) {
        respostas.textContent = 'Campo é obrigatório'
        respostas.className = 'error'
        enderecos.focus()
        return false
    }
    enderecos.classList.remove('error')
    return true
}

function validarNumeros() {
    numeros.value = numeros.value.trim()

    if (!numeros.value) {
        respostas.textContent = 'Campo é obrigatório'
        respostas.className = 'error'
        numeros.focus()
        return false
    }
    numeros.classList.remove('error')
    return true
}

function validarPagamentos() {
    pagamentos.value = pagamentos.value.trim()

    if (!pagamentos.value) {
        respostas.textContent = 'Campo é obrigatório!'
        respostas.className = 'error'
        pagamentos.classList.add('error')
        pagamentos.focus()
        return false
    }
    pagamentos.classList.remove('error')
    return true
}

function apertar() {
    var txt;
    if (confirm("Pedido conclúido."))

        document.getElementById("apertar").innerHTML = txt;
}