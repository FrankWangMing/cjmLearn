/*




平衡二叉树

二叉查找树


平衡二叉查找树      AVL数
                   红黑树



完全二叉树

满二叉树



小顶堆
大顶堆
优先级队列


斐波那契堆
二相堆




*/



/*

完全二叉树


    1
   / \
  2   3
 /
4


满二叉树
    1
   / \
  2   3
 / \ / \
4  5 6  7






平衡二叉树
    1
   /
  2
 / \
4  5

    2
   / \
  1   5
 /
4












二叉搜索数

AVL数
红黑树


哈夫曼树
哈夫曼编码





*/

/*

三中遍历方式


中序遍历
后序遍历

*/


class Node{
    constructor(element){
        this.element = element
        this.left = null
        this.right = null
    }
}


const a = new Node("a")
const b = new Node("b")
const c = new Node("c")
const d = new Node("d")
const e = new Node("e")
const f = new Node("f")
const g = new Node("g")

const h = new Node("h")
const i = new Node("i")
const j = new Node("j")
const k = new Node("k")
const l = new Node("l")
const m = new Node("m")
const n = new Node("n")
const o = new Node("o")



/*

                                                       a
                                                      / \
                                                      b   c
                                                    / \  / \
                                                   d  e   f   g
                                                  / \ /\  /\  /\
                                                 h  i j k l m n o


'h','d','i','b','j','e','k',



*/

/*




Node {
  element: 'a',
  left: Node {
    element: 'b',
    left: Node { element: 'd', left: null, right: null },
    right: Node { element: 'e', left: null, right: null }
  },
  right: Node {
    element: 'c',
    left: Node { element: 'f', left: null, right: null },
    right: Node { element: 'g', left: null, right: null }
  }
}

*/
a.left = b
a.right = c
b.left = d
b.right = e
c.left = f
c.right = g

d.left = h
d.right = i
e.left = j
e.right = k
f.left = l
f.right = m
g.left = n
g.right = o


function leftTraversal(root){
    if(root == null) return
    console.log(root.element)
    leftTraversal(root.left)
    leftTraversal(root.right)
}



function midTraversal(root){
    if(root == null) return
    midTraversal(root.left)
    console.log(root.element)
    midTraversal(root.right)
}



function rightTraversal(root){
    if(root == null) return
    rightTraversal(root.left)
    rightTraversal(root.right)
    console.log(root.element)
}

console.log(leftTraversal(a))
/*
a
b
d
h
i
e
j
k
c
f
l
m
g
n
o
 */
console.log(midTraversal(a))
/*
h
d
i
b
j
e
k
a
l
f
m
c
n
g
o
 */
console.log(rightTraversal(a))
/*
h
i
d
j
k
e
b
l
m
f
n
o
g
c
a
*/

const qian = ['a','b','d','h','i','e','j','k','c','f','l','m','g','n','o']

const zhong = ['h','d','i','b','j','e','k','a','l','f','m','c','n','g','o']

const hou = ['h','i','d','j','k','e','b','l','m','f','n','o','g','c','a']

function rebackbyqian(qian,zhong){
    if(qian == null || zhong == null || qian.length == 0 || zhong.length == 0) return
    const root = new Node(qian[0])
    const rootIndex = zhong.indexOf(root.element)

    const qianLeft = qian.slice(1,rootIndex+1)
    const qianRight = qian.slice(rootIndex+1)

    const zhongLeft = zhong.slice(0,rootIndex)
    const zhongRight = zhong.slice(rootIndex+1)

    root.left = rebackbyqian(qianLeft,zhongLeft)
    root.right = rebackbyqian(qianRight,zhongRight)
    return root
}


console.log(leftTraversal(rebackbyqian(qian,zhong)))





/*




E D C B A
1 3 5 7 9

1 3 5 7 9

5 7 9 4

 9 4 12

 12 13

  25

                25
            /       \
          12        13
        /    \     /  \
       5 C    7B   9A   4
                        /  \
                        1   3
                        E   D


AABBCDEACAA


    A 10
    B 01
    C 00
    D 111
    E 110


*/







/*


小顶堆

大顶堆

优先级队列




Lane



    1
   / \
  2   3
 / \ / \
4  5 6  7

   7
  / \
 6   3
/ \ / \
4  5 2  1






*/







/*

深度优先 DPF
React FiberNode



广度优先 BFS

动态规划

青蛙跳台问题
背书包问题
斐波那契数列


XSS
CSRF
web安全


cookie

sesion

http

TCP/IP
三次握手
四次挥手




*/