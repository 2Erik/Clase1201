function saludar(){
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido");
    console.log(nombre+" "+apellido);
}

function sumar(){
  
   let num1=recuperarEntero("txtApellido");
   let num2=recuperarEntero("txtNombre");
   let suma=num1+num2;
   alert(suma);
}