const express = require("express"),
      app = express(),
      bodyParser = require('body-parser'),
      dataUsers = require('../mocks/users.json'),
      dataNotes = require('../mocks/notes.json')

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

    .use(bodyParser.json())

    .use(express.static('../public'))

    .get('/users', function (req, res) {
    res.send(getNotesbyUser())
});


function getNotesbyUser() {
    let users = dataUsers.users
    let dataNote = dataNotes.notes
    let Users = []; // On créer un tableau vide pour stocker les données de chaque utilisateur avec ses notes

    for (let i = 0; i < users.length; i++) {

        let id = users[i]._id; // On créé une variable ID qui correspond à l'id de l'utilisateur.

        // On boucle sur les notes pour récupérer le contenu de chaque notes dans le cas ou
        // l'id de l'utilisateur correspond à l'userId de la note.
        Users.push(new Array(users[i]))

        for (let j = 0; j < dataNote.length; j++) {

        let notesContent = dataNote[j].content // On créé une variable qui stock le contenu de chaque note

            if (dataNote[j].userId == id) { // Si l'id de l'utilisateur correspond l'userId de la note,
                Users[i].push(notesContent)    //  on rajoute la note dans le tableau vide qui contient déja les utilisateurs
            }
        }
    }
    return Users
}

getNotesbyUser()

let server = app.listen(9000, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log("Adresse du serveur : http://localhost:9000", host, port);
});