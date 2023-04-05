const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devServer = (isDev) => !isDev ? {} : {
    devServer: {
        open: true,
        hot: true,
        port: 8080,
    }
};

module.exports = ({ develop }) => ({
    mode: develop ? 'development' : 'production',
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        assetModuleFilename: 'images/[name][ext][query]',
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: './styles/root.css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(?:ico|png|jpg|jpeg|svg)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',

                // тоже мимо
                // options: {
                //     sources: {
                //       list: [
                //         // All default supported tags and attributes
                //         '...',
                //         {
                //           tag: 'img',
                //           attribute: 'data-src',
                //           type: 'src',
                //         },
                //         {
                //           tag: 'img',
                //           attribute: 'data-srcset',
                //           type: 'srcset',
                //         },
                //         {
                //           // Tag name
                //           tag: 'link',
                //           // Attribute name
                //           attribute: 'href',
                //           // Type of processing, can be `src` or `scrset`
                //           type: 'src',
                //           // Allow to filter some attributes
                //           filter: (tag, attribute, attributes, resourcePath) => {
                //             // The `tag` argument contains a name of the HTML tag.
                //             // The `attribute` argument contains a name of the HTML attribute.
                //             // The `attributes` argument contains all attributes of the tag.
                //             // The `resourcePath` argument contains a path to the loaded HTML file.
          
                //             if (/my-html\.html$/.test(resourcePath)) {
                //               return false;
                //             }
          
                //             if (!/stylesheet/i.test(attributes.rel)) {
                //               return false;
                //             }
          
                //             if (
                //               attributes.type &&
                //               attributes.type.trim().toLowerCase() !== 'text/css'
                //             ) {
                //               return false;
                //             }
          
                //             return true;
                //           },
                //         },
                //       ],
                //     },
                //   },

                // options: {
                //     sources: {
                //       list: [

                //         {
                //             tag: "img",
                //             attribute: "src",
                //             type: "src",
  
                //             filter: (tag, attribute, attributes, resourcePath) => {
                //                 return true;
                //             },
                //         },
                //        {
                //             tag: "link",
                //             attribute: "href",
                //             type: "src",
  
                //             filter: (tag, attribute, attributes, resourcePath) => {
                //                 return true;
                //             },
                //         },
                //         {
                //           tag: "meta",
                //           attribute: "content",
                //           type: "src",
                //           filter: (tag, attribute, attributes, resourcePath) => {
                //             if (
                //               attributes.value === "og:image" ||
                //               attributes.name === "twitter:image"
                //             ) {
                //               return true;
                //             }
                //             return false;
                //           },
                //         },
                //       ],
                //     },
                // },

            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader, { loader: 'css-loader', options: { sourceMap: true } }
                ]
            },
            {
                test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            }
        ]
    },
    ...devServer(develop)
});

// module.exports = {
//     module: {
//       rules: [
//         {
//           test: /\.html$/i,
//           loader: 'html-loader',
//           options: {
//             sources: {
//               list: [
//                 // All default supported tags and attributes
//                 '...',
//                 {
//                   tag: 'img',
//                   attribute: 'data-src',
//                   type: 'src',
//                 },
//                 {
//                   tag: 'img',
//                   attribute: 'data-srcset',
//                   type: 'srcset',
//                 },
//                 {
//                   // Tag name
//                   tag: 'link',
//                   // Attribute name
//                   attribute: 'href',
//                   // Type of processing, can be `src` or `scrset`
//                   type: 'src',
//                   // Allow to filter some attributes
//                   filter: (tag, attribute, attributes, resourcePath) => {
//                     // The `tag` argument contains a name of the HTML tag.
//                     // The `attribute` argument contains a name of the HTML attribute.
//                     // The `attributes` argument contains all attributes of the tag.
//                     // The `resourcePath` argument contains a path to the loaded HTML file.
  
//                     if (/my-html\.html$/.test(resourcePath)) {
//                       return false;
//                     }
  
//                     if (!/stylesheet/i.test(attributes.rel)) {
//                       return false;
//                     }
  
//                     if (
//                       attributes.type &&
//                       attributes.type.trim().toLowerCase() !== 'text/css'
//                     ) {
//                       return false;
//                     }
  
//                     return true;
//                   },
//                 },
//               ],
//             },
//           },
//         },
//       ],
//     },
//   };