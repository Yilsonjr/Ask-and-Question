// //console.log("Hola Mundillo");
// const x =1
// let nombre = " Blackstyle"
// console.log("Nombre es:",nombre,"X es:",x)
// x = 4

const x = [1,3,-5]
// x.push(6)
// console.log(x.length)
// console.log(x[1])

// x.forEach(value => {
//     console.log(value)
// });
const x2 = x.concat(8)
console.log(x)
console.log(x2)
const m1 = x.map(value=> value*2)
console.log(m1)

const m2 = x.map(value =>'<li>' + value +'</li>')
console.log(m2)