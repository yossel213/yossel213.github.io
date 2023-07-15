const usuario = localStorage.getItem('usuario');
const password = localStorage.getItem('password');

$(document).ready(function () {

    if ($(window).outerWidth() > 768) {
        $("aside").removeClass("hidden sm:flex sm:flex-col");
    } else {
        $("aside").addClass("hidden sm:flex sm:flex-col");
    }

    $(".hidden span.font-semibold").text(usuario == 'undefined' ? 'Visitante' : usuario);
    $("#btnLogout").click(function () {
        localStorage.clear();
        window.location.href = "/";
    })

    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function (data) {
            $("#usuario_foto").attr('src', data.results[0].picture.medium)
        }
    });


    $("#clicktoggle").on("click", function () {
        $("#panel_foto").toggle();
    });

    $("#menu").on("click", function () {
        $("#pane_sidebar").toggle();
    });

    $(window).on("resize", function () {
        if ($(window).outerWidth() > 768) {
            $("aside").removeClass("hidden sm:flex sm:flex-col");
        } else {
            $("aside").addClass("hidden sm:flex sm:flex-col");
        }
    });

    $(".mr-8").on("click", function () {
        $("aside").toggleClass("hidden sm:flex sm:flex-col");
    });

    //FUNCION ACTIVE PARA EL SIDEBAR
    obtUrl();
});

function obtUrl() {
    let currentURL = window.location.href;
    // console.log(currentURL.includes("home.html"));
    if (currentURL.includes("home.html")) {
        $("#inicio_").addClass("bg-white");
    }

}

