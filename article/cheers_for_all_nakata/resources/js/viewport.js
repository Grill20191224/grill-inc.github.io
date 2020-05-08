//*-- デバイス判定 --------------------------------*

var d = window.document;
var ua = navigator.userAgent;
if( ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) || ( ua.indexOf('windows') > 0 && ua.indexOf('phone') > 0) || ( ua.indexOf('firefox') > 0 && ua.indexOf('mobile') > 0) ) {
	d.write('<meta name="viewport" content="width=750">');
//sp
} else if( ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0 || (ua.indexOf('windows') > 0 && ua.indexOf('touch') > 0) || ( ua.indexOf('firefox') > 0 && ua.indexOf('tablet') > 0) ) {
	d.write('<meta name="viewport" content="width=1500">');
//tablet
} else {
	d.write('<meta name="viewport" content="width=1500">');
//pc
}