   //Fuction de Java Scripts para modificar la el menu si es menor que laas cordenadas que proporcionaa 
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    //Aqui Conserva el estado Original de menu
    navbarCollapse();
    //Cuando baje con el Scroll modifique el menu
    $(window).scroll(navbarCollapse);

