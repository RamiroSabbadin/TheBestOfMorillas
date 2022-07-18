const usuario = document.querySelector("#usuario");
const contrasenia = document.querySelector("#contrasenia");
const boton = document.querySelector("#boton");

boton.addEventListener("click", (e) => {
  e.preventDefault();
  const data = {
    usuario: usuario.value,
    contrasenia: contrasenia.value,
  };

  console.log(data);
  const usuarioLocalStorage = () => {
    localStorage.setItem("usuario", JSON.stringify(usuario.value));
  };
  usuarioLocalStorage();
});

let usuarioDesdeLocalStorage = undefined;

const traerUsuarioDelLocalStorage = () => {
  usuarioDesdeLocalStorage = JSON.parse(localStorage.getItem("usuario"));
  console.log(usuarioDesdeLocalStorage);
};

traerUsuarioDelLocalStorage();

function ingresar() {
  if (contrasenia.value == 1234) {
    location.href = "index.html";
  } else {
    alert("La contraseña es incorrecta");
  }
}
