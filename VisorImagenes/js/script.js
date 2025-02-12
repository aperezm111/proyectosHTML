/**
 * Esta porción de código se encarga de la interacción de las imágenes.
 */
const imagenes = document.querySelectorAll(".imagen");
const botones = document.querySelector(".contenedor-botones");
let idImg;

imagenes.forEach(imgSeleccionada => { // Se recorre cada imagen y a cada una se le añade un evento de click.
    imgSeleccionada.addEventListener("click", () => {
        imagenes.forEach(imgInvisible => { // Se vuelven a recorrer las imagenes y a la que no hemos seleccionado la ponemos como invisible.
            if (imgInvisible !== imgSeleccionada) {
                imgInvisible.style.display = "none";
            }
        });
        idImg = imgSeleccionada.getAttribute("id"); // Con este id vamos a saber la imagen seleccionada para despues cambiarla.

        // A la imagen seleccionada se le aumenta el tamaño y aparecen los botones.
        imgSeleccionada.style.transform = "scale(1.2)";
        imgSeleccionada.style.transition = "transform 0.3s ease";
        botones.style.display = "flex";
        
    });
});

/**
 * Esta porción de código se encarga de la funcionalidad del botón revertir.
 */
const botonRestaurar = document.querySelector("#restaurar");

botonRestaurar.addEventListener("click", () => { // Al botón se le añade un evento de click.
    imagenes.forEach(imagen => { // Se recorren las imágenes para ver cuál es la que está oculta y se vuelve a poner visible.
        if (!imagen.checkVisibility()) {
            imagen.style.display = "flex";
        }
        else { // A la imagen seleccionada se le vuelve a poner el tamaño original, se cambia a la imagen inicial y los botones desaparecen.
            imagen.src = "../recursos/" + idImg + "_Frontal.webp";
            imagen.style.transform = "scale(1.0)";
            imagen.style.transition = "none";
            botones.style.display = "none";
        }
    });
});

/**
 * Esta porción de código se encarga de la funcionalidad del botón frontal.
 */
const botonFrontal = document.querySelector("#frontal");
botonFrontal.addEventListener("click", () => cambiarImagen(idImg, "Frontal"));

/**
 * Esta porción de código se encarga de la funcionalidad del botón lateral.
 */
const botonLateral = document.querySelector("#lateral");
botonLateral.addEventListener("click", () => cambiarImagen(idImg, "Lateral"));

/**
 * Esta porción de código se encarga de la funcionalidad del botón trasera.
 */
const botonTrasera = document.querySelector("#trasera");
botonTrasera.addEventListener("click", () => cambiarImagen(idImg, "Trasera"));

/**
 * Esta función se encarga de cambiar las imágenes cuando se pulsan los botones.
 * @param {*} idImagen es la id de la imagen seleccionada que hay que cambiar.
 * @param {*} perspectiva de la imagen a cambiar.
 */
function cambiarImagen(idImagen, perspectiva) {
    let imagen = document.getElementById(idImagen);
    let nuevaSrc = "../recursos/" + idImagen + "_" + perspectiva + ".webp";
    imagen.src = nuevaSrc;
}