// ==UserScript==
// @name         细声视频播放
// @namespace    http://drama.xlwmin.pub
// @version      1.2.8
// @description  正式版
// @author       细声工作室
// @license      MIT
// @match        *://v.youku.com/v_show/id_*.html*
// @match        *://www.iqiyi.com/v_*.html*
// @match        *://tv.sohu.com/*/n*.shtml*
// @match        *://my.tv.sohu.com/us/*/*.shtml*
// @match        *://film.sohu.com/album/*.html*
// @match        *://v.qq.com/x/cover/*/*.html*
// @match        *://v.qq.com/x/cover/*.html*
// @match        *://www.mgtv.com/b/*/*.html*
// @match        *://v.pptv.com/show/*.html*
// @match        *://www.le.com/ptv/vplay/*.html*
// @match        *://www.1905.com/vod/play/*.shtml*
// @match        *://vip.1905.com/play/*.shtml*
// @match        *://tv.cctv.com/*/*/*/*.shtml*
// @match        *://tv.cctv.com/*/*/*.html*
// @match        *://m.youku.com/video/id_*.html*
// @match        *://m.v.qq.com/x/cover/*/*.html*
// @match        *://m.v.qq.com/x/cover/*.html*
// @match        *://m.v.qq.com/cover/*/*.html*
// @match        *://m.v.qq.com/cover/*.html*
// @match        *://m.tv.sohu.com/v*.shtml*
// @match        *://m.film.sohu.com/album/*.html*
// @match        *://m.iqiyi.com/v_*.html*
// @match        *://m.pptv.com/show/*.html*
// @match        *://m.mgtv.com/*
// @match        *://m.le.com/vplay_*.html*
// @grant        GM_addStyle
// ==/UserScript==


//测试同步
Page = {
    entry:function(){
        //创建按钮
        var text = document.createTextNode("▸");

        //创建按钮
        var div = document.createElement("div");
        div.setAttribute("title","进入细声视频播放。");
        div.setAttribute("class","whisper-drama");

        //注册事件
        div.addEventListener("click",this.onClick);

        //添加到页面
        div.appendChild(text);
        document.body.appendChild(div);
    },
    onClick:function(){
        var form = document.createElement("form");
        form.setAttribute("method","POST");
        form.setAttribute("action","http://drama.xlwmin.pub");
        form.setAttribute("target","_blank");
        form.style.display="none";

        var inputText = document.createElement("input");
        inputText.setAttribute("name","link");
        inputText.setAttribute("type","hidden");
        inputText.setAttribute("value",window.location.href);
        form.appendChild(inputText);

        document.body.appendChild(form);
        form.submit();
    }
};
(function() {
    'use strict';
    GM_addStyle(".whisper-drama{position:fixed;left:0;top:185px;color:#fff;z-index:9999;width:18px;line-height:50px;text-align:center;border-radius:0px 5px 5px 0px;background:#666;cursor:default;font-size:25px;}.whisper-drama:hover{color:white;background:#880000;cursor:pointer;}");

    Page.entry();
})();