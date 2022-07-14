window.sr = ScrollReveal({ reset: true });



ScrollReveal().reveal('.monteiro', { duration: 900 })

sr.reveal('#project',{duration: 1500})
sr.reveal('#skills',{duration: 1500})


ScrollReveal().reveal('.img-skills', { interval: 200 });

ScrollReveal().reveal('.cards-skills', { interval: 200 });

ScrollReveal().reveal('.container', {duration :3000})

function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 100 * i)

  });
}
const titulo = document.querySelector('.flavio' );
typeWrite(titulo);



