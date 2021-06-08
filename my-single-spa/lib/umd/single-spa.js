(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.singleSpa = {}));
}(this, (function (exports) { 'use strict';

    //描述应用的整个状态，14个状态
    const not_load = 'not_load'; //初始状态

    let started = false;
    function start(){
        //需要挂载应用
        started = true;
        reroute(); //除了加载应用，还需要挂载
    }

    // 核心应用处理方法
    function reroute(){
        // 需要获取要加载的应用
        // 需要获取要被挂载的应用
        // 哪些应用需要被卸载
        if(started){
            console.log('调用start');
            return performAppChanges(); //根据路径装载应用
        }else {
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

    const apps = []; //用来存放所有的应用
    function registerApplication(appName, loadApp, activeWhen, customProps){
     apps.push({ //这里就将应用注册好了
         name: appName,
         loadApp,
         activeWhen,
         customProps,
         status: not_load
     });
     console.log(apps);
    reroute(); //加载应用
     // vue 一系列的生命周期，跟踪
     // 应用的生命周期
     // 维护应用所有的状态，状态机



    }

    exports.registerApplication = registerApplication;
    exports.start = start;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=single-spa.js.map
