//The Javascript part of the app goes here





var add = document.getElementById("plus");
var taskCount = document.querySelector(".tasks-count").children[0].innerHTML;
var compCount = document.querySelector(".tasks-completed").children[0].innerHTML;	
	

	 add.addEventListener("click", function(){
 		
		var input = document.getElementById("tes").value;
		if(input == ""){
			alert("Please do a task!")
		}else{
		var ul = document.getElementById("ol");
		var li = document.createElement("li");
		var del = document.createElement("span");
		var comp = document.createElement("span");
			     
		    
		    del.classList.add("delete");
			del.innerHTML="X";

			comp.classList.add("complete");
			comp.innerHTML="Completed";

			li.innerHTML = input ;
			li.appendChild(comp); 
		    li.appendChild(del); 
		    ul.appendChild(li);
		    document.getElementById("tes").value= "";
	 		 document.querySelector(".tasks-count").children[0].innerHTML = ++taskCount;
	 		}


	 		del.addEventListener("click", function(){
	 			var confir = confirm("Want to delete this task?")
	 			if(confir){
	 			ul.removeChild(li);
	 			 document.querySelector(".tasks-count").children[0].innerHTML = --taskCount;
	 				}
	 		});

	 		comp.addEventListener("click", function(){
	 			li.removeChild(comp);
	 			 document.querySelector(".tasks-completed").children[0].innerHTML = ++compCount
	 		})

	 });

