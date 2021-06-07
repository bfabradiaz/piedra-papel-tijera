let elementoPiedra = document.getElementById('piedra');
let elementoPapel = document.getElementById('papel');
let elementoTijera = document.getElementById('tijera');
let elegirElemento = document.querySelector('h3');
let elementoPuntajeUsuario = document.getElementById('puntaje-usuario');
let elementoPuntajePc = document.getElementById('puntaje-pc');
let elementoResultado = document.querySelector('h2');
let elementoP = document.querySelector('p');
elementoP.style.display = 'none';

const opciones = ['piedra','papel', 'tijera'];
let puntajePc = 0;
let puntajeUsuario = 0;
let contadorPatidas = 0;

elementoPuntajeUsuario.textContent= puntajeUsuario;
elementoPuntajePc.textContent=puntajePc;

function seleccionarOpcion(opcionSeleccionada){
    let eleccionPc = opciones[Math.floor(Math.random() * opciones.length)] 

    elementoPiedra.classList.add('--piedra');
    elementoPapel.classList.add('--papel');
    elementoTijera.classList.add('--tijera');

    elegirElemento.style.visibility='hidden';
    elementoResultado.textContent= "";
    

    setTimeout(() => {

        elementoPiedra.classList.remove('--piedra');
        elementoPapel.classList.remove('--papel');
        elementoTijera.classList.remove('--tijera');
        
        switch (opcionSeleccionada){
            case 'piedra':
                switch (eleccionPc){
                    case 'papel':
                        elementoResultado.textContent = 'Perdiste, papel envuelve a la piedra!'
                        puntajePc++;
                        elementoPuntajePc.textContent = puntajePc;
                    break;
    
                    case 'tijera':
                        elementoResultado.textContent = 'Ganaste, piedra rompe tijeras!'
                        puntajeUsuario++;
                        elementoPuntajeUsuario.textContent = puntajeUsuario;
    
                    break;
    
                    default:
                        elementoResultado.textContent = 'Piedra empata con piedra!'
                }
    
            break;
    
            case 'papel':
                switch (eleccionPc){
                    case 'piedra':
                        elementoResultado.textContent = 'Ganaste, papel envuelve a la piedra!'
                        puntajeUsuario++;
                        elementoPuntajeUsuario.textContent = puntajeUsuario;
                    break;
    
                    case 'tijera':
                        elementoResultado.textContent = 'Perdiste, tijera corta papel!'
                        puntajePc++;
                        elementoPuntajePc.textContent = puntajePc;
    
                    break;
    
                    default:
                        elementoResultado.textContent = 'Papel empata con papel!'
                }
    
            break;
    
            default:
                switch (eleccionPc){
                    case 'piedra':
                        elementoResultado.textContent = 'Perdiste, piedra rompe a la  tijera!'
                        puntajePc++;
                        elementoPuntajePc.textContent = puntajePc;
                    break;
    
                    case 'papel':
                        elementoResultado.textContent = 'Ganaste, tijera corta papel!'
                        puntajeUsuario++;
                        elementoPuntajeUsuario.textContent = puntajeUsuario;
    
                    break;
    
                    default:
                        elementoResultado.textContent = 'Tijera empata con tijera!'
                }
                
        }
        elegirElemento.style.visibility='visible';
        contadorPatidas++;
        if (contadorPatidas === 3){
            setTimeout(() => {
                elementoP.style.display= 'flex';
            if(puntajeUsuario>puntajePc){
                elementoP.innerHTML = "Ganaste!"
            }else if(puntajeUsuario<puntajePc){
                elementoP.innerHTML = "Perdiste!"
            }else{
                elementoP.innerHTML = "Empate!"
            }
            }, 1000)
        }
    }, 2000)
    
    
}

elementoPiedra.addEventListener('click',() => seleccionarOpcion('piedra'));
elementoPapel.addEventListener('click',() => seleccionarOpcion('papel'));
elementoTijera.addEventListener('click',() => seleccionarOpcion('tijera'));

elementoP.addEventListener('click', () => {
    elementoP.style.display = 'none';
    puntajePc = 0;
    puntajeUsuario = 0;
    contadorPatidas = 0;
    elementoPuntajePc.textContent = puntajePc;
    elementoPuntajeUsuario.textContent = puntajeUsuario;
    elementoResultado.textContent = ' ';

})
