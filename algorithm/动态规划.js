/*

    某一个问题，很多重复问题的子问题

    动态规划里面，每一个状态是有上一个状态推出来的

*/


// 斐波那契数列

// 1 1 2 3 5 8 13 21 34 55 89 144 233

// 递归
function fib(n,memory={}){
    if(n == 1 || n == 2){
        return 1
    }

    if(memory[n]){
        return memory[n]
    }

    memory[n] = fib(n-1,memory) + fib(n-2,memory)

    return memory[n]
}

fib(4) = fib(3) + fib(2)

fib(4) = fib(2) + fib(1) + fib(2)
/*
    用空间换时间
*/


// function ffff(n){
//     let dp = []
//     /*
//         index   爬楼梯的层数
//         value   爬楼梯的方法数
//     */


//     dp[1] = 1
//     dp[2] = 2

//     for(let i = 3;i<=n;i++){
//         dp[i] = dp[i-1] + dp[i-2]
//     }

//     return dp[n]
// }


function ffff(n){
    let dp = []
    /*
        index   爬楼梯的层数
        value   爬楼梯的方法数
    */

    dp[0] = 1
    dp[1] = 1
    dp[2] = 2

    for(let i = 3;i<=n;i++){
        dp[i] = 2*dp[i-1]
    }

    return dp[n]
}





/*
    1 1
    2 1+1 2
    3 3 1+1+1 1+2 2+1
    4 4 3 + 1 1+3 2+2 1+1+2 1+2+1 2+1+1


    f(n) =  f(n-1) + f(n-2) + f(n-3) + f(n-4) +....f(1) + f(0)
    f(n) = f(n-1) + f(n-2) + f(n-3) + f(n-4) + ....f(1) + f(0)
    f(n-1) = f(n-2) + f(n-3) + f(n-4) + ....f(1) + f(0)
    f(n) = f(n-1) + f(n-1)

    f(n)= 2 * f(n-1)












*/






// var longestPalindrome = function(s) {
//     let left = Math.floor(s.length / 2)
//     let right = Math.ceil(s.length / 2)

//     while(left >= 0 && right < s.length){
//         if(s[left] == s[right]){
//             left--
//             right++
//         }else{
//             return s.slice(left+1,right)
//         }
//     }
// };