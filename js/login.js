document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  localStorage.visita = Number(localStorage.visita) + 1;
      });
      
      function validarFormulario(evento) {
        evento.preventDefault();
        var usuario = document.getElementById('Inputuser').value;
        if(usuario.length == 0) {
          alert('No has escrito nada en el usuario');
          return;
        };
        var clave = document.getElementById('Password').value;
        if (clave.length < 6) {
          alert('La clave tiene que tener 6 digitos ');
          return;
       
        };
        this.submit();
        
       
};
function onSignIn(googleUser) {
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); 
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
};
    
 