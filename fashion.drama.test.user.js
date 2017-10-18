// ==UserScript==
// @name         细声视频播放：测试版
// @namespace    http://drama.xlwmin.pub
// @version      1.2.3
// @description  测试版
// @author       细声工作室
// @match        *://v.youku.com/v_show/id_*.html*
// @match        *://www.iqiyi.com/v_*.html*
// @match        *://tv.sohu.com/*/n*.shtml*
// @match        *://v.qq.com/x/cover/*/*.html*
// @match        *://v.qq.com/x/cover/*.html*
// @match        *://film.sohu.com/album/*.html*
// @match        *://www.mgtv.com/b/*/*.html*
// @grant        GM_addStyle
// ==/UserScript==



Page = {
    entry:function(){
        //创建按钮
        var text = document.createTextNode("▸");

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
        var form = document.createElement("form");
        form.setAttribute("method","POST");
        form.setAttribute("action","http://localhost");
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
    GM_addStyle(".test{top:240px !important;}.whisper-drama{position:fixed;left:0;top:185px;color:#fff;z-index:9999;width:18px;line-height:50px;text-align:center;border-radius:0px 5px 5px 0px;background:#666;cursor:default;font-size:25px;}.whisper-drama:hover{color:white;background:#880000;cursor:pointer;}");

    Page.entry();
})();