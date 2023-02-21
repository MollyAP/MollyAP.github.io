function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("yes");
   
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){ 
      let hornform =  document.getElementById("hornform")
      hornform.innerHTML += "<br>Explain ur horn thing <input type=\"text\">"
    }
  }