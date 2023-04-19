//seccion nosotros//


let nosText_btn= document.getElementById ('nosText_btn');
let nosText = document.getElementById('nosText');

nosText_btn.addEventListener('click', toggleText);

function toggleText(){
    nosText.classList.toggle('mostrar')
    if(nosText.classList.contains('mostrar')){
        nosText_btn.innerHTML = 'Saber menos';        
    }
    else{
        nosText_btn.innerHTML = 'Saber Más'
    }
}
//seccion contacto//
$(document).ready(function() {
    $("#basic-form").validate();
  });

 
