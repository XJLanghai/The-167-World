function openOption(evt, optionName) {
    var i, tab_down, tablinks_download;
    tab_down = document.getElementsByClassName("tab_down");
    for (i = 0; i < tab_down.length; i++) {
        tab_down[i].style.display = "none";
    }
    tablinks_download = document.getElementsByClassName("tablinks_download");
    for (i = 0; i < tablinks_download.length; i++) {
        tablinks_download[i].className = tablinks_download[i].className.replace(" active","");
    }
    document.getElementById(optionName).style.display = "block";
    evt.currentTarget.className += " active";
}