let strNums = ''
let arrayNums = []

function clearAll(){
    document.getElementById('result').innerHTML = '0'
    strNums = ''
    arrayNums = []
}
function typeZero(){
    let num = document.getElementById('zero').value
    strNums += num
    document.getElementById('result').innerHTML = arrayNums
}

function typeOne(){
    let num = document.getElementById('one').value
    strNums += num
    document.getElementById('result').innerHTML = strNums
}

function typeTwo(){
    let num = document.getElementById('two').value
    strNums += num
    document.getElementById('result').innerHTML = strNums
}
function typeThree(){
    let num = document.getElementById('three').value
    strNums += num
    document.getElementById('result').innerHTML = strNums
}
function typeFour(){
    let num = document.getElementById('four').value
    strNums += num
    document.getElementById('result').innerHTML = strNums
}
function typeFive(){
    let num = document.getElementById('five').value
    strNums += num
    document.getElementById('result').innerHTML = strNums
}
function typeSix(){
    let num = document.getElementById('six').value
    strNums += num
    document.getElementById('result').innerHTML = strNums
}
function typeSeven(){
    let num = document.getElementById('seven').value
    strNums += num
    document.getElementById('result').innerHTML = strNums
}
function typeEight(){
    let num = document.getElementById('eight').value
    strNums += num
    document.getElementById('result').innerHTML = strNums
}
function typeNine(){
    let num = document.getElementById('nine').value
    strNums += num
    document.getElementById('result').innerHTML = strNums
}
function typePlus(){
    var operation = '+'
    arrayNums.push(strNums, operation)
    document.getElementById('result').innerHTML = '0'
    strNums = ''
}
function typeMinus(){
    var operation = '-'
    arrayNums.push(strNums, operation)
    document.getElementById('result').innerHTML = '0'
    strNums = ''
}
function typeMultiply(){
    var operation = "*"
    arrayNums.push(strNums, operation)
    document.getElementById('result').innerHTML = '0'
    strNums = ''
}
function typeDivide(){
    var operation = "/"
    arrayNums.push(strNums, operation)
    document.getElementById('result').innerHTML = '0'
    strNums = ''
}
function typeComma(){
    let num = document.getElementById('comma').value
    strNums += num
    document.getElementById('result').innerHTML = strNums
}
function equal(){
    let resultPlusAndMinus = 0
    let resultMultAndDiv = 0
    let result = 0
    arrayNums.push(strNums)

    for (let i = 0; i < arrayNums.length; i++){
        if(arrayNums[i] == "*"){
            let arg1 = parseInt(arrayNums[i-1])
            let arg2 = parseInt(arrayNums[i+1])
            resultMultAndDiv = arg1 * arg2
        }
        else if(arrayNums[i] == "+"){
            let arg3 = parseInt(arrayNums[i-1])
            resultPlusAndMinus = arg3
        }
    }
    result = resultPlusAndMinus + resultMultAndDiv
    document.getElementById('result').innerHTML = result

    console.log(arrayNums)
}
