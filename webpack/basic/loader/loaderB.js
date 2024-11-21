module.exports = function(source){
    console.log("B")
    console.log(source)
    console.log(typeof source)
    return source.replace("hello","world")
}