module.exports = class PluginA {

    apply(compiler){
        // console.log(compiler)
        console.log("PluginA")
        compiler.hooks.emit.tap("PluginA",(compilation)=>{
            console.log("PluginA emit")
            console.log(compilation.assets)
            compilation.assets["PluginA.txt"] = {
                source:()=>{
                    return "程娇敏，今天真好看！！！"
                },
                size:()=>{
                    return 10
                }
            }
            console.log(compilation.assets)
        })
    }

}