/*muevo toda la caja a la derecha para que la imagen 2 pase a ser la 1*/ 
$(".imagenes_slider").css("margin-left", "-" + 100 + "%");


/*click en adelante*/ 

function adelante(){
    $(".imagenes_slider").animate({
        marginLeft: "-" + 200 + "%"
    }, 700, function(){
       $(".imagenes_slider .img_individual:first").insertAfter(".imagenes_slider .img_individual:last");  
        
        $(".imagenes_slider").css("margin-left", "-" + 100 + "%");
    })
}

/*BOTON ADELANTE*/
$(".boton_adelante").on("click", function(){
    adelante();
})


/*click en atras*/ 

function atras(){
    $(".imagenes_slider").animate({
        marginLeft: 0
    }, 700, function(){
       $(".imagenes_slider .img_individual:last").insertBefore(".imagenes_slider .img_individual:first");
        
        $(".imagenes_slider").css("margin-left", "-" + 100 + "%"); 
    })
}

/*BOTON ATRAS*/
$(".boton_atras").on("click", function(){
    atras();
})
