const express = require('express');
const app = express();
const port = 8001;

app.use(express.json());

// This array mimics the Python server's data
let tasks = [
    "Write a diary entry from the future",
    "Create a time machine from a cardboard box",
    "Plan a trip to the dinosaurs",
    "Draw a futuristic city",
    "List items to bring on a time-travel adventure"
];

// GET route to fetch tasks
app.get('/tasks', (req, res) => {
    res.json({ tasks });
});

// POST route to add a task
app.post('/tasks', (req, res) => {
    const { title } = req.body;
    if (title) {
        tasks.push(title);
        res.status(201).json({ tasks });
    } else {
        res.status(400).send("Title is required");
    }
});

app.get('/', (req, res) => {
    res.send('Node server is running and tasks are migrated!');
});

// Ensure '0.0.0.0' is included
app.listen(port, '0.0.0.0', () => {
  console.log(`Node server listening on http://0.0.0.0:${port}`);
});