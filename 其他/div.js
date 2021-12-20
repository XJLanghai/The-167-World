var aa = ["a1", "a2", "a3", "a4", "a5"];
$('body,html').animate({ scrollTop: 0 }, 0);//×ªµ½Ò³Ê×
function a(b) {
	for (var i = aa.length - 1; i >= 0; i--) {
		$('body,html').animate({ scrollTop: 0 }, 0);
		document.getElementById(aa[i]).style.display = "none";
	}
	document.getElementById(aa[b]).style.display = "";
}