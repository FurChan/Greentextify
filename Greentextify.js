// ==UserScript==
// @name         Greentextify
// @require      https://cdnjs.cloudflare.com/ajax/libs/zepto/1.1.4/zepto.min.js
// @require      http://code.jquery.com/jquery-1.9.1.js
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bring greentext everywhere you browse
// @author       ToothAndScale
// @match        https://userscripts-mirror.org/scripts/review/287701
// @grant        none
// @include      *
// ==/UserScript==

function applyGreentext(i,s){
    Zepto(s).wrap('<mark class="greentexted" style="background-color: inherit; color: #789922;"></div>')
}

function isTextNode(){
    return this.nodeType===3
}

function greentextChild(){
    return Zepto(this).parent().is("mark.greentexted")
}

function isGreentext(){
    return Zepto(this).text().trim().substr(0,1)===">"
}

function greentextTextNodes(){
    Zepto("*").contents().filter(isTextNode).not(greentextChild).filter(isGreentext).map(applyGreentext)
}

greentextTextNodes();

setInterval(function(){
    greentextTextNodes();
},1000);
