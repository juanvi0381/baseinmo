# baseinmo
Base de datos de alquileres

Linea de configuracion de base de datos:
app.config['SQLALCHEMY_DATABASE_URI']='mysql+pymysql://Juanvi:Inmobase@Juanvi.mysql.pythonanywhere-services.com/Juanvi$default'

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
let precio_alquiler = parseInt(document.getElementById("precio_alquiler").value)
    