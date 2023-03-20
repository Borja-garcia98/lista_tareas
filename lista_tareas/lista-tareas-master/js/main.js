// Wrap the code in a self-invoking function to avoid polluting the global namespace
(function(){
    // Get references to HTML elements we'll be using
    var lista = document.getElementById("lista");
    var tareaInput = document.getElementById("tareaInput");
    var btnNuevaTarea = document.getElementById("btn-agregar");

    // Define the function that adds a new task to the list
	var agregarTarea = function(){
        var tarea = tareaInput.value,
            nuevaTarea = document.createElement("li"),
            enlace = document.createElement("a"),
         timeStamp = document.createElement("span"), // new line
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
        var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
        var dateTime = time+'   '+date;
        timeStamp.innerText = dateTime;
        timeStamp.className = "timestamp"; 
        nuevaTarea.appendChild(timeStamp); // new line
        
         
        lista.appendChild(nuevaTarea);
        
        tareaInput.value = "";

        for (var i = 0; i <= lista.children.length -1; i++) {
            lista.children[i].addEventListener("click", function(){
                this.parentNode.removeChild(this);
            });
        }

    };


    // Define the function that resets the input field styles when the user clicks on it
    var comprobarInput = function(){
        tareaInput.className = "" ;
        tareaInput.setAttribute("placeholder", "Agrega tu tarea");
    };

    // Define the function that removes the clicked task from the list
    var eleminarTarea = function(){
        this.parentNode.removeChild(this);
    };

    // Attach event listeners to button and text input element
    btnNuevaTarea.addEventListener("click", agregarTarea);
    tareaInput.addEventListener("click", comprobarInput);

    // Add click event listeners to all current task items in the list
    for (var i = 0; i <= lista.children.length -1; i++) {
        lista.children[i].addEventListener("click", eleminarTarea);
    }
})();
