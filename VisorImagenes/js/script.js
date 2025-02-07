/**
 * Esta porción de código se encarga de la interacción de las imágenes.
 */
const imagenes = document.querySelectorAll(".imagen");
const botones = document.querySelector(".contenedor-botones");
const imgSrc = "";
let imgAux;

imagenes.forEach(imgSeleccionada => { // Se recorre cada imagen y a cada una se le añade un evento de click.
    imgSeleccionada.addEventListener("click", () => {
        imagenes.forEach(imgInvisible => { // Se vuelven a recorrer las imagenes y a la que no hemos seleccionado la ponemos como invisible.
            if (imgInvisible !== imgSeleccionada) {
                //imgInvisible.style.visibility = "hidden";
                imgInvisible.style.display = "none";
            }
        });

        // A la imagen seleccionada se le aumenta el tamaño y aparecen los botones.
        imgSeleccionada.style.transform = "scale(1.2)";
        imgSeleccionada.style.transition = "transform 0.3s ease";
        botones.style.display = "flex";
        imgSrc = imgSeleccionada.getAttribute("src").slice(12, -4);
        console.log(imgSrc.slice(12, -4));
    });
});

/**
 * Esta porción de código se encarga de la funcionalidad del botón revertir.
 */
const botonRestaurar = document.querySelector(".restaurar");

botonRestaurar.addEventListener("click", () => { // Al botón se le añade un evento de click.
    imagenes.forEach(imagen => { // Se recorren las imágenes para ver cuál es la que está oculta y se vuelve a poner visible.
        if (!imagen.checkVisibility()) {
            imagen.style.display = "flex";
        }
        else { // A la imagen seleccionada se le vuelve a poner el tamaño original y los botones desaparecen.
            imagen.style.transform = "scale(1.0)";
            imagen.style.transition = "none";
            botones.style.display = "none";
        }
    });
});

/**
 * Esta porción de código se encarga de la funcionalidad del botón frontal.
 */
const botonFrontal = document.querySelector(".frontal");
botonFrontal.addEventListener("click", cambiarImagen("garchomp"));

/**
 * Esta porción de código se encarga de la funcionalidad del botón lateral.
 */
const botonLateral = document.querySelector(".lateral");

/**
 * Esta porción de código se encarga de la funcionalidad del botón trasera.
 */
const botonTrasera = document.querySelector(".trasera");

function cambiarImagen(nombreImagen) {
    imgAux.src = "../recursos/garchomp.jpg";
}