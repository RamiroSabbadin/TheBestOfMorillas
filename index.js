const saludo = document.querySelector(".menu_items .saludo");

const traerUsuarioDelLocalStorage = () => {
  usuarioDesdeLocalStorage = JSON.parse(localStorage.getItem("usuario"));
};

traerUsuarioDelLocalStorage();

saludo.innerHTML = `¡Hola <b>${usuarioDesdeLocalStorage}!</b>`;

function devolverAlLogin() {
  if (usuarioDesdeLocalStorage == null || usuarioDesdeLocalStorage == "") {
    window.location.assign("login.html");
  }
}

devolverAlLogin();

const botonCerrarSesion = document.querySelector(".cerrarSesion");

botonCerrarSesion.addEventListener("click", () => {
  localStorage.removeItem("usuario");
  window.location.assign("login.html");
});

const Perfumes = [
  {
    nombre: "Gucci Guilty Absolute",
    tipo: "Cuero",
    genero: "Masculino",
    marca: "Gucci",
    imagen: "https://m.media-amazon.com/images/I/61xv5P5IItL._SX679_.jpg",
  },
  {
    nombre: "Dylan Blue",
    tipo: "Versatil",
    genero: "Masculino",
    marca: "Versace",
    imagen: "https://falabella.scene7.com/is/image/FalabellaPE/15873364_1?wid=800&hei=800&qlt=70",
  },
  {
    nombre: "Flower",
    tipo: "Ámbar Floral",
    genero: "Femenino",
    marca: "Kenzo",
    imagen: "https://rougeb2car.vtexassets.com/arquivos/ids/170672/Flower-EDP-100ml-1.jpg?v=637786455119700000",
  },
  {
    nombre: "212 Men",
    tipo: "Amaderado Floral",
    genero: "Masculino",
    marca: "Carolina Herrera",
    imagen:
      "https://images.shopdutyfree.com/image/upload//040/001/002/8411061762264/8411061762264_1_default_default.jpg",
  },
  {
    nombre: "Belle d'Opium",
    tipo: "Amaderado",
    genero: "Femenino",
    marca: "Yves Saint Laurent",
    imagen: "https://m.media-amazon.com/images/I/71tXDF4fW5L._SL1500_.jpg",
  },
  {
    nombre: "Man In Black",
    tipo: "Ámbar",
    genero: "Masculino",
    marca: "Bvlgari",
    imagen: "https://solofragancias.mx/wp-content/uploads/2018/09/bvlgari-man-in-black-1.jpg",
  },
  {
    nombre: "212 VIP",
    tipo: "Ámbar",
    genero: "Femenino",
    marca: "Carolina Herrera",
    imagen: "https://m.media-amazon.com/images/I/61qyvuJsL0L._SY355_.jpg",
  },
  {
    nombre: "Gucci Bloom",
    tipo: "Floral",
    genero: "Femenino",
    marca: "Gucci",
    imagen: "https://www.tradeinn.com/f/13672/136721784/gucci-bloom-vapo-50ml.jpg",
  },
  {
    nombre: "Esencia de Duende",
    tipo: "Floral Verde",
    genero: "Femenino",
    marca: "Jesus Del Pozo",
    imagen: "https://image.cdn0.buscalibre.com/3669990.RS500x500.jpg",
  },
  {
    nombre: "PI",
    tipo: "Ámbar Amaderado",
    genero: "Masculino",
    marca: "Givenchy",
    imagen:
      "http://s3.amazonaws.com/storage.wobiz.com/200/200711/images/Large/1627159013_1600f60f044f01a77511eb1fec82566d.200711.jpeg",
  },
  {
    nombre: "Omnia",
    tipo: "Ámbar",
    genero: "Femenino",
    marca: "Bvlgary",
    imagen: "https://m.media-amazon.com/images/I/61DQXiEL5hL._SL1500_.jpg",
  },
  {
    nombre: "Acqua di Giò Profumo",
    tipo: "Aromático Acuático",
    genero: "Masculino",
    marca: "Giorgio Armani",
    imagen:
      "https://www.parfemy-elnino.sk/data/cache/thumb_min500_max1000-min500_max1000-12/products/33760/1542955207/giorgio-armani-acqua-di-gio-profumo-parfumovana-voda-pre-muzov-75-ml-258469.jpg",
  },
  {
    nombre: "CK One",
    tipo: "Versatil",
    genero: "Unisex",
    marca: "Calvin Klein",
    imagen:
      "https://static.beautytocare.com/media/catalog/product/cache/global/image/650x650/85e4522595efc69f496374d01ef2bf13/c/a/calvin-klein-ck-one-eau-de-toilette-200ml.jpg",
  },
  {
    nombre: "Light Blue Eau Intense",
    tipo: "Amaderado Acuático",
    genero: "Masculino",
    marca: "Dolce & Gabbana",
    imagen: "https://m.media-amazon.com/images/I/61FJvN0tUUL._SX569_.jpg",
  },
  {
    nombre: "Eros Pour Femme",
    tipo: "Almizcle Floral",
    genero: "Femenino",
    marca: "Versace",
    imagen: "https://stylewatch.vtexassets.com/arquivos/ids/179767-800-auto?width=800&height=auto&aspect=true",
  },
];

const guardarEnLocalStorage = () => {
  localStorage.setItem("perfumes", JSON.stringify(Perfumes));
};
guardarEnLocalStorage();

let perfumesDesdeLocalStorage = null;

const traerPerfumesDelLocalStorage = () => {
  perfumesDesdeLocalStorage = JSON.parse(localStorage.getItem("perfumes"));
  console.log(perfumesDesdeLocalStorage);
};

traerPerfumesDelLocalStorage();

let cardsContainer = document.querySelector(".contenedor_cards");

const showCards = (Perfumes) => {
  cardsContainer.innerHTML = "";
  Perfumes.map(
    (p) =>
      (cardsContainer.innerHTML += `
      <a class="card">
      <img
        class="imagen"
        src=${p.imagen}
        alt="Perfume"
      />
      <h2 class="titulo">${p.nombre}</h2>
      <h3 class="tipo">${p.tipo}</h3>
      <p class="genero">${p.genero}</p>
      <p class="marca">${p.marca}</p>
    </a>
  `)
  );
};

showCards(perfumesDesdeLocalStorage);

document.addEventListener("keyup", (e) => {
  if (e.target.matches("#search")) {
    document.querySelectorAll(".card").forEach((perfume) => {
      perfume.textContent.toLowerCase().includes(e.target.value.toLowerCase())
        ? perfume.classList.remove("filtro")
        : perfume.classList.add("filtro");
    });
  }
});
