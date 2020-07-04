import babel from 'rollup-plugin-babel';
export default{
    input :'./src/main.js',
    output:[
        {
            file: 'index-es.js',
            format: 'es',
            name: 'E$', // 指定檔名稱
            banner: '// welcome to imooc.com',
            footer: '// powered by sam',
        }, {
            file: 'index.js',
            format: 'umd',
            name: 'E$', // 指定檔名稱
            banner: '// welcome to imooc.com',
            footer: '// powered by sam',
        }
    ],
    plugins:[
        babel({
            exclude:"node_modules/**"
        })
    ]
}