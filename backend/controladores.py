from flask import Flask ,jsonify ,request
from app import app,ma
from modelos import *

class ProductoSchema(ma.Schema):
    class Meta:
        fields=('id','nombre','precio','stock','imagen')

producto_schema=ProductoSchema()            # El objeto producto_schema es para traer un producto
productos_schema=ProductoSchema(many=True)  # El objeto productos_schema es para traer multiples registros de producto

class PersonaSchema(ma.Schema):
    class Meta:
        fields=('id','nombre','domicilio','ciudad','departamento','provincia','actividad','dni','cuil','celular','email','foto')

persona_schema=PersonaSchema()            # El objeto persona_schema es para traer un persona
personas_schema=PersonaSchema(many=True)  # El objeto personas_schema es para traer multiples registros de persona

class PropiedadSchema(ma.Schema):
    class Meta:
        fields=('id','tipo','descrip_breve','descrip_larga','precio_alquiler','precio_venta_pesos','precio_venta_dolares','domicilio','ciudad','departamento','provincia','expensas','superficie_terreno','superficie_total','superficie_construida','superficie_propia','superficie_semicubierta','orientacion','imagen','categoria_catastral','fos','fot','antiguedad','conservacion','calidad_construc','dormitorios','cocinas','banos','cocheras','jardin','patio','gas','edet','sat','internet','telefono','seguridad','titulo','reglamento','plano','autorizacion')

propiedad_schema=PropiedadSchema()            # El objeto propiedad_schema es para traer un producto
propiedades_schema=PropiedadSchema(many=True)  # El objeto propiedades_schema es para traer multiples registros de producto


# crea los endpoint o rutas (json)
@app.route('/')
def inicio():
    return 'Bienvenidos'

# rutas de productos

@app.route('/productos',methods=['GET'])
def get_Productos():
    all_productos=Producto.query.all()         # el metodo query.all() lo hereda de db.Model
    result=productos_schema.dump(all_productos)  # el metodo dump() lo hereda de ma.schema y
                                                 # trae todos los registros de la tabla
    return jsonify(result)                       # retorna un JSON de todos los registros de la tabla

@app.route('/productos/<id>',methods=['GET'])
def get_producto(id):
    producto=Producto.query.get(id)
    return producto_schema.jsonify(producto)   # retorna el JSON de un producto recibido como parametro

@app.route('/productos/<id>',methods=['DELETE'])
def delete_producto(id):
    producto=Producto.query.get(id)
    db.session.delete(producto)
    db.session.commit()
    return producto_schema.jsonify(producto)   # me devuelve un json con el registro eliminado

@app.route('/productos', methods=['POST']) # crea ruta o endpoint
def create_producto():
    #print(request.json)  # request.json contiene el json que envio el cliente
    nombre=request.json['nombre']
    precio=request.json['precio']
    stock=request.json['stock']
    imagen=request.json['imagen']
    new_producto=Producto(nombre,precio,stock,imagen)
    db.session.add(new_producto)
    db.session.commit()
    return producto_schema.jsonify(new_producto)

@app.route('/productos/<id>' ,methods=['PUT'])
def update_producto(id):
    producto=Producto.query.get(id)

    nombre=request.json['nombre']
    precio=request.json['precio']
    stock=request.json['stock']
    imagen=request.json['imagen']

    producto.nombre=nombre
    producto.precio=precio
    producto.stock=stock
    producto.imagen=imagen

    db.session.commit()
    return producto_schema.jsonify(producto)

# rutas de personas

@app.route('/personas',methods=['GET'])
def get_Personas():
    all_personas=Persona.query.all()         # el metodo query.all() lo hereda de db.Model
    result=personas_schema.dump(all_personas)  # el metodo dump() lo hereda de ma.schema y
                                                 # trae todos los registros de la tabla
    return jsonify(result)                       # retorna un JSON de todos los registros de la tabla

@app.route('/personas/<id>',methods=['GET'])
def get_persona(id):
    persona=Persona.query.get(id)
    return persona_schema.jsonify(persona)   # retorna el JSON de un producto recibido como parametro

@app.route('/personas/<id>',methods=['DELETE'])
def delete_persona(id):
    persona=Persona.query.get(id)
    db.session.delete(persona)
    db.session.commit()
    return persona_schema.jsonify(persona)   # me devuelve un json con el registro eliminado

