$(window).scroll(function() {    
var scroll = $(window).scrollTop();
 //console.log(scroll);
if (scroll >= 44) {
    //console.log('a');
    $(".nav-bar").addClass("nav-bar-change");
    $(".top-bar").css("display","none");
    $(".nav-bar").css("height","70px");
} else {
	 $(".nav-bar").css("height","100px");
    //console.log('a');
    $(".nav-bar-change").removeClass("nav-bar-change");
    $(".top-bar").css("display","block");
}
});