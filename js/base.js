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

try {
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

// Index Identity
var channelName = getUrlVars().na;
if (channelName === "teleflix") {
	var indexLink = dataSheet[1].teleflix;
	var indexInfo = dataSheet[0].teleflix;
}

// Place Data
function secLoop(n) {
	var show = document.getElementById(indexLink[n].sect);
	var section = document.getElementById(indexLink[n].sect + 'S');
	var navbtn = document.getElementById(indexLink[n].sect + 'L');
	show.style.display = 'inline-block';
	section.style.display = 'flex';
	navbtn.style.display = 'inline-block';
	var pie = document.createElement('p');
	pie.style = 'order: ' + n;
	pie.innerHTML = '<a target="_blank" href="' + indexLink[n].info + '" class="info">i</a><a post="' + indexLink[n].post + '">' + indexLink[n].name + '</a>';
	section.appendChild(pie);
}

// Data Looper
let x;
for (x = 0; x < indexLink.length; x++) {
	secLoop(x);
}

// Place Other Data
document.getElementById('updated').innerHTML = indexInfo[0].updated;
document.getElementsByClassName('container0')[0].children[1].innerHTML = indexInfo[0].title;
document.title = indexInfo[0].docTitle;
document.querySelector("link[sizes*='16x16']").setAttribute('href',indexInfo[0].favicon16);
document.querySelector("link[sizes*='32x32']").setAttribute('href',indexInfo[0].favicon32);

// Channel ID
var channel = decodeDisshit(getUrlVars().id);

// Total Links with POST
var num = document.querySelectorAll('a[post]').length;

// Place Links
function postLoop(n) {
	var item = document.querySelectorAll('a[post]')[n];
	var post = item.getAttribute('post');
	item.href = 'tg://privatepost?channel=' + channel + '&post=' + post;
}

// Link Looper
let i;
for (i = 0; i < num; i++) {
	postLoop(i);
}
}
catch(err) {
	document.getElementsByTagName('html')[0].innerHTML = "";
}