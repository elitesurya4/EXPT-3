const accordion = document.querySelectorAll(".accordion");

accordion.forEach((element) => {
	element.addEventListener("click", () => {
		element.classList.toggle("active");
		let panel = element.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
});


//modal box

$(document).on("click","#cust_btn",function(){
  
	$("#myModal").modal("toggle");
	
  })
 
  $(document).on("click","#cust_btn1",function(){
   
	$("#myModal1").modal("toggle");
	
  })