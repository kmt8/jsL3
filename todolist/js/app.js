// UI
const formel = document.getElementById('form');
const inputel = document.getElementById('input');
const todosul = document.getElementById('todos');


// Event Listener
formel.addEventListener('submit',(e)=>{
    // console.log('hay');

    addtodo();

    e.preventDefault();
});

// Add todo
function addtodo(todo){
    // console.log('i am working');

    let todotext = inputel.value;
    // console.log(todotext);

    if(todo){
        // console.log(todo);
        todotext = todo.text;
    }

    if(todotext){
        const li = document.createElement('li');

        if(todo && todo.complete){
            // add class
            li.classList.add('completed');
        }

        li.appendChild(document.createTextNode(todotext));
        // console.log(li);
        todosul.appendChild(li);
        inputel.value = '';

        updatelocalstorage();


        // Event Listener
        // add line-through by left click
        li.addEventListener('click',()=>{
            li.classList.toggle('completed');

            updatelocalstorage();
        });

        // remove by right click
        li.addEventListener('contextmenu',(e)=>{
            // console.log('i am working');
            li.remove();

            updatelocalstorage();

            e.preventDefault();
        });
    }else{
        window.alert('Enter your todo');
    }
}

// local storage
function updatelocalstorage(){
    // console.log('storage is ready');

    let todolis = document.querySelectorAll('li');
    // console.log(todolis);

    let todos = [];

    todolis.forEach(todoli=>{
        // console.log(todoli);
        // console.log(todoli.innerText);

        todos.push({
            text: todoli.innerText,
            complete: todoli.classList.contains('completed')
        });
    });

    // console.log(todos);
                        // key
    localStorage.setItem('todos',JSON.stringify(todos));
}


// Show on UI get from local storage
                                            // key
const todos = JSON.parse(localStorage.getItem("todos"));
// console.log(todos);
// console.log(typeof todos);
if(todos){
    todos.forEach(todo=> addtodo(todo)); // Show todo (if todo in local storage)
}