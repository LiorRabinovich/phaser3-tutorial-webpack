const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
        {
            test: /\.html$/,
            use: [{
                loader: "html-loader",
                options: {
                    minimize: true
                }
            }]
        }, {
            test: /\.(png|jp(e*)g|svg)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    outputPath: 'assets/images/'
                }
            }]
        }]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
};