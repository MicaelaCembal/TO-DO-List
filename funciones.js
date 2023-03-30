
var tareas = [];
var contador = 1;

function agregarTarea() {
    let nombreTarea = document.querySelector('#tarea').value;
    document.querySelector('#tarea').value = "";
    
    let obj = {
        id:contador,
        nombre:nombreTarea,
        realizo_tarea:false,
        fechaRealizo:null,
        creacion: Date.now()
    }

    tareas.push(obj);
    contador++;
  
    mostrarTareas();
}

function mostrarTareas() {    
    var elemento = document.querySelector("#contenedor");
    elemento.innerHTML = "";
    tareas.map((tarea) => {
        let claseaplicada="tareasletra ";
        let checked = "";

        const { id, nombre, creacion, realizo_tarea, fechaRealizo } = tarea;
        console.log(realizo_tarea);
        
        if(realizo_tarea == true){
            claseaplicada = claseaplicada+ " tachado";
            checked = "checked";
        }

        elemento.innerHTML += `              
            <li>
            <input type="checkbox" onclick= "tachado(${id}, ${fechaRealizo})"  ${checked} /> <label class="${claseaplicada}" id=$(nombre)>${nombre}  </label>  <button  class="eliminar" onclick="eliminarTarea(${id})"> X </button></li>  
                          
          `; 
          
    })

}


function tachado(id, fechaRealizo) {
    for (var i = 0; i < tareas.length; i++) {        
        if (tareas[i].id==id) {
            tareas[i].realizo_tarea = !tareas[i].realizo_tarea;
            tareas[i].fechaRealizo= Date.now();
        }        
    }
    mostrarTareas();
}


function cambiarestado(tachado) {
    tachado = texto.strike();
}

function eliminarTarea(id){
    console.log(id);
   tareas= tareas.filter(
        (tarea) => tarea.id != id 
      );
    
      mostrarTareas();
}
function tareaMasRapida(){
    
    let rapido=999999999999999;
    let nombreRapido="";
    var elemento2 = document.querySelector("#masRapido");
    elemento2.innerHTML = "";
    tareas.map((tarea) => {
       

        const { id, nombre, creacion, realizo_tarea, fechaRealizo } = tarea;

       

        if(fechaRealizo != null){
           
            if (( fechaRealizo - creacion )<rapido ){
               
                rapido=fechaRealizo - creacion;
               nombreRapido= nombre;
             
                }
            
            }
             
        })
        elemento2.innerHTML += `              
        
        <p class="MasRapidatexto" >La tarea más rapida fue:  ${nombreRapido}  </p>
                      
      `;
    }
      
