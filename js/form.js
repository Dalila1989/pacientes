var botonAdicionar = document.querySelector("#adicionar-paciente")
botonAdicionar.addEventListener("click",function(event){
    event.preventDefault();
    console.log("hizo click")

    var form = document.querySelector("#form-adicionar");
    
    var paciente = capturaDatosPaciente(form);

    

    var errores= validarPaciente(paciente);

    if(errores.length >0){
        mostrarMensajeErrores(errores);
         return;
    }

    
    agregarPacienteEnTabla(paciente);
    

    //borrar datos de los form-adicionar
    form.reset();
    var mensajeErrores = document.querySelector("#mensajes-errores")
    mensajeErrores.innerHTML="";


});

function agregarPacienteEnTabla(paciente){
    var pacienteTr = contruirTr(paciente);
    var tabla = document.querySelector("#tabla-pacientes");
    tabla.appendChild(pacienteTr);
}

function capturaDatosPaciente(form){

    var paciente ={
    nombre: form.nombre.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calcularIMC(form.peso.value,form.altura.value)
    }

    return  paciente;
}

function contruirTr(paciente){

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(construirTd(paciente.nombre,"info-nombre"));
    pacienteTr.appendChild(construirTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(construirTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(construirTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(construirTd(paciente.imc,"info-imc"));

    return pacienteTr;
}
function construirTd(dato,clase){

    var td= document.createElement("td");
    td.classList.add(clase);
    td.textContent = dato;

    return td;
}

function validarPaciente(paciente){

    var errores=[]
    if(paciente.nombre.length == 0){
        errores.push("el nombre es requerido")
    }

    if(paciente.peso.length == 0){
        errores.push("el peso es requerido")
    }

    if(paciente.altura.length == 0){
        errores.push("la altura es requerida")
    }
   if(!validarPeso(paciente.peso)){
        errores.push ("El peso es incorrecto");
    }
    if(!validarAltura(paciente.altura)){
        errores.push( "la altura es incorrecta");
    }
        return errores;
    }

function mostrarMensajeErrores(errores){
    var ul = document.querySelector("#mensajes-errores");
    ul.innerHTML="";
    errores.forEach( function (error){
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
     });
}
