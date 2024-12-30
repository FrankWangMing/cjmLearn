


// function createProxy(value=0){
//     return new Proxy({}, {
//         get: function(target, key){
//             if(key == Symbol.toPrimitive){
//                 return function(){
//                     return 0
//                 }
//             }
//             return createProxy(value + Number(key))
//         },
//         toPrimitive: function(){
//             console.log(typeof value)
//             return value
//         }
//     })
// }
// const a = createProxy()


// console.log(a[2][1][3] + 1)



// a[2][1][3] + 4 == 10

// a[4][1] + 4 == 9


const b ="sdjkfls"

const a = new String("hello")

a[Symbol.iterator] = null

for(const i of a){
    console.log(i)
}




