// /*


// 10 个数据结构：
/*

这里面有 10 个数据结构：数组、链表、栈、队列、散列表、二叉树、堆、跳表、图、Trie
树；10 个算法：递归、排序、二分查找、搜索、哈希算法、贪心算法、分治算法、回溯算
法、动态规划、字符串匹配算法。

*/

// 线性表

// 数组、链表、栈、队列、

// 链表








// 散列表、二叉树、堆、跳表、图、Trie树；

// 10 个算法：递归、排序、二分查找、搜索、哈希算法、贪心算法、分治算法、回溯算
// 法、动态规划、字符串匹配算法。



// */



// 单链
// 双链
// 循环链表   react useEffect

// class Node {
//     constructor(element) {
//         this.element = element
//         this.next = null
//     }
// }


// const a = new Node("a")

// const b = new Node("b")

// const c = new Node("c")

// a.next = b
// b.next = c
// c.next = a

// console.log(a)


class Node {
    constructor(element) {
        this.element = element
        this.next = null
        this.prev = null
    }
}


const a = new Node("a")

const b = new Node("b")

const c = new Node("c")

a.prev = null
a.next = b


b.prev = a
b.next = c

c.prev = b
c.next = null

console.log(a)

console.log(b.prev)





