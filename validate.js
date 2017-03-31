
var btnSubmit = document.getElementById("btnSubmit");

btnSubmit.addEventListener("click", btnSubmit_onClick);

function btnSubmit_onClick(e){
  e.preventDefault();
  e.stopPropagation();
  ///realizar las validaciones
  var validated= true;
  var emailRegEx =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var emailInput = document.getElementById("txtEmail").value;
  if(!emailRegEx.test(emailInput)){
    validated = false;
    alert("Correo electrónico no tiene el formato adecuado");
  }
  var isNumericRegEx = /^\d+$/;
  var edadInput = document.getElementById("txtEdad").value;
  if(!isNumericRegEx.test(edadInput)){
    validated = false;
    alert("Edad no Es Valida");
  }

  if(validated){
    document.forms[0].submit();
  }
}
