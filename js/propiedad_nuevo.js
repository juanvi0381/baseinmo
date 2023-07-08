function guardar() {
    let tipo = document.getElementById("tipo").value
    let descrip_breve = document.getElementById("descrip_breve").value
    let descrip_larga = document.getElementById("descrip_larga").value
    let precio_alquiler = parseInt(document.getElementById("precio_alquiler").value)
    let precio_venta_pesos = parseInt(document.getElementById("precio_venta_pesos").value)
    let precio_venta_dolares = parseInt(document.getElementById("precio_venta_dolares").value)
    let domicilio = document.getElementById("domicilio").value
    let ciudad = document.getElementById("ciudad").value
    let departamento = document.getElementById("departamento").value
    let provincia = document.getElementById("provincia").value
    let expensas = parseInt(document.getElementById("expensas").value)
    
    let superficie_terreno = parseInt(document.getElementById("superficie_terreno").value)
    let superficie_total = parseInt(document.getElementById("superficie_total").value)
    let superficie_construida = parseInt(document.getElementById("superficie_construida").value)
    let superficie_propia = parseInt(document.getElementById("superficie_propia").value)
    let superficie_semicubierta = parseInt(document.getElementById("superficie_semicubierta").value)
    let orientacion = document.getElementById("orientacion").value
    let imagen = document.getElementById("imagen").value
    let categoria_catastral = document.getElementById("categoria_catastral").value
    let fos = parseInt(document.getElementById("fos").value)
    let fot = parseInt(document.getElementById("fot").value)
    
    let antiguedad = parseInt(document.getElementById("antiguedad").value)
    let conservacion = document.getElementById("conservacion").value
    let calidad_construc = document.getElementById("calidad_construc").value
    let dormitorios = parseInt(document.getElementById("dormitorios").value)
    let cocinas = parseInt(document.getElementById("cocinas").value)
    let banos = parseInt(document.getElementById("banos").value)
    let cocheras = parseInt(document.getElementById("cocheras").value)
    let jardin = parseInt(document.getElementById("jardin").value)
    let patio = parseInt(document.getElementById("patio").value)
    let gas = document.getElementById("gas").value
    let edet = document.getElementById("edet").value
    let sat = document.getElementById("sat").value
    let internet = document.getElementById("internet").value
    let telefono = document.getElementById("telefono").value
    let seguridad = document.getElementById("seguridad").value

    let titulo = document.getElementById("titulo").value
    let reglamento = document.getElementById("reglamento").value
    let plano = document.getElementById("plano").value
    let autorizacion = document.getElementById("autorizacion").value

    // {
    //     "imagen": "https://picsum.photos/200/300?grayscale",
    //     "nombre": "MICROONDAS",
    //     "precio": 50000,
    //     "stock": 10
    //   }

    let propiedad = {
        tipo: tipo,
        descrip_breve: descrip_breve,
        descrip_larga: descrip_larga,
        precio_alquiler: precio_alquiler,
        precio_venta_pesos: precio_venta_pesos,
        precio_venta_dolares: precio_venta_dolares,
        domicilio: domicilio,
        ciudad: ciudad,
        departamento: departamento,
        provincia: provincia,
        expensas: expensas,
    
        superficie_terreno: superficie_terreno,
        superficie_total: superficie_total,
        superficie_construida: superficie_construida,
        superficie_propia: superficie_propia,
        superficie_semicubierta: superficie_semicubierta,
        orientacion: orientacion,
        imagen: imagen,
        categoria_catastral: categoria_catastral,
        fos: fos,
        fot: fot,

        antiguedad: antiguedad,
        conservacion: conservacion,
        calidad_construc: calidad_construc,
        dormitorios: dormitorios,
        cocinas: cocinas,
        banos: banos,
        cocheras: cocheras,
        jardin: jardin,
        patio: patio,
        gas: gas,
        edet: edet,
        sat: sat,
        internet: internet,
        telefono: telefono,
        seguridad: seguridad,

        titulo: titulo,
        reglamento: reglamento,
        plano: plano,
        autorizacion: autorizacion,

    }
    let url = "https://juanvi.pythonanywhere.com/propiedades"
    var options = {
        body: JSON.stringify(propiedad),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Grabado")
            // Devuelve el href (URL) de la página actual
            window.location.href = "./propiedades.html";  
            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar" )
            console.error(err);
        })
}

