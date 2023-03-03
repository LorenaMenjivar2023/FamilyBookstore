
function validar() {
    const nombre = document.getElementById("usuario").value;
    const contrasena = document.getElementById("contraseña").value;
    
    if (nombre === "") {
      alert("el campo usuario es obligatorio")
      return false;
    }
    else if(contrasena === ""){
      alert("El campo contraseña es obligatorio")
    }
  
    else{
      alert("Todo esta completo")
    }
  }
  