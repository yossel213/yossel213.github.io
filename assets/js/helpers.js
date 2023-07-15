const usuario = localStorage.getItem('usuario');
const password = localStorage.getItem('password');

$(document).ready(function () {
    tableDetail()
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

    if (currentURL.includes("producto.html")) {
        $("#producto_").addClass("bg-white");
    }

    if (currentURL.includes("venta.html")) {
        $("#venta_").addClass("bg-white");
    }

    if (currentURL.includes("historial.html")) {
        $("#historial_").addClass("bg-white");
    }
}

async function tableDetail() {
    try {
        let response = await fetch('https://fakestoreapi.com/products');
        let data = await response.json();
        let rowsHTML = '';
        let tbody = $('#tablaDetail');
        $.each(data, function (index, product) {
            rowsHTML += `
        <tr>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div class="flex">
                    <div class="flex-shrink-0 w-10 h-10">
                        <img class="w-full h-full rounded-full"
                            src="${product.image}"
                            alt="" />
                    </div>
                    <div class="ml-3">
                        <p class="text-gray-900 whitespace-no-wrap">
                            ${product.title}
                        </p>
                        <p class="text-gray-600 whitespace-no-wrap">00000${product.id}</p>
                    </div>
                </div>
            </td>

            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">$${product.price}</p>
                <p class="text-gray-600 whitespace-no-wrap">USD</p>
            </td>

            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <span
                    class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span aria-hidden
                        class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                    <span class="relative">Activo</span>
                </span>
            </td>

            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                <button type="button"
                    class="inline-block text-gray-500 hover:text-gray-700">
                    <svg class="inline-block h-6 w-6 fill-current" viewBox="0 0 24 24">
                        <path
                            d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                    </svg>
                </button>
            </td>   
        </tr>`;
        });

        tbody.html(rowsHTML);
    } catch (error) {
        console.error('Error:', error);
    }
}
