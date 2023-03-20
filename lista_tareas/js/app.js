(function(){
    // Get references to HTML elements we'll be using
    var tareaInput = document.getElementById("tareaInput");
    var btnNuevaTarea = document.getElementById("btn-agregar");

    // Define function that creates a new category list and appends it to the DOM 
    var agregarListaCategoria = function(){
        var categoria = prompt("Ingrese el nombre de la nueva categoría:");	    
        if (categoria) {
            // create a new <ul> element for tasks of this category            
            var nuevaLista = document.createElement("ul");
            nuevaLista.className = "lista-categoria"; 		    
            nuevaLista.setAttribute("data-categoria", categoria);
            
            // Add header for the category with its name
            var tituloCategoria = document.createElement("h3");
            tituloCategoria.innerText = categoria;
            nuevaLista.appendChild(tituloCategoria);
            
            // Append the new list to the document
            document.body.appendChild(nuevaLista);
        }        
    };

    // Define the function that adds a new task to the selected category list
    var agregarTarea = function(e){
        var tarea = tareaInput.value || "",
            enlace = document.createElement("a"),
             contenido = document.createTextNode(tarea);

        if (tarea === "") {
            tareaInput.setAttribute("placeholder", "Agregue una tarea válida.");
            tareaInput.className = "error";            
            e.preventDefault();
            return false;
        }
            
        // find the active category list or prompt user to create one
        var listaCategoria = document.querySelector(".lista-categoria.active") || null;
        
        if (!listaCategoria){
            alert("No hay ninguna lista de que seleccionada. Cree una nueva categoría.");
            e.preventDefault();
            return false;
        }

         // Agregamos el contenido al enlace
        enlace.appendChild(contenido);
        // Le establecemos un atributo href
        enlace.setAttribute("href", "#");
        
        // Crear un elemento li y agregar contenido al mismo
        var nuevaTarea = document.createElement("li");
        nuevaTarea.appendChild(enlace);
        listaCategoria.appendChild(nuevaTarea);
        
        tareaInput.value = "";
   };


    // Define the function that resets the input field styles when the user clicks on it
    var comprobarInput = function(){
        tareaInput.className = "" ;
        tareaInput.setAttribute("placeholder", "Agregar nueva tarea...");
    };



    // Attach event listeners to button and text input element
    btnNuevaCategoria.addEventListener("click", agregarListaCategoria);
    btnNuevaTarea.addEventListener("click", agregarTarea);

    tareaInput.addEventListener("click", comprobarInput);



    // Add click event listeners to all current task items in the list
    document.body.addEventListener("click", function(e){
        // check if an item from a category list was clicked to delete it
        if (e.target.matches('.lista-categoria a')) {
            e.target.parentNode.parentNode.removeChild(e.target.parentNode);
        }
        
       // toggle selected category list among the availables
        if (e.target.matches('.lista-categoria h3')){
            // remove previous selection style from another categories
            const selectedActive = document.querySelector(".active");
            if (selectedActive && selectedActive !== e.target.parentNode) {
                selectedActive.classList.remove("active");
            }
            // add style and mark as active the category
            e.target.parentNode.classList.toggle('active');    
        }
    });

})();
