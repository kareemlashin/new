$(document).ready(
    function () {

        $("#load").fadeOut(1000, function () {
            $("body").css({ overflow: "auto" })
        })

        $("nav .nav-item .nav-link").click(function () {
            let hrefLink = $(this).attr("href");
            $("html , body").animate({ scrollTop: $(hrefLink).offset().top }, 1000)
        })

        let x = $("#our").offset().top;
        $(".gotOur").click(function () {
            $("body , html").animate({ scrollTop: x }, 1000)
        })
        $(window).scroll(function () {
            let y = $(window).scrollTop();
            if (y > x - 50) {
                $(".navbar").addClass("bg-scllor");
                $(".navbar").removeClass("bg-light");

            } else {
                $(".navbar").removeClass("bg-scllor");
                $(".navbar").addClass("bg-light");

            }
        })

        $(".listMenu li").click(function () {
            let myId = $(this).attr("id");
            $(this).removeClass("active").siblings().addClass("active");
            $(".desc").hide();
            $("#" + myId + "-cont").slideDown(500);

        })
        $(".listMenu li ").click(function () {
            $(this).addClass("activez");
            $(".listMenu li").not(this).removeClass('activez');

        })

        let contSectionOffset = $(".contSection").offset().top;
        $(window).scroll(function () {
            let myWindow = $(window).scrollTop();
            if (myWindow > contSectionOffset) {
                function inc1() {
                    let num1 = $("#countOne").text();
                    if (num1 < 1000) {
                        num1++;
                        clearInterval(inc1)
                    }
                    $("#countOne").text(num1)


                }
                setInterval(inc1, 100);
                function inc2() {
                    let num2 = $("#countTwo").text();
                    if (num2 < 1500) {
                        num2++;
                        clearInterval(inc2)
                    }
                    $("#countTwo").text(num2)


                }
                setInterval(inc2, 100);
                function inc3() {
                    let num3 = $("#countThree").text();
                    if (num3 < 1000) {
                        num3++;
                        clearInterval(inc3)
                    }
                    $("#countThree").text(num3)


                }
                setInterval(inc3, 100);

            }
        })


        $(".upPage").click(function () {
            $("body ,html").animate({ scrollTop: 0 }, 2000)
        })


    }
)