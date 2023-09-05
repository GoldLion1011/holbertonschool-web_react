const path = require('path');

module.exports = {
    entry: './js/dashboard_main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            // Existing rules (if any)...

            // Adding rule for processing CSS files
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },

            // Adding rule for processing image files
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};
