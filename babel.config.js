// module.exports = (api) => {
//   api.cache(true)

//   return {
//     presets: [
//       // [
//       //   '@babel/preset-env', 
//       //   {
//       //     shippedProposals: true,
//       //     useBuiltIns: 'usage',
//       //     corejs: '3',
//       //     modules: false,
//       //     targets: 'defaults',
//       //   }
//       // ],
//       // '@babel/preset-react',
//       // '@babel/preset-typescript',
//       [
//         'react-app',
//         {
//           flow: false,
//           typescript: true,
//           absoluteRuntime: false
//         }
//       ]
//     ],
//     // plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime']
//   }
// }

module.exports = function (api) {
  api.cache(true);
  
  const presets = [ "@babel/preset-env", "@babel/preset-react" ];
  const plugins = [ "macros" ];

  return {
    presets,
    plugins
  };
}