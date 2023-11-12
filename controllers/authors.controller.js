const entry = require('../models/authors.model'); // Importar el modelo de la BBDD

//getAuthors
// if(hay email)
//     busca por mail
// else
//     busca todo


// GET http://localhost:3000/entries --> ALL
// GET http://localhost:3000/entries?email=hola@gmail.com --> por email
//lo vamos a engachar a una ruta que si hay mail busca por correo, si no hay mail busca todo. 
const getAuthors = async (req, res) => {
    let authors;
    if (req.query.email) {
        authors = await entry.getAuthorsByEmail(req.query.email);//esto accede a entries.models y llama a esa funcion allí
       
    }
    else {
        authors = await entry.getAllAuthors();//esto accede a entries.models y llama a esa funcion allí
    }
    res.status(200).json(entries); // [] con las entries encontradas
}

//createEntry
// POST http://localhost:3000/api/entries
// let newEntry = {
//     title:"noticia desde Node",
//     content:"va a triunfar esto2",
//     email:"alejandru@thebridgeschool.es",
//     category:"sucesos"}

// Crear author por email ACABAR
/*const createAuthor = async (req, res) => {
    const newAuthor = req.body; // {title,content,email,category}
    const response = await author.createAuthor(newAuthor);//esto accede a entries.models y llama a esa funcion allí
    res.status(201).json({
        "items_created": response,
        data: newAuthor
    });
}*/

module.exports = {
    getAuthors,
    createAuthor,
    //deleteEntry, --> DELETE
    //updateEntry --> PUT
}