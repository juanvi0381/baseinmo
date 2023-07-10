function logueo(){
  let user=document.getElementById("usuario").value;
  let pass=document.getElementById("clave").value;

  if(user=="juan" && pass=="1234"){
    window.location="propiedades.html";
  }
  else{
    alert("Usuario o Contraseña incorrectos!")
  }
}

document.getElementById("header").innerHTML=`<nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid">

  <a class="navbar-brand" href="https://inmobiliariasantacruz.net/">
    <img src="/img/logoinmsf.png" alt="Logo" width="100" height="100" class="d-inline-block align-text-center text-light">
    INMOBILIARIA SANTA CRUZ
  </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="https://inmobiliariasantacruz.net/">HOME</a>
        </li>
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="propiedades.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Propiedades
        </a>
        <ul class="dropdown-menu">
         <li><a class="dropdown-item" href="propiedades.html">Lista de propiedades</a></li>
         <li><a class="dropdown-item" href="propiedad_nuevo.html">Alta de propiedades</a></li>        
        </ul>
        </li>
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="personas.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Personas
        </a>
        <ul class="dropdown-menu">
         <li><a class="dropdown-item" href="personas.html">Lista de personas</a></li>
         <li><a class="dropdown-item" href="persona_nuevo.html">Alta de personas</a></li>        
        </ul>
        </li>
        
        <li class="nav-item">
          <a class="nav-link" href="contratos.html">Contratos</a>
        </li>
      </ul>
      </div>
      <div>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="" aria-label="Search">
        <button class="btn btn-outline-success border none" type="submit">🔍</button>
      </form>      
      </div>
        
</div>
</nav>`

document.getElementById("foot").innerHTML=`<div class="icono">
<i class="fa-brands fa-github fa-bounce fa-lg"></i>
</div>
<div>  
  <a class="gh" href="https://github.com/juanvi0381">Vicente Suarez</a>
  <a class="gh" href="https://github.com/TeresitaFraszczak">Teresita Fraszczak</a>  
</div>` 