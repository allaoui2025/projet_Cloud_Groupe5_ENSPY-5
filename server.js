const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
 
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

let tasks = [];

// Page d'accueil
app.get('/', (req, res) => {
    res.send(`
        <h1>Liste de tâches</h1>
        <ul>
            ${tasks.map((task, index) => `<li>${task} <a href="/delete/${index}">Supprimer</a></li>`).join('')}
        </ul>
        <form action="/add" method="POST">
            <input type="text" name="task" placeholder="Nouvelle tâche" required />
            <button type="submit">Ajouter</button>
        </form>
        <link rel="stylesheet" href="/style.css">

    `);
});

// Ajouter une tâche
app.post('/add', (req, res) => {
    const task = req.body.task;
    tasks.push(task);
    res.redirect('/');
});

// Supprimer une tâche
app.get('/delete/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (id >= 0 && id < tasks.length) {
        tasks.splice(id, 1);
    }
    res.redirect('/');
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Application en cours d'exécution sur http://localhost:${port}`);
});
