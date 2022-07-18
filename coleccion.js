function recononerLocalStorage() {
  const datos = localStorage.getItem("coleccionPerfumes");
  if (datos != null) {
    console.log("existe");
    const coleccionPerfumesa = JSON.parse(localStorage.getItem("coleccionPerfumes"));
    showCards(coleccionPerfumesa);
  } else {
    console.log("no existe");
    const datosAGuardar = [];
    localStorage.setItem("coleccionPerfumes", JSON.stringify(datosAGuardar));
    console.log("se creo");
  }
}

const agregar = document.querySelector(".botonAgregar");

function crearObjetoNuevo() {
  const nombre = document.getElementById("nombre").value;
  const tipo = document.getElementById("familiaOlfativa").value;
  const genero = document.getElementById("genero").value;
  const marca = document.getElementById("marca").value;
  const link = document.getElementById("link").value;

  const nuevoPerfume = {
    nombre: nombre,
    tipo: tipo,
    genero: genero,
    marca: marca,
    link: link,
  };

  console.log(nuevoPerfume);

  agregarALocalNuevoPerfume(nuevoPerfume);
}

function agregarALocalNuevoPerfume(PN) {
  const coleccionPerfumesa = JSON.parse(localStorage.getItem("coleccionPerfumes"));
  console.log(coleccionPerfumesa);
  coleccionPerfumesa.push(PN);
  console.log(coleccionPerfumesa);
  localStorage.setItem("coleccionPerfumes", JSON.stringify(coleccionPerfumesa));
}

function showCards(a) {
  const cardsContainer = document.getElementById("contenedor_cards");
  cardsContainer.innerHTML = "";
  a.map((p) => {
    cardsContainer.innerHTML += `
      
      <a class="card">
        <img
          class="imagen"
          src=${p.link}
          alt="Perfume"
        />
        <h2 class="titulo">${p.nombre}</h2>
        <h3 class="tipo">${p.tipo}</h3>
        <p class="genero">${p.genero}</p>
        <p class="marca">${p.marca}</p>
      </a>
   
        `;
  });
}

const botonCerrarSesion = document.querySelector(".cerrarSesion");

botonCerrarSesion.addEventListener("click", () => {
  localStorage.removeItem("usuario");
  window.location.assign("login.html");
});

const botonEliminarPerfume = document.querySelector("#btn-eliminar");

botonEliminarPerfume.addEventListener("click", () => {
  localStorage.removeItem("coleccionPerfumes");
  window.location.assign("coleccion.html");
});
