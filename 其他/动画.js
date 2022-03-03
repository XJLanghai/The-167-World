$(window).scroll(function () {
    checkScroll()
});
function checkScroll() {
    var am = $(".preload:not([class*='is-visible'])");
    if ($(am).length > 0) {
        var h = $($(am)[0]).offset().top - $(window).scrollTop();
        if (h <= 170) { //µ÷ÕûÏÔÊ¾¾àÀë
            $($(am)[0]).addClass("is-visible")
        }
    }
}