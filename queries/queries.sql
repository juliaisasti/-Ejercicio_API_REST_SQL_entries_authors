--Poner aquí todas las queries de prueba y todas las que queramos usar

--esta query llama los datos cuando yo le paso un email
SELECT e.title,e.content,e.date,e.category,a.name,a.surname,a.image
    FROM entries AS e
    INNER JOIN authors AS a
    ON e.id_author=a.id_author
    WHERE a.email=$1
    ORDER BY e.title;



--esta query me va a dar todas las entries que tenga en mi bbdd
SELECT * FROM entries;

