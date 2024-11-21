/*


1、单链表
2、双向链表
3、循环单链表
4、循环双向链表

*/



/*


线性表

数组
链表
栈



队列

双端队列


*/


// class List {

//     constructor(){
//         this.list = []
//     }

//     add(element){

//         this.list.push(element)
//     }

//     get(index){
//         return this.list[index]
//     }

//     remove(){
//        this.list.shift()
//     }

//     get value(){
//         return this.list
//     }

//     get size(){
//         return this.list.length
//     }

// }


// class DoubleList {

//     constructor(){
//         this.list = []
//     }

//     leftAdd(element){
//         this.list.unshift(element)
//     }
//     rightAdd(element){
//         this.list.push(element)
//     }

//     get(index){
//         return this.list[index]
//     }

//     leftRemove(){
//        this.list.shift()
//     }

//     rightRemove(){
//        this.list.pop()
//     }

//     get value(){
//         return this.list
//     }

//     get size(){
//         return this.list.length
//     }


// }



// const list = new DoubleList()

// list.leftAdd(1)
// list.leftAdd(2)
// list.leftAdd(3)

// list.rightAdd(4)
// list.rightAdd(5)
// list.rightAdd(6)

// /* [ 3, 2, 1,      4, 5, 6 ] */
// console.log(list.value)
// list.leftRemove()
// list.rightRemove()
// console.log(list.value)
// /*

// [ 2, 1, 4, 5 ]

// */




// class BlockingQueue {

//     constructor(){
//         this.max = 10
//         this.queue = []
//         this.waiting = []
//     }

//     add(element){
//         if(this.queue.length < this.max){
//             this.queue.push(element)
//         }else{
//             this.waiting.push(element)
//         }
//     }

//     async take(){
//         if(this.queue.length == 0){
//             await new Promise(resolve => {
//                return this.waiting.push(resolve)
//             })
//         }
//     }

// }







