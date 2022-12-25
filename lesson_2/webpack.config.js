const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    module: {
        entry: './src/index.js',
        
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader"
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html"
        }),
        "@babel/plugin-transform-react-jsx",
        {
          "throwIfNamespace": false, // defaults to true
          "runtime": "automatic", // defaults to classic
          "importSource": "custom-jsx-library" // defaults to react
        }
    ]
}

module.exports = {
    mode: 'development'
}