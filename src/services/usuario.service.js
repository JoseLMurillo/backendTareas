let usuarios = [
  {
    id: 12345,
    nombre: "Jose",
    edad: 26,
    telefono: 12345678,
  },
  {
    id: 4567,
    nombre: "Maria",
    edad: 14,
    telefono: 12345678,
  },
  {
    id: 5678,
    nombre: "Andres",
    edad: 23,
    telefono: 12345678,
  },
];

/*
CONSULTAR TODOS LOS USUARIO
CONSULTAR UN USUARIO
AGREGAR UN USUARIO
ELIMINAR UN USUARIO
*/

//CONSULTAR TODOS LOS USUARIO
function getAllUser () {
    return usuarios;
}

//CONSULTAR UN USUARIO
function getUser (id) {
    for(usuario in usuarios) {
        if(usuarios[usuario].id == id){
            return usuarios[usuario];
        }
    }
    return false;
}

//AGREGAR UN USUARIO
function addUser (user) {
    usuarios.push(user)

    return true
}

//ELIMINAR UN USUARIO
function deleteUser (id) {
    for(usuario in usuarios) {
        if(usuarios[usuarios].id = id){
            frutas.splice(usuario, 1)
            return true;
        }
    }
    return false;
}

module.exports = {
    addUser,
    getAllUser,
    getUser,
    deleteUser
}