@app.route('/personas', methods=['POST']) # crea ruta o endpoint
def create_persona():
    #print(request.json)  # request.json contiene el json que envio el cliente
    nombre=request.json['nombre']
    domicilio=request.json['domicilio']
    ciudad=request.json['ciudad']
    departamento=request.json['departamento']
    provincia=request.json['provincia']
    actividad=request.json['actividad']
    dni=request.json['dni']
    cuil=request.json['cuil']
    celular=request.json['celular']
    email=request.json['email']
    foto=request.json['foto']
    new_persona=Persona(nombre,domicilio,ciudad,departamento,provincia,actividad,dni,cuil,celular,email,foto)
    db.session.add(new_persona)
    db.session.commit()
    return persona_schema.jsonify(new_persona)

@app.route('/personas/<id>' ,methods=['PUT'])
def update_persona(id):
    persona=Persona.query.get(id)

    nombre=request.json['nombre']
    domicilio=request.json['domicilio']
    ciudad=request.json['ciudad']
    departamento=request.json['departamento']
    provincia=request.json['provincia']
    actividad=request.json['actividad']
    dni=request.json['dni']
    cuil=request.json['cuil']
    celular=request.json['celular']
    email=request.json['email']
    foto=request.json['foto']

    persona.nombre=nombre
    persona.domicilio=domicilio
    persona.ciudad=ciudad
    persona.departamento=departamento
    persona.provincia=provincia
    persona.actividad=actividad
    persona.dni=dni
    persona.cuil=cuil
    persona.celular=celular
    persona.email=email
    persona.foto=foto

    db.session.commit()
    return persona_schema.jsonify(persona)

# rutas de propiedades

@app.route('/propiedades',methods=['GET'])
def get_Propiedades():
    all_propiedades=Propiedad.query.all()         # el metodo query.all() lo hereda de db.Model
    result=propiedades_schema.dump(all_propiedades)  # el metodo dump() lo hereda de ma.schema y
                                                 # trae todos los registros de la tabla
    return jsonify(result)                       # retorna un JSON de todos los registros de la tabla

@app.route('/propiedades/<id>',methods=['GET'])
def get_propiedad(id):
    propiedad=Propiedad.query.get(id)
    return propiedad_schema.jsonify(propiedad)   # retorna el JSON de un producto recibido como parametro

@app.route('/propiedades/<id>',methods=['DELETE'])
def delete_propiedad(id):
    propiedad=Propiedad.query.get(id)
    db.session.delete(propiedad)
    db.session.commit()
    return propiedad_schema.jsonify(propiedad)   # me devuelve un json con el registro eliminado

@app.route('/propiedades', methods=['POST']) # crea ruta o endpoint
def create_propiedad():
    #print(request.json)  # request.json contiene el json que envio el cliente
    tipo=request.json['tipo']
    descrip_breve=request.json['descrip_breve']
    descrip_larga=request.json['descrip_larga']
    precio_alquiler=request.json['precio_alquiler']
    precio_venta_pesos=request.json['precio_venta_pesos']
    precio_venta_dolares=request.json['precio_venta_dolares']
    domicilio=request.json['domicilio']
    ciudad=request.json['ciudad']
    departamento=request.json['departamento']
    provincia=request.json['provincia']
    expensas=request.json['expensas']
    superficie_terreno=request.json['superficie_terreno']
    superficie_total=request.json['superficie_total']
    superficie_construida=request.json['superficie_construida']
    superficie_propia=request.json['superficie_propia']
    superficie_semicubierta=request.json['superficie_semicubierta']
    orientacion=request.json['orientacion']
    imagen=request.json['imagen']
    categoria_catastral=request.json['categoria_catastral']
    fos=request.json['fos']
    fot=request.json['fot']

    antiguedad=request.json['antiguedad']
    conservacion=request.json['conservacion']
    calidad_construc=request.json['calidad_construc']
    dormitorios=request.json['dormitorios']
    cocinas=request.json['cocinas']
    banos=request.json['banos']
    cocheras=request.json['cocheras']
    jardin=request.json['jardin']
    patio=request.json['patio']

    gas=request.json['gas']
    edet=request.json['edet']
    sat=request.json['sat']
    internet=request.json['internet']
    telefono=request.json['telefono']
    seguridad=request.json['seguridad']

    titulo=request.json['titulo']
    reglamento=request.json['reglamento']
    plano=request.json['plano']
    autorizacion=request.json['autorizacion']

    new_propiedad=Propiedad(tipo,descrip_breve,descrip_larga,precio_alquiler,precio_venta_pesos,precio_venta_dolares,domicilio,ciudad,departamento,provincia,expensas,superficie_terreno,superficie_total,superficie_construida,superficie_propia,superficie_semicubierta,orientacion,imagen,categoria_catastral,fos,fot,antiguedad,conservacion,calidad_construc,dormitorios,cocinas,banos,cocheras,jardin,patio,gas,edet,sat,internet,telefono,seguridad,titulo,reglamento,plano,autorizacion)
    db.session.add(new_propiedad)
    db.session.commit()
    return propiedad_schema.jsonify(new_propiedad)

