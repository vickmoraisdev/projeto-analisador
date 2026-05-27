let numeros = []
function adicionar(){
    let txtnum = document.getElementById('txtnum')
    let num = Number(txtnum.value)
    let adicionados = document.getElementById('selnum')


    if(num < 1 || num > 100){
        window.alert(`Número ${num} é inválido!`)
        return
    }
    if(!numeros.includes(num)){
        numeros.push(num)
        let item = document.createElement('option')
        item.text = `Valor ${num} adicionado.`
        adicionados.appendChild(item)
    } else{
        window.alert(`Número ${num} já foi adicionado na lista.`)
        return
    }
    
}


function resultado(){
    
}