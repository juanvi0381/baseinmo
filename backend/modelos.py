from app import db,app

# defino la tabla
class Producto(db.Model):   # la clase Producto hereda de db.Model
    id=db.Column(db.Integer, primary_key=True)   #define los campos de la tabla
    nombre=db.Column(db.String(100))
    precio=db.Column(db.Integer)
    stock=db.Column(db.Integer)
    imagen=db.Column(db.String(400))

    def __init__(self,nombre,precio,stock,imagen):   #crea el  constructor de la clase
        self.nombre=nombre   # no hace falta el id porque lo crea sola mysql por ser auto_incremento
        self.precio=precio
        self.stock=stock
        self.imagen=imagen

class Persona(db.Model):   # la clase Personas hereda de db.Model
    id=db.Column(db.Integer, primary_key=True)   #define los campos de la tabla
    nombre=db.Column(db.String(100))
    domicilio=db.Column(db.String(100))
    ciudad=db.Column(db.String(100))
    departamento=db.Column(db.String(50))
    provincia=db.Column(db.String(50))
    actividad=db.Column(db.String(100))
    dni=db.Column(db.String(50))
    cuil=db.Column(db.String(50))
    celular=db.Column(db.String(50))
    email=db.Column(db.String(100))
    foto=db.Column(db.String(400))

    def __init__(self,nombre,domicilio,ciudad,departamento,provincia,actividad,dni,cuil,celular,email,foto):   #crea el  constructor de la clase
        self.nombre=nombre   # no hace falta el id porque lo crea sola mysql por ser auto_incremento
        self.domicilio=domicilio
        self.ciudad=ciudad
        self.departamento=departamento
        self.provincia=provincia
        self.actividad=actividad
        self.dni=dni
        self.cuil=cuil
        self.celular=celular
        self.email=email
        self.foto=foto

class Propiedad(db.Model):   # la clase Producto hereda de db.Model
    id=db.Column(db.Integer, primary_key=True)   #define los campos de la tabla
    tipo=db.Column(db.String(100))
    descrip_breve=db.Column(db.String(50))
    descrip_larga=db.Column(db.String(400))
    precio_alquiler=db.Column(db.Integer)
    precio_venta_pesos=db.Column(db.Integer)
    precio_venta_dolares=db.Column(db.Integer)
    domicilio=db.Column(db.String(100))
    ciudad=db.Column(db.String(100))
    departamento=db.Column(db.String(50))
    provincia=db.Column(db.String(50))
    expensas=db.Column(db.Integer)

    superficie_terreno=db.Column(db.Integer)
    superficie_total=db.Column(db.Integer)
    superficie_construida=db.Column(db.Integer)
    superficie_propia=db.Column(db.Integer)
    superficie_semicubierta=db.Column(db.Integer)
    orientacion=db.Column(db.String(50))
    imagen=db.Column(db.String(400))
    categoria_catastral=db.Column(db.String(50))
    fos=db.Column(db.Integer)
    fot=db.Column(db.Integer)

    antiguedad=db.Column(db.Integer)
    conservacion=db.Column(db.String(50))
    calidad_construc=db.Column(db.String(50))
    dormitorios=db.Column(db.Integer)
    cocinas=db.Column(db.Integer)
    banos=db.Column(db.Integer)
    cocheras=db.Column(db.Integer)
    jardin=db.Column(db.Integer)
    patio=db.Column(db.Integer)
    gas=db.Column(db.String(50))
    edet=db.Column(db.String(50))
    sat=db.Column(db.String(50))
    internet=db.Column(db.String(50))
    telefono=db.Column(db.String(50))
    seguridad=db.Column(db.String(50))

    titulo=db.Column(db.String(50))
    reglamento=db.Column(db.String(50))
    plano=db.Column(db.String(50))
    autorizacion=db.Column(db.String(10))

    def __init__(self,tipo,descrip_breve,descrip_larga,precio_alquiler,precio_venta_pesos,precio_venta_dolares,domicilio,ciudad,departamento,provincia,expensas,superficie_terreno,superficie_total,superficie_construida,superficie_propia,superficie_semicubierta,orientacion,imagen,categoria_catastral,fos,fot,antiguedad,conservacion,calidad_construc,dormitorios,cocinas,banos,cocheras,jardin,patio,gas,edet,sat,internet,telefono,seguridad,titulo,reglamento,plano,autorizacion):   #crea el  constructor de la clase
        self.tipo=tipo
        self.descrip_breve=descrip_breve
        self.descrip_larga=descrip_larga
        self.precio_alquiler=precio_alquiler
        self.precio_venta_pesos=precio_venta_pesos
        self.precio_venta_dolares=precio_venta_dolares
        self.domicilio=domicilio
        self.ciudad=ciudad
        self.departamento=departamento
        self.provincia=provincia
        self.expensas=expensas
        self.superficie_terreno=superficie_terreno
        self.superficie_total=superficie_total
        self.superficie_construida=superficie_construida
        self.superficie_propia=superficie_propia
        self.superficie_semicubierta=superficie_semicubierta
        self.orientacion=orientacion
        self.imagen=imagen
        self.categoria_catastral=categoria_catastral
        self.fos=fos
        self.fot=fot

        self.antiguedad=antiguedad
        self.conservacion=conservacion
        self.calidad_construc=calidad_construc
        self.dormitorios=dormitorios
        self.cocinas=cocinas
        self.banos=banos
        self.cocheras=cocheras
        self.jardin=jardin
        self.patio=patio

        self.gas=gas
        self.edet=edet
        self.sat=sat
        self.internet=internet
        self.telefono=telefono
        self.seguridad=seguridad

        self.titulo=titulo
        self.reglamento=reglamento
        self.plano=plano
        self.autorizacion=autorizacion


with app.app_context():
    db.create_all()  # aqui crea todas las tablas
