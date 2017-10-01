// ==UserScript==
// @name         细声视频播放（测试版）：优酷，爱奇艺，腾讯，搜狐剧集
// @namespace    http://drama.xlwmin.pub
// @version      1.1.5
// @description  这是测试版本，请使用正式版。
// @author       细声工作室
// @match        *://v.youku.com/v_show/id_*.html*
// @match        *://www.iqiyi.com/v_*.html*
// @match        *://tv.sohu.com/*/n*.shtml*
// @match        *://v.qq.com/x/cover/*/*.html*
// @match        *://v.qq.com/x/cover/*.html*
// @grant        GM_addStyle
// ==/UserScript==



Page = {
    entry:function(){
        //创建按钮
        var text = document.createTextNode("▶");

        //创建按钮
        var div = document.createElement("div");
        div.setAttribute("title","进入细声视频播放。");
        div.setAttribute("class","whisper-drama test");

        //注册事件
        div.addEventListener("click",this.onClick);

        //添加到页面
        div.appendChild(text);
        document.body.appendChild(div);
    },
    onClick:function(){
        window.open("http://localhost?link="+window.location.href);
    }
};
(function() {
    'use strict';
    GM_addStyle(".test{top:240px !important;}.whisper-drama{position:fixed;left:0;top:185px;color:#fff;z-index:9999;width:18px;line-height:50px;text-align:center;border-radius:0px 5px 5px 0px;background:#666;cursor:default;}.whisper-drama:hover{color:white;background:#880000;cursor:pointer;}");

    Page.entry();
})();