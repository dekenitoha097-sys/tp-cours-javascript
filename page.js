

let tasks = [];

//===============================================================
function addTask(taskName, taskExtra) {
    const task = {
        name: taskName,
        done: false,
        extra: taskExtra
    };
    tasks.push(task)
}

function displayTask() {
    console.log(tasks)
}

function deleteTask(index) {
    tasks = tasks.filter((task, id) => id != index)
    console.log(tasks)
}

function modifyTask(index, newTask, newExtra) {
    let currentID;
    let task = tasks.find((tasks, id) => {
        currentID = id;
        return id == index
    })
    console.log("La tache a modifier: " + task);
    task.name = newTask;
    task.extra = newExtra;
    tasks[currentID] = task;

}

function toggleDone(index) {
    let currentID;
    let task = tasks.find((tasks, id) => {
        currentID = id;
        return id == index
    })
    task.done = !task.done;
    tasks[currentID] = task;
}

// ==============================================================
// fonctions lier aux buttons
function createTask() {
    const name = prompt("Saisir la nouvelle tache: ");
    if (name == "") {
        console.log("Tache vides")
        return;
    }
    const extra = prompt("Definir la propriete de la tache : ");
    addTask(name, extra);
}

function del() {
    const index = prompt("Saisir l'index de la tache a supprimer: ")
    deleteTask(index);
}

function modify() {
    const index = prompt("saisir l'index de la tache a modifier: ");
    const newTask = prompt("Saisir la nouvelle tache : ");
    const newExtre = prompt("Saisir la nouvelle extra: ");
    modifyTask(index, newTask, newExtre);
}

function done() {
    const index = prompt("Saisir l'index de la tache a change l'etat: ");
    toggleDone(index);
}