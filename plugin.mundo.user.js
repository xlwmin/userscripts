// ==UserScript==
// @name         MundoDonghua
// @namespace    http://www.xlwmin.pub
// @version      1.0.0
// @description  1.0.0 破除广告屏蔽
// @author       细声工作室
// @license      MIT
// @match        *://www.mundodonghua.com/*
// ==/UserScript==


//测试同步
var Page = {
    timer:null,
    entry:function(){
        //创建按钮
        var html = document.getElementsByTagName("html")[0];
        html.style.overflow ="auto";
        html.style.overflowY="scroll !important";
        console.log(1);
        clearInterval(Page.timer);
    }
};
(function() {
    'use strict';
    Page.timer = setInterval(Page.entry,1000);
})();