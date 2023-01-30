
document.getElementById('cont').addEventListener ('click',function(){

    let nyp = document.getElementById("nombre-apellido").innerHTML;
    let ctto = document.getElementById("contacto").innerHTML;
    let resultado = sumar(nyp, ctto);
  
   document.getElementById ('Resultado').innerHTML= resultado;
   document.getElementById ('contenedor').style.display = 'block';
});

function sumar(a,b){
    return a + " | "+ b;
}