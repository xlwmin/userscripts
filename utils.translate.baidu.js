// ==UserScript==
// @name         细声百度翻译
// @namespace    http://www.xlwmin.pub
// @version      1.0.0
// @description  选中文字跳转百度翻译
// @author       细声工作室
// @license      MIT
// @match        *://*.quora.*
// @match        *://*.youtube.com/watch*
// @grant        GM_addStyle
// ==/UserScript==


//测试同步
var Page = {
    text:null,
    entry:function(){
        //创建按钮
        var text = document.createTextNode("zh");

        //创建按钮
        var div = document.createElement("div");
        div.setAttribute("title","跳转翻译");
        div.setAttribute("class","whisper-translate");

        //注册事件
        div.addEventListener("click",this.onClick);

        window.addEventListener("mouseup",this.onWindowMouseUp);

        //添加到页面
        div.appendChild(text);
        document.body.appendChild(div);
    },
    onWindowMouseUp:function(){
        var text = window.getSelection().toString();
        if(text!=''){
            Page.text = text;
        }
    },
    onClick:function(){
        var form = document.createElement("form");
        form.setAttribute("method","get");
        form.setAttribute("action","https://fanyi.baidu.com/#en/zh/"+Page.text);
        form.setAttribute("target","_blank");
        form.style.display="none";

        document.body.appendChild(form);
        //console.log(Page.text);
        form.submit();
    }
};
(function() {
    'use strict';
    GM_addStyle(".whisper-translate{position:fixed;left:0;top:185px;color:#fff;z-index:9999;width:18px;line-height:30px;text-align:center;border-radius:0px 5px 5px 0px;background:#666;cursor:default;font-size:15px;}.whisper-translate:hover{color:white;background:#880000;cursor:pointer;}");

    Page.entry();
})();