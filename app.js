document.getElementById('formTodo'),addEventListener('submit', addTodo);
function addTodo(e) 
{
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    
    const task = 
    {
        title,
        description
    };

    if (localStorage.getItem('tasks') === null) 
    {
        let tasks = [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));        
    }
    else
    {
        let tareas = JSON.parse(localStorage.getItem('tasks'));
        tareas.push(task);
        localStorage.setItem('tasks', JSON.stringify(tareas));
    }

    getTodo();
    document.getElementById('formTodo').reset();
    e.preventDefault();

}

function getTodo() 
{
    let toDo =  JSON.parse(localStorage.getItem('tasks'));
    let viewTask = document.getElementById('todo');

    viewTask.innerHTML = '';

    for (let i = 0; i < toDo.length; i++) 
    {
        let title = toDo[i].title;
        let description = toDo[i].description;
        
        viewTask.innerHTML += 
        `
            <div class="card mb-3">
                <div class="card-body">
                    <p class="mb-4">
                        <strong>Title: </strong>${title} <br>  
                        <strong>Description: </strong>${description} <br>
                    </p>
                    <a href="#" onclick="deleteTask('${title}')" class="btn btn-danger ml-5">Delete</a>
                </div>
            </div>
        `;
    }
}

function deleteTask(title) 
{
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    for (let i = 0; i < tasks.length; i++) 
    {
        if (tasks[i].title == title) 
        {
            tasks.splice(i, 1);
        }
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
    getTodo();
}


getTodo();