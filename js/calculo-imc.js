
var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

for(var i=0;i<pacientes.length;i++){
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido = validarPeso(peso);
    var alturaValido = validarAltura(altura);

    if(!pesoValido){
    
        console.log("peso incorrecto");
        tdImc.textContent = ("peso incorrecto");
        pesoValido = false;
        paciente.classList.add("paciente-incorrecto");
    }

    if(!alturaValido){
    
        console.log("Alturta incorrecto");
        tdImc.textContent =("Altura incorrecta");
        alturaValido = false;
        paciente.classList.add("paciente-incorrecto");
    }

    if(alturaValido && pesoValido){
        tdImc.textContent = calcularIMC(peso,altura);
    }
}

  function calcularIMC(peso,altura){
    var imc = peso/(altura*altura);
    return imc.toFixed(2);
  }
  
  function validarPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;}
    else{ 
         return false;}
        
    }

  function validarAltura(altura){
    if(altura >= 0 && altura < 3){
        return true;}
    else{
        return false;
    }
    }
