		$(function(){
		$pos = $('#submenu').offset().top - 0;

		$(window).on('scroll', function(){
			if($(window).scrollTop() >= $pos) {
				$('#submenu').addClass('fixed');
			} else {
				$('#submenu').removeClass('fixed');
				}
			});
		});

		function setActiveStyleSheet(title) {
  var i, a, main;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
      a.disabled = true;
      if(a.getAttribute("title") == title) a.disabled = false;
    }
  }
}

function getActiveStyleSheet() {
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title") && !a.disabled) return a.getAttribute("title");
  }
  return null;
}

function getPreferredStyleSheet() {
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1
       && a.getAttribute("rel").indexOf("alt") == -1
       && a.getAttribute("title")
       ) return a.getAttribute("title");
  }
  return null;
}

function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

window.onload = function(e) {
  var cookie = readCookie("style");
  var title = cookie ? cookie : getPreferredStyleSheet();
  setActiveStyleSheet(title);
}

window.onunload = function(e) {
  var title = getActiveStyleSheet();
  createCookie("style", title, 365);
}

var cookie = readCookie("style");
var title = cookie ? cookie : getPreferredStyleSheet();
setActiveStyleSheet(title);

function Animate2id(id2Animate){
	var animSpeed=1500; 
    var easeType="easeInOutExpo"; 
    if($.browser.webkit){ 
        $("body").stop().animate({scrollTop: $(id2Animate).offset().top}, animSpeed, easeType);
    } else {
        $("html").stop().animate({scrollTop: $(id2Animate).offset().top}, animSpeed, easeType);
    }
}
		$(document).ready(function(){
  var originalFontSize = $('.upper').css('font-size');
    $("#size18").click(function(){
    $('.upper').css('font-size', originalFontSize);
  });
  $("#size16").click(function(){
    var currentFontSize = $('.upper').css('font-size');
    var currentFontSizeNum = parseFloat(currentFontSize, 10);
    var newFontSize = currentFontSizeNum*1.2;
    $('.upper').css('font-size', newFontSize);
    return false;
  });
  $("#size14").click(function(){
    var currentFontSize = $('.upper').css('font-size');
    var currentFontSizeNum = parseFloat(currentFontSize, 10);
    var newFontSize = currentFontSizeNum*0.8;
    $('.upper').css('font-size', newFontSize);
    return false;
  });
});
