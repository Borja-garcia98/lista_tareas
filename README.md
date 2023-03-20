Explicacion
------------
El código apunta principalmente a agregar nuevos elementos a una lista de tareas pendientes, marcar la hora de cada elemento cuando se agrega y  eliminar una tarea al hacer clic y agregar detectores de eventos de clic a todos los elementos actuales en la lista.  

La función agregarTarea() agrega un nuevo elemento a la lista recuperando el valor tareaInput, creando un elemento li, a y span con una marca de tiempo para la tarea  createElement(). 

PD: Tiene un pequeño fallo que no se como solucionar pero cuando el minuto es del 01 al 09 no muestra el 0, lo mismo con los meses

También verifica si el usuario no proporcionó ninguna entrada al validar el valor de entrada. Si el valor está vacío, se muestra un marcador de posición al usuario para indicar que debe agregar una tarea válida. 

Finalmente, agrega los elementos recién creados a la nueva Tarea. 

La función comprobarInput() valida que un usuario no haya proporcionado ningún texto en el área de entrada y restablece el estilo del campo de entrada de forma adecuada. 

La función eleminarTarea() actúa como detector de clics en todos los elementos de la lista y elimina el elemento seleccionado de la lista con un  mouseover en todos los elementos de la tarea actual en la lista.
