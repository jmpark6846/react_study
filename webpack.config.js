module.exports={
    entry: {
        javascript: "./app/app.js",
        html: "./app/index.html",
    },

    output:{
        filename: "bundle.js",
        path: __dirname + "/dist",
    },
    module:{
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel",
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]",
            }
        ]
    }

}