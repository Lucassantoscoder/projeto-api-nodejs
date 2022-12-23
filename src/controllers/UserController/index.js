const users = require('../../database/users');
const { v4: uuidv4 } = require('uuid'); // uuid é utilizado para add um hash ao usuário.

function insertUser(req, res){
    const { name, age } = req.body;

    if (!name || !age) {    // se não tiver nome e nem idade retornar 404
       return res.status(404).json({message: "Não foi encontrato, requerido nome e idade" });
    }

    const user = {
        id: uuidv4(),
        name,
        age

    }

    users.push(user);
    
    delete user.id;

    return res.status(200).json(user);
}

function selectUsers(req, res){
 return res.status(200).json(users);

}


function updateUser(req, res){


}


function deleteUser(req, res){


}

module.exports = {
        insertUser, 
        selectUsers, 
        updateUser, 
        deleteUser

}