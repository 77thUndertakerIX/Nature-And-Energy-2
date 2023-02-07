function openNav() {
  document.getElementById("side-bar").style.width = "45%";
  document.getElementById("MOption").style.width = "0%";

}

function closeNav() {
    document.getElementById("side-bar").style.width = "0%";
    document.getElementById("MOption").style.width = "100%";
    
  }
function OpMorebtn(){
    document.getElementById("MOption").style.width = "100%";
    //document.getElementById("MOption").style.display = "flex";
    
  }
  function closeMorebtn(){
    document.getElementById("MOption").style.width = "0%";
    //document.getElementById("MOption").style.display = "none";
  }