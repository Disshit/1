/* ==========================
:: Template Name: Index JS
:: Author: NaeemBolchhi
:: License: GPL-3.0 License
:: Landing Page: https://naeembolchhi.github.io/
:: Telegram Profile: https://t.me/NaeemBolchhi
:: Description: Made for static index pages.
:: Version: v1.0
:: Created: 19/08/2021
========================== */

// Scraping URL
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

// Decoding
function decodeDisshit(str) {
  return decodeURIComponent(atob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}

// Channel ID
var channel = decodeDisshit(getUrlVars().id);

// Total Links with POST
var num = document.querySelectorAll('a[post]').length;

// Loop
function postLoop(n) {
	var item = document.querySelectorAll('a[post]')[n];
	var post = item.getAttribute('post');
	item.href = 'tg://privatepost?channel=' + channel + '&post=' + post;
}

// Looper
let i;
for (i = 0; i < num; i++) {
	postLoop(i);
}