// Lee los argumentos pasados a este formulario
console.log(location.search);
var args = location.search.substr(1).split('&');
console.log(args);

var params = {};
for (let i = 0; i < args.length; ++i) {
  let param = args[i].split('=');
  params[param[0]] = decodeURIComponent(param[1]);
}
console.log(params);

// Asigna los valores a los campos del formulario
document.getElementById("id").value = params.id;
document.getElementById("tipo").value = params.tipo;
document.getElementById("descrip_breve").value = params.descrip_breve;
document.getElementById("descrip_larga").value = params.descrip_larga;
document.getElementById("precio_alquiler").value = params.precio_alquiler;
document.getElementById("precio_venta_pesos").value = params.precio_venta_pesos;
document.getElementById("precio_venta_dolares").value = params.precio_venta_dolares;
document.getElementById("domicilio").value = params.domicilio;
document.getElementById("ciudad").value = params.ciudad;
document.getElementById("departamento").value = params.departamento;
document.getElementById("provincia").value = params.provincia;
document.getElementById("expensas").value = params.expensas;

document.getElementById("superficie_terreno").value = params.superficie_terreno;
document.getElementById("superficie_total").value = params.superficie_total;
document.getElementById("superficie_construida").value = params.superficie_construida;
document.getElementById("superficie_propia").value = params.superficie_propia;
document.getElementById("superficie_semicubierta").value = params.superficie_semicubierta;
document.getElementById("orientacion").value = params.orientacion;
document.getElementById("imagen").value = params.imagen;
document.getElementById("categoria_catastral").value = params.categoria_catastral;
document.getElementById("fos").value = params.fos;
document.getElementById("fot").value = params.fot;

document.getElementById("antiguedad").value = params.antiguedad;
document.getElementById("conservacion").value = params.conservacion;
document.getElementById("calidad_construc").value = params.calidad_construc;
document.getElementById("dormitorios").value = params.dormitorios;
document.getElementById("cocinas").value = params.cocinas;
document.getElementById("banos").value = params.banos;
document.getElementById("cocheras").value = params.cocheras;
document.getElementById("jardin").value = params.jardin;
document.getElementById("patio").value = params.patio;
document.getElementById("gas").value = params.gas;
document.getElementById("edet").value = params.edet;
document.getElementById("sat").value = params.sat;
document.getElementById("internet").value = params.internet;
document.getElementById("telefono").value = params.telefono;
document.getElementById("seguridad").value = params.seguridad;

document.getElementById("titulo").value = params.titulo;
document.getElementById("reglamento").value = params.reglamento;
document.getElementById("plano").value = params.plano;
document.getElementById("autorizacion").value = params.autorizacion;

function modificar() {
  // Obtén los valores actualizados de los campos
  let tipo = document.getElementById("tipo").value;
  let descrip_breve = document.getElementById("descrip_breve").value;
  let descrip_larga = document.getElementById("descrip_larga").value;
  let precio_alquiler = parseInt(document.getElementById("precio_alquiler").value);
  let precio_venta_pesos = parseInt(document.getElementById("precio_venta_pesos").value);
  let precio_venta_dolares = parseInt(document.getElementById("precio_venta_dolares").value);
  let domicilio = document.getElementById("domicilio").value;
  let ciudad = document.getElementById("ciudad").value;
  let departamento = document.getElementById("departamento").value;
  let provincia = document.getElementById("provincia").value;
  let expensas = parseInt(document.getElementById("expensas").value);

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

  // Crea el objeto propiedad con los valores actualizados
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

  };

  // Realiza la llamada PUT para actualizar la propiedad en el servidor
  let url = "https://juanvi.pythonanywhere.com/propiedades/" + params.id;
  var options = {
    body: JSON.stringify(propiedad),
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    redirect: 'follow'
  };

  fetch(url, options)
    .then(function(response) {
      if (response.ok) {
        console.log("Registro modificado");
        alert("Registro modificado");
        window.location.href = "./propiedades.html";
      } else {
        throw new Error("Error al modificar");
      }
    })
    .catch(function(error) {
      console.error(error);
      alert("Error al modificar");
    });
}