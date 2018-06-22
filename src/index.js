 require ('./styles.css');

const app = document.querySelector('#app');

app.innerHTML = '<h2>Welcome to summer-school-simple-todos</h2>';

function time(h, m) {
  const hours = new Date().getHours() + h;
  const minutes = new Date().getMinutes() + m;
  return `${hours.toString()}:${minutes.toString()}`;
}

const tasks = [
  {
    name: 'Play Fifa',
    description: 'Have to kill Alaka',
    state: ' active ',
    time: time(3, 1),
  },
  {
    name: 'go to doctor',
    description: 'Malaria',
    state: 'very active',
    time: (2, 2),
  },
  {
    name: 'call my boss',
    description: 'wotk schedule',
    state: 'very active',
    time: time(1, 2),
  },
];


function addArray() {
  for (let i = 0; i < tasks.length; i += 1) {
    const list = document.createElement('li');
    const t = document.createTextNode(`${tasks[i].name} ${tasks[i].description} ${tasks[i].state} ${tasks[i].time}`);
    list.appendChild(t);
    document.getElementById('myUL').appendChild(list);
  }
}
addArray();
function addTask() {
  const name = document.getElementById('task').value;
  const description = document.getElementById('des').value;
  const timee = document.getElementById('time').value;
  const state = document.getElementById('state').value;

  const b = {
    name,
    description,
    state,
    time: timee,
  };
  tasks.push(b);
}

addArray();
addTask();

function clear() {
  tasks.length = 0;
}
document.getElementById('clear').addEventListener('click', clear);
document.getElementById('addtask').addEventListener('click', () => { window.location.href = 'addtask.html'; });
document.getElementById('button').addEventListener('click', () => { document.getElementById('myForm').reset(); });
document.getElementById('button1').addEventListener('click', addTask);

