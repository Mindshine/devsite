$(document).ready(function(){
	resizeDiv();
	$(".nav-toggle").click(function(){$("#nav-main").toggleClass("active");});
	$("#nav-main .nav-item").click(scrollTo);
	$(".slide-home .scroll-arrow").click(scrollTo);
});

window.onresize = function(event) {
	resizeDiv();
};

function resizeDiv() {
	var vph = $(window).height();
	vph -= parseFloat($(".content section").css("padding-top"));
	vph -= parseFloat($(".content section").css("padding-bottom"));
	$(".content section").css({"height": vph + "px"});
	var fh = $("body>footer").height();
	$(".content section.slide-contacts").css({"height": (vph - fh) + "px"});
}

function scrollTo(event) {
	$("#nav-main").removeClass("active");
	$("html, body").animate({scrollTop: $($(this).data("target")).offset().top}, 1200);
}