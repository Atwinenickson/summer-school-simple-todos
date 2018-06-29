// export let list: HTMLElement;
// export let link: HTMLElement;

export interface Task {
    name: string;
    desc: string;
    state: string;
}

let link: HTMLElement;
let list: HTMLElement;
let nameElement: HTMLInputElement;
let descElement: HTMLInputElement;
let stateElement: HTMLInputElement;
// tslint:disable-next-line:prefer-const

export function time() {
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();

    return `${hours.toString()}:${minutes.toString()}`;
}

// function to add create Task and add it to an Array
export function addTask(event: Event) {
    event.preventDefault();
    nameElement = document.getElementById("task") as HTMLInputElement | null;
    descElement = document.getElementById("des") as HTMLInputElement | null;
    stateElement = document.getElementById("state") as HTMLInputElement | null;

    let name;
    let desc;
    let state;

    if (nameElement && descElement && stateElement) { // check if elements arent null
        name = nameElement.value.trim();
        desc = descElement.value.trim();
        state = stateElement.value.trim();

        if (!name) {
            window.alert("You must enter a value in the New Task field.");
        } else if (!desc) {
            window.alert("You must enter a value in the description field.");
        } else if (!state) {
            window.alert("You must enter a value in the state field.");
        } else {
            list = document.createElement("li");
            // list.appendChild(document.createElement("button").addEventListener("click", editing));
            link = document.createElement("a");
            const deleteButton = document.createElement("button");
            list.appendChild(deleteButton);
            deleteButton.addEventListener("click", () => {
            const deleteParent = deleteButton.parentElement;
            if (deleteParent) {
                    deleteParent.remove();
                }
            });
            const UL = document.getElementById("myUL");
            // tslint:disable-next-line:prefer-for-of
            link.appendChild(document.createTextNode(`${name}: ${desc}: ${state}`));
            list.appendChild(link);
            if (UL) {
                UL.appendChild(list);
            }
        }

    }
}

// var editing=function(){
//     console.log("Edit Task...");
//     console.log("Change 'edit' to 'save'");

//     var listItem=this.parentNode;

//     var editInput=listItem.querySelector('input[type=text]');
//     var label=listItem.querySelector("label");
//     var containsClass=listItem.classList.contains("editMode");
//             //If class of the parent is .editmode
//             if(containsClass){

//             //switch to .editmode
//             //label becomes the inputs value.
//                 label.innerText=editInput.value;
//             }else{
//                 editInput.value=label.innerText;
//             }

//             //toggle .editmode on the parent.
//             listItem.classList.toggle("editMode");
//     }
