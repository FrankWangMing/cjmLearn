const loaderA = "./loader/loaderA"
const loaderB = "./loader/loaderB"

const PluginA = require("./plugins/PluginA")


module.exports = {
    mode: 'development',
    entry: ['./src/index.js',"./src/b.js"],
    output: {
        filename: 'bundle-[contenthash:5].js',
        path: __dirname + '/dist'
    },
    // devtool:'',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: loaderA,
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: loaderB,
                }
            }
        ],

    },
    plugins:[
        new PluginA()
    ]
}