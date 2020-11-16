$(document).ready(function(){
    $("#ocultar").click(function(){
    $("p").hide();
    });
    $("#mostrar").click(function(){
    $("p").show();

    });
    $("#cambiarOriginal").click(function(){
        $("#cazafantasmastitulo").text("Sinopsis Cazafantasmas (ORIGINAL)");
        $("#sinopsisACambiar").text("Peter Venkman (Bill Murray), Ray Stantz (Dan Aykroyd) y Egon Spengler (Harold Ramis) son tres parapsicólogos expulsados de la Columbia University en Nueva York, debido a sus estudios y prácticas poco ortodoxos, y que comienzan su propio negocio trabajando como cazafantasmas, e investigando fenómenos paranormales usando tecnología sofisticada para intentar capturar las manifestaciones ectoplasmáticas. El éxito de su negocio les hace contratar a Janine Melnitz (Annie Potts), su despreocupada secretaria y a Winston Zeddemore (Ernie Hudson), como Cazafantasmas de apoyo. Su primera cliente es Dana Barret (Sigourney Weaver), chelista que tiene una extraña visión en su apartamento y que se convierte en el interés amoroso de Peter. Tanto Dana como su vecino, Louis Tulley (Rick Moranis), son poseídos y convertidos en los avatares que darán entrada a una entidad destructora en nuestra realidad. Los cazafantasmas descubren que el edificio en el que residían, fue construido por un arquitecto que practicaba ocultismo y es una puerta dimensional que permitirá el paso -vía ritual del Maestro de las llaves (Tulley) y la Guardiana de la puerta (Barret)- a Gozer el Gozeriano, un semidiós interdimensional que amenaza con destruir Nueva York y a todo el mundo. Los problemas aumentan cuando Walter Peck (William Atherton), un empleado de salubridad que tiene desprecio por Venkman, apaga la unidad contenedora, liberando los espectros que habían sido atrapados. En medio de un gran esfuerzo, los Cazafantasmas derrotan a Gozer, salvan a Dana, a Louis y a la ciudad de Nueva York.");
    });
    $("#cambiar2016").click(function(){
        $("#cazafantasmastitulo").text("Sinopsis Cazafantasmas (2016)");
        $("#sinopsisACambiar").text("    Manhattan, Nueva York. Después de casi treinta años sin saber de ellos, los fantasmas y demonios se han vuelto a escapar de los infiernos para destruir la ciudad. Esta vez un nuevo equipo de los Cazafantasmas, formado por un grupo de cuatro mujeres, está dispuesto a terminar con cualquier amenaza espectral. La física cuántica Erin Gilbert (Kristen Wiig) y su compañera Abby Yates (Melissa McCarthy) llevan toda la vida estudiando lo paranormal. Ambas han escrito un libro en el que avalan la existencia real de los fantasmas. Es gracias a este ensayo que Erin se convierte en el hazme reír de la Universidad de Columbia, lugar donde ostenta un prestigioso puesto de trabajo. Pero pronto aparecen algunos espectros causando pánico y terror en toda Manhattan. Así que Gilbert y Yates no se lo piensan dos veces, y organizan un nuevo grupo de Cazafantasmas, al que se unen la ingeniera Jillian Holtzman (Kate McKinnon) y Patty Tolan (Leslie Jones), una taquillera del metro que conoce cada rincón de Nueva York. A las cuatro divertidas heroínas se suma Kevin (Chris Hemsworth), a quien contratan como secretario y ayudante para todo. Ahora que hay terroríficos avistamientos por toda la ciudad, el trabajo de estas cuatro mujeres va a ser imprescindible para salvar el mundo.");
    });

    $("#añadirElementos").click(function(){
        var tituloNuevaEntrada = "<h1>Cazafantasmas #Nueva entrada</h1>";    
        var tituloInfo = $("<h2></h2>").text("Información general #Editar"); 
        var tituloProtas = $("<h2></h2>").text("Protagonistas #Editar"); 
        var tituloFechas = $("<h2></h2>").text("Fechas de estreno #Editar"); 
        var parrafoInfo = document.createElement("p");
        parrafoInfo.innerHTML = "Aquí se introducirá la información sobre la nueva entrada de la película"; 
        $("footer").before(tituloNuevaEntrada);
        $("footer").before(tituloInfo);
        $("footer").before(parrafoInfo); 
        $("footer").before(tituloProtas); 
        $("footer").before(tituloFechas); 
        $("footer").before(tituloFechas); 
    });

    $("#eliminarTodosLosCabeceros").click(function(){
        $("h1").remove();
    });

    $("#eliminarMenores").click(function(){
        $("h2").remove();
    });

    $("#eliminarElementosLista").click(function(){
        $("li").remove();
    });
    $("#recorrer").click(function(){
        $("*", document.body).each(function() {
        var etiquetaPadre = $(this).parent().get(0).tagName;
        $(this).prepend(document.createTextNode( "Etiqueta padre : <"  + etiquetaPadre + "> elemento : <" + $(this).get(0).tagName +"> valor: "));
        });
    });    
    $('#eliminarFilas').click(function() {
        $("table tr td").each(function() {
            var celda = $.trim($(this).text());
            if (celda.length == 0) {
                $(this).parent().hide();
            }
        });
    });
    $('#mostrarFilas').click(function() {
        $("table tr").each(function() {
            $(this).show();
        });
    });
});

  

