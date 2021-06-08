import { started } from "../start";

// 核心应用处理方法
export function reroute(){
    // 需要获取要加载的应用
    // 需要获取要被挂载的应用
    // 哪些应用需要被卸载
    
    if(started){
        console.log('调用start');
        return performAppChanges(); //根据路径装载应用
    }else{
        //第一次调用预先加载
        // 注册应用时，需要预先加载
        console.log('调用register');
        return loadApps();
        
    }

    async function loadApps(){

    }

    async function performAppChanges(){

    }
}