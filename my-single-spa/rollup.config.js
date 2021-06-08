import serve from 'rollup-plugin-serve'

//rollup可以帮我们打包 es6模块化语法
export default {
 input : './src/single-spa.js', //指定入口文件
 output: {
     file: './lib/umd/single-spa.js', //指定出口文件
     format: 'umd',  //指定挂载到window
     name: 'singleSpa',
     sourcemap: true
 },
 plugins: [
    serve({ //服务
        openPage: '/index.html', //默认打开的页面
        contentBase: '',
        port: 3000
    })
 ]
}