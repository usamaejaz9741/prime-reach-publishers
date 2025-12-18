$(document).ready(function () {
    
    
    let images = document.querySelectorAll(".lazyload");
    lazyload(images);  
    
    setTimeout(function () {
        $("#triggerClick").trigger("click");
    }, 5e3),
        $(".menu-bottom").on("click", function () {
            $("html").toggleClass("menu-open");
        }),
        $(".menu-bottom").click(function () {
            $(this).toggleClass("click");
        }),
        AOS.init({ disable: "mobile" }),
        $(".banner-form-val").validate(),
        $(".validate-popupform").validate(),
        $(".app_contact_form").validate(),
        $(".validate-autopopup").validate();
    var a = $("meta[name=ip2loc]").attr("content");
    $.ajax({
        method: "get",
        url: "https://pro.ip-api.com/json/" + a,
        data: { key: "5XpThOAEkfgOvEJ" },
        success: function (a) {
            a &&
                ($("input[name=ip2loc_ip]").val(a.query),
                $("input[name=ip2loc_isp]").val(a.isp),
                $("input[name=ip2loc_org]").val(a.org),
                $("input[name=ip2loc_country]").val(a.country),
                $("input[name=ip2loc_region]").val(a.regionName),
                $("input[name=ip2loc_city]").val(a.city));
        },
    }),
        $(".various").click(function () {
            var a = $(this).attr("name");
            $(".popupform .leadprice").val(a);
        }),
       /* $(".owl-testimonial").owlCarousel({ 
            center: !0, items: 2, loop: !0, autoplay: !1, margin: 0, 
            responsive: 
            { 
                0: { items: 1 }, 
                600: { items: 3 }, 
                1e3: { items: 3 }, 
                360: { items: 1} 
            } 
        }),*/
        $('.owl-testimonial').owlCarousel({
        loop:true,
        nav:false,
        center: true,
        dots:true,
        margin:15,
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayHoverPause: false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:3,
            },
            320:{
                items: 1,
            }
        }
    }),
        $(".owl-books").owlCarousel({
            loop: !0,
            dots: !1,
            lazyLoad:true, 
            margin: 10,
            responsiveClass: !0,
            autoplay: !0,
            autoplayTimeout: 8e3,
            autoplaySpeed: 800,
            navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
            responsive: 
            { 
                0: { items: 3 }, 
                600: { items: 3 }, 
                1e3: { items: 5 }, 
                360: { items: 2 } 
                
            },
        }),
        $(".owl-site-logo").owlCarousel({
            loop: !0,
            nav: !1,
            dots: !1,
            margin: 30,
            responsiveClass: !0,
            autoplay: !0,
            autoplayHoverPause: !0,
            autoplayTimeout: 8e3,
            autoplaySpeed: 800,
            navText: [""],
            responsive: { 0: { items: 6 }, 600: { items: 6 }, 1e3: { items: 6 }, 360: { items: 2 } },
        }),
        $(".owl-bbc").owlCarousel({
            loop: !0,
            nav: !1,
            dots: !1,
            margin: 30,
            responsiveClass: !0,
            autoplay: !0,
            autoplayHoverPause: !0,
            autoplayTimeout: 8e3,
            autoplaySpeed: 800,
            navText: [""],
            responsive: { 0: { items: 4 }, 600: { items: 4 }, 1e3: { items: 4 }, 360: { items: 1 } },
        }),
        $(".owl-home").owlCarousel({
            items: 1,
            loop: !0,
            nav: !1,
            dots: !1,
            margin: 30,
            responsiveClass: !0,
            autoplay: !0,
            autoplayHoverPause: !0,
            autoplayTimeout: 4e3,
            autoplaySpeed: 800,
            touchDrag: !1,
            mouseDrag: !1,
            animateIn: "fadeIn",
            animateOut: "fadeOut",
        }),
        
        $(".owl-blog").owlCarousel({ 
            loop: !1, 
            margin: 20, 
            nav: !1, 
            autoplay: !0, 
            lazyLoad:true, 
            dots: !0,
            responsive: { 
                0: { items: 3 },
                600: { items: 3 },
                1e3: { items: 3 },
                360: { items: 1 } }
            });
});


$.noConflict();

    $(document).ready(function () {
        // Set current tab to Editing
        $('*[data-tab="editing"], #editing').addClass("current");

        var typed = new Typed("#typed", {
            stringsElement: "#typed-strings",
            typeSpeed: 70,
            backSpeed: 30,
            contentType: "text",
            startDelay: 1000,
            backDelay: 2700,
            loop: true,
            preStringTyped: function () {
                changeImg();
            },
        });

        var currImg = 0;
        function changeImg() {
            currImg++;
               console.log(currImg);
            if (currImg === 1) {
                $(".slider-home").delay(400).addClass("children-image");
                $(".slider-home").delay(400).removeClass("adventure-image");
            } else if (currImg === 2) {
                $(".slider-home").delay(400).addClass("business-image");
                $(".slider-home").delay(400).removeClass("children-image");
            } else if (currImg === 3) {
                $(".slider-home").delay(400).addClass("self-image");
                $(".slider-home").delay(400).removeClass("business-image");
            } else if (currImg === 4) {
                $(".slider-home").delay(400).addClass("romance-image");
                $(".slider-home").delay(400).removeClass("self-image");                
            } else if (currImg === 5) {
                $(".slider-home").delay(400).addClass("mystery-image");
                $(".slider-home").delay(400).removeClass("romance-image");              
            } 
            else if (currImg === 6) {
                $(".slider-home").delay(400).addClass("adventure-image");
                $(".slider-home").delay(400).removeClass("mystery-image");
                currImg = 0;
            } else {
                return;
            }
        }
    });