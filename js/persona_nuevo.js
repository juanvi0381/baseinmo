function guardar() {
    let nombre = document.getElementById("nombre").value
    let domicilio = document.getElementById("domicilio").value
    let ciudad = document.getElementById("ciudad").value
    let departamento = document.getElementById("departamento").value
    let provincia = document.getElementById("provincia").value
    let actividad = document.getElementById("actividad").value
    let dni = document.getElementById("dni").value
    let cuil = document.getElementById("cuil").value
    let celular = document.getElementById("celular").value
    let email = document.getElementById("email").value
    let foto = document.getElementById("foto").value
    // {
    //     "imagen": "https://picsum.photos/200/300?grayscale",
    //     "nombre": "MICROONDAS",
    //     "precio": 50000,
    //     "stock": 10
    //   }

    let persona = {
        nombre: nombre,
        domicilio: domicilio,
        ciudad: ciudad,
        departamento: departamento,
        provincia: provincia,
        actividad: actividad,
        dni: dni,
        cuil: cuil,
        celular: celular,
        email: email,
        foto: foto
    }
    let url = "https://juanvi.pythonanywhere.com/personas"
    var options = {
        body: JSON.stringify(persona),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Grabado")
            // Devuelve el href (URL) de la página actual
            window.location.href = "./personas.html";  
            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar" )
            console.error(err);
        })
}

