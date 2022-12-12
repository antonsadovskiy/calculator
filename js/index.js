// variables to store input values
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
    document.getElementById('result').innerHTML = strNums
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
    let operation = '+'
    arrayNums.push(strNums, operation)
    document.getElementById('result').innerHTML = '0'
    strNums = ''
}
function typeMinus(){
    let operation = '-'
    arrayNums.push(strNums, operation)
    document.getElementById('result').innerHTML = '0'
    strNums = ''
}
function typeMultiply(){
    let operation = "*"
    arrayNums.push(strNums, operation)
    document.getElementById('result').innerHTML = '0'
    strNums = ''
}
function typeDivide(){
    let operation = "/"
    arrayNums.push(strNums, operation)
    document.getElementById('result').innerHTML = '0'
    strNums = ''
}
function typeDot(){
    let num = "."
    strNums += num
    document.getElementById('result').innerHTML = strNums
}
function equal(){
    arrayNums.push(strNums)
    let resultString = ''

    for (let i = 0; i < arrayNums.length; i++){
        resultString += arrayNums[i]
    }
    let result = eval(resultString)

    if (Number.isInteger(result)){
        document.getElementById('result').innerHTML = result
    }
    else {
        document.getElementById('result').innerHTML = result.toFixed(3)
    }
    
    // tests to output 
    console.log("Array of all inputs: " + arrayNums)
    console.log("String: " + resultString)
    console.log("RESULT = " + result)
}
