//描述应用的整个状态，14个状态
export const not_load = 'not_load'; //初始状态
export const loading_source_code = 'loading_source_code';
export const not_bootstrap = 'not_bootstrap'
export const bootstraping = 'bootstraping'//启动中
export const not_mount = 'not_mount';
export const mounting = 'mounting';
export const mounted = 'mounted';
export const updating = 'updating';
export const unmounting = 'unmounting'; //卸载中 解除绑定
export const unload = 'unload'; //完全卸载
export const load_err = 'load_err'; //加载失败
export const skip_becauce_broken = 'skip_becauce_broken';
//当前应用是否被激活，挂载完才算是被激活
export function isActive(app){
    return app.status === mounted
}
//当前应用是否要被激活
// 如果返回true，应用应该开始初始化
export function shouldBeActive(app){
    return app.activeWhen(window.location)
}
