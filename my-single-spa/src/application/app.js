
/**
 * 
 * @param {*} appName 应用名称
 * @param {*} loadApp  加载的应用
 * @param {*} activeWhen 什么时候激活
 * @param {*} customProps 自定义属性
 */

import { not_load, skip_becauce_broken, shouldBeActive, loading_source_code, not_bootstrap, not_mount } from "./app_helpers";
import { reroute } from "../navigations/reroute";

 const apps = [] //用来存放所有的应用
export function registerApplication(appName, loadApp, activeWhen, customProps){
 apps.push({ //这里就将应用注册好了
     name: appName,
     loadApp,
     activeWhen,
     customProps,
     status: not_load
 });
 console.log(apps)
reroute() //加载应用
 // vue 一系列的生命周期，跟踪
 // 应用的生命周期
 // 维护应用所有的状态，状态机



}


export function getAppChanges(){
    const appsToUnmount = [];
    const appsToLoad = [];
    const appsToMount = [];
    apps.forEach(app => {
        // 需不需被加载
        const appShouldBeActive = shouldBeActive(app)
        switch (app.status) {
            case not_load:
            case loading_source_code: 
                if(appShouldBeActive){
                    appsToLoad.push(app)
                }
                break;
            case not_bootstrap:
            case not_mount:
            default:
                break;
        }
    })
}