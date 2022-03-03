var aa = ["a1", "a2", "a3", "a4", "a5"];
var aaa = ["aaa1", "aaa2", "aaa3", "aaa4", "aaa5"];
$('body,html').animate({ scrollTop: 0 }, 0);//×ªµ½Ò³Ê×
document.getElementById(aaa[0]).style.fontWeight = "700";
function a(b) {
	for (var i = aa.length - 1; i >= 0; i--) {
		$('body,html').animate({ scrollTop: 0 }, 0);
		document.getElementById(aa[i]).style.display = "none";
		document.getElementById(aaa[i]).style.fontWeight = "normal";
	}
	document.getElementById(aa[b]).style.display = "";
	document.getElementById(aaa[b]).style.fontWeight = "700";
}