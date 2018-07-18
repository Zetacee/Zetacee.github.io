var checkbox = document.querySelector('#checkbox');
//Inicializamos la variable donde accedemos al DOM, el documento HTML
//Y ahí dentro con el quierySelector elegimos la zona donde nos queremos
//centrar del codigo, el 'identificador' (checkbox)
checkbox.addEventListener('change', function(ev){ // cada vez que ocurre un evento dentro de la zona
  //que hemos buscado, una interaccion de nuestro codigo html. Con el addEvent...
  //se guarda un registro de estos eventos llamados 'change', y cuando ocurra este, funcionará la FUNCION.
  setTimeout(function(){
    //Fucion que basicamente lo que hace es hacer un DELAY en la funcion, cuando se ejecute ese evento.
    window.location.href='./Presentation.html' //se redirija a esa pagina.
  } ,500)  //el tiempo que tardará
});



//COMAND, SIGHT, 7, LO SELECCIONADO SE COMENTA
