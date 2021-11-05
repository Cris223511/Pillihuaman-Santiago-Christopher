$(function(){
    $("#noticias article").prepend("<p>Lea</p>");

    $("#eventos article").append("<p>No se lo pierda!</p>");

    $("#titulo-noticias").mouseenter(function(){
        $("#noticias").css("background-color","#ffcc00")
            .css("color","#ffffff")
            .css("font-style","italic");
    });
    $("#titulo-noticias").mouseleave(function(){
        $("#noticias").css("background-color","#ffffff")
            .css("color","#333333")
            .css("font-style","normal");
    });
    $("#titulo-noticias").click(function(){
        $(this).html("<strong>nove</strong>dades");
        $(".padded").css("padding-top","200px");
    })

    //GALERÍA

    $("#galeria figure").append("<figcaption>")
    $("#galeria figure figcaption").html("<i class='fas fa-search-plus'></i>");
    $("#galeria figure").each(function(){
        var nombres = $(this).find("img").attr("title");
        $(this).find("figcaption").append("<h6>" + nombres + "</h6>");
    })

    $("#galeria figure").mouseenter(function(){
        $(this).find("figcaption").stop().slideDown("slow",function(){
            $(this).css("display","flex");
            $(this).find("h6").fadeIn("fast");
            $(this).find("i").fadeIn("fast");
        });
    })
    $("#galeria figure").mouseleave(function(){
        $(this).find("figcaption").stop().slideUp("slow");
    })

    $("#galeria figure figcaption i").click(function(){
        $("body").append("<div id='fondo-oscuro'>")
        var rutaImagen = $(this).parent().parent().find("img").attr("src")
        $("#fondo-oscuro").append("<img src='" + rutaImagen +  "'>")

        var nombrePersona = $(this).parent().parent().find("img").attr("title")
        $("#fondo-oscuro").append("<h5>" + nombrePersona +  "</h5>")

        $("#fondo-oscuro").click(function(){
            $(this).remove();
        })
    })

})

window.addEventListener("scroll", function(){
    progreso();
})

function progreso(){
    let scroll = document.documentElement.scrollTop;
    //console.log("El progreso es este " + progreso)
    let alto = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let progreso = (scroll/alto)*100;
    document.getElementsByClassName("barra")[0].style.width = progreso+"%";
}