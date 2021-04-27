$(document).ready(function () {
    //Data
    $('#botonData').click(function(e){
        e.preventDefault();
        $('#botonData').data('datos', {nombre: 'Vanessa Godoy', color: 'Rojo'});
        let dataDatos = $('#botonData').data('datos');
        $('#nombre').html(dataDatos.nombre);
        $('#favColor').html(dataDatos.color);
    })

    $('#botonAdjuntos').click(function(e){
        e.preventDefault();
        $('#botonAdjuntos').data('datos', {nombre: 'Vanessa Godoy', color: 'Rojo'});
        let dataDatos = $('#botonAdjuntos').data('datos');
        $('#datosAdjuntos').html('Datos adjuntos: ' + dataDatos.nombre + ', ' + dataDatos.color)
    })

    //addClass
    $('#botonClase').click(function(e){
        e.preventDefault();
        $('#rojo').addClass('text-danger');
        $('#negrita').addClass('fw-bold');
    });

    //slideToggle
    $('#botonToggle').click(function(e){
        e.preventDefault();
        $('#ghost1').slideToggle();
    })

    //append
    $('#botonAppend').click(function(e){
        e.preventDefault();
        $('#agregarTexto').append('<p>...Otro texto</p>');
    })

    //val
    $('#botonVal').click(function(e){
        e.preventDefault();
        $('#colorVal').html('Color elegido: ' + $('#color').val())
    })

    //fadeIn y fadeOut
    $('#botonIn').click(function(e){
        e.preventDefault();
        $('#ghost2').fadeIn()
    })

    $('#botonOut').click(function(e){
        e.preventDefault();
        $('#ghost2').fadeOut()
    })

    //focus
    $('#botonFocus').click(function(e){
        e.preventDefault();
        $('#textFocus').focus(function (e) { 
            e.preventDefault();
            $('#focusMensaje').html('<br> <p class="alert alert-secondary">Este texto ha sido traído a ustedes por focus</p>')
        });
    })

    //hide y show
    $('#botonHide').click(function(e){
        e.preventDefault();
        $('#textoHideShow').hide(100);
    })

    $('#botonShow').click(function(e){
        e.preventDefault();
        $('#textoHideShow').show(100);
    })

    //slideUp y slideDown
    $('#botonUp').click(function(e){
        e.preventDefault();
        $('#textoSlide').slideUp();
    })

    $('#botonDown').click(function(e){
        e.preventDefault();
        $('#textoSlide').slideDown();
    })

});