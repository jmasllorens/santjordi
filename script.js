alert("Aquesta és una pàgina interactiva (on i offline). Tria un títol, fes-me'l saber i s'habilitarà la lectura de l'article corresponent.")
let mainPrincipal  = document.querySelector(".main-principal")
let mainLibro1 = document.querySelector(".main-libro1")


function cambiarPantallaLibro1(){

    if(mainPrincipal.style.display == "block"){
        mainPrincipal.style.display = "none"
        }
    if(mainLibro1.style.display == "none"){
        mainLibro1.style.display = "block"
        alert("Context: (1) Buenos Aires, 2016. (2) Primeres línies després d'uns 8 anys de bloqueig sense poder escriure.")
        }
    

}

function cambiarPantallaPrincipal(){

    if(mainCatalogo.style.display == "block"){
        mainCatalogo.style.display = "none"
        }
    if(mainPrincipal.style.display == "none"){
        mainPrincipal.style.display = "block"
        }
    if(mainDescripcion.style.display == "block"){
        mainDescripcion.style.display = "none"
        }

}

function cambiarPantallaDescripcion(){

    if(mainCatalogo.style.display == "block"){
        mainCatalogo.style.display = "none"
        }
    if(mainDescripcion.style.display == "none"){
        mainDescripcion.style.display = "block"
        }
    

}

