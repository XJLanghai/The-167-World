function openOption(evt, optionName) {
    var i, tabcontent_download, tablinks_download;
    tabcontent_download = document.getElementsByClassName("tabcontent_download");
    for (i = 0; i < tabcontent_download.length; i++) {
        tabcontent_download[i].style.display = "none";
    }
    tablinks_download = document.getElementsByClassName("tablinks_download");
    for (i = 0; i < tablinks_download.length; i++) {
        tablinks_download[i].className = tablinks_download[i].className.replace(" active","");
    }
    document.getElementById(optionName).style.display = "block";
    evt.currentTarget.className += " active";
}