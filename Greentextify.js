// ==UserScript==
// @name         Greentextify Docs
// @require      http://code.jquery.com/jquery-1.9.1.js
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bring greentext to Google Chrome
// @author       ToothAndScale
// @grant        none
// @include      https://docs.google.com/*
// ==/UserScript==

function greentextTextNodes() {
	var container = document.getElementsByClassName('kix-paragraphrenderer');

	for(let i = 0; i < container.length; i++){
        var wordnodes = container[i].getElementsByClassName('kix-wordhtmlgenerator-word-node');
        console.log(wordnodes[0].textContent);
        if(wordnodes[0].textContent.charAt(0) == '>') {
            for(let x = 0; x < wordnodes.length; x++){
                wordnodes[x].style.color = "#789922";
            }
        }
	}
}

greentextTextNodes();

setInterval(function(){
    greentextTextNodes();
},1000);
