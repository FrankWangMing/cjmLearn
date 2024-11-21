function ad(){
    let index = 0
    let arr = [1,2,3,4,5,6,7,8,9,10]
    return {
        next(){
            return {
                done:arr.length == index,
                value:arr[index++],
            }
        }
    }
}
let c = ad()

for (const value of c) {
    console.log(value); // 1, 2, 3
  }