@app.route('/propiedades/<id>' ,methods=['PUT'])
def update_propiedad(id):
    propiedad=Propiedad.query.get(id)
    tipo=request.json['tipo']
    descrip_breve=request.json['descrip_breve']
    descrip_larga=request.json['descrip_larga']
    precio_alquiler=request.json['precio_alquiler']
    precio_venta_pesos=request.json['precio_venta_pesos']
    precio_venta_dolares=request.json['precio_venta_dolares']
    domicilio=request.json['domicilio']
    ciudad=request.json['ciudad']
    departamento=request.json['departamento']
    provincia=request.json['provincia']
    expensas=request.json['expensas']
    superficie_terreno=request.json['superficie_terreno']
    superficie_total=request.json['superficie_total']
    superficie_construida=request.json['superficie_construida']
    superficie_propia=request.json['superficie_propia']
    superficie_semicubierta=request.json['superficie_semicubierta']
    orientacion=request.json['orientacion']
    imagen=request.json['imagen']
    categoria_catastral=request.json['categoria_catastral']
    fos=request.json['fos']
    fot=request.json['fot']

    antiguedad=request.json['antiguedad']
    conservacion=request.json['conservacion']
    calidad_construc=request.json['calidad_construc']
    dormitorios=request.json['dormitorios']
    cocinas=request.json['cocinas']
    banos=request.json['banos']
    cocheras=request.json['cocheras']
    jardin=request.json['jardin']
    patio=request.json['patio']

    gas=request.json['gas']
    edet=request.json['edet']
    sat=request.json['sat']
    internet=request.json['internet']
    telefono=request.json['telefono']
    seguridad=request.json['seguridad']

    titulo=request.json['titulo']
    reglamento=request.json['reglamento']
    plano=request.json['plano']
    autorizacion=request.json['autorizacion']

    propiedad.tipo=tipo
    propiedad.descrip_breve=descrip_breve
    propiedad.descrip_larga=descrip_larga
    propiedad.precio_alquiler=precio_alquiler
    propiedad.precio_venta_pesos=precio_venta_pesos
    propiedad.precio_venta_dolares=precio_venta_dolares
    propiedad.domicilio=domicilio
    propiedad.ciudad=ciudad
    propiedad.departamento=departamento
    propiedad.provincia=provincia
    propiedad.expensas=expensas
    propiedad.superficie_terreno=superficie_terreno
    propiedad.superficie_total=superficie_total
    propiedad.superficie_construida=superficie_construida
    propiedad.superficie_propia=superficie_propia
    propiedad.superficie_semicubierta=superficie_semicubierta
    propiedad.orientacion=orientacion
    propiedad.imagen=imagen
    propiedad.categoria_catastral=categoria_catastral
    propiedad.fos=fos
    propiedad.fot=fot

    propiedad.antiguedad=antiguedad
    propiedad.conservacion=conservacion
    propiedad.calidad_construc=calidad_construc
    propiedad.dormitorios=dormitorios
    propiedad.cocinas=cocinas
    propiedad.banos=banos
    propiedad.cocheras=cocheras
    propiedad.jardin=jardin
    propiedad.patio=patio

    propiedad.gas=gas
    propiedad.edet=edet
    propiedad.sat=sat
    propiedad.internet=internet
    propiedad.telefono=telefono
    propiedad.seguridad=seguridad

    propiedad.titulo=titulo
    propiedad.reglamento=reglamento
    propiedad.plano=plano
    propiedad.autorizacion=autorizacion

    db.session.commit()
    return propiedad_schema.jsonify(propiedad)
