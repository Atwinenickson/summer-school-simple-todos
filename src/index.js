require("./styles.css");

const app = document.querySelector("#app");

app.innerHTML = "<h2></h2>";

const tasks = [
  {
    key: "value",
  },
];
const datefunc = function date() {
  return `${new Date().getMonth().toString()}: ${new Date().getDate().toString()}: ${new Date().getFullYear().toString()}`;
};

const tasksArray = [
  {
    name: "Peter",
    date: datefunc(),
    description: "Go to Russia",
    status: "Active",
  },
  {
    name: "Martin",
    date: datefunc(),
    description: "Go to USA",
    status: "Pending",
  },
  {
    name: "Steve",
    date: datefunc(),
    description: "Show her some love",
    status: "Very Active",
  },
  {
    name: "Peter",
    date: datefunc(),
    description: "Go to Russia",
    status: "Active",
  },
  {
    name: "Peter",
    date: datefunc(),
    description: "Go to Russia",
    status: "Active",
  },
  {
    name: "Quttos",
    date: datefunc(),
    description: "Go to Russia",
    status: "Active",
  },
  {
    name: "Kevin",
    date: datefunc(),
    description: "Go to Russia",
    status: "Active",
  },
  {
    name: "DeBruyne",
    date: datefunc(),
    description: "Go to Russia",
    status: "Active",
  },
];

for (let i = 0; i < tasksArray.length; i += 1) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  const baby = document.createTextNode(`NAME: ${tasksArray[i].name}       DATE: ${tasksArray[i].date}        DESCRIPTION: ${tasksArray[i].description}       STATUS: ${tasksArray[i].status}`);
  a.appendChild(baby);
  li.appendChild(a);
  document.getElementById("myUL").appendChild(li);
}

document.getElementById("button").addEventListener("click", () => {
  const taskValue = document.getElementById("task").nodeValue;
  const timeValue = document.getElementById("time").nodeValue.toString;
  const dateValue = document.getElementById("date").nodeValue.toString;
  const desValue = document.getElementById("des").nodeValue;

  const task = {
    name: taskValue,
    time: timeValue,
    date: dateValue,
    description: desValue,
  };

  list = document.createElement("li");
  text = document.createTextNode();
});


// var date = new Date();
// var task1 = new task("Peter", date, "My Description", "Active");

tasks.push("key1", task1);
li = document.createElement("li");
baby = document.createTextNode(task1.name + task1.description + task1.status);
li.appendChild(baby);
document.getElementById("myUL").appendChild(li);

document.getElementById("nick").style.color = "red";
const n = new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = `${m}/${d}/${y}`;
