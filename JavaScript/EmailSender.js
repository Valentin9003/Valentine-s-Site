let btn = document.getElementById("btnSend").addEventListener("click", function(event){
  let message = $("#message").val();
let name =  $("#name").val();
let email =  $("#mail").val();
let emailValidade = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")

  event.preventDefault();
  if(emailValidade.exec(email) !== null && message !== null){
let pattern = `mailto:${email}?subject=${name}&body=${message}`;
 $("#message").val("");
 $("#name").val("");
 $("#mail").val("");
    window.open(pattern);
  }});