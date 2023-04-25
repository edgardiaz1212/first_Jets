 const {sum} = require('./app.js')

 test('adds 14 +9 to equal 23',() =>{
     let total = sum(14,9)
     expect(total).toBe(23)
 })


 test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})


test('One dollar should be 106.583 yens' , function() {
    const {fromDollarToYen} = require('./app.js')
    const yens = fromDollarToYen(3)
    const expected = 3*127.9/1.2; 
    expect(fromDollarToYen(3)).toBe(3*127.9/1.2)})

    test('One yen  should be 0.0063 gbp' , function() {
        const { fromYenToPound } = require('./app.js')
        const pounds = fromYenToPound(1000)
        const expected = 1000*0.8/127.9
        expect(fromYenToPound(1000)).toBe(1000*0.8/127.9)})