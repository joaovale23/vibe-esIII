const form = document.querySelector('.todo-form');
const input = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
 
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const taskText = input.value.trim();
  if (taskText !== '') {
    addTask(taskText);
    input.value = '';
  }
});
 
function addTask(text) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = text;
 
  const actions = document.createElement('div');
  actions.classList.add('actions');
 
  const doneBtn = document.createElement('button');
  doneBtn.innerHTML = '✔';
  doneBtn.title = 'Concluir';
  doneBtn.addEventListener('click', () => {
    li.classList.toggle('done');
  });
 
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '✖';
  deleteBtn.title = 'Excluir';
  deleteBtn.addEventListener('click', () => {
    taskList.removeChild(li);
  });
 
  actions.appendChild(doneBtn);
  actions.appendChild(deleteBtn);
  li.appendChild(span);
  li.appendChild(actions);
  taskList.appendChild(li);
}