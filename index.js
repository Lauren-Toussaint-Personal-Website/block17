const coffeeMenu = require('./coffee_data.js')
// console.log(Object.values(coffeeMenu))

// console.log('values', Object.values(espresso)) // ['espresso', 5, false] => [0]
// espresso.name 
// const grabCoffeeName = name => console.log(Object.values(coffeeMenu.name))

//coffeeMenu.array  key.coffee.name => new array.coffee.name
const nameArray = coffeeMenu.map((coffee) => coffee.name);                    
 console.log(nameArray)
 const priceArray = coffeeMenu.filter((coffee) => {
  
 if (coffee.price <= 5) {
   return coffee
   }

})
console.log(priceArray)

const evenArray = coffeeMenu.filter((coffee) => {
    if (coffee.price % 2 === 0) {
        return coffee
        }
     
     })
     console.log(evenArray)



const reduceArray = coffeeMenu.reduce((totalCost, coffee) => {
  return coffee.price + totalCost 
}, 0)

console.log(reduceArray)// const sumWithInitial = coffeeMenu.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0)
const seasonArray = 
coffeeMenu
  .filter((coffee) => {
    if (coffee.seasonal) {
        return coffee
        }
     
     })
     .map((coffee) => `${coffee.name} with imported beans`)
     console.log(seasonArray)
//      console.log(evenArray)