function offsetAnchor() {
    if(location.hash.length !== 0) {
        window.scrollTo(window.scrollX, window.scrollY - 60);
    }
}
window.addEventListener("hashchange", offsetAnchor);
window.setTimeout(offsetAnchor, 1);

// Twitter button
!function (d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https';
if (!d.getElementById(id)) {
    js = d.createElement(s);
    js.id = id;
    js.src = p + '://platform.twitter.com/widgets.js';
    fjs.parentNode.insertBefore(js, fjs);
    }
}(document, 'script', 'twitter-wjs');

// Facebook button
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.8";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

$(document).ready(function(){
    // Tooltip
    $(function() {
        $('#tooltip').tooltip();
    });

    $(function(){
        $('[data-toggle="tooltip"]').tooltip();
    });

    // Stellar - Parallax effect used in About section
    $.stellar();

    // Smooth scrolling
    var $root = $('html, body');
    $('.navbar-nav a').click(function () {
        var href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top
        }, 500, function () {
            window.location.hash = href;
        });
        return false;
    });

    // Dropdown
    $(document).ready(function () {
        $('dropdown-toggle').dropdown()
    });

    // Form
    $("#msg-submit-btn").on("click", function() {
        var comment = $("#message-box").val();
        var msgReceived = "Thank you. Here is a copy of your message:";
        if (comment === "") {
            $("#message-box").css("border", "2px solid red");
        } else {
            console.log(comment);
            $("#visible-comment").html(msgReceived + comment);
            $(".send-message").hide("slow");
            // return false;
        }
    });

    $("#message-box").on("keyup", function(){
        console.log("keyup happened");
        var charCount = $("#message-box").val().length;
        console.log(charCount);
        $("#charCount").html(charCount);
        if (charCount > 50) {
            $("#charCount").css("color", "red");
        } else {
            $("#charCount").css("color", "black");
        }

        if (charCount < 30) {
            $("#message-box").css("color","red");
        } else {
            $("#message-box").css("color","black");
        }
    });

//    work section
    for (var i = 0; i < works.length; ++i) {
        $("#work-images").append('\
        <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">\
            <div class="each-image">\
                <a href="' + works[i].url + '" class="work-img">\
                    <img id="' + works[i].id + '" src="' + works[i].pic + '" class="img-responsive">\
                    <span class="info"><p class="proj-title">Title: </p>' + works[i].title + '</span>\
                </a>\
            </div>\
        </div>\
        ');
        // var images = $("#work-images img");
        // if (i % 2 ===0) {
        //     $(images[i]).css('border', '2px solid DodgerBlue');
        // } else {
        //     $(images[i]).css('border', '2px solid salmon');
        // }
        $(".work-img").mouseenter( function(){
            $(".img-responsive", this).css("opacity", ".3");
            $(".info", this).show();
        }).mouseleave(function(){
            $(".img-responsive", this).css("opacity", "1");
            $(".info",this).hide();
        });
    }
});

// var offsetHeight = 51;
//
// $('.nav-collapse').scrollspy({
//     offset: offsetHeight
// });

// $('.navbar li a').click(function (event) {
//     var scrollPos = $('body > .container').find($(this).attr('href')).offset().top - offsetHeight;
//     $('body,html').animate({
//         scrollTop: scrollPos
//     }, 500, function () {
//         $(".btn-navbar").click();
//     });
//     return false;
// });