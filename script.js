//Evento que recibirá la información del formulario cuando se active el evento submit cuando se presione el botón
document.getElementById('formulario').addEventListener('submit', function(event) {
    // Prevenie el evento por defecto del formulario de redireccionar
    event.preventDefault();
    // Obtenemos la información del formulario de cada input con su id
    const nombre = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;
    const mensaje = document.getElementById('userMessage').value;
    //Comprobar que se haya recibido la información
    if(nombre!=""&&email!=""&&mensaje!="")
    {
        //En caso de si recibir información, se muestra la alerta de envío exitoso
        alert(nombre+" su mensaje ha sido enviado exitosamente");
        document.getElementById('userName').value="";
        document.getElementById('userEmail').value="";
        document.getElementById('userMessage').value="";
    }
    else 
    {
        //En caso de que por error se reciba información en blanco, se solicita llenar los campos
        //Probablemente este error no ocurra porque se aplico required a todos los input del formulario
        alert("Llene los campos");
    }
});