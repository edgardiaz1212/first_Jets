// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;}

const sum = (a,b)=> {
    return a+b
}
console.log(sum(7,3))

 const fromDollarToYen =function (valueInDollar) {
     let valueInYen = valueInDollar*127.9/1.2
    return valueInYen
 }

 const fromYenToPound = function(valueInYen){
     let valueInPound = valueInYen * 0.8 / 127.9
     return valueInPound
  }
 module.exports = {sum, fromEuroToDollar, fromDollarToYen , fromYenToPound};
