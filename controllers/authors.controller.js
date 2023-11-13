const autoresModel = require('../models/authors.model'); // Importar el modelo de la BBDD

//getAuthors
// if(hay email)
//     busca por mail
// else
//     busca todo


// GET http://localhost:3000/api/authors --> ALL
// GET http://localhost:3000/api/authors?email=hola@gmail.com --> por email
//lo vamos a engachar a una ruta que si hay mail busca por correo, si no hay mail busca todo. 
const getAuthors = async (req, res) => {
    let authors;
    if (req.query.email) {
        authors = await autoresModel.getAuthorsByEmail(req.query.email);//esto accede a author.models y llama a esa funcion allí
       
    }
    else {
        authors = await autoresModel.getAllAuthors();//esto accede a author.models y llama a esa funcion allí
    }
    res.status(200).json(authors); // [] con las entries encontradas
}

//createEntry
// POST http://localhost:3000/api/authors
// let newEntry = {
//     title:"noticia desde Node",
//     content:"va a triunfar esto2",
//     email:"alejandru@thebridgeschool.es",
//     category:"sucesos"}

// Crear author
const createAuthor = async (req, res) => {
    const newAuthor = req.body; // {name,surname,email,image}
    const response = await autoresModel.createAuthor(newAuthor);//esto accede a authors.models y llama a esa funcion allí
    res.status(201).json({
        "items_created": response,
        data: newAuthor
    });
}

//Update Author

const updateAuthor = async (req, res) => {
    const changeAuthor = req.body; // {image, email}
    const response = await autoresModel.updateAuthor(changeAuthor);//esto accede a authors.models y llama a esa funcion allí
    res.status(201).json({
        "items_created": response,
        data: changeAuthor
    });
}

//delete author
const deleteAuthorInjection = async (req, res) => {
    const deleteAuthor = req.body; // {image, email}
    const response = await autoresModel.deleteAuthor(deleteAuthorInjection);//esto accede a authors.models y llama a esa funcion allí
    res.status(201).json({
        "items_created": response,
        data: deleteAuthorInjection
    });
}

module.exports = {
    getAuthors,
    createAuthor,
    deleteAuthorInjection, //--> DELETE
    updateAuthor
}