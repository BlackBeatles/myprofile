$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }
    });

// smooth navigation of navbar
    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

// menu will show when hamburger icon is clicked
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn img').toggleClass("active");
    });
});