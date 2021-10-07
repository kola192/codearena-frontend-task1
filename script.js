//Grap Elements 
let add = document.getElementById("plus");
let tasksCount = document.querySelector(".tasks-count span");  
let compCount = document.querySelector(".tasks-completed");	
let input = document.getElementById("input");
let tasksContainer = document.querySelector('.tasks-content');
let tasksCompleted = document.querySelector('.tasks-completed span');

//Focus on input field
window.onload = function() {
	input.focus();
}

//Handle Adding Task 
add.addEventListener("click", function(){

	
	if(input.value == ""){
		alert("Please add a task first!")
	} else {

		let noTasksMsg = document.querySelector('.no-task-message');

		if (document.body.contains(document.querySelector('.no-task-message'))) {

			noTasksMsg.remove();

		}

		let taskSpan = document.createElement('span');
		let comp = document.createElement("span");
		let del = document.createElement("span");
				
		taskSpan.classList.add('task-box');
		
		comp.classList.add("complete");
		comp.style.color="white";
		comp.innerText="Done";
		
		del.classList.add("delete");
		del.style.color="white";
		del.innerText="X";

		taskSpan.innerText = input.value ;
		taskSpan.appendChild(del); 
		taskSpan.appendChild(comp); 
		tasksContainer.prepend(taskSpan);
		input.value= "";
		input.focus();
		calcTasks();
	}


});

document.addEventListener('click', function(e) {

	if (e.target.className === 'delete') {

		e.target.parentNode.remove();

		if (tasksContainer.childElementCount == 0) {

			createNoTasks();

		}

	}

	if (e.target.classList.contains('complete')) {

		e.target.parentNode.classList.toggle('finished');

	}

	calcTasks();

});


//No task message creation function
function createNoTasks() {

	let msgSpan = document.createElement('span'),

	msgText = document.createTextNode('No Task To Do');

	msgSpan.appendChild(msgText);
	
	msgSpan.className = 'no-task-message';

	tasksContainer.appendChild(msgSpan);	

}

//Calculate tasks function
function calcTasks() {

	tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;

	tasksCompleted.innerHTML = document.querySelectorAll('.tasks-content .finished').length;

}

// Use Enter key to submit task
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();

    add.click();
  } 
});


