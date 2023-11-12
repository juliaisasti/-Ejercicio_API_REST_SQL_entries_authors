//const { Pool } = require('pg');
const queries = require('./queries')
const pool = require('../config/db_pgsql')//accede al fichero este que es el que accede al .env donde está la info


// GET
const getAuthorsByEmail = async (email) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion a bbdd
        const data = await client.query(queries.getAuthorsByEmail, [email])
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}
// GET
const getAllAuthors = async () => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getAllAuthors)
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}
// CREATE ACABAR
/*const createAuthor = async (author) => {
    const {name, email, author_id} = entry;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.createEntry,[title, content, email, category])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}*/
// DELETE
//UPDATE
const auhtors = {
    getAuthorsByEmail,
    getAllAuthors,
    createAuthor,
    //deleteEntry
    //updateEntry
}
module.exports = auhtors;
// Pruebas

