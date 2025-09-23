use("bancoaula");

db.createCollection("estudantes");

db.estudantes.insertMany([
    {
        nome: "Isabelly",
        idade: 17,
    },
    {
        nome: "Maria",
        idade: 18,
    },
    {
        nome: "Théo",
        idade: 7,
    },
]);