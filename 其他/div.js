var aa = ["a1","a2","a3","a4","a5"];
function a(b) {
	for (var i = aa.length-1; i >= 0; i--) {
		document.getElementById(aa[i]).style.display="none";
	}
	document.getElementById(aa[b]).style.display="";
}