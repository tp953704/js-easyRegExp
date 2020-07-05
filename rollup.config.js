import babel from 'rollup-plugin-babel';
export default{
    input :'./src/main.js',
    output:[
        {
            file: 'index-es.js',
            format: 'es',
            name: 'E$' // 指定檔名稱            
        }, {
            file: 'index.js',
            format: 'umd',
            name: 'E$'// 指定檔名稱
        }
    ],
    plugins:[
        babel({
            exclude:"node_modules/**"
        })
    ]
}