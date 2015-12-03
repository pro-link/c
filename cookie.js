// www.pro-link.pl
onload = function(){
    var newdiv = document.createElement('div');
    var divIdName = 'mycookie';
    newdiv.setAttribute('id',divIdName);
	newdiv.style.width = "100%";
    newdiv.style.height = "50px";
    newdiv.style.padding = "5px 0";
    newdiv.style.left = "0px";
    newdiv.style.bottom = "0px";
    newdiv.style.position = "fixed";
    newdiv.style.zIndex = "9999";
    newdiv.style.color = "#3f3f3f";
    newdiv.style.background = "#eee";
    newdiv.style.borderTop = "1px solid #444444";
    newdiv.style.boxShadow = "5px 0px 40px #000000";
	web=window.location.hostname;
    newdiv.innerHTML = '<div style="width: 960px; margin: 0 auto;"><p style="float: left; text-align: left; width: 890px; line-height: 18px; font-size: 11px; color: #3f3f3f; font-family: Tahoma;">Serwis u&#380;ywa plik&#243;w cookie. Przeczytaj wi&#281;cej o celu ich wykorzystania i <a style="font-size: 11px; color: #3f3f3f; font-family: Tahoma; text-decoration: underline;" rel="nofollow" href="http://www.politykacookie.com.pl/cookie.php?web='+ web +'" target="_new">mo&#380;liwo&#347;ci zmiany ustawie&#324; cookies w Twojej przegl&#261;darce</a>. Korzystaj&#261;c z naszego serwisu wyra&#380;asz zgod&#281; na u&#380;ywanie cookies, zgodnie z ustawieniami Twojej przegl&#261;darki.</p> <span id="close" style="cursor: pointer; display: block; float: right; padding: 10px 15px; margin: 7px 0 0 0; background: #444; color: #fff; font-weight: bold; font-size: 13px; font-family: Tahoma;" href="" onclick="addcookie();" >X</span><div style="clear: both;"></div></div>';

	document.body.insertBefore(newdiv, document.body.lastChild);

    jestwc=gC('powiadom');
	
    if (jestwc != 'bylo') {
		document.getElementById('mycookie').style.display  = 'block';
    }
    else {
		document.getElementById('mycookie').style.display  = 'none';
    }

}


function addcookie() {
	var CookieDate = new Date;
	CookieDate.setFullYear(CookieDate.getFullYear( ) +10);
	document.getElementById('mycookie').style.display  = 'none';
    document.cookie = "powiadom=bylo; expires=" + CookieDate.toGMTString( ) + ';';
}

function gC(N,x){
	if((x=document.cookie)&&(N=(';'+x).match(new RegExp('(;| )'+N+'=[^;]+'))))
    return unescape(N[0].split(/=/g)[1])
}
