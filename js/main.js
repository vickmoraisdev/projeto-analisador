//Array dos números
let numeros = []

//Botão adicionar valores
function adicionar(){
    let txtnum = document.getElementById('txtnum')
    let num = Number(txtnum.value)
    let adicionados = document.getElementById('selnum')

    //Validar números entre 1 a 100
    if(num < 1 || num > 100){
        window.alert(`Número ${num} é inválido!`)
        return
    }
    if(!numeros.includes(num)){ //Se o valor for entre 1 e 100, é adicionado
        numeros.push(num)
        let item = document.createElement('option')
        item.text = `Valor ${num} adicionado.`
        adicionados.appendChild(item)
    } else{ //Sem repetição de valores já adicionados
        window.alert(`Número ${num} já foi adicionado na lista.`)
        return
    }
    
}

//Botão finalizar
function resultado(){
    let res = document.getElementById('res')
    let txtnum = document.getElementById('txtnum')
    let maior = numeros[0]
    let menor = numeros[0]
    let soma = 0
    res.innerHTML = ''

    //Não deixar finalizar sem adicionar valor
    if(txtnum.value === ''){
        window.alert('Adicione valores antes de finalizar.')
        return
    }

    //Quantidade de números cadastrados
    if(numeros.length > 1){
        res.innerHTML += `Tivemos <strong>${numeros.length}</strong> números cadastrados. <br>`
    } else{
        res.innerHTML += `Tivemos <strong>${numeros.length}</strong> número cadastrado. <br>`
    }
    
    //Maior e menor número cadastrado
    for(let c in numeros){
        if(numeros[c] > maior){
            maior = numeros[c]
        }
        if(numeros[c] < menor){
            menor = numeros[c]
        }
    }
    res.innerHTML += `O maior valor informado foi <strong>${maior}</strong>. <br>`
    res.innerHTML += `O menor valor informado foi <strong>${menor}</strong>. <br>`

    //Somatório de todos os valores informados
    for(c in numeros){
        soma += numeros[c]
    }
    res.innerHTML += `Somando todos os valores, temos <strong>${soma}</strong>. <br>`

    //Média do somátorio dos valores
    res.innerHTML += `A média de todos os valores é <strong>${soma/numeros.length}</strong>. <br>`
}