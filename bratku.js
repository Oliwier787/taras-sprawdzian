for (let i = 0; i < 400; i++) {
  var rest = document.createElement('div');
  rest.className = "rest";
  rest.onclick = function(){
    this.style.backgroundColor = "red"
  }
  document.getElementById('pierwszy').appendChild(rest)
}
function innykolor () {
    if(document.getElementById("rest").style.backgroundColor =="blue"){
        document.getElementById("rest").style.backgroundColor ="green";
  
      }else{
        document.getElementById("rest").style.backgroundColor ="blue"
      }
    }
    
