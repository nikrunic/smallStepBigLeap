$(function() {
    if ($(".scroll").length) {
        $(".scroll").jScrollPane();
    }
    $(".hamburgar").on("click", function() {
        $("nav").slideToggle("open");
        $("nav").toggleClass("open");
        $(this).toggleClass("open");
    });
    $("body").on("click", ".listigHeader, .action", function(e) {
        var el = $(this);
        $(".box-acco").find(".level-box").stop().slideUp();
        if ($(el).find(".action").hasClass("active")) {
            $(el).find(".action").removeClass("active");
        } else {
            $(".action").removeClass("active");
            $(el).find(".action").addClass("active");
        }
        $(el).closest(".box-acco").find(".level-box").stop().slideToggle();
    });
    $(".open_modal_js").on("click", function() {
        var popupID = $(this).attr("data-popupID");
        $(".comm_popup_overlay_Js, #" + popupID).fadeIn();
    });
    $(".close_btn_js, .comm_popup_overlay_Js").on("click", function(e) {
        e.preventDefault();
        $(".comm_popup_overlay_Js, .comm_pop_container_blk").fadeOut();
    });
    if ($("#contactForm").length) {
        $("#contactForm").validate({
            rules: {
                name: {
                    required: true,
                    minlength: 3,
                },
                mobile: {
                    required: true,
                    tel: true,
                },
                email: {
                    required: true,
                    email: true,
                },
            },
        });
    }
});

$(window)
    .on("resize", function() {
        if ($(".scroll").length) {
            $(".scroll").jScrollPane();
        }
    })
    .on("load", function() {
        if (window.location.href.split("?")[1] == "success=true") {
            $(".cuForm").hide();
            $(".contectUsSucess").show();
        }
        var url_string = window.location.href;
        var url = new URL(url_string);
        var c = url.searchParams.get("s");
        if (c != undefined) {
            var sec = '[data-sec="' + c + '"]'
            $(sec).find('.listigHeader').click()
            setTimeout(function() {
                var scrTp = $(sec).offset().top;
                $('html,body').animate({ scrollTop: scrTp }, 500)
            }, 500);
        }
    });

var clList = [".fadeIn, .fadeUp, .fadeDown"];

function animateClass() {
    setTimeout(function() {
        clList.forEach(function(item, index) {
            var anim = document.querySelectorAll(item);
            for (var i = 0, nbs = anim.length; i < nbs; i++) {
                var animELe = anim[i];
                var rect = animELe.getBoundingClientRect();
                var isVisible =
                    rect.top - window.innerHeight < 0 && rect.bottom > -50 ? true : false;
                if (isVisible) {
                    animELe.classList.add("animate");
                } else {
                    // animELe.classList.remove("animate");
                }
            }
        });
    }, 100);
}
$(window)
    .on("load", function() {
        animateClass();
    })
    .on("scroll", function() {
        animateClass();
    });
animateClass();