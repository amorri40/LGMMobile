module.exports = {
    entry: "./www/js/webpack/entry.js",
    output: {
        path: __dirname,
        filename: "./www/js/webpack_bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};