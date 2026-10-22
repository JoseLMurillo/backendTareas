const usuarioService = require("../services/usuario.service");

function getAllUser (req, res) {
    let usuarios = usuarioService.getAllUser();
    res.json(usuarios);
}

function getUser (req, res) {
    let usuario = usuarioService.getUser(req.params.id);

    if(usuario){
        res.status(200).json(usuario);
    }
    else {
        res.status(400).json({mensaje: "Usuario no encontrado"})
    }    
}

function addUser (req, res) {
    console.log(req.body);
    const {id, nombre, edad, telefono } = req.body;
    let newUser = usuarioService.addUser({id: id, nombre:nombre, edad: edad, telefono: telefono})

    if( newUser) {
        res.status(200).json({mensaje: "Usuario guardado"})
    }
}

function deleteUser (req, res) {
    let eliminado = usuarioService.deleteUser(req.params.id);

    if(eliminado){
        res.status(200).json({mensaje: "Usuario eliminado"});
    }
    else {
        res.status(400).json({mensaje: "Usuario no encontrado"})
    }
}

module.exports = {
    getAllUser,
    getUser,
    deleteUser,
    addUser
}