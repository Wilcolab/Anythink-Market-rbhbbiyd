const express = require('express');
const app = express();
const port = 8001;

app.use(express.json());

// Migrated initial data from Python server
let tasks = [
    "Write a diary entry from the future", 
    "Create a time machine from a cardboard box", 
    "Plan a trip to the dinosaurs", 
    "Draw a futuristic city", 
    "List items to bring on a time-travel adventure"
];

app.get('/', (req, res) => {
    res.send("Hello World");
});

// GET /tasks - Retrieves the task list
app.get('/tasks', (req, res) => {
    res.json({ tasks: tasks });
});

// POST /tasks - Adds a task to the task list
app.post('/tasks', (req, res) => {
    const taskText = req.body.text;
    if (taskText) {
        tasks.push(taskText);
        res.status(201).json({ message: "Task added successfully" });
    } else {
        res.status(400).json({ error: "Task text is required" });
    }
});

app.listen(port, () => {
    console.log(`Node server listening at http://localhost:${port}`);
});