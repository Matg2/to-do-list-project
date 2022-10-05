window.addEventListener('load',()=>{
let form = document.getElementById("new-task");
let input= document.getElementById("new-task-input");
let list_el= document.getElementById("tasks");



form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const task = input.value;

    if(!task){
        alert("please add a task")
        return;
    } 

    const task_el=document.createElement("div");
    task_el.classList.add("to-do");

    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");
    

    task_el.appendChild(task_content_el);

    const task_input_el=document.createElement("input");
    task_input_el.classList.add("text");
    task_input_el.type="text";
    task_input_el.value= task;
    task_input_el.setAttribute("readonly","readonly");

    task_content_el.appendChild(task_input_el);

    const task_actions_el=document.createElement("div");
    task_actions_el.classList.add("actions");

/*Adding Everything but button  fixed make sure what needs to cap is cap*/
    const task_edit_el=document.createElement("button");
    task_edit_el.classList.add("edit");
    task_edit_el.innerHTML="Edit";

     task_actions_el.appendChild(task_edit_el);

     task_el.appendChild(task_actions_el);

      list_el.appendChild(task_el);

    input.value="";

task_edit_el.addEventListener('click',()=>{
    if(task_edit_el.innerText.toLowerCase()=="edit")
    {
        task_input_el.removeAttribute("readonly");
        task_input_el.focus();
        task_edit_el.innerText="Save";

    } else{
       task_input_el.setAttribute("readonly","readonly");
       task_edit_el.innerText="Edit";
    }

});
task_content_el.addEventListener('click', function () {
    this.style.textDecoration = "line-through"})

    task_content_el.addEventListener('dblclick', function () {
      tasks.removeChild(task_el);})

})
})