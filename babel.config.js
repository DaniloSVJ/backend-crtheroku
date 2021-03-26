module.exports = {
    presets: [
      ['@babel/preset-env', { targets: { node: 'current' } }],
      '@babel/preset-typescript'
    ],
    plugins: [
        ['module-resolver', {
          alias: {
                 "@config":"./src/config",
                 "@database":"./src/database",
                 "@error":"./src/error",
                 "@models":"./src/models",
                 "@repositories":"./src/repositories",
                 "@routes":"./src/routes",
                 "@service":"./src/service",
                 "@utils":"./src/utils",
            }
        }],
        'babel-plugin-transform-typescript-metadata',
        ['@babel/plugin-proposal-decorators', { 'legacy': true }],
        ['@babel/plugin-proposal-class-properties', { 'loose': true }]
    ],
}
