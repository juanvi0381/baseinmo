//RECIBE ->
// id=1&nombre=MICROONDAS&precio=50000&stock=10&imagen=https://picsum.photos/200/300?grayscale

console.log(location.search)     // lee los argumentos pasados a este formulario
var args = location.search.substr(1).split('&');  
//separa el string por los “&” creando una lista
// [“id=3” , “nombre=’tv50’” , ”precio=1200”,”stock=20”]
console.log(args)

var parts = []
for (let i = 0; i < args.length; ++i) {
    parts[i] = args[i].split('=');
}
console.log(parts)

//// [[“id",3] , [“nombre",’tv50’]]
//decodeUriComponent elimina los caracteres especiales que recibe en la URL 
document.getElementById("id").value = decodeURIComponent(parts[0][1])
document.getElementById("tipo").value = decodeURIComponent(parts[1][1])
document.getElementById("descrip_breve").value = decodeURIComponent(parts[2][1])
document.getElementById("descrip_larga").value =decodeURIComponent( parts[3][1])
document.getElementById("precio_alquiler").value =decodeURIComponent( parts[4][1])
document.getElementById("precio_venta_pesos").value = decodeURIComponent(parts[5][1])
document.getElementById("precio_venta_dolares").value = decodeURIComponent(parts[6][1])
document.getElementById("domicilio").value = decodeURIComponent(parts[7][1])
document.getElementById("ciudad").value =decodeURIComponent( parts[8][1])
document.getElementById("departamento").value =decodeURIComponent( parts[9][1])
document.getElementById("provincia").value = decodeURIComponent(parts[10][1])
document.getElementById("expensas").value = decodeURIComponent(parts[11][1])

document.getElementById("superficie_terreno").value = decodeURIComponent(parts[12][1])
document.getElementById("superficie_total").value =decodeURIComponent( parts[13][1])
document.getElementById("superficie_construida").value =decodeURIComponent( parts[14][1])
document.getElementById("superficie_propia").value = decodeURIComponent(parts[15][1])
document.getElementById("superficie_semicubierta").value = decodeURIComponent(parts[16][1])
document.getElementById("orientacion").value = decodeURIComponent(parts[17][1])
document.getElementById("imagen").value =decodeURIComponent( parts[18][1])
document.getElementById("categoria_catastral").value =decodeURIComponent( parts[19][1])
document.getElementById("fos").value = decodeURIComponent(parts[20][1])
document.getElementById("fot").value =decodeURIComponent( parts[21][1])

document.getElementById("antiguedad").value =decodeURIComponent( parts[22][1])
document.getElementById("conservacion").value = decodeURIComponent(parts[23][1])
document.getElementById("calidad_construc").value = decodeURIComponent(parts[24][1])
document.getElementById("dormitorios").value = decodeURIComponent(parts[25][1])
document.getElementById("cocinas").value =decodeURIComponent( parts[26][1])
document.getElementById("banos").value =decodeURIComponent( parts[27][1])
document.getElementById("cocheras").value =decodeURIComponent( parts[28][1])
document.getElementById("jardin").value = decodeURIComponent(parts[29][1])
document.getElementById("patio").value = decodeURIComponent(parts[30][1])
document.getElementById("gas").value = decodeURIComponent(parts[31][1])
document.getElementById("edet").value =decodeURIComponent( parts[32][1])
document.getElementById("sat").value =decodeURIComponent( parts[33][1])
document.getElementById("internet").value = decodeURIComponent(parts[34][1])
document.getElementById("telefono").value = decodeURIComponent(parts[35][1])
document.getElementById("seguridad").value = decodeURIComponent(parts[36][1])

document.getElementById("titulo").value =decodeURIComponent( parts[37][1])
document.getElementById("reglamento").value =decodeURIComponent( parts[38][1])
document.getElementById("plano").value =decodeURIComponent( parts[39][1])
document.getElementById("autorizacion").value =decodeURIComponent( parts[40][1])


function modificar() {
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
    let url = "https://juanvi.pythonanywhere.com/propiedades/"+id
    var options = {
        body: JSON.stringify(propiedad),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("modificado")
            alert("Registro modificado")
            window.location.href = "./propiedades.html";  
        //NUEVO,  si les da error el fetch  comentar esta linea que puede dar error  
        })
        .catch(err => {
            //this.errored = true
            console.error(err);
            alert("Error al Modificar")
        })      
}
