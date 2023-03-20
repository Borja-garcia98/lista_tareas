(function () {
    // Coge las referencias de los elemntos html que se van a usar 
    var lista = document.getElementById("lista");
    var tareaInput = document.getElementById("tareaInput");
    var btnNuevaTarea = document.getElementById("btn-agregar");

    // Define la funcion de añadir tareas a la lista 
    var agregarTarea = function () {
        var tarea = tareaInput.value,
            nuevaTarea = document.createElement("li"),
            enlace = document.createElement("a"),
            timeStamp = document.createElement("span"), // crea nueva linea 
            contenido = document.createTextNode(tarea);

        if (tarea === "") {
            tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
            tareaInput.className = "error";

            return false;
        }
        // Agregamos el contenido al enlace
        enlace.appendChild(contenido);
        // Le establecemos un atributo href
        enlace.setAttribute("href", "#");
        // Agrergamos el enlace (a) a la nueva tarea (li)
        nuevaTarea.appendChild(enlace);

        // Agregar el timestamp
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
        var dateTime = time + '   ' + date;
        timeStamp.innerText = dateTime;
        timeStamp.className = "timestamp";
        nuevaTarea.appendChild(timeStamp); // crea la linea 

        lista.appendChild(nuevaTarea);
        tareaInput.value = "";

        for (var i = 0; i <= lista.children.length - 1; i++) {
            lista.children[i].addEventListener("click", function () {
                this.parentNode.removeChild(this);
            });
        }
    };
    // Si no hay texto al clickar se comprueba y se emite mensaje de "agraga tu tarea..."
    var comprobarInput = function () {
        tareaInput.className = "";
        tareaInput.setAttribute("placeholder", "Agrega tu tarea");
    };
    // Define la funcion que elimina al clickar
    var eleminarTarea = function () {
        this.parentNode.removeChild(this);
    };
    // Zona event listeners frl boton y texto 
    btnNuevaTarea.addEventListener("click", agregarTarea);
    tareaInput.addEventListener("click", comprobarInput);

    for (var i = 0; i <= lista.children.length - 1; i++) {
        lista.children[i].addEventListener("click", eleminarTarea);
    }
})();
