module.exports = {
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        proxy: {
            '/api': { target: 'https://mainnet.staging.keepscan.com', secure: false },
        },
        overlay: true,
        historyApiFallback: true
    }
}
